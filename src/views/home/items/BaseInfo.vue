<template>
  <div class="home__item baseinfo">
      <div class="baseInfo__content">
        <h1>基本信息</h1>
        <div class="baseInfo__desc">进阶的前端工程师，熟悉 JavaScript 和 TypeScript，目前在腾讯公司腾讯云任职。</div>
        <div class="baseInfo__list">
          <div class="list__item" v-for="(item, index) in $store.state.data.homeBaseInfoItem" :key="`row1-${index}`">
            <img class="item__icon" :src="require(`../../../assets/icon/${item.icon}.png`)" alt="">
            <div class="item__text">
              <span>{{item.title}}</span>
              {{item.content}}
            </div>
          </div>
          <!-- <div class="list__item" v-for="(item, index) in 3" :key="`row2-${index}`">6666</div> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'baseinfo',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$store.state.data.homeBaseInfoItem)
  }
}
</script>

<style lang="scss" scoped >
.baseinfo{
    height: 100%;
    background-color: $baseInfo-background;
}
.baseInfo__content{
  width: 100%;
  max-width: 1300px;
  @include flex-r-center-c-center;
  flex-direction: column;
  h1{
    color: #ffffff;
  }
  .baseInfo__desc{
    width:80%;
    padding: 20px;
    margin: 20px 0 40px;
    color: $baseInfo-text;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    background-color: #ffffff;
  }
  .baseInfo__list{
    width:80%;
  }
}
.baseInfo__list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .list__item{
    width: 32%;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
    .item__icon{
      width: 32px;
      height: 32px;
    }
    .item__text{
      line-height: 32px;
      font-size: 14px;
      color: #444;
      span{
        display: none;
      }
    }
  }
}

  @media screen and (max-width: 430px) {
    .baseInfo__content .baseInfo__desc{
      width: 94%;
    }
    .baseInfo__content .baseInfo__list{
      width: 94%;
    }
  }
  @media screen and (max-width: 768px) {
    .baseInfo__content{
      .baseInfo__list{
        .list__item{
          width: 49%;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    .baseInfo__content{
      .baseInfo__list{
        .list__item{
          width: 100%;
          padding: 10px 20px;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          .item__text{
            padding-left: 10px;
            span{
              display: inline-block;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 320px) {
    .baseInfo__content{
      .baseInfo__desc{
        display: none;
      }
    }
  }
</style>
