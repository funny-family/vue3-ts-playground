<template>
  <div>
    <EmojiBlinkLeftIcon />

    <div v-once class="counter">
      <h1>{{ inputValue }}</h1>
    </div>

    <h1 v-pre class="home-heading" ref="headingRef">{{ title }}</h1>

    <div>
      <div v-cloak>title :) {{ title }}</div>
    </div>

    <hr />

    <fieldset>
      <input type="text" v-model.trim="inputValue" ref="inputRef" />

      <div>inputValue: {{ inputValue }}</div>
    </fieldset>

    <div v-once>
      <div>counter: {{ count }}</div>
      <button type="button" @click="countPlusOne">count +1</button>
    </div>
  </div>
</template>

<script lang="ts" src="./home.module.ts"></script>

<style scoped src="./home.styles.css"></style>
