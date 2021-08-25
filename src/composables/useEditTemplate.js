import {reactive, ref, useContext, watch, toRefs} from 'vue';

export function useEditTemplate({itemApi, updateApi, storeApi, itemData = {}, uniqueId = 'id'}) {
  const formRef = ref(null);
  const state = reactive({
    fetchLoading: false,
    submitLoading: false,
    itemData: {},
    dialog: false,
  });

  const {emit} = useContext();

  const addItem = () => {
    state.dialog = true;
  }

  const editItem = async (item, index) => {
    state.dialog = true;
    await getItem(item);
  }

  const getItem = async (item) => {
    state.fetchLoading = true;
    const {data} = await itemApi(item).then(r => r);
    state.itemData = data.data;
    state.fetchLoading = false;
  }

  const confirm = () => {
    formRef.value.validate(async (valid) => {
      if (valid) {
        const {[uniqueId]: id} = state.itemData;
        const api = id ? updateApi(state.itemData) : storeApi(state.itemData);

        state.submitLoading = true;
        const {data} = await api.then(r => r);
        state.submitLoading = false;

        emit('on-confirm', data.data);
        cancel();
      }
    })
  }

  const cancel = () => {
    state.itemData = {};
    state.dialog = false;
  }

  watch(itemData, async () => {
    await getItem();
  })

  return {
    ...toRefs(state),
    formRef,
    addItem,
    editItem,
    getItem,
    confirm,
    cancel,
  };
}