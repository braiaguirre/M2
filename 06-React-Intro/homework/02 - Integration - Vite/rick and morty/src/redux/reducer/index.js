import {
    ADD_FAV, 
    REMOVE_CHARACTER, 
    REMOVE_FAV, 
    FILTER, 
    ORDER, 
    GET_CHARACTER,
    ACCESS,
    CLEAR_ERROR
} from '../actions/action-types.js';

const initialState = {
    allCharacters: [],
    allFavs: [],
    filteredFavs: [],
    error: ''
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        // GET CHARACTER
        case GET_CHARACTER:
            if (!action.payload.id) return {
                ...state,
                error: 'Introduce a valid ID!'
            }
            for (let i = 0; i < state.allCharacters.length; i++) {
                if (state.allCharacters[i].id === action.payload.id) return {
                    ...state,
                    error: 'This character was already added!'
                };
            }
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
            };

        // REMOVE CHARACTER
        case REMOVE_CHARACTER:
            if (action.payload === -1) return {
                ...state,
                allCharacters: [],
                allFavs: [],
                filteredFavs: []
            }
            return {
                ...state,
                allCharacters: [...state.allCharacters.filter(character => character.id !== Number(action.payload))],
                allFavs: [...state.allFavs.filter(character => character.id !== Number(action.payload))],
                filteredFavs: [...state.filteredFavs.filter(character => character.id !== Number(action.payload))]
            };
                
        // ADD FAVORITE
        case ADD_FAV:
            return {
                ...state, 
                allFavs: [...state.allFavs, action.payload],
                filteredFavs: [...state.filteredFavs, action.payload]
            };

        // REMOVE FAVORITE
        case REMOVE_FAV:
            return {
                ...state, 
                allFavs: state.allFavs.filter(character => character.id !== Number(action.payload)),
                filteredFavs: state.filteredFavs.filter(character => character.id !== Number(action.payload)),
            };

        // GENDER FILTER
        case FILTER:
            if (action.payload === 'All') return {
				...state, 
				filteredFavs: [...state.allFavs]};

            else return {
                ...state, 
                filteredFavs: state.allFavs.filter(character => character.gender === action.payload)};

        // ORDER FITLER
        case ORDER:
			if (action.payload === 'N')
				state.filteredFavs = [...state.allFavs]

			if (action.payload === 'A') 
				state.filteredFavs.sort((a, b) => a.id > b.id ? 1 : -1)

			if (action.payload === 'D') 
				state.filteredFavs.sort((a, b) => a.id < b.id ? 1 : -1)

			return {
				...state, 
				filteredFavs: [...state.filteredFavs]
			};

        // CLEAR ERROR
        case CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }

		// DEFAULT
        default:
            return state;
    }
}