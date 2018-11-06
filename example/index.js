//音频demo
var backAudio = wx.getBackgroundAudioManager()
var audioUrl = ''   
var imageUrl = ''

Page({
  /**
   * 页面的初始数据
   */
  data: {
    audioList:[
      {
        'name': '不仅仅是喜欢',               //歌曲名
        'singer':'虎二',                      //歌手名
        'url': 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',  //歌曲路径
        'bgimage': 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'           //歌曲图片路径
      }, 
      {
        'name': '不仅仅是喜欢',               //歌曲名
        'singer': '虎二',                      //歌手名
        'url': 'http://yangzhenze.com/demo/images/like.mp3',  //歌曲路径
        'bgimage': 'http://singerimg.kugou.com/uploadpic/softhead/400/20180521/20180521175618738.jpg'           //歌曲图片路径
      },
      {
        'name': '不仅仅是喜欢',               //歌曲名
        'singer': '虎二',                      //歌手名
        'url': 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',  //歌曲路径
        'bgimage': 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'           //歌曲图片路径
      },
      {
        'name': '不仅仅是喜欢',               //歌曲名
        'singer': '虎二',                      //歌手名
        'url': 'http://yangzhenze.com/demo/images/like.mp3',  //歌曲路径
        'bgimage': 'http://singerimg.kugou.com/uploadpic/softhead/400/20180521/20180521175618738.jpg'           //歌曲图片路径
      },
      {
        'name': '不仅仅是喜欢',               //歌曲名
        'singer': '虎二',                      //歌手名
        'url': 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',  //歌曲路径
        'bgimage': 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'           //歌曲图片路径
      },
      {
        'name': '不仅仅是喜欢',               //歌曲名
        'singer': '虎二',                      //歌手名
        'url': 'http://yangzhenze.com/demo/images/like.mp3',  //歌曲路径
        'bgimage': 'http://singerimg.kugou.com/uploadpic/softhead/400/20180521/20180521175618738.jpg'           //歌曲图片路径
      }
    ],
    circular: true,
    duration: 200,  //轮播时间
    current:0,   //当前歌曲
    activePlay: 0, //是否播放
    songDuration:'00:00',  //歌曲总时长
    songcurrentTime:'00:00'    //当前播放进度
  },
  //格式化时间
  dateFormat: function (resDate){
    var resDate = Math.round(resDate);
    var resDateM = Math.floor(resDate / 60)
    var resDateS = resDate % 60
    if (resDateM < 10) {
      resDateM = `0${resDateM}`
    }
    if (resDateS < 10) {
      resDateS = `0${resDateS}`
    }
    var resDateMS = `${resDateM}:${resDateS}`
    return resDateMS
  },
  //获取歌曲时长
  songSc:function(){
    setTimeout(() => {
      backAudio.onTimeUpdate(() => {
        
        var songMS= this.dateFormat(backAudio.duration)
        var currentTimeMS = this.dateFormat(backAudio.currentTime)
        console.log(songMS);
        this.setData({
          songDuration: songMS,
          songcurrentTime: currentTimeMS
        })
      })
    }, 1000)
  },
  //播放条
  sliderChange(e){
    console.log(e.detail.value);
  },


  //播放函数
  playAudio:function(){
    if (this.data.activePlay == 0){
      //获取歌曲URL
      audioUrl = this.data.audioList[this.data.current].url
      backAudio.src = audioUrl
      this.setData({
        activePlay: 1
      })
      this.songSc()
    }else{
      backAudio.pause();
      this.setData({
        activePlay: 0
      })
    }
    
    
  },
  //下一首
  nextAudio:function(){
    //判断歌曲列表长度
    if (this.data.audioList.length-1 > this.data.current){
      var num = this.data.current + 1
      this.setData({
        current: num
      })
      //获取歌曲URL
      audioUrl = this.data.audioList[this.data.current].url
      backAudio.src = audioUrl
    }else{
      this.setData({
        current: 0
      })
      //获取歌曲URL
      console.log(this.data.audioList[this.data.current].url);
      audioUrl = this.data.audioList[this.data.current].url
      backAudio.src = audioUrl
    }
  },
  //上一首
  prevAudio: function () {
    if (this.data.current ==0){
      this.setData({
        current: this.data.audioList.length - 1
      })
      //获取歌曲URL
      audioUrl = this.data.audioList[this.data.current].url
      backAudio.src = audioUrl
    }else{
      this.setData({
        current: this.data.current - 1
      })
      //获取歌曲URL
      audioUrl = this.data.audioList[this.data.current].url
      backAudio.src = audioUrl
    }
  },
  bindchange: function (event){
    console.log(event.detail.current);
    this.setData({
      current: event.detail.current
    })
    //获取歌曲URL
    audioUrl = this.data.audioList[this.data.current].url
    backAudio.src = audioUrl
  }
})






