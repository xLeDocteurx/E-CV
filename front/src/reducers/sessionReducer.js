export const sessionInitialState = {
    pageTitle: null,
}

export function session(state = sessionInitialState, action) {
    switch (action.type) {
        case 'SESSION_SET_PAGE_TITLE':
            return {
                ...state,
                pageTitle: action.payload.pageTitle,
            }

        default:
            return state
    }
}