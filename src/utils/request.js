// import { resolve } from 'dns';
const config = require('../../private.config.js');

const request = {
  _get(url, obj) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.target + url, //仅为示例，并非真实的接口地址
        data: {
          ...obj
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: 'GET',
        success: function (res) {
          console.log(res, 1)
          resolve(res.data)
        },
        fail(err) {
          reject(err);
        }
      })
    });
  },
  _post(url, obj) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.target + url, //仅为示例，并非真实的接口地址
        data: {
          ...obj
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data, 213213)
          resolve(res.data)
        },
        fail(err) {
          reject(err);
        }
      })
    });
  }
}

export default request;