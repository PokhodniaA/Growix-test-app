<template>
  <b-row class="justify-content-center align-items-center h-100">
    <b-col class="wrapper p-3 mx-1 mx-md-0" md="8" lg="6" xl="4">
      <slot></slot>
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid $gray-500;
  border-radius: 5px;
}
</style>