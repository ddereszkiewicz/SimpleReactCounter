import counter from './counterReducer'

const counters = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTER': {
            return [...state, action.payload]
        }
        case 'INCREMENT_COUNTER': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return counter(item, action)
                }
                else {
                    return item
                }
            }
            )
        }
        case 'DECREMENT_COUNTER': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return counter(item, action)
                }
                else {
                    return item
                }

            }
            )
        }
        case 'CHANGE_INCREMENTED_VALUE': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return counter(item, action)
                }
                else {
                    return item
                }
            }
            )
        }
        case 'DELETE_COUNTER': {
            return state.filter(n => n.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}
export default counters