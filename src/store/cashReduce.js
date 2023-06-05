
const initialState = {
    amount: 5
}

export const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {
                ...state, 
                amount: state.amount + action.payload
            }
        case "ISSUE_CASH":
            return {
                ...state, 
                amount: state.amount - action.payload
            }
        default:
            return state
    }
}