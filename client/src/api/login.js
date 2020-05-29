import Axios from "axios"

const RESOURCE_NAME = "/auth"

let auth = (email, password) => {
  console.log({ email, password })
  return Axios.post(RESOURCE_NAME, { params: { email: email, password: password } })
}

let socialAuth = () => {}

export default {
  auth: auth,
  socialAuth: socialAuth
}
