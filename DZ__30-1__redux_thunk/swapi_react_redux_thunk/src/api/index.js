/* export async function fetchSwapiAPI(endpoint){
    const res = await fetch(`https://swapi.info/api/${endpoint}`);
    return await res.json();
} */

export async function fetchSwapiAPI(endpoint) {
  if (!endpoint) throw new Error("Endpoint не указан");
  const res = await fetch(`https://swapi.info/api/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
  }
  try {
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Не удалось распарсить JSON");
  }
}