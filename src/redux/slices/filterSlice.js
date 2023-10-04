import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sortId: 0,
    currentPage: 1,
    searchValue: '',
    popUp: false
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sortId = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setPopUp(state, action) {
            state.popUp = action.payload;
        }
    }
});

export const { setCategoryId, setSort, setCurrentPage, setSearchValue, setPopUp } = filterSlice.actions;

export default filterSlice.reducer;
