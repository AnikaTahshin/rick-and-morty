export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface CharactersResponse {
  data: {
    characters: {
      results: Character[];
    };
  };
}

export interface CastDetailsResponse {
  data: {
    character: {
      id: number;
      name: string;
      image: string;
      status: string;
      species: string;
      gender: string;
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      episode: Array<{
        id: string;
        name: string;
        episode: string;
      }>;
    };
  };
}

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
  console.log(res, "get api");
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

  console.log("Sending GraphQL request:", { query, variables });

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
