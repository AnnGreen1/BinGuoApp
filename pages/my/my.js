Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "../../icons/default_avatar.png",
      nickName: ""
    },
    isLogin: false
  },

  // 获取用户信息
  getUserInfo() {
    wx.getUserProfile({
      desc: 'desc',
      success: (result) => {
        console.log(result.userInfo)
        this.setData({
          userInfo: result.userInfo,
          isLogin: true
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
})