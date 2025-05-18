
export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  ratings: {
    movieId: number;
    rating: number;
    timestamp: number;
  }[];
  watchlist: number[];
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
    avatar: "https://i.pravatar.cc/150?img=68",
    ratings: [
      { movieId: 1, rating: 5, timestamp: 1620000000 },
      { movieId: 5, rating: 4, timestamp: 1620100000 },
      { movieId: 7, rating: 5, timestamp: 1620200000 }
    ],
    watchlist: [2, 3, 10]
  }
];

export const getCurrentUser = () => {
  return mockUsers[0];
};
