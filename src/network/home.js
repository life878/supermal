import request from "network/request";

export function getHomeMultidata() {
  // console.log(request);
  return request({
    url: "/home/multidata",
    baseurl: "http://123.207.32.32:8000"
  });
}
