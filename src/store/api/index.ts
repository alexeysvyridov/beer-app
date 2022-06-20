import axios from "axios"
import { API } from "../../consts"
interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

export const getBeers = async():Promise<any> => {
 const { data } = await axios.get(API.GET_BEERS);

 return data;
}