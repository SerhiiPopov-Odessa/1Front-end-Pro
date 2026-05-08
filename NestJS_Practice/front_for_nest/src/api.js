const API_URL = 'http://localhost:3000';
const TOKEN = 'secret-token';

export async function getUsers() {
    const res = await fetch (`${API_URL}/users`,{
        headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN
    },
    });

    if (!res.ok) throw new Error('Unauthorized');
    return res.json();
}

export async function getUserId(id) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: TOKEN
    }
  });

  return res.json();
}

export async function createUser(user) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN
    },
    body: JSON.stringify(user)
  });

  return res.json();
}