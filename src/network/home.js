import request from "network/request";

export function getHomeMultidata() {
  // console.log(request);
  return request({
    url: "/home/multidata",
    baseurl: "http://123.207.32.32:8000"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: '/api/n3/home/data',
    baseurl: 'http://152.136.185.210:8000',
    params: {
      type,
      page
    }
  })
}
