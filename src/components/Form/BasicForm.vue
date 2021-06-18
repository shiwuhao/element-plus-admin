<template>
  {{ formModel }}
  <el-form :model="formModel" size="mini">
    <template v-for="schema in getSchema" :key="schema.field">
      <FormItem :schema="schema" v-model="formModel[schema.field]"></FormItem>
    </template>
  </el-form>
</template>

<script>
import {getFormData} from "@/views/component/form/formData";
import FormItem from "@/components/Form/components/FormItem";
import {computed, ref} from "vue";


export default {
  name: "BasicForm",
  components: {FormItem},
  setup() {

    const getSchema = getFormData();
    const formModel = ref({});

    // computed(()=>{
    //
    // })

    return {
      getSchema,
      formModel,
    }
  }
}
</script>

<style scoped>

</style>