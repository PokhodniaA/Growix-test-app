<template>
  <FormWrapper>
    <b-form @submit.prevent="onSubmit" novalidate>
      <b-form-group
        id="input-group-1"
        :label="$t('form.label') + ':'"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"

          aria-describedby="input-live-help input-live-feedback"
          :placeholder="$t('form.placeholder')"
        ></b-form-input>
      </b-form-group>

      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Enter at least 3 letters
      </b-form-invalid-feedback>

      <b-button type="submit" variant="primary" :disabled="!activeButton">{{
        $t('form.submit')
      }}</b-button>
    </b-form>
  </FormWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import FormWrapper from '@/components/ui/FormWrapper.vue'

export default Vue.extend({
  components: { FormWrapper },
  data: () => ({
    email: '' as String,
  }),
  computed: {
    activeButton(): Boolean {
      return this.email.length > 0
    },
  },
  methods: {
    onSubmit(): void {
      console.log('submit')
    },
  },
})
</script>