<template>
  <div class="comics">
    <NavBar />
    <ContainerComics />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ContainerComics from "@/components/ContainerComics.vue";

export default {
  name: "ManageComics",
  components: {
    NavBar,
    ContainerComics,
  },
};
</script>
