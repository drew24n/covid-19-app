const SET_DAILY_DATA = "SET_DAILY_DATA"

const initialState = {
    dailyData: []
}

export const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DAILY_DATA:
            return {...state, dailyData: action.payload}
        default:
            return state
    }
}

const setDailyDataAction = (payload) => ({type: SET_DAILY_DATA, payload})

export const setDailyData = (payload) => async (dispatch) => {
    try {
        await dispatch(setDailyDataAction(payload))
    } catch (e) {
        alert(e)
    }
}
