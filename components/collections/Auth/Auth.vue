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
          @change="checkErrors"
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
import {
  required,
  minLength,
  maxLength,
  ValidationRule,
} from 'vuelidate/lib/validators'
import { FormError } from '@/types/auth.type'
import { TranslateResult } from 'vue-i18n'

// !!!!! Change any for prop !!!!!
// Email validation function
const emailValidator: any = (email: String): Boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default Vue.extend({
  components: { FormWrapper },
  props: {
    emailProp: {
      type: String,
      default: '' as String,
    },
  },
  mixins: [validationMixin],
  data: () => ({
    email: '' as String,
    showErrors: null as FormError,
  }),
  computed: {
    isValid(): Boolean {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    getValidationText(): TranslateResult {
      // !!!!! Change any to proper type !!!!!!
      if (!this.$v.email.required) {
        return this.$i18n.t('form.errors.required')
      }

      if (!this.$v.email.minLength) {
        return this.$i18n.t('form.errors.minLength')
      }

      if (!this.$v.email.maxLength) {
        return this.$i18n.t('form.errors.maxLength')
      }

      return this.$i18n.t('form.errors.email')
    },
  },
  mounted() {
    if (this.emailProp) {
      this.email = this.emailProp
    }
  },
  methods: {
    onSubmit(): void {
      if (this.isValid) {
        this.$emit('submit', this.email)
      }
    },
    checkErrors(): void {
      this.showErrors = this.isValid
    },
  },
  validations: {
    email: {
      emailValidator,
      required,
      minLength: minLength(5),
      maxLength: maxLength(100),
    },
  },
})
</script>