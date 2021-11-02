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
        <RegisterForm @submited="doRegister" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Register',
  components: {
    RegisterForm: () => import('@/components/forms/RegisterForm.vue'),
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
    doRegister(params) {
      this.$store.dispatch('initLoading');
      this.$store.dispatch('register', params);
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
    margin: auto;
    padding: 100px 44px;
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
