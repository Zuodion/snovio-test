<template>
  <div class="main-panel">
    <div class="header">
      <div class="search">
        <div class="search-icon"></div>
        <input class="search-input" v-model="searchKey" />
      </div>
      <div class="account-icon">
        <div class="arrow"></div>
      </div>
    </div>
    <p class="today-text">TODAY</p>
    <div class="posts-list">
      <post-item
        v-for="(post, index) in filteredPosts"
        :key="index"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import Post from "../../models/Post";
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    selectedSubscriptionId: Number,
  },
  data() {
    return {
      searchKey: "",
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    filteredPosts() {
      return this.posts
        .filter((post) => {
          // by subscription
          if (this.selectedSubscriptionId !== 0) return post.userId === this.selectedSubscriptionId;
          else return true;
        })
        .filter((post) => {
          // by searchKey
          if (this.searchKey) return post.title.toLowerCase().includes(this.searchKey.toLowerCase());
          else return true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global-styles.scss";

.main-panel {
  background-color: $grey-1;
  width: 100%;
  padding: 25px 0 25px 25px;
  overflow: auto;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    padding-right: 25px;
    .search {
      width: 100%;
      background-color: $grey-2;
      padding: 0 16px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      margin-right: 45px;
      .search-icon {
        flex: 0 0 16px;
        height: 100%;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(../../assets/images/searchIcon.svg);
      }
      .search-input {
        background-color: inherit;
        border-width: 0;
        height: 100%;
        width: 100%;
        color: inherit;
        font-size: 14px;
        line-height: 16px;
      }
    }
    .account-icon {
      flex: 0 0 37px;
      position: relative;
      background-image: url(../../assets/images/subscriptionIcon.jpg);
      background-size: cover;
      height: 37px;
      border-radius: 50%;
      margin-right: 10px;
      background-repeat: no-repeat;
      .arrow {
        position: absolute;
        right: -15px;
        top: 50%;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;

        border-top: 5px solid $grey-5;
      }
    }
  }
  .today-text {
    font-weight: bold;
    margin-bottom: 25px;
  }
  .posts-list {
    flex: 0, 0, 100%;
    display: flex;

    flex-wrap: wrap;
  }
}
</style>
