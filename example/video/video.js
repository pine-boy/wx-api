//获取随机色
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    //获取video上下文
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    //弹幕列表
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  //输入框失去焦点事件
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  //点击按钮发送弹幕
  bindSendDanmu: function () {
    //设置弹幕内容
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  //视频播放
  bindPlay: function () {
    this.videoContext.play()
  },
  //视频暂停
  bindPause: function () {
    this.videoContext.pause()
  },
  // 视屏播放出错
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})