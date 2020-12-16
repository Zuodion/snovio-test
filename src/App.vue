<template>
  <div id="app">
    <add-comment-modal v-if="isAddCommentModalOpened" />
    <ilex-app />
  </div>
</template>

<script>
import AddCommentModal from "./components/AddCommentModal.vue";
import IlexApp from "./components/IlexApp.vue";
export default {
  components: { AddCommentModal, IlexApp },
  computed: {
    isAddCommentModalOpened() {
      return this.$store.getters.isAddCommentModalOpened;
    }
  }
};
</script>
<style lang="scss">
@import "./assets/styles/global-styles.scss";

body, html, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: $white;
}

p {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>