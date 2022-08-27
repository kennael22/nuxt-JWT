<template>
    <v-app>
        <v-main>
        <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters(['isAuthenticated','auth'])
  },
  methods:{
      async logout(){
          await this.$auth.logout()
          console.log('auth ',this.$auth)
          this.$router.push({path:'/login'})
      }
  },
  mounted(){
    //   this.isAuthenticated == true ? this.$router.push({path: '/'}):this.$router.push({path: '/login'})
    // console.log('user',this.loggedInUser)
  }
}
</script>