import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentComic: {
    month: "-",
    num: 0,
    link: "-",
    year: "-",
    news: "-",
    safe_title: "-",
    transcript: "-",
    alt: "-",
    img: "-",
    title: "-",
    day: "-",
  },
  comicsRated: [],
};

const actions = {
  applyScoreComic({ commit }, data) {
    commit("setScore", data);
  },
  updateCurrentComic({ commit }, data) {
    commit("setComic", data);
  },
  deleteScoreComics({ commit }) {
    commit("setDeleteScore");
  },
};

const mutations = {
  setScore(state, score) {
    const comicRated = {
      id: state.currentComic.num,
      score,
    };
    state.comicsRated.push(comicRated);
  },
  setComic(state, comic) {
    state.currentComic = comic;
  },
  setDeleteScore(state) {
    state.comicsRated = [];
  },
};

const getters = {
  currentComic: (state) => {
    return state.currentComic;
  },
  comicsRated: (state) => {
    return state.comicsRated;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
