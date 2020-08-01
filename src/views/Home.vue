<template>
  <div class="home page">
    <UiInputText
      v-model="clanTag"
      placeholder="Enter Clan Tag Here"
      @keyup.enter="onEnter">
      <div slot="before">
        <UiBaseIcon 
          iconName="hashtag" 
          :width="searchIconWidth"
          :height="searchIconHeight" 
          :color="searchIconColor"
          @click="onClickSearchIcon"/>
      </div>
      <div slot="after">
        <UiBaseIcon 
          iconName="search" 
          :width="searchIconWidth" 
          :height="searchIconHeight" 
          :color="searchIconColor"
          @click="onClickSearchIcon"/>
      </div>
    </UiInputText>
  </div>
</template>

<script>
import UiInputText from '@/components/UiInputText'
import UiBaseIcon from '@/components/icons/UiBaseIcon'

export default {
  name: 'Home',
  components: {
    UiInputText,
    UiBaseIcon
  },
  data() {
    return {
      clanTag: '',
      info: null,
      searchIconWidth: '20px',
      searchIconHeight: '20px',
      searchIconColor: '#b3b3b3'
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "clan", params: { clanTag: this.clanTag } })
    },
    onEnter() {
      this.search()
    },
    onClickSearchIcon() {
      this.search()
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
