<template>
  <div class="home__item social">
      <div class="social__avatar">
        <img src="../../../assets/image/avatar.png" />
      </div>
      <h1>{{$store.state.data.baseInfo.name}}</h1>
      <p class="social__desc">俗人一个，随遇而安</p>
      <div class="social__list">
        <div class="social__list-item" v-for="(item, index) in list" :key="index">
          <router-link v-if='index === 0' :to="{name: 'resume'}">
            <i class="iconfont" :class="item.className"></i>
          </router-link>
          <a :href="item.link" v-else>
            <i class="iconfont" :class="item.className"></i>
          </a>
        </div>
      </div>
      <div class="social__footer">
        <p class="copyright">
          cilocilo | make in 20200202
        </p>
        <span class="arrow">
          <i class="iconfont icon-xiangxiajiantou"></i>
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'social',
  data () {
    return {
      list: [
        {
          className: 'icon-jianli1',
          link: '#'
        },
        {
          className: 'icon-git',
          link: 'https://github.com/cilocilo'
        },
        {
          className: 'icon-csdn1',
          link: 'https://blog.csdn.net/weixin_39385430'
        },
        {
          className: 'icon-zhihu',
          link: 'https://www.zhihu.com/people/xiao-clou'
        },
        {
          className: 'icon-weibo',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped >
.social{
  position: relative;
  flex-direction: column;
  background-color: $social-background;
  h1{
    line-height: 40px;
    color: $social-text;
  }
  p{
    color: $social-text;
    margin: 0 0 20px;
    @include ellipsis-multi(1);
  }
}
.social__avatar{
  width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  border-radius: 50%;
  @include styles(box-shadow,0 5px 10px rgba(0,0,0,.7));
  img{
    width: 100%;
    height: 100%;
  }
}
.social__list{
  @include flex;
  .social__list-item{
    width: 70px;
    height: 70px;
    @include flex-r-center-c-center;
    border:1px solid $social-background;
    border-radius: 50%;
    transition: all .3s;
    i{
      font-size: 30px;
      color: $social-icon;
    }
    &:nth-child(1):hover{
      @include icon-color(#00B38A);
    }
    &:nth-child(2):hover{
      @include icon-color(#793989);
    }
    &:nth-child(3):hover{
      @include icon-color(#CC0001);
    }
    &:nth-child(4):hover{
      @include icon-color(#0E87EA);
    }
    &:nth-child(5):hover{
      @include icon-color(#FF4949);
    }
  }
}
.social__footer{
  position: absolute;
  transform: translateX(-50%);
  bottom: 20px;
  left: 50%;
  text-align: center;
  font-size: 14px;
  .copyright{
    margin: 0 0 10px;
    color: $social-copy;
  }
  .arrow{
    display: block;
    color: $social-copy;
    font-size: 12px;
    animation: float 1s infinite ease alternate-reverse;
    @keyframes float {
      0% {
        @include styles(transform, translateY(-5px));
      }
      100% {
        @include styles(transform, translateY(5px));
      }
    }
  }
}
</style>
