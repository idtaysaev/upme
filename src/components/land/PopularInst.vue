<template>
  <section class="home-popular-inst">
    <upme-container>
      <h2 class="popular-inst-title">
        Стань популярнее
      </h2>
      <section class="popular-inst-section">
        <h3 class="popular-inst-hint">
          Что нужно чтобы стать популярным?
        </h3>
        <ul class="popular-inst-list">
          <li
            v-for="how in howTo"
            :key="how.title"
            class="popular-inst-list-item">
            <div class="popular-inst-list-item-layout">
              <div class="img-container">
                <img
                  :src="how.img"
                  :alt="how.title">
              </div>
              <div class="popular-inst-list-item-text">
                <section>
                  <h4 class="popular-inst-list-item-title">
                    {{ how.title }}
                  </h4>
                  <p>
                    {{ how.description }}
                  </p>
                </section>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <p class="popular-inst-bottom">
        <a
          class="btn"
          href="#registration">Регистрация</a>
      </p>
    </upme-container>
    <div class="decor">
      <div class="decor-item decor-item-triangle decor-item-1"/>
      <div class="decor-item decor-item-triangle decor-item-2"/>
      <div class="decor-item decor-item-triangle decor-item-3"/>
    </div>
  </section>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
export default {
  components: {
    UpmeContainer
  },
  data () {
    return {
      howTo: [
        {
          title: 'Регистрируйтесь',
          description: 'Вы заводите свой личный кабинет, чтобы получить доступ к платформе и интересующему вас продукту.',
          img: require('@/assets/icons/land/popular-reg.svg')
        },
        {
          title: 'Изучайте сервис',
          description: 'В разделе "Как пользоваться?" посмотрите серию видео, чтобы понять как использовать инструменты сервиса.',
          img: require('@/assets/icons/land/popular-ser.svg')
        },
        {
          title: 'Привлекайте аудиторию на аккаунт',
          description: 'Путём использования нашей методики привлекайте живую аудиторию на свой аккаунт.',
          img: require('@/assets/icons/land/popular-aud.svg')
        },
        {
          title: 'Создавайте и публикуйте контент',
          description: 'Обучившись работе с основными инструментами Instagram, создавайте и выгружайте качественный контент.',
          img: require('@/assets/icons/land/popular-con.svg')
        },
        {
          title: 'Повышайте активность аккаунта',
          description: 'Используя дополнительные бонусы программы, повышайте активность вашего аккаунта.',
          img: require('@/assets/icons/land/popular-act.svg')
        },
        {
          title: 'Вы популярны!',
          description: 'Зарабатывай на своем личном бренде и пользуйся популярностью, которую ты обрел вместе с нами!',
          img: require('@/assets/icons/land/popular-upme.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-popular-inst {
  padding: 2em 0;
  @include respond-to(large) {
    padding: 0 0 10em;
  }
}
.popular-inst-title {
  font-size: 30px;
  text-align: center;
  color: #484848;
  margin-bottom: 0.6em;
  @include respond-to(x-small) {
    font-size: 44px;
  }
  @include respond-to(medium) {
    text-align: left;
  }
}
.popular-inst-hint {
  position: relative;
  display: inline-block;
  max-width: 98%;
  padding: 0.5em 1em 0.4em 0;
  border-top-right-radius: 38px;
  border-bottom-right-radius: 38px;
  background-color: $color-primary;
  background-image: linear-gradient(to right, #F1641C 0%, #ee0727 100%);
  color: white;
  font-size: 23px;
  margin-bottom: 1em;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    left: -200%;
    right: 100%;
    background-image: linear-gradient(to right, #f3c111 0%, #F1641C 100%);
  }
  @include respond-to(x-small) {
    padding-right: 2em;
  }
}
.popular-inst-section {
  margin-bottom: 2em;
}
.popular-inst-list {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 2%;
    left: 56px;
    height: 96%;
    display: block;
    width: 2px;
    background-color: $color-primary;
  }
  @include respond-to(x-small) {
    margin: 0 4em;
  }
  @include respond-to(small) {
    margin: 0 12em;
  }
  @include respond-to(large) {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    &::before {
      background: none;
      top: 11.3%;
      bottom: 20.7%;
      left: -6.5%;
      right: -6.5%;
      height: auto;
      width: auto;
      background: url("../../assets/img/land/popular-line.svg") no-repeat center;
      background-size: 100% 100%;
    }
    .popular-inst-list-item  {
      position: relative;
      width: 40%;
      height: 355px;
      display: flex;
      align-items: center;
      margin: 0;
      &:not(:last-child) {
        margin: 0;
      }
      &:nth-child(odd) {
        margin-left: 9%;
      }
      // &:nth-child(even) {
      //   // margin-right: 5%;
      // }
    }
    .popular-inst-list-item-layout {
      display: block;
      width: 292px;
      margin: 0 auto;

      .img-container {
        margin-bottom: 1em;
      }

      .popular-inst-list-item-title {
        margin-bottom: 1em;
      }
    }
    .popular-inst-list-item-text {
      width: 100%;
    }
  }
}
.popular-inst-list-item-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .img-container {
    width: 112px;
    height: 112px;
    background-color: $color-primary;
    background-image: linear-gradient(29deg, #c42037 0%, #ff030f 100%);
    box-shadow: 0 0 2em rgba($color-primary, 0.6);
    border-radius: 50%;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.4em;
  }
}
.popular-inst-list-item {
  &:not(:last-child) {
    margin-bottom: 1.6em;
  }
}
.popular-inst-list-item-text {
  width: 80%;
  width: calc(100% - 150px);
}
.popular-inst-bottom {
  text-align: center;
  .btn {
    font-size: 26px;
    padding: 0.4em 2em;
  }
}
.decor-item-1 {
  bottom: 10%;
  left: 2%;
  width: 234px;
  height: 234px;
  border-radius: 41px;
  background-image: linear-gradient((52deg-45deg), #ee0727 0%, #f3c111 100%);
  box-shadow:
    4em -6em 12em 1em rgba(#f3c111, 0.5),
    4em 6em 12em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    left: 5%;
  }
}
.decor-item-2 {
  bottom: 35%;
  right: -15%;
  width: 350px;
  height: 350px;
  border-radius: 78px;
  background-image: linear-gradient((52deg-45deg), #f3c111 0%, #ee0727 100%);
  box-shadow: -5em 5em 16em 0.4em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    right: -7%;
    width: 424px;
    height: 424px;
  }
}
.decor-item-3 {
  top: 20%;
  left: -10%;
  width: 296px;
  height: 296px;
  border-radius: 49px;
  background-image: linear-gradient((54deg-45deg), #c42037 0%, #ff030f 100%);
  box-shadow:
    0 2em 6em 1em rgba(#f3c111, 0.6),
    2em -2em 8em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    left: -2%;
  }
}
</style>
