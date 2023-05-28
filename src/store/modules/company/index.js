import { defineStore } from "pinia";
import constants from "@/constants";

export const useCompany = defineStore("company", {
  state: () => ({
    phoneNumber: constants.PHONE_NUMBER, // 电话号码
    email: constants.EMAIL // 邮箱
  }),
  getters: {
    getPhoneNumber(state) {
      return state.phoneNumber;
    }
  },
  actions: {
    // 设置电话号码
    setPhoneNumber(data) {
      if (data) {
        this.phoneNumber = data;
      }
    },
  },
});