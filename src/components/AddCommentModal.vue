<template>
  <div class="addCommentModal" @click.self="toggleModal">
    <div class="modal">
      <div class="modal-header">
        <p class="modal-header-text">Add comment</p>
        <div class="modal-header-close" @click="toggleModal">x</div>
      </div>
      <textarea class="modal-textarea" v-model="text"></textarea>
      <button
        v-if="!isCommentAdded"
        class="add-comment-button"
        @click="addComment()"
      >
        ADD COMMENT
      </button>
      <div v-else class="success-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isCommentAdded: false,
    };
  },
  methods: {
    toggleModal() {
      this.$store.dispatch("toggleAddCommentModal");
    },
    async addComment() {
      await this.$store.dispatch("addComment", this.text);
      this.isCommentAdded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.addCommentModal {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba($color: black, $alpha: 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    width: 440px;
    height: 300px;
    background-color: $white-2;
    border-radius: 5px;
    padding: 40px;
    .modal-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      .modal-header-text {
        font-size: 20px;
        line-height: 24px;
        height: 24px;
        color: $black-text;
      }
      .modal-header-close {
        width: 24px;
        cursor: pointer;
        background-image: url(../assets/images/crossIcon.svg);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .modal-textarea {
      background-color: $white;
      border: 1px solid $white-3;
      border-radius: 3px;
      width: 100%;
      height: 125px;
      resize: none;
      margin-bottom: 20px;
    }

    .add-comment-button {
      height: 35px;
      width: 100%;
      color: $white;
      background-color: $primary-green;
      cursor: pointer;
      border: none;
      border-radius: 3px;
      font-weight: bold;
      font-size: 13px;
      line-height: 17px;
      &:hover {
        background-color: $primary-green-hover;
      }
    }
    .success-icon {
      width: 100%;
      height: 35px;
      background-image: url(../assets/images/successIcon.svg);
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>