<template>
  <div>
    <img src="">
  </div>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import {ref} from "vue";

const defaultOptions = {
  aspectRatio: 1,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
  toggleDragModeOnDblclick: true,
  autoCrop: true,
  background: true,
  highlight: true,
  center: true,
  responsive: true,
  restore: true,
  checkCrossOrigin: true,
  checkOrientation: true,
  scalable: true,
  modal: true,
  guides: true,
  movable: true,
  rotatable: true,
};

export default {
  name: "Cropper",
  props: {},
  setup() {
    const cropper = ref(null);
    const imgElRef = ref(null);

    const croppered = () => {

    }

    const init = () => {
      const imgEl = imgElRef.value;
      if (!imgEl) return;
      cropper.value = new Cropper(imgEl, {
        ...defaultOptions,
        ready: () => {
          isReady.value = true;
          realTimeCroppered();
          emit('ready', cropper.value);
        },
        crop() {
          debounceRealTimeCroppered();
        },
        zoom() {
          debounceRealTimeCroppered();
        },
        cropmove() {
          debounceRealTimeCroppered();
        },
        ...props.options,
      })

    }

  }
}
</script>

<style scoped>

</style>