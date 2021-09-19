// components/segmentPane/segmentPane.js
Component({
    options: {
        multipleSlots: true  // 使用 多 slot 
    },
    // 样式
    externalClasses: ['pane_item'],
    /**
     * 组件的属性列表
     */
    properties: {
        titleList: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        id: '',
        selectId: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 获取被点击分段选择器的值
        getClickBarItem (e) {
            this.setData({
                id: e.detail.id
            })
        },
        // 滑动swiper
        changeItem (e) {
            let index = e.detail.current
            // 获取组件 要调用方法的组件
            let s_bar = this.selectComponent('#s_bar')
            // 调用组件中的方法
            s_bar.setIndex(index)
        }
    }
})
