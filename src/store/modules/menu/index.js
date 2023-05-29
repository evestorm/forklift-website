import { defineStore } from "pinia";

export const useMenu = defineStore("menu", {
    state: () => ({
        activeIndex: 0,
        menuList: [
            {
                name: '首页',
                to: { name: 'home' },
            },
            {
                name: '产品展示',
                to: { name: 'project-list' },
            },
            {
                name: '关于我们',
                to: { name: 'about' },
            },
            {
                name: '加入我们',
                to: { name: 'join-us' },
            },
            {
                name: '联系我们',
                to: { name: 'contact-us' },
            }
        ]
    }),
    getters: {},
    actions: {
        setActiveIndex(idx) {
            if (idx !== undefined && idx !== null) {
                this.activeIndex = idx;
            }
        },
    },
});