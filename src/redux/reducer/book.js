import * as actionTypes from "../actions/actionTypes";

const initialState = {
    books: [],
    loading: false,
    searchData: ''
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.book
            };
        case actionTypes.FETCH_BOOKS_FAIL:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.SEARCH_DATA:
            return {
                ...state,
                searchData: action.data,
            };
        default:
            return state;
    }
};

export default reducer;
