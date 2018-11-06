// example/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //添加本地缓存
  storage(){
    wx.setStorage({
      key: "key",
      data: "value"
    })
  },
  //删除本地缓存
  deleteStorage(){
    wx.removeStorage({
      key: "key"
    })
  },
  //获取指定Key
  getStorage(){
    wx.getStorage({
      key: 'key',
      success(res) {
        console.log(res.data)
      }
    })
  },
  //异步获取当前storage的相关信息
  getStorageInfo(){
    wx.getStorageInfo({
      success(res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
  },
  //清除缓存
  clearStorageInfo(){
    wx.clearStorage();
  }
})