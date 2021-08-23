import {useAxios} from "./useAxios";
import axios from "@/utils/axios";
import {isRef, ref, watch} from "vue";


// 列表
export const useFetchList = (params = {}) => {
  return useAxios({url: `/configs`});
}

// 详情
/**
 *
 * @param id
 * @returns {{data: UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["data"] extends Ref ? UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["data"] : Ref<UnwrapRef<UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["data"]>>, response: UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["response"] extends Ref ? UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["response"] : Ref<UnwrapRef<UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["response"]>>, fetch: function(): Promise<void>, finished: UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["finished"] extends Ref ? UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["finished"] : Ref<UnwrapRef<UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["finished"]>>, error: UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["error"] extends Ref ? UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["error"] : Ref<UnwrapRef<UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["error"]>>, loading: UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["loading"] extends Ref ? UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["loading"] : Ref<UnwrapRef<UnwrapNestedRefs<{data: {}, response: string, finished: boolean, error: boolean, loading: boolean}>["loading"]>>}}
 */
export const useFetchDetail = (id) => {
  return useAxios({url: `/configs/${id}`});
}

// 新增
export const useFetchStore = async (requestData) => {
  return useAxios({url: '/configs', method: 'POST', data: requestData});
}

// 更新
export const useFetchUpdate = (id, requestData) => {
  return useAxios({url: `/configs/${id}`, method: 'PUT', data: requestData});
}

// 删除
export const useFetchDelete = (id) => {
  return useAxios({url: `/configs/${id}`, method: 'DELETE'});
}

// 配置项
export const useFetchItemList = () => {
  return useAxios({url: '/configs/items'});
}