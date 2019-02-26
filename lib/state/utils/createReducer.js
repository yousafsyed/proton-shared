export default (initialState, handlers) => {
    return (state = initialState, { type, payload }) => {
        if (handlers.hasOwnProperty(type)) {
            return handlers[type](state, payload)
        }
        return state
    }
}
