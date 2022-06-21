import axios from "axios"
import { API, PER_PAGE_LIMIT } from "../../consts"
interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}
// TO DO change type
export const getBeers = async():Promise<any> => {
 const { data } = await axios.get(API.GET_BEERS, {
  params: {
    per_page: PER_PAGE_LIMIT,
    page: 1,
  }
 });

 return data;
}