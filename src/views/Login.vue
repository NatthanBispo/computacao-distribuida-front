<template>
  <div class="login-form">
    <div class="login-view">
      <div class="text-center">
        <div class="login-header mb-10">
          Meus Filmes Bacanas
        </div>
        <div>
          <span class="login-info">Computação Distribuida Front</span>
        </div>
      </div>
      <div class="form-login-container">
        <login-form @submited="doLogin" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

import LoginForm from '@/components/forms/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'hasSession',
    ]),
  },
  mounted() {
    if (this.hasSession) {
      this.$router.push('/home');
    }
  },
  methods: {
    doLogin(params) {
      this.$store.dispatch('initLoading');
      this.$store.dispatch('login', params);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  height: 100%;

  .login-view {
    width: 468px;
    height: 642px;
    margin: auto;
    padding: 44px;
    background: $color_primary;
    border-radius: 5px;

    .login-header {
      font-size: 42px;
      font-family: 'Yanone Kaffeesatz', sans-serif;
    }

    .login-info {
      display: block;
      font-size: 20px;
      margin-bottom: 60px;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      font-weight: 200;
    }

    .form-login-container {
      margin-top: 40px;
    }
  }
}
</style>
