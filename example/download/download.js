Page({
  data: {
    img_l: ''
  },
  preview_img: function () {//图片预览函数
  //全屏展示图片
    wx.previewImage({
      current: this.data.img_l, // 当前显示图片的http链接
      urls: [this.data.img_l] // 需要预览的图片http链接列表
    })
  },
  down_file: function () {
    var _this = this;
    const downloadTask = wx.downloadFile({
      url: 'https://www.yangzhenze.com/liu/index10.jpg',
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log(res)
        if (res.statusCode === 200) {
          _this.setData({
            img_l: res.tempFilePath //将下载的图片临时路径赋值给img_l,用于预览图片
          })
        }
      }
    })
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  }





})