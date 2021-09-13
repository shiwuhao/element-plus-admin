import {reactive, ref, watch, toRefs, onMounted, nextTick} from 'vue';
import {useThrottleFn} from '@vueuse/core';

export function useResourceApi({
                                 listApi,
                                 itemApi,
                                 updateApi,
                                 storeApi,
                                 deleteApi,
                                 query = {},
                                 item = {},
                                 paginate = {
                                   layout: 'prev, pager, next, ->, total',
                                 },
                                 uniqueId = 'id'
                               }) {
  const formRef = ref(null);
  const queryRef = ref(null);
  const tableRef = ref(null);
  const state = reactive({
    item: item,
    query: query,
    lists: [],
    paginate: paginate,
    dialog: false,
    currentIndex: null,
    listLoading: false,
    itemLoading: false,
    confirmLoading: false,
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
    state.listLoading = true;
    const {data: {data, meta}} = await listApi(state.query).then(r => r);
    state.lists = data;
    if (meta) {
      state.paginate.pageSize = meta.per_page;
      state.paginate.total = meta.total;
      state.paginate.pageCount = meta.last_page;
    }
    state.listLoading = false;
  }

  // 获取项
  const getItem = async (item) => {
    state.itemLoading = true;
    const {data: {data}} = await itemApi(item).then(r => r);
    state.item = data;
    state.itemLoading = false;
  }

  // 添加项
  const addItem = () => {
    state.dialog = true;
  }

  // 修改项
  const editItem = async ({index = null, item = {}}) => {
    state.dialog = true;
    state.currentIndex = index;
    const _item = index ? state.lists[state.currentIndex] : item;
    await getItem(_item);
  }

  // 删除项
  const deleteItem = async ({index = null, item = {}}) => {
    state.currentIndex = index;
    const _item = index ? state.lists[state.currentIndex] : item;
    await deleteApi(_item).then(r => r);
    index && state.lists.splice(state.currentIndex, 1);
  }

  // 更新项
  const updateItem = async () => {
    state.confirmLoading = true
    const {data: {data}} = await updateApi(state.item).then(r => r);
    state.confirmLoading = false;
    return data;
  }

  // 保存项
  const storeItem = async () => {
    state.confirmLoading = true
    const {data: {data}} = await storeApi(state.item).then(r => r);
    state.confirmLoading = false;
    return data;
  }

  // 确认提交
  const confirmItem = () => {
    formRef.value.validate(async (valid) => {
      if (valid) {
        const {[uniqueId]: id} = state.item;
        const data = id ? await updateItem() : await storeItem();
        if (data) {
          id ? state.lists[state.currentIndex] = data : state.lists.unshift(data);
        }
        getList();
        cancelItem();
      }
    })
  }

  // 取消提交
  const cancelItem = () => {
    state.item = {};
    state.dialog = false;
    nextTick(() => formRef.value.clearValidate()).then(r => r);
  }

  // 分页
  const changePage = async (page) => {
    state.query.page = page;
    await getList();
  }

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
    updateItem,
    storeItem,
    deleteItem,
    confirmItem,
    cancelItem,
    changePage,
  };
}