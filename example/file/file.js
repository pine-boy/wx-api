// example/file/file.js
Page({
  data:{
    imgList:[]  //临时图片路径
  },
  //上传按钮
  chooseImg(){
    var that = this
    wx.chooseImage({
      count: 1,
      success: function(res) {
        that.setData({
          imgList: res.tempFilePaths
        });
      },
    })
  },
  //保存文件(只是保存为临时路径)
  saveFile(){
    var that = this
    if (that.data.imgList.length > 0){
      wx.saveFile({
        tempFilePath: that.data.imgList[0],
        success(res){
          console.log(res);
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
  },
  //获取本地缓存列表
  getFileList() {
    wx.getSavedFileList({
      success(res) {
        //res.fileList    缓存列表
        console.log(res.fileList)
      }
    })
  },
  //删除本地缓存路径
  deleteFile(){
    wx.getSavedFileList({
      success(res) {
        console.log(res.fileList)
        
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete(res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  //新页面打开窗口
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
  }
})