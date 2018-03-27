export const API_FAILURE = (state, resp) => {
  state.apiFailure = resp
}

export const IS_LOADING = (state, resp) => {
  state.isLoading = resp
}
