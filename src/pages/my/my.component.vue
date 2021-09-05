<template>
  <div>
    <h1>{{ title }}</h1>

    <router-link to="/my/chats">chats</router-link>
    <router-link to="/my/profile">profile</router-link>

    <pre>
      <router-view/>
    </pre>
  </div>
</template>

<script lang="ts" src="./my.module.ts"></script>

<style scoped></style>
