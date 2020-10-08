import http from '@u/http'

export function getIndexList(params){
  return http.get('/you/pin/min/item/list.json', params)
}


export function getSpellList(params){
  return http.get('/you/pin/group/item/list', params)
}

export function getNavList(){
  return http.get('/you/pin/group/item/index', {})
}

export function getRecommend(){
  return http.get('/you/pin/min/item/recommendV2.json?orderType=0&size=0&avatarNum=3', {})
}

export function getNoticeInfo(){
  return http.get('/you/pin/group/item/broadcast/index', {})
}