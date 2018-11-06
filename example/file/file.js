// example/file/file.js
Page({
  data:{},
  newOpen(){
    //新窗口打开
    wx.downloadFile({
      // 示例 url，并非真实存在
      url: 'https://yangzhenze.com/liu/1.pdf',
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  //获取本地缓存列表
  getFileList(){
    wx.getSavedFileList({
      success(res) {
        console.log(res.fileList)
      }
    })
  }
  
  
})