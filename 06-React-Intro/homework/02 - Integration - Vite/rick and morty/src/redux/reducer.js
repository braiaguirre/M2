import {ADD_FAV, REMOVE_FAV} from './action-types';

let initialState = {myFavorites: []};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...myFavorites, action.payload]};
        case REMOVE_FAV:
            return {...state, myFavorites: myFavorites.map(character => character.id !== Number(action.payload))};
        default:
            console.log(state);
            return {...state};
    }
}