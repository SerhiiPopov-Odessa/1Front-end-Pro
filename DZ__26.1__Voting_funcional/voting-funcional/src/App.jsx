import { useState, useEffect } from 'react';
import './App.css';
import Smile from './components/SmileComponent';
import Results from './components/Results';
import RemoveLocalStorage from './components/RemoveLocalStorage';

export default function App() {

  const [smiles, setSmiles] = useState([
    { id: "😃", count: 0 },
    { id: "😊", count: 0 },
    { id: "😎", count: 0 },
    { id: "🤩", count: 0 },
    { id: "😍", count: 0 },
  ]);

  const [smileResult, setSmileResult] = useState({ id: "", count: 0 });
  const [showRemoveLocalStorage, setShowRemoveLocalStorage] = useState(true);

  // --- componentDidMount ---
  //Если бы [] не было:
  //эффект запускался бы на каждый рендер,
  //каждый раз затирал бы текущее состояние,
  //все голоса постоянно сбрасывались бы к значениям из localStorage.
  useEffect(() => {
    console.log("Component is mounted");
    try {
      const saved = JSON.parse(localStorage.getItem("smiles"));
      if (Array.isArray(saved) && saved.length) {
        setSmiles(saved);
        console.log("Smiles restored:", saved);
      } else {
        console.log("No saved smiles or empty array — using initial state");
      }
    } catch (e) {
      console.error("Error parsing saved smiles from localStorage:", e);
    }
  }, []);

  // --- componentDidUpdate (следим за smiles) ---
  //если изменился smiles → эффект выполняется;
  //если изменилось что-то другое → эффект не запускается;
  //если компонент просто перерисовался без изменения smiles → эффект тоже не запускается.
  useEffect(() => {
    console.log("Component was updated");
    localStorage.setItem("smiles", JSON.stringify(smiles));
  }, [smiles]);

  // --- removeLocalStorage ---
  const removeLocalStorage = () => {
    setShowRemoveLocalStorage(prev => !prev);
  };

  // --- changeSmile ---
  const changeSmile = (id) => {
    setSmiles(prev =>
      prev.map(smile =>
        smile.id === id
          ? { ...smile, count: smile.count + 1 }
          : smile
      )
    );
  };

  // --- showResultsClick ---
  const showResultsClick = () => {
    const maxCount = Math.max(...smiles.map(s => s.count));
    //smiles.map(s => s.count) создаёт: [3, 5, 1]
    //Оператор ... (spread) Запись: Math.max(...[3, 5, 1]) превращается в вызов: Math.max(3, 5, 1)

    const bestCandidates = smiles.filter(s => s.count === maxCount);

    if (bestCandidates.length > 1) {
      setSmileResult({ id: "", count: 0 });
      console.log("Нельзя выбрать победителя — одинаковые count");
      return;
    }

    setSmileResult(bestCandidates[0]);
    console.log("Лучший смайл:", bestCandidates[0]);
  };

  // --- clearResultsClick ---
  //prev — предыдущий массив smiles. prev.map() создаёт новый массив, не изменяя старый.
  // Для каждого объекта smile мы возвращаем копию:
  // {
  //  ...smile,
  //  count: 0
  // }
  // React получает новый массив с новыми объектами — это важно, потому что React определяет изменения по ссылкам (reference). 
  // Если бы мы мутировали существующие объекты (например, smile.count = 0), ссылка на объект осталась бы той же — React может 
  // не правильно отреагировать, и это нарушает принцип иммутабельности.
  const clearResultsClick = () => {
    setSmiles(prev =>
      prev.map(smile => ({
        ...smile,
        count: 0
      }))
    );
    setSmileResult({ id: "", count: 0 });
  };

  return (
    <>
      <h1>Голосування за найкращий смайлик</h1>

      <div className="smileys">
        {smiles.map((smile, index) => (
          <Smile
            key={index}
            changeSmile={changeSmile}
            id={smile.id}
            count={smile.count}
          />
        ))}
      </div>

      <div className="btn-centr">
        <button onClick={showResultsClick} className="btn">Show Results</button>

        {smileResult.id && <Results result={smileResult} />}

        {smileResult.id && (<button onClick={clearResultsClick} className="btn">Clear Results</button>)}

        <button onClick={removeLocalStorage} className="btn">Remove LocalStorage</button>
      </div>

      {showRemoveLocalStorage && <RemoveLocalStorage />}
    </>
  );
}
