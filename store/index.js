export const state = () => ({ user: null });
export const mutations = {
  add(state, text) {
    state.user = text;
  },
  remove(state) {
    state.user = null;
  },
};
