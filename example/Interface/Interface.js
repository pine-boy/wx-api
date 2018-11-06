// example/Interface/Interface.js
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 操作菜单
  actionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  //模态对话框
  showModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //消息提示框
  showToast(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad(){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    wx.hideTabBar({
      
    })
    app.editTabBar();//添加tabBar数据
  }
})