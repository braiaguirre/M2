import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types';

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = ({gender, order}) => {
    return {
        type: FILTER,
        payload: {
            gender: gender,
            order: order
        }
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}