// example/openInterface/openInterface.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //AccessToken
  getToken(){
    wx.request({
      url:'https://api.weixin.qq.com/cgi-bin/token',
      method:'GET',
      data:{
        grant_type: 'client_credential',
        appid:'wxa92f7ed5020800ba',
        secret:'82e3a60f02030ecce2504ad134365756'
      },
      success(res){
        console.log(res);
      }
    })
  },
  //获取当前账号信息
  getInfo(){
    const accountInfo = wx.getAccountInfoSync();
    console.log(accountInfo);
  },
  //获取收获信息
  chooseAddress(){
    wx.chooseAddress({
      success(res){
        console.log(res);
      }
    })
  },
  // 授权
  // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
  authorize(){
    wx.getSetting({
      success(res) {
        console.log(res);
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })
  },
  //获取openId
  getOpenId(){
    var code = "";
    wx.login({
      //获取code
      success: function (res) {
        console.log(res.code) //返回code
        wx.request({
          url: 'http://yangzhenze.com/liu/openId.php', //接口地址
          data: { code: res.code },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  },
  //客服消息
  custom(){
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/custom/typing?access_token=15_Z23PyFAOCroa84Q_v2eh_gkKlEUbdWgDb-cLoiS8Ik527FlEWIXheRk9jrGji_ma-v8_NiZdwNRn7CNwQmSrGaeUEQpxVen8ZlODrjdw64zW3OdGQMF_sBCn8VXbJCHXlwx_rfMBDkIqLCfLKWEeABAWIQ',
      method: 'POST',
      data: {
        "touser": "ortL80IjbIFNBCjxlmFVm9izZ9gs",
        "command": "Typing"
      }
    })
  }
    
  
})