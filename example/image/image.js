const app = getApp()

Page({
  data: {
    src: 'https://yangzhenze.com/liu/index10.jpg',
    info: '',
  },
  reservationImage(){
    //保存图片到本地

  },

  //选择相册图片存入本地
  




  getImageInfo() {
    //获取图片信息
    wx.getImageInfo({
      src: this.data.src,
      complete: (res) => {
        console.log(res);
        this.setData({
          info: this.format(res)
        })
      }
    })
  },
  format(obj) {
    return '{\n' +
      Object.keys(obj).map(function (key) { return '  ' + key + ': ' + obj[key] + ',' }).join('\n') + '\n' +
      '}'
  }
})


/*
//选择图片
wx.chooseImage({
  count: 1,// 默认9
  sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
  sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    console.log("choose image")
    console.log(res)
    //获取选中的图片路径
    var tempFilePath = res.tempFilePaths[0]
    //获取选中的图片信息
    wx.getImageInfo({
      src: tempFilePath,
      success: function (res) {
        console.log("get image info")
        console.log(res)
        //将图片保存到本地
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(res) {
            console.log("保存图片成功")
            console.log(res)
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail(err) {
            console.log('失败')
            console.log(err)

            if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
              wx.openSetting({
                success(settingdata) {
                  console.log(settingdata)
                  if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                    console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                  } else {
                    console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                  }
                }
              })
            }
          }
        })
      }
    })
  }
})
*/


