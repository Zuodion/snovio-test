import Vue from 'vue';
import Vuex from 'vuex';
import User from '../models/User';
import { getAllPosts, getAllUsers, postComment } from "../services/jsonPlaceholderService";
Vue.use(Vuex);

const allSubscriptions = new User({
  id: 0,
  name: 'All subscriptions'
});

const SET_USERS = 'SET_USERS';
const SET_POSTS = 'SET_POSTS';
const TOGGLE_ADD_COMMENT_MODAL = 'TOGGLE_ADD_COMMENT_MODAL';
const SET_NEW_CURRENT_POST_ID = 'SET_NEW_CURRENT_POST_ID';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

const state = {
  users: [],
  posts: [],
  isAddCommentModalOpened: false,
  currentPostId: undefined
};

const getters = {
  subscriptions: (state) => [allSubscriptions, ...state.users],
  posts: (state) => state.posts,
  isAddCommentModalOpened: (state) => state.isAddCommentModalOpened
};

const actions = {
  async fetchUsers({ commit }) {
    let users = await getAllUsers();
    commit(SET_USERS, { users });
  },
  async fetchPosts({ commit }) {
    let posts = await getAllPosts();
    commit(SET_POSTS, { posts });
  },
  toggleAddCommentModal({ commit }, currentPostId) {
    commit(SET_NEW_CURRENT_POST_ID, currentPostId);
    commit(TOGGLE_ADD_COMMENT_MODAL);
  },
  async addComment({commit}, text) {
    console.log(text)
    await postComment(state.currentPostId, text)
    commit(ADD_NEW_COMMENT, text)
  }
};

const mutations = {
  [SET_USERS](state, { users }) {
    state.users = users;
  },
  [SET_POSTS](state, { posts }) {
    state.posts = posts;
  },
  [TOGGLE_ADD_COMMENT_MODAL](state) {
    state.isAddCommentModalOpened = !state.isAddCommentModalOpened;
  },
  [SET_NEW_CURRENT_POST_ID](state, currentPostId) {
    state.currentPostId = currentPostId;
  },
  [ADD_NEW_COMMENT](state, text) {
    state.posts.find(post => post.id === state.currentPostId).comments.push(text);
  }
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;