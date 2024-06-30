<template>
  <div class="comics__container">
    <div class="comics__container__options">
      <span class="comics__container__options--item" @click="deleteScore">
        Delete all scores
      </span>
      <span class="comics__container__options--item" @click="loadComic">
        Change
      </span>
      <div>
        <span class="comics__container__options--text">
          Max comics to show
        </span>
        <input type="number" :value="maxQtComics" @input="maxQtComics = $event.target.value">
      </div>
    </div>
    <Comic/>
  </div>
</template>

<script>
import Comic from "@/components/Comic.vue"; 
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ContainerComics",
  components: {
    Comic,
  },
  data() {
    return {
      maxQtComics: 2000,
    };
  },
  computed: {
    ...mapGetters(["comicsRated", "currentComic"]),
    qtcComicsRated() {
      return this.comicsRated.length;
    }
  },
  mounted() {
    this.loadComic();
  },
  methods: {
    ...mapActions(["updateCurrentComic", "deleteScoreComics"]),
    loadComic() {
      let idComicToSearch = Math.floor(Math.random() * this.maxQtComics);

      axios.get(`https://fspva3ooo5.execute-api.us-east-2.amazonaws.com/v1/search?idComic=${idComicToSearch}`)
      .then((response) => {
        const loadComic = response.data;
        this.updateCurrentComic(loadComic);
      })
      .catch(() => {
        this.loadComic();
      });
    },
    deleteScore() {
      this.deleteScoreComics();
    }
  }
};
</script>
