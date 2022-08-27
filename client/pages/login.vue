<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-card>
            <v-card-text>
              <validation-observer
                ref="observer"
                v-slot="{ invalid }"
              >
                <form @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="form.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="password"
                    rules="required"
                  >
                    <v-text-field
                      v-model="form.password"
                      :error-messages="errors"
                      label="Password"
                      required
                      type="password"
                    ></v-text-field>
                  </validation-provider>

                  <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
  import { ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  // setInteractionMode('eager')


  export default {
    layout: 'default',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      form: {
        email: '',
        password: ''
      },
    }),

    methods: {
      async submit () {
        this.$refs.observer.validate()
              try {
              let response = await this.$auth.loginWith('laravelJWT', {
                data: this.form
              })
              console.log(response)
              this.$router.push({path:'/'})
              } catch (e) {
                console.log(e)
              }
        
      },
      clear () {
        this.form.email = ''
        this.form.password = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>