Page({
  data:{},
  downloads(){
    wx.downloadFile({
      url: 'https://yangzhenze.com/liu/1.pdf', //仅为示例，并非真实的资源
      success(res) {
        console.log(res);
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          
        }
      }
    })
  }
})