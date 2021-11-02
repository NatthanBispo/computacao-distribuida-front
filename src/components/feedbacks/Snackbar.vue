<template>
  <v-snackbar
    timeout:5000
    :value="hasMessage"
    @input="closeSnackbar"
  >
    {{ messageText }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="closeSnackbar"
      >
        {{ $t('components.snackbar.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Snackbar',
  computed: {
    ...mapGetters(['messages', 'hasMessage']),
    messageText() {
      if (this.messages instanceof Array) {
        return this.messages.join(', ');
      }
      return this.messages;
    },
  },

  methods: {
    ...mapActions(['removeMessage']),
    closeSnackbar() {
      this.removeMessage();
    },
  },
};
</script>
