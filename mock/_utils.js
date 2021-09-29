const baseData = {
  code: 200,
  data: null,
  message: 'success'
}

export function pagination(lists = [], page = 1, perPage = 15) {
  const total = lists.length;
  const totalPage = (total + perPage - 1) / perPage | 0
  const offset = (page - 1) * perPage;
  const data = offset + perPage >= lists.length
    ? lists.slice(offset, lists.length)
    : lists.slice(offset, offset + perPage);
  return {
    data: data,
    meta: {
      current_page: page,
      total: total,
      per_page: perPage,
      last_page: totalPage
    }
  }
}

export function responseSuccess(item) {
  return {...baseData, ...{data: item}}
}

export function responseError({data, message = 'error'}) {

}

export function responsePageSuccess(lists, page, perPage) {
  const pageData = pagination(lists, page, perPage)
  return {
    ...baseData,
    ...pageData,
  }
}