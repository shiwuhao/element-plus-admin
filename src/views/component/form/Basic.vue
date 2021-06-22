<template>
  <el-card class="m10" :header="cardTitle">
    <BasicForm v-model="form" size="mini" label-width="150px"></BasicForm>
    {{ form }}
  </el-card>
</template>

<script>
import {BasicForm} from "@/components/Form";

export default {
  name: 'Basic',
  components: {BasicForm},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      form: {},
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
