// pages/view/view.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        formData: {},
        user: '',
        pwd: '',
        isShow: false,
        isTrue: true,
        checkPwd: false,
        checkAuto: false
    },
    // 获取数据
    handleSubmit (e) {
        console.log(e);
        this.data.formData = e.detail.value
    },
    // 用户名输入
    inputUser (e) {
        let user = e.detail.value
        console.log(e.detail.value);
        console.log(!user.length > 3);
        console.log(this.data.pwd.length > 0);
        this.setData({
            isShow: user.length > 3,
            user,
            isTrue: user.length <= 3 || this.data.pwd.length <= 0
        })
        console.log(this.data.isTrue);
    },
    inputPwd (e) {
        let pwd = e.detail.value
        this.setData({
            pwd,
            isTrue: pwd.length <= 0 || !this.data.isShow
        })
    },
    // 记住密码切换
    changeRember (e) {
        console.log(e);
        if (e.detail.value.length == 0) {
            this.setData({
                checkAuto: false
            })
        }
    },
    // 自动登录 切换
    changeAuto (e) {
        if (e.detail.value > 0) {
            this.setData({
                checkPwd: true
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
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