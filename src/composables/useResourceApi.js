import {reactive, ref, watch, toRefs, onMounted, nextTick} from 'vue';
import {useThrottleFn} from '@vueuse/core';

export function useResourceApi({listApi, itemApi, updateApi, storeApi, deleteApi, item = {}, uniqueId = 'id'}) {
  const formRef = ref(null);
  const queryRef = ref(null);
  const tableRef = ref(null);
  const state = reactive({
    item: {},
    query: {
      page: 1,
    },
    lists: [],
    paginate: {},
    dialog: false,
    currentIndex: null,
    fetchListLoading: false,
    fetchItemLoading: false,
    fetchConfirmLoading: false,
  });

  // 节流
  const _throttledQuery = useThrottleFn(async () => {
    await getList();
  }, 1000);

  // 查询
  const getQuery = async () => {
    await _throttledQuery();
  }

  // 获取列表
  const getList = async () => {
    state.fetchListLoading = true;
    const {data: {data, meta}} = await listApi(state.query).then(r => r);
    state.lists = data;
    state.paginate = {
      layout: 'prev, pager, next, ->, total',
      pageSize: meta.per_page,
      total: meta.total,
      pageCount: meta.last_page,
    };
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
    nextTick(() => formRef.value.clearValidate()).then(r => r);
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

        cancelItem();
      }
    })
  }

  // 分页
  const changePage = async (page) => {
    state.query.page = page;
    await getList();
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
    getQuery,
    getItem,
    addItem,
    editItem,
    deleteItem,
    confirmItem,
    cancelItem,
    changePage,
  };
}