<template>
  <div>
    <Header :username='name' :firstname='fname'></Header>
    <Body></Body>
    <Body></Body>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'

export default {
  components: {
    Header,
    Body
  },
  data(){
    let aasdf = "MS";
    return {
      name: "★MSOK★",
      fname: aasdf,
    }
  },
}

</script>