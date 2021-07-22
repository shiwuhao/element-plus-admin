<template>
  <editor v-model="content" :init="initOptions" :plugins="$props.plugins" :toolbar="$props.toolbar"
          :disabled="$props.disabled"/>
</template>

<script>
import {onMounted, ref, watch} from 'vue';
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import "tinymce/icons/default/icons";
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/textcolor';
import "tinymce/plugins/image";
import "tinymce/plugins/media";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/preview";
import "tinymce/plugins/code";
import "tinymce/plugins/link";
import "tinymce/plugins/advlist";
import "tinymce/plugins/codesample";
import "tinymce/plugins/hr";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/autolink";
import "tinymce/plugins/directionality";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/template";
import "tinymce/plugins/charmap";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/autosave";
import "tinymce/plugins/autoresize";

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