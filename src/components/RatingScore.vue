<template>
  <div class="comics__container__comic__rating">
    <div class="comics__container__comic__rating__score">
      <div
        @click="applyScore(score)"
        v-for="(score,i) in maxScore" :key="i"
        :class="{
          'comics__container__comic__rating--item': true,
          'comics__container__comic__rating--item-checked': currentScore >= i + 1,
          'comics__container__comic__rating--item-disabled': hasScored
          }">
        {{ score }}
      </div>
    </div>
    <span class="comics__container__comic--title" v-if="hasScored">
      ¡This comic has been scored!
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RatingScore",
  data() {
    return {  
      maxScore: 5,
    };
  },
  computed: {
    ...mapGetters(["comicsRated", "currentComic"]),
    hasScored() {
      return this.comicsRated.some((comic) => comic.id === this.currentComic.num);
    },
    currentScore() {
      if (this.hasScored) {
        const currentComicScored = this.comicsRated.filter((comic) => comic.id === this.currentComic.num)[0];
        return currentComicScored.score;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions(["applyScoreComic"]),
    applyScore(score) {
      if (!this.hasScored) {
        this.applyScoreComic(score);
      }
    },
  },
};
</script>
