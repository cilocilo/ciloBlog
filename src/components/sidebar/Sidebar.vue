<template>
  <div id="sidebar">
    <div class="select-btn">
      <span :class="{'select-btn--active': lang === 'cn'}" @click="changeLang('cn')">中</span>
      <span :class="{'select-btn--active': lang === 'en'}" @click="changeLang('en')">Eng</span>
    </div>
    <div class="menu-btns">
      <template v-for="(item, index) in 5">
        <div
          class="menu-btns__item "
          :class="{'menu-btns__item--active' : index === 0}"
          :key="index"
          @click="changePage(index)"
        >
          <div class="item__icon">
            <!-- <i class="iconfont icon-jianli1"></i> -->
          </div>
          <div class="item__desc">个人简介</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      lang: 'cn',
      screenHeight: 0,
      currentPage: 1
    }
  },
  created () {
    this.screenHeight = document.body.clientHeight
  },
  mounted () {
    this.lang = this.$store.state.lang
    // console.log(this.screenHeight)
    // console.log(document.documentElement.scrollTop)
    // window.addEventListener('mousewheel', this.handleScroll, true)
  },
  methods: {
    handleScroll (e) {
      let direction = e.deltaY < 0 ? 'up' : 'down'
      if (direction === 'up' && this.currentPage !== 0) {
        // console.log(document.documentElement.scrollTop - this.screenHeight)
        console.log(direction)
        this.currentPage = this.currentPage - 1
        document.documentElement.scrollTop = document.documentElement.scrollTop - this.screenHeight
      }
      if (direction === 'down' && this.currentPage < 6) {
        console.log(direction)
        this.currentPage = this.currentPage + 1
        document.documentElement.scrollTop = document.documentElement.scrollTop + this.screenHeight
      }
      // console.log(document.documentElement.scrollTop)
    },
    changeLang (lang) {
      this.lang = lang
      this.$store.dispatch('changeLanguage', lang)
    },
    changePage (index) {
      document.documentElement.scrollTop = index * this.screenHeight
    }
  }
}
</script>

<style lang="scss" scoped >
#sidebar {
  position: fixed;
  top: 0;
  right: 20px;
  width: 100px;
  height: 100%;
  @include flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
}
.select-btn {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 89px;
  height: 34px;
  border-radius: 17px;
  background-color: #d8d8d8;
  @include styles(box-shadow, 3px 3px 5px 2px rgba(0, 0, 0, 0.5));
  span {
    cursor: pointer;
    display: inline-block;
    padding: 0 10px;
    height: 34px;
    line-height: 34px;
    color: #666;
    border-radius: 17px;
    transition: all 0.3s;
  }
  #{&}--active {
    background-color: #333;
    color: #fff;
  }
}
.menu-btns {
  cursor: pointer;
}

.menu-btns__item {
  position: relative;
  height: 40px;
  // line-height: 40px;
  @include flex;
  align-items: center;
  .item__icon {
    // position: absolute;
    width: 12px;
    height: 12px;
    line-height: 14px;
    text-align: center;
    background: #494949;
    border-radius: 7px;
    i{
      color: #fff;
      font-size: 12px;
    }
  }
  .item__desc {
    position: absolute;
    top: 8px;
    right: 0;
    width: 80px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background: #494949;
    border-radius: 3px 0 0 3px;
    opacity: 0;
    transition: all .6s ease;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: -24px;
      border: 12px solid #494949;
      border-top: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 12px solid transparent;
      // background: #ff0000;
    }
  }
  &:hover{
    .item__icon {
      transform: scale(3);
      i{
        font-size: 12px;
      }
    }
    .item__desc{
      transform: translateX(-40px);
      opacity: 1;
    }
  }
}

.menu-btns__item--active{
  .item__icon {
    transform: scale(3);
    i{
      font-size: 12px;
    }
  }
}

@media (max-width: 600px) {
  #sidebar {
    display: none;
  }
}
</style>
