import axios from '@/utils/axios';
import {useAxios as useAxiosRequest} from "@vueuse/integrations";

export function useAxios(url, options = {}) {
  const {
    response,
    data,
    error,
    finished,
    loading,
    isFinished,
    isLoading,
    cancel,
    canceled,
    aborted,
    abort,
  } = useAxiosRequest(url, options, axios);

  if (data.value === undefined) {
    data.value = {};
  }

  return {
    response,
    data,
    error,
    finished,
    loading,
    isFinished,
    isLoading,
    cancel,
    canceled,
    aborted,
    abort,
  }
}