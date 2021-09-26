export function pagination(lists = [], page = 1, pageSize = 15) {
  const offset = (page - 1) * pageSize;
  return offset + pageSize >= lists.length
    ? lists.slice(offset, lists.length)
    : lists.slice(offset, offset + pageSize);
}

export function responseSuccess({data, message = 'success'}) {
  return {
    code: 200,
    data,
    message
  }
}

export function responseError({data, message = 'error'}) {

}

export function responsePageSuccess({data, message = 'success'}) {
  return {
    code: 200,
    data,
    message,
  }
}