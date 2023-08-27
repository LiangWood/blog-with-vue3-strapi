import { createComment, loadComments } from '../../apis/comment';

export const comment = {
  state() {},
  mutations: {
    initializeComments(state, comments) {
      state.list = comments;
    },
  },
  actions: {
    addComment: async ({ commit, dispatch }, { content, postId }) => {
      await createComment(content, postId);
      dispatch('loadAllComments', postId);
      commit('increaseCommentCount', postId);
    },
    loadAllComments: async ({ commit }, postId) => {
      const comments = await loadComments(postId);
      commit('initializeComments', comments);
    },
  },
};
