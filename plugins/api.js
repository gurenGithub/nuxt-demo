let axios = null;

export default function ({
  $axios
}, inject) {
  axios = $axios
  axios.onRequest(config => {})
  axios.onResponse(response => {
    const data = response.data
    if (data.status && data.status !== 200) {
      const responseError = new Error(data.message)
      Object.assign(responseError, {
        response
      })
      throw responseError
    }
    return data
  })
  axios.onResponseError(error => {
    if (error.response) {
      console.log( error.response.data)
    }
  })
  axios.onError(error => {

    console.log(error)
    if (!process.server) {
      ///Message.error(error.message)
      return false
    }
  })
  inject('api', api)
}
