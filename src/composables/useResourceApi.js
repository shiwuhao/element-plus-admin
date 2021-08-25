import {reactive, ref, useContext, watch, toRefs, onMounted} from 'vue';

export function useResourceApi({listApi, itemApi, updateApi, storeApi, deleteApi, item = {}, uniqueId = 'id'}) {
  const formRef = ref(null);
  const queryRef = ref(null);
  const tableRef = ref(null);
  const state = reactive({
    item: {},
    query: {},
    lists: [],
    paginate: {},
    dialog: false,
    currentIndex: null,
    fetchListLoading: false,
    fetchItemLoading: false,
    fetchConfirmLoading: false,
  });

  const {emit} = useContext();

  // 获取列表
  const getList = async () => {
    state.fetchListLoading = true;
    const {data: {data, meta}} = await listApi().then(r => r);
    state.lists = data;
    state.paginate = meta;
    state.fetchListLoading = false;
  }

  // 获取项
  const getItem = async (item) => {
    state.fetchItemLoading = true;
    const {data: {data}} = await itemApi(item).then(r => r);
    state.item = data;
    state.fetchItemLoading = false;
  }

  // 添加项
  const addItem = () => {
    state.dialog = true;
  }

  // 修改项
  const editItem = async (index) => {
    state.dialog = true;
    state.currentIndex = index;
    const item = state.lists[state.currentIndex];
    await getItem(item);
  }

  // 删除项
  const deleteItem = async (index) => {
    state.currentIndex = index;
    const item = state.lists[state.currentIndex];
    await deleteApi(item).then(r => r);
    state.lists.splice(state.currentIndex, 1);
  }

  // 取消提交
  const cancelItem = () => {
    state.item = {};
    state.dialog = false;
  }

  // 确认提交
  const confirmItem = () => {
    formRef.value.validate(async (valid) => {
      if (valid) {
        const {[uniqueId]: id} = state.item;
        const api = id ? updateApi(state.item) : storeApi(state.item);

        state.fetchConfirmLoading = true;
        const {data: {data}} = await api.then(r => r);
        state.fetchConfirmLoading = false;

        if (id) {
          state.lists[state.currentIndex] = data;
        } else {
          state.lists.unshift(data);
        }

        emit('on-confirm', data.data);
        cancelItem();
      }
    })
  }

  watch(state.item, async () => {
    await getItem(state.item);
  })

  onMounted(async () => {
    await getList();
  })

  return {
    ...toRefs(state),
    formRef,
    queryRef,
    tableRef,
    getList,
    getItem,
    addItem,
    editItem,
    deleteItem,
    confirmItem,
    cancelItem,
  };
}