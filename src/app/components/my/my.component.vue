<template>
  <div>
    <h1>{{ title }}</h1>

    <router-link :to="{ name: 'chats' }">chats</router-link>
    <router-link :to="{ name: 'profile' }">profile</router-link>

    <pre>
      <router-view/>
    </pre>

    <img src="../../images/pngs/logo.png" alt="vue logo." />
  </div>
</template>

<script lang="ts" src="./my.module.ts"></script>

<style scoped></style>
