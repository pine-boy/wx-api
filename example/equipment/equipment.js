// example/equipment/equipment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //拨打电话
  phoneCall(){
    wx.makePhoneCall({
      phoneNumber: '13311170530'
    })
  },
  //扫描二维码
  scanCode(){
    wx.scanCode({
      onlyFromCamera: true, //是否可以从相册扫码
      success(res) {
        console.log(res)
      }
    })
  }
})