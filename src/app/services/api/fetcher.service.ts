import {Injectable, isDevMode} from '@angular/core';
import {API_REQUEST_TYPE} from "../../models/apiRoutes";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class FetcherService {
  constructor() {
    if(isDevMode()) {
      axios.defaults.baseURL = "http://127.0.0.1:8000/"
    } else {
      axios.defaults.baseURL = "https://kv-ba-be-dk.mooo.com/"
    }
  }

  /**
   *
   * @description Performs a request and returns a response or null in case of an error
   * @param route - The route to be called
   * @param type - The type of the request
   * @param params - The parameters of the request
   * @param payload - The body of the request
   */
    public async doMakeSyncRequest(route: string, type: string, params: any, payload: any) {
    try {
      const res = await FetcherService.doRequest(route, type, params, payload);
      if(res.status == 200) {
        return res.data;
      } else return null;
    } catch (e) {
      console.error({e});
      return null;
    }
  }

  /**
   * @description Returns a configured axios request object
   * @param endpoint - The route to be called
   * @param type - The type of the request
   * @param params - The parameters of the request
   * @param payload - The body of the request
   * @private
   */
  private static doRequest(endpoint: string,type: string, params: any, payload: any): Promise<any> {
    switch (type) {
      case API_REQUEST_TYPE.GET: {
        return axios.get(endpoint, {
          params
        });
      }
      case API_REQUEST_TYPE.POST: {
        return axios.post(endpoint, {...payload});
      }
      case API_REQUEST_TYPE.PUT: {
        return axios.put(endpoint, payload, {
          params
        });
      }
      case API_REQUEST_TYPE.DELETE: {
        return axios.delete(endpoint, {
          params
        });
      }
      default: {
        throw new Error("No type specified on doRequest!");
      }
    }
  }
}
