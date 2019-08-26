const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}

// Action Types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const UNDO = "UNDO"
export const REDO = "REDO"

const reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT: 
            return Object.assign({}, state, {currentValue: state.currentValue + action.payload, futureValues: [], previousValues: [state.currentValue, ...state.previousValues]})
        case DECREMENT:
            return Object.assign({}, state, {currentValue: state.currentValue - action.payload, futureValues: [], previousValues: [state.currentValue, ...state.previousValues]})
        case UNDO:
            return Object.assign({}, state, {currentValue: state.previousValues[0], futureValues: [state.currentValue, ...state.futureValues], previousValues: state.previousValues.slice(1)})
        case REDO:
            return Object.assign({}, state, {currentValue: state.futureValues[0], futureValues: state.futureValues.slice(1), previousValues: [state.currentValue, ...state.previousValues]})
        default:
            return state
    }
}
export default reducer