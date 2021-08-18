import axios from '@/utils/axios';
import {useAxios as useAxiosRequest} from "@vueuse/integrations";

export function useAxios({url, method, params, data}) {
  return useAxiosRequest(url, {method: method, params, data}, axios);
}