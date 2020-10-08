import http from '@u/http'


export function searGoodByKey(params){
  return http.get('/miniapp/xhr/search/query.json', params)
}

// https://miniapp.you.163.com/xhr/search/query.json?keyword=方便面&sortType=0&descSorted=false&matchType=0&itemId=0