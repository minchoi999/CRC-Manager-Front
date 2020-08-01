<template>
  <div class="clan-header">
    <div class="clan-header-top">
      <div class="clan-header-badge"/>
      <div class="clan-header-info">
        <div class="clan-header-name">
          <h1 class="text"> {{ name }} </h1>
        </div>
        <div class="clan-header-tag">
          <h2 class="text"> {{ tag }} </h2>
        </div>
        <div class="clan-header-scores">
          <div class="clan-header-scores-child">
            <div class="clan-header-scores-icon" />
            <p class="text"> {{ clanScore}} </p>
          </div>
          <div class="clan-header-scores-child text">
            <div class="clan-header-scores-icon" />
            <p class="text"> {{ clanWarTrophies }} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="clan-header-bottom">
      <p> {{ description }} </p>
    </div>
    <!-- <div class="clan-header-left">
    </div>
    <div class="clan-header-right">
      <h2> {{ name }}</h2>
      <h1> {{ tag }} </h1>
    </div>
    <div class="clan-header-body">
      
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ClanHeader',
  props: {
    name: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    clanScore: {
      type: Number,
      default: 0
    },
    clanWarTrophies: {
      type: Number,
      default: 0
    }
  }


}
</script>

<style lang="scss" scoped> 
.clan-header {

  .clan-header-top { 
    display: flex;
    justify-content: flex-start;
    .clan-header-badge {
      margin: 5px;
      width: 80px;
      height: 110px;
      background-color: #FFB6C1;
    }
    .clan-header-info {
      margin: 5px;
      height: 110px;


      // display: inline-block;

      .clan-header-scores {
        display: flex;
        justify-content: flex-start;
        .clan-header-scores-child {
          margin-right: 10px;
          display: flex;
          justify-content: flex-start;
          .clan-header-scores-icon {
            width: 20px;
            height: 20px;
            background-color: #FFB6C1;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

h1, h2, p.text {
  margin-top: 0px;
}


</style>