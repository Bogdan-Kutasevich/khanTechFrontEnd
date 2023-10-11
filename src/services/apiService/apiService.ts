import axios from "axios";
import {
  getAdminResponseType,
  getAllPostsResponseType,
  getThreeLastResponseType,
  getUniquesLastResponseType
} from "./apiTypes.ts";

export class ApiService {
  private baseUrl = 'http://localhost:3001'

  async getAllPosts(currentPage: number) {
    return axios<getAllPostsResponseType>({
      method: 'GET',
      url: `${this.baseUrl}/post/getAllPosts?page=${currentPage}`,
    });
  }

  async getThreeLast() {
    return axios<getThreeLastResponseType>({
      method: 'GET',
      url: `${this.baseUrl}/post/getThreeLast`,
    });
  }

  async getUniques() {
    return axios<getUniquesLastResponseType>({
      method: 'GET',
      url: `${this.baseUrl}/post/getUniques`,
    });
  }

  async getAdmin(id: number) {
    return axios<getAdminResponseType>({
      method: 'GET',
      url: `${this.baseUrl}/admin/${id}`,
    });
  }

}

export const api =  new ApiService()