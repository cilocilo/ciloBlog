<template>
  <div id="home">
    <Sidebar></Sidebar>
    <Social></Social>
    <BaseInfo></BaseInfo>
    <Projects></Projects>
  </div>
</template>

<script>
import Sidebar from '../../components/sidebar/Sidebar'
import BaseInfo from './items/BaseInfo'
import Social from './items/Social'
import Projects from './items/Projects'

export default {
  name: 'home',
  components: {Sidebar, BaseInfo, Social, Projects},
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
