import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types';

const initialState = {
    allFavs: [],
    favs: []
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        // ADD FAVORITE
        case ADD_FAV:
            return {...state, 
                    allFavs: [...state.allFavs, action.payload],
                    favs: [...state.favs, action.payload]
                };

        // REMOVE FAVORITE
        case REMOVE_FAV:
            return {...state, 
                    allFavs: state.allFavs.filter(character => character.id !== Number(action.payload)),
                    favs: state.favs.filter(character => character.id !== Number(action.payload)),
                };

        // GENDER FILTER
        case FILTER:
            if (action.payload === 'All') return {
				...state, 
				favs: [...state.allFavs]};

            else return {
                ...state, 
                favs: state.allFavs.filter(character => character.gender === action.payload)};

        // ORDER FITLER
        case ORDER:
			if (action.payload === 'N')
				state.favs = [...state.allFavs]

			if (action.payload === 'A') 
				state.favs.sort((a, b) => a.id > b.id ? 1 : -1)

			if (action.payload === 'D') 
				state.favs.sort((a, b) => a.id < b.id ? 1 : -1)

			return {
				...state, 
				favs: [...state.favs]
			};

		// DEFAULT
        default:
            return state;
    }
}