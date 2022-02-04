import axios from "axios";

/**
 * @api axios
 * @author 류호진
 */

/**
 * @name axios.create
 * @description axiosAPI의 객체를 생성하는 것으로
 *              , 초기 URL 및 타임아웃 등 다양한 기본 셋팅을 할 수 있다.
 */
const service = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 1000,
});

/**
 * @name interceptor.request
 * @description API 전처리 인터셉터 config 아래에서 특정 전처리 과정을 거치거나
 *              , error에서 에러처리를 할 수 있음
 */
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @name interceptor.response
 * @description API 후처리 인터셉터 response 내부에서 특정 로직을 돌리거나
 *              , error에서 에러처리를 할 수 있음
 */
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
