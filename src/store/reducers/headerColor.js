export const colorStates = {
    BLUE : "blue",
    WHITE : "white"
}

const initialState = colorStates.BLUE;

export const colorState = (state = initialState, action) => {
    switch(action.type) {
        case colorStates.BLUE:
            return "blue"
        case colorStates.WHITE:
            return "white"
        default:
            return state
    }
}