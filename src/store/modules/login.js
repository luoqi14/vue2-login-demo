import * as types from '../mutation-types'
import user from '../../api/user'

const state = {
  user: []
}

const getter = {
  getUser: state => state.user
}

const mutations = {
  [types.LOGIN] (state, {user}) {
    state.user = user
  },
  [types.LOGOUT] (state) {
    state.user = []
  }
}

const actions = {
  getUser ({commit}, loginUser) {
    return new Promise((resolve, reject) => {
      user.getUser(loginUser, user => {
        commit(types.LOGIN, {user})
        if (user.length > 0) {
          resolve()
        } else {
          reject()
        }
      })
    })
  }
}

export default {
  state,
  getter,
  actions,
  mutations
}
