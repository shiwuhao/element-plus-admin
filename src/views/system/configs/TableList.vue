<template>

  <BasicTable></BasicTable>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"

export default {
  name: "list",
  components: {BasicForm, BasicTable},
  data() {
    return {
      activeName: 'second',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>