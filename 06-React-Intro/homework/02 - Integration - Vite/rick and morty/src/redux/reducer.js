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
            console.log(action.payload);
            if (action.payload === 'All') 
                
                    return {...state, myFavorites: [...state.allCharacters]};
            return {...state, 
                    myFavorites: state.allCharacters.filter(character => character.gender === action.payload)};
        case ORDER:
            if (action.payload === 'N') 
                    return {...state, myFavorites: [...state.allCharacters].sort((a, b) => action.payload === 'A' ? a.id - b.id : b.id - a.id)};
            return {...state, 
                    myFavorites: state.myFavorites.sort((a, b) => action.payload === 'A' ? a.id - b.id : b.id - a.id)};
        default:
            return state;
    }
}