<template>
  <div class="post">
    <div class="content">
      <p class="title">{{ post.title }}</p>
      <p class="body">{{ post.body }}</p>
    </div>
    <div class="comments">
      <div class="comments-count">
        <div class="comments-count-icon"></div>
        <label>{{ post.comments.length }}</label>
      </div>
      <div class="comments-list-block">
        <p>Comments</p>
        <ol class="comments-list">
          <li
            class="comment"
            v-for="(comment, index) in post.comments"
            :key="index"
          >
            {{ comment }}
          </li>
        </ol>
        <button class="add-comment-button" @click="toggleAddCommentModal()">ADD COMMENT</button>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../../models/Post";
export default {
  props: {
    post: Post,
  },
  methods: {
    toggleAddCommentModal() {
      this.$store.dispatch('toggleAddCommentModal', this.post.id)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global-styles.scss";
.post {
  height: 250px;
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: $grey-3;
  display: flex;
  flex-direction: column;
  flex-basis: 350px;
  flex-grow: 1;

  padding: 20px;
  .content {
    height: 190px;
    overflow: hidden;
    .title {
      font-weight: bold;
      font-size: 22px;
      line-height: 33px;
      margin-bottom: 15px;
    }
    .body {
      font-size: 13px;
      line-height: 19px;
    }
  }

  .comments {
    .comments-count {
      .comments-count-icon {
        display: inline-block;
        background-image: url(../../assets/images/commentsIcon.svg);
        background-size: cover;
        width: 12px;
        height: 12px;
      }
      label {
        color: $grey-5;
      }
    }
    .comments-list-block {
      display: none;
    }
  }
  &:hover,
  &:active {
    height: auto;
    background-color: $grey-2;
    .comments {
      .comments-list-block {
        margin-top: 15px;
        display: block;
        p {
          font-size: 13px;
          line-height: 15px;
          font-weight: bold;
          color: $grey-5;
        }
        .comments-list {
          padding-left: 0;
          list-style-type: none;
          height: 150px;
          overflow: auto;
          margin-bottom: 15px;
          .comment:not(:last-child) {
            padding-bottom: 25px;
            border-bottom: 1px solid $grey-1;
            margin-bottom: 20px;
          }
        }
        .add-comment-button {
          height: 35px;
          width: 100%;
          color: $grey-4;
          border: 1px solid $grey-4;
          border-radius: 3px;
          background-color: transparent;
          font-weight: bold;
          font-size: 13px;
          line-height: 17px;
          &:hover {
            cursor: pointer;
            color: $white;
            background-color: $grey-4;
          }
        }
      }
    }
  }
}
</style>