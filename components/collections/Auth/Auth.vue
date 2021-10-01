<template>
  <FormWrapper>
    <b-form novalidate @submit.prevent="onSubmit">
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
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators'
import { TranslateResult } from 'vue-i18n'
import FormWrapper from '@/components/ui/FormWrapper.vue'
import { emailValidator } from '@/mixins/validationMixin'
import { FormError } from '@/types/auth.type'


export default Vue.extend({
  components: { FormWrapper },
  mixins: [validationMixin],
  props: {
    emailProp: {
      type: String,
      default: '' as String,
    },
  },
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