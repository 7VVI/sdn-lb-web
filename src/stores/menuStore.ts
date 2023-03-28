import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const menuStore = defineStore('sideMenu', {
  state: () => {
    return {
      menu:new Array<API.Menu>(),
      routes:[] as  Array<API.Router>
    }
  },
  actions:{
    addRouter(data:API.Router){

    }
  }
})


