import test from 'node:test';
import assert from 'node:assert/strict';
import { createSseParser } from './sse.js';

const collect = (chunks) => {
  const events = [];
  const parser = createSseParser((e) => events.push(e));
  for (const c of chunks) parser.feed(c);
  parser.end();
  return events;
};

test('разбирает несколько кадров из одного чанка', () => {
  const events = collect([
    'event: status\ndata: {"type":"status","state":"searching"}\n\nevent: delta\ndata: {"type":"delta","text":"Hi"}\n\n',
  ]);
  assert.deepEqual(events, [
    { type: 'status', state: 'searching' },
    { type: 'delta', text: 'Hi' },
  ]);
});

test('собирает кадр, разрезанный между чанками (в том числе посреди JSON и посреди разделителя)', () => {
  const frame = 'event: delta\ndata: {"type":"delta","text":"Привет"}\n\n';
  for (let cut = 1; cut < frame.length; cut++) {
    assert.deepEqual(collect([frame.slice(0, cut), frame.slice(cut)]), [{ type: 'delta', text: 'Привет' }], `cut=${cut}`);
  }
});

test('понимает CRLF и пропускает комментарии и битый JSON', () => {
  const events = collect([
    ': ping\n\n',
    'event: delta\r\ndata: {oops\r\n\r\n',
    'event: done\r\ndata: {"type":"done"}\r\n\r\n',
  ]);
  assert.deepEqual(events, [{ type: 'done' }]);
});

test('хвост без пустой строки обрабатывается при закрытии потока', () => {
  assert.deepEqual(collect(['data: {"type":"done"}']), [{ type: 'done' }]);
});
