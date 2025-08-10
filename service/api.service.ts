export async function getCastData() {
  const res = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch character data');
  }

  const data = await res.json();
  return data;
}
