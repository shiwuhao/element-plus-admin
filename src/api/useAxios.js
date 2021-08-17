import axios from '@/utils/axios';
import {useAxios as useAxiosRequest} from "@vueuse/integrations";

export function useAxios() {
  const {data} = useAxiosRequest('/configs', {method: 'get'}, axios);
  return {data};

}