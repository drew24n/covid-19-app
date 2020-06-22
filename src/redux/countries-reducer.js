const SET_COUNTRIES_DATA = "SET_COUNTRIES_DATA"

const initialState = {
    countriesData: []
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES_DATA:
            return {...state, countriesData: action.payload}
        default:
            return state
    }
}

const setCountriesDataAction = (payload) => ({type: SET_COUNTRIES_DATA, payload})

export const setCountriesData = (payload) => async (dispatch) => {
    try {
        await dispatch(setCountriesDataAction(payload))
    } catch (e) {
        alert(e)
    }
}
