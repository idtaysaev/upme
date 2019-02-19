<template>
  <upme-page class="page-contacts">
    <h1 slot="header">
      {{ title }}
    </h1>
    <ul class="contacts-list">
      <li
        v-for="contact in contacts"
        :key="contact.title"
        class="contacts-list-item">
        <a
          :href="contact.url"
          :style="{background: contact.background}"
          target="_blank"
          class="contacts-list-link">
          <div class="img-container">
            <img
              :src="contact.img"
              :alt="contact.title">
          </div>
          <h2 class="contacts-list-item-title">
            {{ contact.title }}
          </h2>
        </a>
      </li>
      <li class="contacts-list-item">
        <router-link
          :style="{background: 'linear-gradient(39deg, #ee0727 0%, #f3c111 100%)'}"
          to="/profile/support"
          class="contacts-list-link">
          <div class="img-container">
            <img
              src="@/assets/icons/contacts/tech.png"
              alt="Тех. поддержка">
          </div>
          <h2 class="contacts-list-item-title">
            Техническая поддержка
          </h2>
        </router-link>
      </li>
    </ul>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import { mapState } from 'vuex'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Контакты'
    }
  },
  computed: {
    ...mapState('contacts', {
      contacts: 'list'
    })
  }
}
</script>

<style lang="scss" scoped>
.contacts-list {
  font-size: $font-size-xxx-large;
  @include respond-to(medium) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .contacts-list-item {
      width: 48%;
      width: calc(50% - 0.5em);
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
    .img-container {
      flex-shrink: 0;
    }
  }
}
.contacts-list-item {
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
    .contacts-list-item-title {
      font-size: 20px;
      font-weight: 700;
      @include respond-to(x-small) {
        font-size: 27px;
      }
    }
    .contacts-list-link {
      padding: 1em 19%;
    }
    .img-container {
      margin-right: 1em;
      flex-shrink: 0.2;
    }
  }
}
.contacts-list-link {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  height: 200px;
  background-image: linear-gradient(38deg, #c42037 0%, $color-primary 100%);
  box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.6;
  }
}
.contacts-list-item-title {
  font-size: 0;
}
</style>
