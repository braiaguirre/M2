import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types';

const initialState = {
    allCharacters: [],
    myFavorites: []
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {...state, 
                    allCharacters: [...state.allCharacters, action.payload],
                    myFavorites: [...state.myFavorites, action.payload]
                };
        case REMOVE_FAV:
            return {...state, 
                    allCharacters: state.allCharacters.filter(character => character.id !== Number(action.payload)),
                    myFavorites: state.myFavorites.filter(character => character.id !== Number(action.payload)),
                };
        case FILTER:
            if (action.payload === 'All') 
                return {
                    ...state, 
                    myFavorites: [...state.allCharacters]};
            else return {
                ...state, 
                myFavorites: state.allCharacters.filter(character => character.gender === action.payload)};
        case ORDER:
            switch (action.payload) {
                case 'A':
                    return {
                        ...state, 
                        myFavorites: state.myFavorites.sort((a, b) => {
                            if (a.id < b.id) return 1;
                            if (a.id > b.id) return -1;
                            return 0;
                        })};
                case 'D':
                    return {
                        ...state, 
                        myFavorites: state.myFavorites.sort((a, b) => {
                            if (a.id < b.id) return -1;
                            if (a.id > b.id) return 1;
                            return 0;
                        })};
                default:
                    return state;
            }
        default:
            return state;
    }
}