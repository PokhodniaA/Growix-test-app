<template>
  <FormWrapper>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </FormWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import FormWrapper from '@/components/ui/FormWrapper.vue'

export default Vue.extend({
  components: { FormWrapper },
  data: () => ({
    form: {
      email: '',
    },
  }),
  methods: {
    onSubmit() {
      console.log('submit')
    },
  },
})
</script>