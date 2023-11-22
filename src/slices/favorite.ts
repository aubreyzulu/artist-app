// favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  events: string[];
}

const initialState: FavoritesState = {
  events: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      const artist = action.payload;
      if (!state.events.includes(artist)) {
        state.events.push(artist);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const artist = action.payload;
      state.events = state.events.filter((item) => item !== artist);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice;
