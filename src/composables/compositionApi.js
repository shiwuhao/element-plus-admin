import {onMounted, ref} from 'vue';

export function compositionApi({listApi, itemApi, updateApi, storeApi, deleteApi, itemData}) {
  const lists = ref([]);
  const paginate = ref({});
  const currentIndex = ref(null);
  const currentItem = ref({});

  // 获取列表
  const getList = () => listApi().then(response => {
    console.log(111);
    lists.value = response.data.data;
    paginate.value = response.data.meta;
  })

  // 获取详情
  const getItem = () => {
    itemApi().then(response => {
      currentItem.value = {...response.data.data};
    })
  }

  // 添加
  const addItem = () => {
    lists.value.unshift(itemData);
    currentIndex.value = null;
  }

  // 编辑
  const editItem = (index) => {
    currentIndex.value = index;
  }

  // 删除
  const deleteItem = (index, item) => {
    deleteApi(item).then(() => {
      lists.value.splice(index, 1);
    })
  }

  // 确认操作
  const confirmItem = (item) => {
    const loading = ref(true);
    const api = item.id ? updateApi() : storeApi();
    api.then(response => {
      getList();
    }).finally(() => {
      loading.value = false;
    });
    return {
      loading,
    }
  }

  onMounted(() => {
    getList();
  });

  return {
    lists,
    paginate,
    getList,
    getItem,
    addItem,
    editItem,
    deleteItem,
    confirmItem,
    currentIndex,
    currentItem,
  }
}