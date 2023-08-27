import { createPost, favorPost, likePost, loadPosts } from '../../apis/post';

export const post = {
  state() {
    return {
      list: [],
      currentId: null,
    };
  },
  mutations: {
    initializePosts(state, posts) {
      state.list = posts;
    },
    toggleLike(state, { id, isLike }) {
      const post = state.list.find((post) => post.id === id);
      if (isLike) {
        post.liked_bies = (post.liked_bies || 0) + 1;
      } else {
        post.liked_bies--;
      }
      post.likedByMe = isLike;
    },
    toggleFavor(state, { id, isFavor }) {
      const post = state.list.find((post) => post.id === id);
      if (isFavor) {
        post.favored_bies = (post.favored_bies || 0) + 1;
      } else {
        post.favored_bies--;
      }
      post.favoredByMe = isFavor;
    },
    setCurrentId(state, id) {
      state.currentId = id;
    },
    increaseCommentCount(state, id) {
      const post = state.list.find((post) => post.id === id);
      post.comments++;
    },
  },
  actions: {
    async uploadPost({ commit, dispatch }, { image, description }) {
      await createPost(image, description);
      dispatch('loadAllPosts');
      commit('changeShowPostUpload', false);
    },
    async loadAllPosts({ commit }) {
      const posts = await loadPosts();
      commit('initializePosts', posts);
    },
    async toggleLike({ commit }, id) {
      const isLike = await likePost(id);
      commit('toggleLike', { id, isLike });
    },
    async toggleFavor({ commit }, id) {
      const isFavor = await favorPost(id);
      commit('toggleFavor', { id, isFavor });
    },
    async showPostDetails({ commit, dispatch }, id) {
      commit('setCurrentId', id);
      dispatch('loadAllComments', id);
      commit('changeShowPostDetails', true);
    },
    async hidePostDetails({ commit }) {
      commit('setCurrentId', null);
      commit('changeShowPostDetails', false);
    },
  },
  getters: {
    postDetails(state) {
      return state.list.find((post) => post.id === state.currentId);
    },
  },
};
