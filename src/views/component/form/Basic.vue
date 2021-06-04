<template>
  <el-card class="m10" :header="cardTitle">
    <BasicForm></BasicForm>
  </el-card>
</template>

<script>
import BasicForm from "@/components/Form/BasicForm";

export default {
  name: 'Basic',
  components: {BasicForm},
  data() {
    return {
      cardTitle: this.$route.meta.title,
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
