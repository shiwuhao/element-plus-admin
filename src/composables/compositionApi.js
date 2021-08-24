import {onMounted, ref} from 'vue';

export function compositionApi(listApi, detailApi, updateApi, storeApi, deleteApi, itemData) {
  const lists = ref([]);
  const paginate = ref({});
  const currentIndex = ref(null);
  const currentItem = ref({});

  const getList = () => listApi().then(response => {
    console.log(111);
    lists.value = response.data.data;
    paginate.value = response.data.meta;
  })

  const addItem = () => {
    lists.value.unshift(itemData);
    currentIndex.value = 0;
    currentItem.value = {};
  }

  const editItem = (index) => {
    currentIndex.value = index;
    currentItem.value = lists.value[index];
  }

  const deleteItem = (index, item) => {
    deleteApi(item).then(() => {
      lists.value.splice(index, 1);
    })
  }

  const submitItem = (item) => {
    const api = item.id ? updateApi() : storeApi();
    api.then(response => {
      lists.value[currentIndex.value] = response.data.data;
    })
  }

  onMounted(() => {
    getList();
  });

  return {
    lists,
    paginate,
    getList,
    addItem,
    editItem,
    deleteItem,
    submitItem,
    currentIndex,
    currentItem,
  }
}