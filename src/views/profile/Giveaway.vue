<template>
  <upme-page class="page-giveaway">
    <div
      slot="header"
      class="giveaway-header-layout">
      <h1>
        {{ title }}
      </h1>
      <a
        :href="chat"
        class="btn giveaway-chat-btn"
        target="_blank">Наш чат</a>
    </div>
    <div class="giveaway-list">
      <giveaway-item
        v-for="giveaway in giveaways"
        :key="giveaway.name"
        :giveaway="giveaway"/>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import GiveawayItem from '@/components/giveaway/GiveawayItem.vue'
import { mapState } from 'vuex'
export default {
  components: {
    UpmePage,
    GiveawayItem
  },
  data () {
    return {
      title: 'Giveaway'
    }
  },
  computed: {
    ...mapState('giveaway', [
      'giveaways',
      'chat'
    ])
  },
  mounted () {
    this.$store.dispatch('giveaway/init')
  }
}
</script>

<style lang="scss" scoped>
.giveaway-header-layout {
  display: flex;
  align-items: center;
}
.giveaway-chat-btn {
  font-size: 16px;
  margin-left: 1em;
  @include respond-to(x-small) {
    font-size: 23px;
  }
}
.giveaway-list {
  .giveaway-item {
    margin-bottom: 2em;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @include respond-to(small) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    .giveaway-item {
      max-width: 45%;
      max-width: calc(50% - 1em);

      &:nth-child(2n-1) {
        margin-right: 2em;
      }
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
