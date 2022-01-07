<template>
  <div>
    <h1 class="home-heading">{{ title }}</h1>

    <hr />

    <fieldset>
      <input
        type="text"
        v-model.trim="inputValue"
      />

      <div>inputValue: {{ inputValue }}</div>
    </fieldset>
  </div>
</template>

<script lang="ts" src="./home.module.ts"></script>

<style scoped src="./home.styles.css"></style>
