<template>
  <div class="ilex-app">
    <side-bar
      :subscriptions="subscriptions"
      :selectSubscription="selectSubscription"
      :selectedSubscriptionId="selectedSubscriptionId"
    />
    <main-panel :selectedSubscriptionId="selectedSubscriptionId"/>
  </div>
</template>

<script>
import MainPanel from "./IlexApp/MainPanel.vue";
import SideBar from "./IlexApp/SideBar.vue";
export default {
  components: { SideBar, MainPanel },
  data() {
    return {
      selectedSubscriptionId: 0,
    };
  },
  computed: {
    subscriptions() {
      return this.$store.getters.subscriptions;
    },
  },
  methods: {
    selectSubscription(id) {
      this.selectedSubscriptionId = id;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.ilex-app {
  height: 100%;
  display: flex;
}
</style>