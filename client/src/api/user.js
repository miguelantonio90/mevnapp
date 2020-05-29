import Axios from "axios"
const RESOURCE_NAME = "/users"

let fetchAll = () => {}
let fetchById = () => {}
let create = user => {
  const { name, email, password } = user
  return Axios.post(RESOURCE_NAME, {
    params: {
      name: name,
      email: email,
      password: password
    }
  })
}
let update = () => {}
let remove = () => {}

export default {
  get: fetchAll,
  getById: fetchById,
  create: create,
  update: update,
  remove: remove
}
