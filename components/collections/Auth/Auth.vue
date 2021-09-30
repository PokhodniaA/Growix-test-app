<template>
  <FormWrapper>
    <b-form @submit.prevent="onSubmit" novalidate>
      <b-form-group
        id="input-group-1"
        :label="$t('form.label') + ':'"
        label-for="input-1"
      >
        <b-form-input
          id="input-email"
          v-model.trim="$v.email.$model"
          type="email"
          :state="showErrors"
          aria-describedby="input-email-feedback"
          :placeholder="$t('form.placeholder')"
          @input="checkErrors"
        ></b-form-input>

        <!-- This will only be shown if the preceding input has an invalid state -->
        <b-form-invalid-feedback id="input-email-feedback">{{
          getValidationText
        }}</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="!isValid">{{
        $t('form.submit')
      }}</b-button>
    </b-form>
  </FormWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import FormWrapper from '@/components/ui/FormWrapper.vue'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

// const emailValidator: ValidationRule = function (email: any): Boolean {
//   return true
// }

export default Vue.extend({
  components: { FormWrapper },
  mixins: [validationMixin],
  data: () => ({
    email: '' as String,
    showErrors: null as null | Boolean,
  }),
  computed: {
    isValid(): Boolean {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    getValidationText(): String {
      if (!this.$v.email.required) {
        // return this.$i18n.t('form.errors.required')
      }

      if (!this.$v.email.minLength) {
        return `Email must have at least ${this.$v.email.$params.minLength.min} letters`
      }

      if (!this.$v.email.maxLength) {
        return `Email must have at least ${this.$v.email.$params.maxLength.max} letters`
      }

      return "Invalid email address.  Valid e-mail can contain only latin letters, numbers, '@' and '.'"
    },
  },
  methods: {
    onSubmit(): void {
      if (this.isValid) {
        console.log('submit')
      }
    },
    checkErrors(): void {
      this.showErrors = this.isValid
    },
  },
  validations: {
    email: {
      // emailValidator,
      required,
      minLength: minLength(5),
      maxLength: maxLength(100),
    },
  },
})
</script>