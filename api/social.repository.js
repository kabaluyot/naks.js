const API_URL = '/comments'

export default ($axios) => ({
  GetComments() {
    return $axios.$get(`${API_URL}`)
  }
})
