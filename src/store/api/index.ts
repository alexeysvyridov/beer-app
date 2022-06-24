import axios from "axios"
import { API, PER_PAGE_LIMIT } from "../../consts"
import { addUnderscore } from "../../utils"
interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}
export const getBeers = async(query: any):Promise<any> => {
 const { data } = await axios.get(API.GET_BEERS, {
  params: {
    per_page: PER_PAGE_LIMIT,
    page: query?.currentPage || 1,
    food: query?.food ? addUnderscore(query.food) : undefined,
  }
 });

 return data;
}