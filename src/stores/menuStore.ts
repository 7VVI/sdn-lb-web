import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const menuStore = defineStore('sideMenu', () => {
//   const menu= ref(null)
//
//   return { menu }
// })

export const menuStore = defineStore('sideMenu', {
  state: () => {
    return {
      menu:new Array<API.Menu>(),
      newRouter:new Array<API.Router>()
    }
  },
  actions:{

  }
})


