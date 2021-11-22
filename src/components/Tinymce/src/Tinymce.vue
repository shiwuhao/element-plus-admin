<template>
  <editor v-model="content" :init="initOptions" :plugins="$props.plugins" :toolbar="$props.toolbar"
          :disabled="$props.disabled"/>
</template>

<script>
import {onMounted, ref, watch} from 'vue';
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import "tinymce/icons/default/icons.js";
import 'tinymce/themes/silver/theme.js';
import 'tinymce/plugins/image/index.js';
import 'tinymce/plugins/media/index.js';
import 'tinymce/plugins/table/index.js';
import 'tinymce/plugins/contextmenu/index.js';
import 'tinymce/plugins/colorpicker/index.js';
import 'tinymce/plugins/textcolor/index.js';
import "tinymce/plugins/image/index.js";
import "tinymce/plugins/media/index.js";
import "tinymce/plugins/lists/index.js";
import "tinymce/plugins/contextmenu/index.js";
import "tinymce/plugins/wordcount/index.js";
import "tinymce/plugins/colorpicker/index.js";
import "tinymce/plugins/textcolor/index.js";
import "tinymce/plugins/preview/index.js";
import "tinymce/plugins/code/index.js";
import "tinymce/plugins/link/index.js";
import "tinymce/plugins/advlist/index.js";
import "tinymce/plugins/codesample/index.js";
import "tinymce/plugins/hr/index.js";
import "tinymce/plugins/fullscreen/index.js";
import "tinymce/plugins/textpattern/index.js";
import "tinymce/plugins/searchreplace/index.js";
import "tinymce/plugins/autolink/index.js";
import "tinymce/plugins/directionality/index.js";
import "tinymce/plugins/visualblocks/index.js";
import "tinymce/plugins/visualchars/index.js";
import "tinymce/plugins/template/index.js";
import "tinymce/plugins/charmap/index.js";
import "tinymce/plugins/nonbreaking/index.js";
import "tinymce/plugins/insertdatetime/index.js";
import "tinymce/plugins/imagetools/index.js";
import "tinymce/plugins/autosave/index.js";
import "tinymce/plugins/autoresize/index.js";

export default {
  name: 'app',
  components: {Editor},
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr nonbreaking insertdatetime advlist lists wordcount imagetools textpattern autosave autoresize"
    },
    toolbar: {
      type: [String, Array],
      default: "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | code"
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const content = ref(props.modelValue);
    const initOptions = ref({
      language_url: '/static/tinymce/langs/zh_CN.js',
      language: 'zh_CN',
      skin_url: '/static/tinymce/skins/ui/oxide',
      height: 1600,
      toolbar_mode: 'sliding',
      branding: true,
      menubar: false,
      //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
      //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
      images_upload_handler: (blobInfo, success, failure) => {
        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
        success(img)
      },
      ...props.options,
    });

    watch(() => props.modelValue, newVal => content.value = newVal);
    watch(() => content.value, newVal => emit('update:modelValue', newVal));

    onMounted(() => {
      tinymce.init(initOptions.value)
    })

    return {
      content,
      initOptions
    }
  }
}
</script>

<style scoped>

</style>