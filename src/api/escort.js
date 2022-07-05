import request from '@/utils/request'

// export function get(query) {
//   return request({
//     url: '/api/escort/list',
//     method: 'get',
//     params: query,
//     baseURL: 'http://172.16.100.252:8025',
//     // params: {
//     //   name: 1,
//     //   cardno: 2222
//     // }
//   })
// }

export function escortList(data) {
  return request({
    url: '/api/escort/list',
    method: 'get',
    // params: query,
    baseURL: 'http://172.16.100.252:8025'
    // params: {
    //   name: 1,
    //   cardno: 2222
    // }
  })
}
