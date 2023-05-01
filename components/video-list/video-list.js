Component({
  properties:{
    videoInfo:{
      type:Object,
      value:{}
    },
    videoId:{
      type:String,
      value: ""
    }
  },
  methods:{
    //视频播放时的回调函数
    playing(e){
      //保存正在播放的video的id
      wx.setStorage({
        key: "playing",
        data: this.properties.videoId
      })
    },
    //暂停播放器，提供给外部调用的方法
    pause:function()
    {
      wx.createVideoContext(this.properties.videoId,this).pause()
    }
  }
})