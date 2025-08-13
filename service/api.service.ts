import { CharactersResponse, Episode, EpisodeResponse, LocationResponse } from "./types";

export async function getCastData(): Promise<CharactersResponse> {
  const url = `https://rickandmortyapi.com/graphql`;

  const query = `
    {
      characters {
        results {
          id
          name
          image
        }
      }
    }
  `;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to fetch character data: ${res.status} - ${JSON.stringify(
        errorData.errors
      )}`
    );
  }

  return res.json();
}

export async function getCastDetails(id: number) {
  const query = `
    query getCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        image
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        episode {
          id
          name
          episode
        }
      }
    }
  `;

  const variables = { id: id.toString() };


  const res = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("GraphQL error response:", errorText);
    throw new Error(`GraphQL error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getAllEpisodes(): Promise<EpisodeResponse> {
  const url = `https://rickandmortyapi.com/graphql`;

  const query = `
    {
      episodes {
        results {
          id
          name
          episode
        }
      }
    }
  `;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to fetch character data: ${res.status} - ${JSON.stringify(
        errorData.errors
      )}`
    );
  }

  return res.json();
}


export async function getAllLocation(): Promise<LocationResponse> {
  const url = `https://rickandmortyapi.com/graphql`;

  const query = `
    {
      locations {
        results {
          id
          name
          
        }
      }
    }
  `;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to fetch character data: ${res.status} - ${JSON.stringify(
        errorData.errors
      )}`
    );
  }

  return res.json();
}

