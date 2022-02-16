import axios from 'axios'
import qs from 'qs'

const client = axios.create({
  timeout: 10000,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
})

export default client
