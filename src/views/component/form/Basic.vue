<template>
  <el-card class="m10" :header="cardTitle">
    <pre>
    {{ form }}
    </pre>
    <BasicForm v-model="form" size="mini" label-width="120px"></BasicForm>
  </el-card>
</template>

<script>
import BasicForm from "@/components/Form/BasicForm";
import {ref,reactive} from "vue";

export default {
  name: 'Basic',
  components: {BasicForm},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      // form: {},
    }
  },
  setup(){
    const form = reactive({})
    return {form};
  },
  methods: {

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
