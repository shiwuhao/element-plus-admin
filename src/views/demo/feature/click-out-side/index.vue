<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      使用VueUse onClickOutside
      <el-link type="primary" href="https://vueuse.org/core/onClickOutside/" target="_blank">查看</el-link>
    </template>
    <el-card shadow="none">
      <div>
        <el-button type="primary" @click="modal = true">
          Open Modal
        </el-button>
      </div>

      <div class="relative inline-block mt-2">
        <el-button type="primary" @click="dropdown = true">
          Open Dropdown
        </el-button>
        <div v-if="dropdown" ref="dropdownRef" class="dropdown-inner">
          Click outside of the dropdown to close it.
        </div>
      </div>

      <div v-if="modal" ref="modalRef" class="modal">
        <div class="inner">
          <p class="heading">
            Demo Modal
          </p>
          <p>Click outside of the modal to close it.</p>
        </div>
      </div>
    </el-card>
  </page-wrapper>
</template>
<style lang="scss" scoped>
.modal {
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}

.inner {
  background-color: white;
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
}

.dropdown-inner {
  width: 200px;
  background-color: white;
  padding: 0.5em;
  position: relative;
  left: 0;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
}

.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

</style>
<script>
import {PageWrapper} from '@/components/Page'
import {onClickOutside} from '@vueuse/core'
import {ref} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {

    const modal = ref(false)
    const modalRef = ref(null)
    onClickOutside(modalRef, (event) => modal.value = false)

    const dropdown = ref(false)
    const dropdownRef = ref(null)
    onClickOutside(dropdownRef, (event) => dropdown.value = false, {event: 'mousedown'})

    return {
      modal,
      modalRef,
      dropdown,
      dropdownRef
    }
  }
}
</script>