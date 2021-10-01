<template>
    <b-card
    tag="article"
    class="h-100"
  >
    <b-card-title>
      <slot name="title"></slot>
    </b-card-title>

    <b-card-text>
      <slot name="body"></slot>
    </b-card-text>
  </b-card>
</template>