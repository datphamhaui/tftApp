import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	lstChampSelect: [],
};

export const champSLice = createSlice({
	name: 'champion',
	initialState,
	reducers: {
		addChamp: (state, action) => {
			state.lstChampSelect = [...state.lstChampSelect, action.payload];
		},
		decrementChamp: (state, action) => {
			const newLst = state.lstChampSelect.filter((champ) => {
				return action.payload.id !== champ.id;
			});

			state.lstChampSelect = [...newLst];
		},
	},
});

// Action creators are generated for each case reducer function
export const { addChamp, decrementChamp } = champSLice.actions;

export default champSLice.reducer;
