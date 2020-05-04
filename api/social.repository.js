const API_URL = '/comments'

export default ($axios) => ({
  /**
   * Get all comments
   *
   * @return {Promise}
   */
  GetComments() {
    return $axios.$get(`${API_URL}`)
  }
})
