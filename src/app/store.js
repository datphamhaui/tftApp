import { configureStore } from '@reduxjs/toolkit';
import championReducer from '../features/champSlice';

export const store = configureStore({
	reducer: {
		champion: championReducer,
	},
});
