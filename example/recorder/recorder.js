//录音demo
var myRecorder = wx.getRecorderManager()

Page({
  data: {
    btn:'录音按钮'
  },
  //开始录音
  recorderStart(){
    const option = {
      duration: 40000,
      sampleRate: 16000,//采样率，有效值 8000/16000/44100
      numberOfChannels: 1,//录音通道数，有效值 1/2
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50//指定帧大小
    }
    myRecorder.start(option)
    myRecorder.onStart(()=>{
      console.log('开始录音')
    })
  },
  // //录音停止
  // recorderPause(){
  //   myRecorder.pause()
  //   myRecorder.onPause(() => {
  //     console.log('录音停止')
  //   })
  // },

})