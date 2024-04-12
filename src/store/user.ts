import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user', // 唯一 ID，可以配合 Vue devtools 使用

  state: () => ({
    userInfo: null
  }),

  actions: {
    setUserInfo(payload: null) {
      this.userInfo = payload
    }
  }
})
