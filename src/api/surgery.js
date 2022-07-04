import request from '@/utils/request'

export function getDictionary() {
  return request({
    url: '/api/inpatient/surgery/dictionary/getDictionary',
    method: 'post',
    data: {}
  })
}

export function addDictionary(data) {
  return request({
    url: '/api/inpatient/surgery/dictionary/addDictionary',
    method: 'post',
    data
  })
}
