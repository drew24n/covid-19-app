const SET_DAILY_DATA = "SET_DAILY_DATA"

const initialState = {
    chartData: []
}

export const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DAILY_DATA:
            return {...state, chartData: action.payload}
        default:
            return state
    }
}

const setChartDataAction = (payload) => ({type: SET_DAILY_DATA, payload})

export const setChartData = (payload) => async (dispatch) => {
    try {
        await dispatch(setChartDataAction(payload))
    } catch (e) {
        alert(e)
    }
}
