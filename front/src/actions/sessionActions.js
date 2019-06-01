export const sessionActions = {
    setPageTitle,
}

function setPageTitle(pageTitle) {
    return (dispatch, getState) => {
        dispatch({type:'SESSION_SET_PAGE_TITLE', payload: {pageTitle: pageTitle}})
    }
}