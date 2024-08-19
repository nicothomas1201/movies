import { create } from 'zustand'

interface RecMovie {
  title: string
  description: string
  tmdb_id: string
}

type Store = {
  recMovie: RecMovie
  setRecMovie: (recMovie: RecMovie) => void
}

export const useRecMovieStore = create<Store>((set) => ({
  recMovie: {
    title: '',
    description: '',
    tmdb_id: '',
  },
  setRecMovie: (recMovie) => set({ recMovie }),
}))
