import request from '@/utils/request'

export function getDayInfo(data) {
  return request({
    url: '/api/inpatient/escort/queryStateInfo',
    method: 'post',
    data: {
      escortNo: data
    }
  })
}
