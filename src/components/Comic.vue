<template>
  <div class="comics__container__comic">
    <span class="comics__container__comic--title">
      {{ getInfo(currentComic.safe_title) }}
    </span>
    <img
      :src="currentComic.img"
      :alt="currentComic.alt"
      class="comics__container__comic__img"
    >
    <div class="comics__container__comic__info" v-if="getTranscript !== '-'">
      <span class="comics__container__comic--title">Transcript</span>
      <p class="comics__container__comic--description" v-html="getTranscript">
      </p>
    </div>
    <div class="comics__container__comic__info">
      <span class="comics__container__comic--title">Publish date</span>
      <p class="comics__container__comic--description">
        {{ getDate }}
      </p>
    </div>
    <div class="comics__container__comic__info" v-if="getInfo(currentComic.link) !== '-'">
      <span class="comics__container__comic--title">Link</span>
      <p class="comics__container__comic--description">
        {{ getInfo(currentComic.link) }}
      </p>
    </div>
    <RatingScore />
  </div>
</template>

<script>
import RatingScore from "@/components/RatingScore.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContainerComics",
  components: {
    RatingScore,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(["currentComic"]),
    getDate() {
      const day = this.getInfo(this.currentComic.day);
      const month = this.getInfo(this.currentComic.month);
      const year = this.getInfo(this.currentComic.year);
      return `${day}/${month}/${year}`;
    },
    getTranscript() {
      return this.getInfo(this.currentComic.transcript).replaceAll('\n', '<br>•')
    }
  },
  methods: {
    getInfo(value) {
      if (value === null || value === undefined || value === '') {
        return '-';
      }
      return value;
    },
  }
};
</script>
