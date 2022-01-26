import {ref, shallowRef} from 'vue-demi'
import axios from "axios";

export function useAxios(url, ...args) {
  let config = {}
  let instance = axios

  if (args.length > 0) {

    if ('request' in args[0])
      instance = args[0]
    else
      config = args[0]
  }

  if (args.length > 1) {
    if ('request' in args[1])
      instance = args[1]
  }

  const response = shallowRef()
  const data = shallowRef()
  const isFinished = ref(false)
  const isLoading = ref(true)
  const aborted = ref(false)
  const error = shallowRef()

  const cancelToken = axios.CancelToken.source()
  const abort = (message) => {
    if (isFinished.value || !isLoading.value) return

    cancelToken.cancel(message)
    aborted.value = true
    isLoading.value = false
    isFinished.value = false
  }

  instance(url, {...config, cancelToken: cancelToken.token})
    .then((r) => {
      response.value = r
      data.value = r.data
    })
    .catch((e) => {
      error.value = e
    })
    .finally(() => {
      isLoading.value = false
      isFinished.value = true
    })

  return {
    response,
    data,
    error,
    finished: isFinished,
    loading: isLoading,
    isFinished,
    isLoading,
    cancel: abort,
    canceled: aborted,
    aborted,
    abort,
  }
}