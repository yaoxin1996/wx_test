// pages/movable/movable.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cellX: 0,
        isMove: false,
        startX: '',
        height: ''
    },
    // touch 开始
    cellStart (e) {
        this.data.startX = e.changedTouches[0].pageX
    },
    // touch 结束
    cellEnd (e) {
        // 结束距离 - 开始距离 
        let endX = e.changedTouches[0].pageX
        let move = endX - this.data.startX
        if (move < -20) {
            this.setData({
                isMove: true
            })
        } else if (move > 20) {
            this.setData({
                isMove: false
            })
        } else {
            this.setData({
                isMove: this.data.isMove
            })
        }
    },
    // 点击事件
    click () {
        console.log(121212);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(wx.getSystemInfoSync().windowHeight);
        let screenH = wx.getSystemInfoSync().windowHeight
        this.setData({
            height: screenH * 2 - 200
        })
        // let height = window
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})