<template>
  <section class="home-advantages">
    <upme-container>
      <h2 class="advantages-title">
        Преимущества
      </h2>
    </upme-container>
    <div class="advantages-list-container">
      <ul class="advantages-list">
        <li
          v-for="advantage in advantages"
          :key="advantage.title"
          class="advantages-list-item">
          <div
            class="advantage-point"
            tabindex="0"/>
          <div
            class="advantage-body"
            tabindex="0">
            <h3>
              {{ advantage.title }}
            </h3>
          </div>
        </li>
      </ul>
    </div>
    <upme-container class="advantages-bottom">
      <upme-logo class="wide"/>
      <p>
        <a
          class="btn"
          href="#registration">Попробовать сейчас</a>
      </p>
    </upme-container>
    <div class="decor">
      <div class="decor-item decor-item-triangle decor-item-1"/>
      <div class="decor-item decor-item-triangle decor-item-2"/>
      <div class="decor-item decor-item-circle decor-item-3"/>
    </div>
  </section>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
import UpmeLogo from '@/components/elements/UpmeLogo.vue'
export default {
  components: {
    UpmeContainer,
    UpmeLogo
  },
  data () {
    return {
      advantages: [
        {
          title: 'Комплексное продвижение'
        },
        {
          title: 'Расширенная статистика'
        },
        {
          title: 'Рейтинговая система'
        },
        {
          title: 'Призы и подарки'
        },
        {
          title: 'Регулярные Giveaway'
        },
        {
          title: 'Создание уникального контента'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-advantages {
  padding: 2em 0;
  @include respond-to(large) {
    padding: 6em 0;
  }
}
.advantages-title {
  font-size: 30px;
  text-align: center;
  color: #484848;
  @include respond-to(x-small) {
    font-size: 44px;
  }
  @include respond-to(medium) {
    text-align: left;
  }
}
.advantages-list {
  position: relative;
  @include respond-to(large) {
    width: 660px;
    height: 660px;
    max-width: 80vh;
    max-height: 80vh;
    margin: 0 auto;

    .advantages-list-item {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: rotate 20s infinite linear;

      &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        border: 2px solid $color-primary;
        border-radius: 50%;
      }

      &:nth-child(1) {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        animation-duration: 40s;
        .advantage-body {
          animation-duration: 40s;
        }
      }
      &:nth-child(2) {
        width: 84%;
        height: 84%;
        left: 8%;
        top: 8%;
        animation-delay: 1s;
        animation-duration: 36s;
        .advantage-body {
          animation-delay: 1s;
          animation-duration: 36s;
        }
      }
      &:nth-child(3) {
        width: 68%;
        height: 68%;
        left: 16%;
        top: 16%;
        animation-delay: 2s;
        animation-duration: 32s;
        .advantage-body {
          animation-delay: 2s;
          animation-duration: 32s;
        }
      }
      &:nth-child(4) {
        width: 52%;
        height: 52%;
        left: 24%;
        top: 24%;
        animation-delay: 3s;
        animation-duration: 28s;
        .advantage-body {
          animation-delay: 3s;
          animation-duration: 28s;
        }
      }
      &:nth-child(5) {
        width: 36%;
        height: 36%;
        left: 32%;
        top: 32%;
        animation-delay: 4s;
        animation-duration: 24s;
        .advantage-body {
          animation-delay: 4s;
          animation-duration: 24s;
        }
      }
      &:nth-child(6) {
        width: 20%;
        height: 20%;
        left: 40%;
        top: 40%;
        animation-delay: 5s;
        animation-duration: 20s;
        .advantage-body {
          animation-delay: 5s;
          animation-duration: 20s;
        }
      }
    }

    .advantage-point {
      animation: none;
    }

    .advantage-body {
      top: 0;
      left: 0;
      z-index: 5;
      animation: rotate 20s reverse infinite linear;
      transition: opacity 0.3s;
      transition-delay: 0.1s;
    }
  }
  @include respond-to(x-large) {
    width: 900px;
    height: 900px;
  }
}
.advantages-list-container {
  margin-bottom: 2em;
  @include respond-to(large) {
    margin: 6em 0 12em;
  }
}
.advantages-list-item {
  position: relative;
  display: block;
  width: 100%;
  padding: 50px 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    top: calc(50% - 1px);
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $color-primary;
    background-image: linear-gradient(to right, #f3c111 0%, #ee0727 100%);
  }

  &:nth-child(1) {
    .advantage-point {
      animation-duration: 40s;
    }
  }
  &:nth-child(2) {
    .advantage-point {
      animation-delay: 3s;
      animation-duration: 45s;
    }
  }
  &:nth-child(3) {
    .advantage-point {
      animation-duration: 50s;
    }
  }
  &:nth-child(4) {
    .advantage-point {
      animation-delay: 3s;
      animation-duration: 50s;
    }
  }
  &:nth-child(5) {
    .advantage-point {
      animation-duration: 45s;
    }
  }
  &:nth-child(6) {
    .advantage-point {
      animation-delay: 3s;
      animation-duration: 40s;
    }
  }
}
.advantage-point {
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
  width: 34px;
  height: 34px;
  background-color: $color-primary;
  border-radius: 50%;
  background-image: linear-gradient(to top, #c42037 0%, #ff030f 100%);
  cursor: pointer;
  transition: all 0.3s;
  animation: patrolling 40s infinite ease-in-out;

  &:hover,
  &:focus {
    z-index: 2;
    box-shadow: 0 0 0 0.8em rgba($color-primary, 0.3);
    outline: none;

    & + .advantage-body {
      pointer-events: auto;
      opacity: 1;
      outline: none;
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
  }
}
.advantage-body {
  pointer-events: none;
  position: absolute;
  opacity: 0;
  z-index: 2;
  transition: opacity, transform 0.3s;
  background-color: white;
  padding: 0.8em 1.4em;
  transform: translate3d(-50%, -50%, 0) scale(0);
  left: 50%;
  top: 50%;
  width: 80%;
  box-shadow: 10px 17px 38px rgba(0, 0, 0, 0.33);
  border-radius: 20px;
  transition-delay: 0.2s;
  text-align: center;
  will-change: transform;

  background-image: linear-gradient(53deg, #f3c111 0%, #ee0727 100%);
  color: white;

  &:hover,
  &:focus {
    pointer-events: auto;
    opacity: 1;
    outline: none;
    transform: translate3d(-50%, -50%, 0) scale(1);
  }

  h3 {
    font-weight: 700;
    @include respond-to(small) {
      font-size: 28px;
    }
  }

  @include respond-to(x-small) {
    white-space: nowrap;
    width: auto;
  }
}
.advantages-bottom {
  text-align: center;
  .upme-logo {
    margin-bottom: 2em;
    @include respond-to(large) {
      margin-bottom: 4em;
    }
  }
  .btn {
    font-size: 26px;
    padding: 0.4em 2em;
  }
}
.decor-item-1 {
  bottom: 10%;
  left: -10%;
  width: 350px;
  height: 350px;
  border-radius: 76px;
  background-image: linear-gradient((52deg-45deg), #c42037 0%, #ff030f 100%);
  box-shadow:
    2em 4em 8em 1em rgba(#f3c111, 0.5),
    2em -4em 8em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    width: 442px;
    height: 442px;
  }
}
.decor-item-2 {
  bottom: 35%;
  right: -15%;
  width: 350px;
  height: 350px;
  border-radius: 76px;
  background-image: linear-gradient((52deg-45deg), #c42037 0%, #ff030f 100%);
  box-shadow: -5em 5em 16em 0.4em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    width: 442px;
    height: 442px;
  }
}
.decor-item-3 {
  top: 15%;
  left: -6%;
  width: 350px;
  height: 350px;
  background-image: linear-gradient(45deg, #f3c111 0%, #ee0727 100%);
  box-shadow:
    0 2em 6em 1em rgba(#f3c111, 0.6),
    2em -2em 8em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    top: 10%;
    width: 453px;
    height: 453px;
  }
}
</style>
