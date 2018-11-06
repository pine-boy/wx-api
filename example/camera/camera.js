Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  //拍照
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          //获取照片路径
          src: res.tempImagePath
        })
      }
    })
  },
  //开始录像
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },
  //停止录像
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          //获取录像路径
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})