

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

export interface CastCardProps {
  castData: Character[];
}


export interface Episode {
  id: number;
  name: string;
  episode: string;
}

export interface EpisodeResponse {
  data: {
    episodes: {
      results: Episode[];
    };
  };
}


export interface Location {
  id: number;
  name: string;
}