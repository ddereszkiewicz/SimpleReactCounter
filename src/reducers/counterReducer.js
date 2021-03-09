const counter = (state, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER": {
            return { ...state, value: state.value + state.incrementBy }
        }
        case 'DECREMENT_COUNTER': {
            return { ...state, value: state.value - state.incrementBy }
        }
        case 'CHANGE_INCREMENTED_VALUE': {
            return { ...state, incrementBy: action.payload.incrementBy }
        }
        default: {
            return state
        }
    }
}
export default counter