export const setLoading = ({ commit }, data) => {
  return commit('IS_LOADING', data)
}

export const setApiFailure = ({ commit }, data) => {
  return commit('API_FAILURE', data)
}
