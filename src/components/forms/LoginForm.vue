<template>
  <div class="form-login">
    <v-form
      @keyup.native.enter="executeLogin"
    >
      <ValidationProvider
        v-slot="{errors}"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          outlined
          color="white"
          :error-messages="errors"
        />
      </ValidationProvider>

      <ValidationProvider
        v-slot="{errors}"
        name="senha"
        rules="required|min:6"
        class="login-password"
      >
        <v-text-field
          v-model="password"
          label="Senha"
          :type="showPasswordCondition"
          outlined
          color="white"
          :error-messages="errors"
          :append-icon="showPasswordIcon"
          @click:append="changePassword"
        />
      </ValidationProvider>

      <div class="text-xs-center">
        <v-btn
          class="m-btn"
          light
          block
          large
          color="#00FF7F"
          @click="executeLogin"
        >
          ENTRAR
        </v-btn>

        <v-btn
          class="m-btn my-4"
          block
          large
          outlined
          @click="goToRegister"
        >
          ir para o cadastro
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  computed: {
    showPasswordCondition() {
      return this.showPassword ? 'text' : 'password';
    },
    showPasswordIcon() {
      if (this.showPassword) {
        return 'mdi-eye'
      }

      return 'mdi-eye-off';
    },
  },
  methods: {
    executeLogin() {
      const managerData = { email: this.email, password: this.password };
      this.$emit('submited', managerData);
    },
    changePassword() {
      this.showPassword = !this.showPassword;
    },
    goToRegister() {
      this.$router.push('/register');
    }
  },
};
</script>

<style lang="scss" scoped>
.form-login {
  .login-btn {
    margin: 120px 0 30px;
  }
  a {
    font-size: 16px;
    width: 100%;
    color: black;
  }
  .m-btn {
    display: block;
    position: relative;
    top: 60px;
    background-color: $color_primary;
    height: 56px !important; // Overwrite
  }
}
</style>
