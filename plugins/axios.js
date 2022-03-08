export default ({ $axios, app, redirect, store }) => {
  $axios.onResponse((response) => {
    return response.data
  })
}
