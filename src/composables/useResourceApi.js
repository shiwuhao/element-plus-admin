import {reactive, ref, toRefs, onMounted, nextTick} from 'vue';
import {useDebounceFn} from '@vueuse/core';

export function useResourceApi({
                                   listApi,
                                   itemApi,
                                   updateApi,
                                   storeApi,
                                   deleteApi,
                                   query = {},
                                   item = {},
                                   paginate = {},
                                   uniqueId = 'id',
                                   autoloadListApi = true,// 自动加载列表api
                                   refreshAfterConfirm = true,// 确认提交后刷新
                               }) {
    const formRef = ref(null);
    const queryRef = ref(null);
    const tableRef = ref(null);
    const defaultItem = JSON.parse(JSON.stringify(item));
    const state = reactive({
        item: item,
        query: query,
        lists: [],
        dialog: false,
        paginate: {
            layout: 'prev, pager, next, ->, total',
            ...paginate
        },
        listLoading: false,
        itemLoading: false,
        confirmLoading: false,
        autoloadListApi: autoloadListApi,
        refreshAfterConfirm: refreshAfterConfirm,
    });

    // 节流
    const _throttledQuery = useDebounceFn(async () => {
        await getList();
    }, 300);

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
        state.item = defaultItem;
        state.dialog = true;
    }

    // 修改项
    const editItem = async (item) => {
        state.dialog = true;
        await getItem(item);
    }

    // 删除项
    const deleteItem = async (item) => {
        await deleteApi(item).then(r => r);
        state.refreshAfterConfirm && await getList();
        return Promise.resolve();
    }

    // 更新项
    const updateItem = async () => {
        await updateApi(state.item).then(r => r);
        state.refreshAfterConfirm && await getList();
    }

    // 保存项
    const storeItem = async () => {
        await storeApi(state.item).then(r => r);
        state.refreshAfterConfirm && await getList();
    }

    // 确认提交
    const confirmItem = () => {
        return new Promise(resolve => {
            formRef.value.validate(async (valid) => {
                if (valid) {
                    try {
                        state.confirmLoading = true;
                        const {[uniqueId]: id} = state.item;
                        id ? await updateItem() : await storeItem();
                        cancelItem();
                        state.confirmLoading = false;
                    } catch (e) {
                        state.confirmLoading = false;
                    }
                    resolve();
                }
            })
        })
    }

    // 取消提交
    const cancelItem = () => {
        state.item = defaultItem;
        state.dialog = false;
        nextTick(() => formRef.value.clearValidate()).then(r => r);
    }

    // 分页
    const changePage = async (page) => {
        state.query.page = page;
        await getList();
    }

    onMounted(async () => {
        state.autoloadListApi && await getList();
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