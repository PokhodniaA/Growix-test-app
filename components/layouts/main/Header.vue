<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container fluid="lg">
      <b-navbar-brand href="#">Growix</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="localePath({ name: 'index' })">{{
            $t('routeLinks.home')
          }}</b-nav-item>
          <b-nav-item :to="localePath({ name: 'result' })">{{
            $t('routeLinks.result')
          }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>