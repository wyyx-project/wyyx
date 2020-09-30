import axios from 'axios'

const get = ({url,params}) => {
  return axios({
    url,
    params
  })
  .then(result =>{
    return result
  })
  .catch(err =>{
    console.log(err)
    return err
  })
}
export{
  get
}