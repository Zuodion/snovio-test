<template>
  <div class="side-bar">
    <div class="logo"></div>
    <p class="subscriptions-text">SUBSCRIPTIONS</p>
    <ol class="subscriptions-list">
      <li
        v-for="(subscription, index) in subscriptions"
        :key="index"
        class="subscription-list-item"
        @click="selectSubscription(subscription.id)"
        :class="{ selected: selectedSubscriptionId === subscription.id }"
      >
        <div class="subscription-info">
          <div class="subscription-icon"></div>
          <div class="subscription-name">{{ subscription.name }}</div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import User from "../../models/User";
export default {
  props: {
    subscriptions: Array[User],
    selectSubscription: Function,
    selectedSubscriptionId: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global-styles.scss";

.side-bar {
  width: 244px;
  height: 100%;
  background-color: $primary-green;
  padding: 32px 0;
  .logo {
    background-repeat: no-repeat;
    height: 27px;
    background-position: center;
    background-image: url(../../assets/images/ilexLogo.svg);
    margin-bottom: 42px;
  }
  .subscriptions-text {
    font-weight: bold;
    padding-left: 30px;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 26px;
  }
  .subscriptions-list {
    list-style: none;
    padding: 0;
    .subscription-list-item {
      height: 48px;
      border-left: 4px solid transparent;
      &:hover,
      &.selected {
        cursor: pointer;
        border-left-color: $light-green;
        background-color: $primary-green-hover;
      }
      .subscription-info {
        margin-left: 26px;
        display: flex;
        align-items: center;
        height: 100%;
        @media screen and (max-width: 700px) {
          margin-left: 6px;
        }
        .subscription-icon {
          background-image: url(../../assets/images/subscriptionIcon.jpg);
          background-size: cover;
          flex: 0 0 30px;
          height: 30px;
          border-radius: 50%;
        }
        .subscription-name {
          font-size: 14px;
          margin-left: 10px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
