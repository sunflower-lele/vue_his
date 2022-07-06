import request from '@/utils/request'

export function escortList(data) {
  return request({
    url: '/api/inpatient/escort/queryHelperInfo',
    method: 'post',
    baseURL: 'http://172.16.100.252:8025',
    data: {
      patientCardNo: data
    }
  })
}
