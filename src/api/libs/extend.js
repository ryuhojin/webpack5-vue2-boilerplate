import service from '..'
/**
 * @library apiLibrary
 * @author 류호진
 */

/**
 * @name axiosAll
 * @param {api} apis
 * @description 여러 API들이 모두 끝낫을 때의 결과를 보기 위한 것,
 *              Promise.All의 결과가 끝나면 result에서 결과를 볼 수 있다.
 * @returns result[]
 */
const axiosAll = (apis) => {
  return Promise.all([...apis]);
};

/**
 * @name axiosPrams
 * @param {string} method
 * @param {string} url
 * @param {object} data
 * @param {object} headers
 * @description API통신시에 params에 데이터를 실어보내야할 경우에 사용
 *            , 해당방법 외에도 new URLSearchParams(); 이용 가능
 * @returns response
 */
const axiosParams = (method, url, data, headers = {}) => {
  const qs = require("qs");
  return service({
    method: method,
    url: url,
    data: qs.stringify(data),
    headers: headers,
  });
};

export { axiosAll, axiosParams };
