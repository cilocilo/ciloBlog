<template>
  <div id="sidebar">
    <div class="select-btn">
        <span :class="{'select-btn--active': lang === 'cn'}" @click="changeLang('cn')">中</span>
        <span :class="{'select-btn--active': lang === 'en'}" @click="changeLang('en')">Eng</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      lang: 'cn'
    }
  },
  mounted () {
    this.lang = this.$store.state.lang
  },
  methods: {
    changeLang (lang) {
      this.lang = lang
      this.$store.dispatch('changeLanguage', lang)
    }
  }
}
</script>

<style lang="scss" scoped >
#sidebar{
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    @include flex;
    justify-content: center;
    z-index: 2;
}
.select-btn{
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 97px;
    height: 40px;
    border-radius: 20px;
    background-color: #d8d8d8;
    @include styles(box-shadow, 3px 3px 5px 2px rgba(0,0,0,0.5));
    span{
        cursor: pointer;
        display: inline-block;
        padding: 0 12px;
        height: 40px;
        line-height: 40px;
        color: #666;
        border-radius: 20px;
        transition: all .3s;
    }
    #{&}--active{
        background-color: #333;
        color: #fff;
    }
}
@media (max-width: 600px) {
  #sidebar {
    display: none;
  }
}
</style>
