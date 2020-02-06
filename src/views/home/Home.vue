<template>
  <div id="home">
    <Sidebar></Sidebar>
    <Social></Social>
    <BaseInfo></BaseInfo>
  </div>
</template>

<script>
import Sidebar from '../../components/sidebar/Sidebar'
import BaseInfo from './items/BaseInfo'
import Social from './items/Social'

export default {
  name: 'home',
  components: {Sidebar, BaseInfo, Social},
  data () {
    return {
      data: {}
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped >
#home{
  height: 100%;
}
</style>
