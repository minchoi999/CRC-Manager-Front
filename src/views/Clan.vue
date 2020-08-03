<template>
  <div class="clan">
    <h1>This is a clan page</h1>
    <div class="card">
      <ClanHeader :name="currentClanInfo.name" 
                  :tag="currentClanInfo.tag"
                  :description="currentClanInfo.description"
                  :clanScore="currentClanInfo.clanScore"
                  :clanWarTrophies="currentClanInfo.clanWarTrohpiess"/>
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ClanHeader from '../components/ClanHeader'
// import MemberTable from '../components/MemberTable'

export default {
  name: 'Clan',
  props: ['clanTag'],
  components: {
    ClanHeader
  },
  computed: {
    ...mapState({
      currentClanInfo: state => state.clanInfo.currentClanInfo
    })
  },
  data() {
    return {
      clanInfo: {}
    }
  },
  created() {
    this.$store.dispatch('clanInfo/getCurrentClanInfo', this.clanTag)
    // .then(() => {
    //   this.clanInfo = this.$store.state.clanInfo.currentClanInfo
    // })
    // this.clanInfo = this.currentClanInfo
  }
}
</script>

<style lang="scss" scoped>
.card {
  /* Add shadows to create the "card" effect */
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 80%;
  padding: 32px 32px 16px 32px;
  margin: 0 auto;
  height: 100%;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

</style>
