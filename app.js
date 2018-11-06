App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false,
    //配置tabBar
    tabBar: {
      "color": "#7f8389",
      "selectedColor": "#329fff",
      "backgroundColor": "#f7f7fa",
      "borderStyle": "#ccc",
      "position": "bottom",
      "list": [
        {
          "pagePath": "/example/index",
          "text": "首页",
          "iconPath": "/images/file.png",
          "selectedIconPath": "/images/next.png",
          "selectedColor": "#329fff",
          "active": false
        },
        {
          "pagePath": "/example/download/download",
          "text": "下载",
          "iconPath": "/images/file.png",
          "selectedIconPath": "/images/next.png",
          "selectedColor": "#329fff",
          "active": false
        },
        {
          "pagePath": "/example/file/file",
          "text": "文件",
          "iconPath": "/images/file.png",
          "selectedIconPath": "/images/next.png",
          "selectedColor": "#329fff",
          "active": false
        }
      ]
    },

  },
  //修改tabBar的active值  
  editTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
    }
});
wx.setInnerAudioOption({
  mixWithOther:false
})



// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.record']) {
      //向用户发起授权请求
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