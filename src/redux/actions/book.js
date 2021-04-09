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
        type: actionTypes.FETCH_BOOKS_START
    }
}

export const successBookFetching = (data) => {
    return {
        type: actionTypes.FETCH_BOOK_SUCCESS,
        book: data
    }
}

export const fetchBook = (searchBy) => {
    return dispach => {
        axios.get(`/books?slug=${searchBy}`).then(res => {
            console.log(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
}