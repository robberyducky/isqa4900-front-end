<template>
<router-view/>
</template>

<script>
import router from "./router";
export default {
 name: 'app',
 props: {
          msg: String
      },
  mounted(){
    router.push("/skill-list");
  }
}
</script>
<style>
</style>
