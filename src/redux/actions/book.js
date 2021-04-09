import * as actionTypes from './actionTypes'
import axios from '../../utils/axios/axios'

export const searchData = (data) => {
    return {
        type: actionTypes.SEARCH_DATA,
        data
    }
}

export const startBookFetching = () => {
    return {
        type: actionTypes.FETCH_BOOKS_START
    }
}

export const failBookFetching = () => {
    return {
        type: actionTypes.FETCH_BOOKS_FAIL
    }
}

export const successBookFetching = (data) => {
    return {
        type: actionTypes.FETCH_BOOK_SUCCESS,
        book: data
    }
}

export const fetchBook = (searchBy = '') => {
    return dispatch => {
        dispatch(startBookFetching())
        axios.get(`/book?slug=${searchBy}`).then(res => {
            dispatch(successBookFetching(res.data.data.books));
            dispatch(failBookFetching())
            console.log(res.data.data.books)
        }).catch(err => {
            dispatch(failBookFetching())
            console.log(err.response)
        })
    }
}