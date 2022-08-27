
<template>
    <v-app>
        <v-main>
            <section class="section">
                <div class="container">
                <h2 class="title">My Profile</h2>
                <div class="content">
                    <p>
                    <strong>Username:</strong>
                    {{ $auth.user.name }}
                    </p>
                    <p>
                    <strong>Email:</strong>
                    {{ $auth.user.email }}
                    </p>
                </div>
                <div>
                    <v-btn @click="logout">logout</v-btn>
                </div>
                </div>
                <v-list shaped dense>
                    <div v-for="(item, i) in items" :key="i">
                    <v-list-item v-if="!item.items" :to="item.to" router exact>
                        <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-group v-else :prepend-icon="item.icon" no-action>
                        <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                        </template>

                        <!-- <v-list-item
                        v-for="child in item.items"
                        :key="child.title"
                        :to="child.to"
                        >
                        <v-list-item-action>
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item> -->
                    </v-list-group>
                    </div>
                </v-list>
            </section>
            <Nuxt />
        
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    layout: 'default',
    data() {
        return {
            users: [],
            items: [
                { title: "about", icon: "mdi-view-dashboard", to: "/about" }
            ]
        }
    },
  computed: {
    // ...mapGetters(['isAuthenticated','auth'])
    async getUsers(){
        // this.users = await this.$axios.get('http://127.0.0.1:8000/api/auth/users')
        return await this.$axios.get('http://127.0.0.1:8000/api/auth/users')
        .then((response) => {
            console.log('1',response.data);
            console.log('2',response.status);
            console.log('3',response.statusText);
            console.log('4',response.headers);
            console.log('5',response.config);
        });
      }
  },
  methods:{
      async logout(){
          await this.$auth.logout()
          console.log('auth ',this.$auth)
          this.$router.push({path:'/login'})
      },
      
  },
  beforeCreate(){
      
  },
  created(){
    //   this.getUsers
    //   this.users = this.$axios.get('http://127.0.0.1:8000/api/auth/users');
  },
  mounted(){
    //   this.isAuthenticated == true ? this.$router.push({path: '/'}):this.$router.push({path: '/login'})
    // console.log('user',this.loggedInUser)
    // console.log(this.getUsers)
    this.$axios.get('http://127.0.0.1:8000/api/auth/test?token=asdasdasd')
    .then(r => {
        console.log(r.data)
    })
  }
}
</script>