import {GET_CHARACTER, REMOVE_CHARACTER, ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types';
import axios from 'axios';

export const getCharacter = (id) => {
    return (dispatch) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            return dispatch({
                type: GET_CHARACTER,
                payload: data
            });
        });
    };
};

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};