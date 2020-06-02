<template>
  <div class="home">
    <input v-model="clanTag"/>
    <input type="submit" v-on:click="search"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      clanTag: "",
      info: null
    };
  },
  methods: {
    search() {
      // const clanTag = this.clanTag;
      const clanTag = `http://localhost:3000/clan/${this.clanTag}`;
      axios.get(clanTag).then(response => {
        this.info = response;
      });
    }
  }
}
</script>
