type Character = {
  id: number;
  name: string;
  image: string;
};

type ApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};
