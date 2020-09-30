import http from '@u/http'

//
export function getListName() {
  return http.get('/miniapp/xhr/list/categorySimple.json', {})
}

// 
export function getListItem(params) {
  return http.get('/miniapp/xhr/list/subCate.json', params)
}

//
export function getCateDatails(params){
  return http.get('/miniapp/xhr/list/l2Items2.json', params)
}

// let params = {
//   categoryL1Id=1010000,
//   categoryL2Id=1093008,
//   size=20
// } 