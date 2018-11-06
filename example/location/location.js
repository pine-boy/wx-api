// example/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //获取当前地理位置
  getLocation(){
    wx.getLocation({
      type:'gcj02 ',
      success(res){
        console.log(res);
      }
    });
  },
  //使用微信内置地图打开位置
  openLocation(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 28
        })
      }
    })
  },
  //选择地理位置
  chooseLocation(){
    wx.chooseLocation({
      success(res){
        console.log(res);
      }
    })
  }
  
})