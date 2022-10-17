<template>
  <div class="home-page">
    <el-card class="box-card">
      <div class="search-box">
        <el-input v-model="kerwords" placeholder="请输入工号" class="input-with-select">
          <template #append>
            <v-btn type="primary" style="width: 100px; height: 100%; border-radius: 0 4px 4px 0; color: #fff"
              >查询</v-btn
            >
          </template>
        </el-input>
        <el-input v-model="kerwords2" placeholder="请输入手牌号" class="input-with-select">
          <template #append>
            <v-btn
              type="primary"
              style="width: 100px; height: 100%; border-radius: 0 4px 4px 0; color: #fff"
              @click="handleSettlement"
              >收银</v-btn
            >
          </template>
        </el-input>
      </div>
      <div class="action-box">
        <!-- <el-button type="primary" size="large" v-for="item in actionBtns">{{ item.label }}</el-button> -->
        <v-btn type="primary" size="large" v-for="(item, index) in actionBtns" @click="handleAction(index)">
          <span>{{ item.label }}</span>
          <v-badge v-if="item.badge" content="2" color="error" class="my-btn-badge" />
        </v-btn>
      </div>
    </el-card>
    <el-card class="box-card">
      <v-tabs v-model="activeTab" color="primary" grow class="demo-tabs" @tab-click="handleTab">
        <v-tab value="0">足浴包厢</v-tab>
        <v-tab value="1">SPA包厢</v-tab>
      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item style="height: 20px; opacity: 0">ph</v-tab-item>
        <v-tab-item value="0" v-if="activeTab === '0'">
          <el-card class="box-card zy-box-card">
            <!-- <template #header>
              <div class="card-header">
                <span>足浴包厢</span>
              </div>
            </template> -->
            <div class="room-list">
              <el-card
                shadow="hover"
                class="room-box"
                v-for="(item, index) in footRoomList"
                @click="handleOnRoom(item)"
              >
                <template #header>
                  <div class="card-header">
                    <span class="c-title">{{ item.name }}</span>
                  </div>
                </template>
                <div class="room-card-content">
                  <div class="room-status-box">
                    <span v-if="item.status < 3">{{ roomStatus[item.status] }}</span>
                  </div>
                </div>
                <div class="pay-box" v-if="item.status > 2">
                  <span>待支付:</span>
                  <span>{{ item.pay }}</span>
                </div>
              </el-card>
            </div>
          </el-card>
        </v-tab-item>
        <v-tab-item value="1" v-if="activeTab === '1'">
          <el-card class="box-card spa-box-card">
            <!-- <template #header>
              <div class="card-header">
                <span>SPA 包厢</span>
              </div>
            </template> -->
            <div class="room-list">
              <el-card shadow="hover" class="room-box spa-room" v-for="(item, index) in 20">
                <template #header>
                  <div class="card-header">
                    <span class="c-title">A01</span>
                  </div>
                </template>
              </el-card>
            </div>
          </el-card>
        </v-tab-item>
      </v-tabs-items>
    </el-card>

    <el-row>
      <el-col :span="12">
        <div class="card-header-cate">
          <div class="status-list">
            <div class="status-item" v-for="(item, index) in status">
              <span :style="{ background: colors[index] }" />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span class="card-header-title">自由之鹿</span>
              <div class="card-r-con" />
            </div>
          </template>
          <div class="js-list">
            <div class="js-box" v-for="(item, index) in jishiList" @click="handleOnJishi(item)">
              <div :style="{ background: colors[item.status] }">
                <span>{{ item.number }}</span>
                <span>{{ currentStatus(item.status) }}</span>
              </div>
              <div :class="`jsc${item.status}`">
                <span>P{{ item.p }}</span>
                <span>D{{ item.d }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span class="card-header-title">林深见鹿</span>
              <div class="card-r-con" />
            </div>
          </template>
          <div class="js-list">
            <div class="js-box" v-for="(item, index) in jishiList" @click="handleOnJishi(item)">
              <div :style="{ background: colors[item.status] }">
                <span>{{ item.number }}</span>
                <span>{{ currentStatus(item.status) }}</span>
              </div>
              <div :class="`jsc${item.status}`">
                <span>P{{ item.p }}</span>
                <span>D{{ item.d }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span class="card-header-title">自由至尊</span>
              <div class="card-r-con" />
            </div>
          </template>
          <div class="js-list">
            <div class="js-box" v-for="(item, index) in jishiList" @click="handleOnJishi(item)">
              <div :style="{ background: colors[item.status] }">
                <span>{{ item.number }}</span>
                <span>{{ currentStatus(item.status) }}</span>
              </div>
              <div :class="`jsc${item.status}`">
                <span>P{{ item.p }}</span>
                <span>D{{ item.d }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <VIP v-model="modalShow0" />
  <MoneyNList v-model="modalShow1" />
  <RefundReview v-model="modalShow2" />
  <WaitList v-model="modalShow3" />
  <BaseDialog v-model="modalShow4" title="包厢监控" w="70%" hideFooter>
    <RoomWatch />
  </BaseDialog>
  <BaseDialog v-model="modalShow5" title="技师上钟监控列表" w="80%" hideFooter>
    <JishiList />
  </BaseDialog>
  <RoomGroup v-model="modalShow6" />
  <BaseDialog v-model="modalShow7" title="预约管理" w="80%" hideFooter>
    <reserveManagement />
  </BaseDialog>
  <BaseDialog v-model="modalShow8" title="活动订单" w="70%" hideFooter>
    <ActiveOrderList />
  </BaseDialog>
  <el-drawer v-model="drawerShow" direction="rtl" size="90%" custom-class="el-drawer-w">
    <template #header>
      <h4 class="drawer-header-title">
        <span>包厢</span>
        <span>A11</span>
        <span>手牌</span>
        <span>026</span>
        <span>订单号</span>
        <span>A11</span>
      </h4>
    </template>
    <template #default>
      <el-row :gutter="16">
        <el-col :span="14">
          <div class="drawer-contentc">
            <div class="consumer-details">
              <div class="block-title">
                <span>消费明细</span>
              </div>
              <el-table :data="consumerData" style="width: 100%; margin-bottom: 20px" row-key="id" default-expand-all>
                <el-table-column prop="name" label="服务/商品名称" width="180" />
                <el-table-column prop="count" label="数量" width="80" />
                <el-table-column prop="room_num" label="包厢号" />
                <el-table-column prop="p_num" label="技师工号" />
                <el-table-column prop="total_money" label="金额" />
                <el-table-column label="优惠" width="180">
                  <template #default="scope">
                    <el-select v-model="scope.row.status">
                      <el-option v-for="item in selOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="money" label="待收" width="80" />
                <el-table-column label="支付状态">
                  <template #default="scope">
                    {{ scope.row.status === 0 ? "未支付" : "已支付" }}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="block-title">
            <span>消费合集</span>
            <span class="tcpc">789</span>
          </div>
          <el-form :model="formModel">
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item label="优惠">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="赠送">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="免单">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抹零">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="应收">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="已收">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="待收">
                  <el-input v-model="formModel.name" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-row>
            <el-col :span="24">
              <div class="block-title">
                <span>支付方式</span>
              </div>
              <el-row>
                <el-col :span="24">
                  <el-form :model="formModel1" label-width="80px" class="input-innerw100">
                    <el-row :gutter="16">
                      <el-col :span="24">
                        <el-row :gutter="16">
                          <el-col :span="20">
                            <el-form-item label="会员卡">
                              <el-input v-model="formModel.name" placeholder="请输入会员手机号码/姓名/实体卡号" />
                            </el-form-item>
                          </el-col>
                          <el-col :span="4">
                            <el-button type="primary" @click="">查询</el-button>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="会员卡">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="刷卡卡">
                          <el-input v-model="formModel1.name" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="现金支付">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="微信支付">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="支付宝">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="银行卡">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="美团">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="poss机">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="刘总签单">
                          <el-input-number v-model="formModel1.num" :min="1" :max="10" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="其它">
                          <el-select v-model="formModel.status">
                            <el-option
                              v-for="item in selOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </template>
    <template #footer>
      <div class="drawer-footerc">
        <div />
        <div>
          <el-button>打印</el-button>
          <el-button>挂账</el-button>
          <el-button type="primary">结算</el-button>
        </div>
      </div>
    </template>
  </el-drawer>
  <BaseDialog v-model="modalShow9" :title="currentRoomTitle" w="30%" hideFooter>
    <div class="room-action">
      <el-button size="large" color="#626aef" plain>开单</el-button>
      <el-button size="large" color="#626aef" plain>打扫</el-button>
      <el-button size="large" color="#626aef" plain>占用</el-button>
      <el-button size="large" color="#626aef" plain>预约</el-button>
      <el-button size="large" color="#626aef" plain>手牌进出</el-button>
      <el-button size="large" color="#626aef" plain>收银</el-button>
      <el-button size="large" color="#626aef" plain>详情</el-button>
      <el-button size="large" color="#626aef" plain>买钟</el-button>
      <el-button size="large" color="#626aef" plain>拆包厢</el-button>
      <el-button size="large" color="#626aef" plain>设为空闲</el-button>
      <el-button size="large" color="#626aef" plain>备注</el-button>
    </div>
  </BaseDialog>
  <BaseDialog v-model="modalShow10" :title="jishiTitle" w="50%" hideFooter>
    <div class="jishi-current-status">
      <el-row>
        <el-col :span="12">
          <div class="cur-item">
            <span>技师状态：</span>
            <span>剩 21 m</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="cur-item">
            <span>所在包厢：</span>
            <span>A05</span>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="cur-item">
            <span>技师信息：</span>
            <span>技师</span>
            <span>18793111111</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="cur-item">
            <span>排钟数量：</span>
            <span>4</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="cur-item">
            <span>点钟数量：</span>
            <span>4</span>
          </div>
        </el-col>
      </el-row>

      <div>
        <span>技师状态：</span>
        <span>剩 21 m</span>
      </div>
    </div>
    <div class="room-action">
      <el-button size="large" color="#626aef" plain>预约</el-button>
      <el-button size="large" color="#626aef" plain>设为暂停</el-button>
      <el-button size="large" color="#626aef" plain>设为空闲</el-button>
      <el-button size="large" color="#626aef" plain>技师下钟</el-button>
      <el-button size="large" color="#626aef" plain>下钟后暂停</el-button>
      <el-button size="large" color="#626aef" plain>申请加班</el-button>
      <el-button size="large" color="#626aef" plain>强制下班</el-button>
      <el-button size="large" color="#626aef" plain>请假</el-button>
    </div>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import type { TabsPaneContext } from "element-plus"
import VIP from "./VIP.vue"
import MoneyNList from "./MoneyNList.vue"
import WaitList from "./WaitList.vue"
import RefundReview from "./RefundReview.vue"
import RoomWatch from "../roomWatch/index.vue"
import reserveManagement from "../reserveManagement/List.vue"
import JishiList from "../jishiList/List.vue"
import ActiveOrderList from "../activeOrder/List.vue"
import RoomGroup from "./RoomGroup.vue"
import BaseDialog from "@/components/BaseDialog.vue"

const roomStatus = ["空闲", "占用", "打扫"]
const currentRoomStatus = ref(0)
const currentRoomTitle = ref("")
const jishiTitle = ref("")
const footRoomList = [
  { name: "A01", status: 0 },
  { name: "A02", status: 1 },
  { name: "A03", status: 2 },
  { name: "A04", status: 3, pay: 218, list: [{ num: 999, timeLeft: 298 }] },
  { name: "A05", status: 4, pay: 218, list: [{ num: 999, timeLeft: 298 }] }
]
const selOptions = [
  { label: "不使用优惠卷", value: 0 },
  { label: "免单", value: 1 },
  { label: "赠送", value: 2 },
  { label: "5折", value: 3 },
  { label: "8折", value: 4 },
  { label: "8.8折", value: 5 },
  { label: "9折", value: 6 },
  { label: "7折", value: 7 },
  { label: "6折", value: 8 }
]
const selOptions1 = [
  { label: "不使用优惠卷", value: 0 },
  { label: "使用优惠卷", value: 1 }
]
const kerwords = ref("")
const kerwords2 = ref("")
const activeTab = ref("0")
const formModel: any = ref({})
const formModel1: any = ref({})
const consumerData = ref([
  {
    id: 1,
    name: "自由之鹿",
    count: 6,
    money: 566,
    total_money: 5675,
    status: 0,
    room_num: "A11",
    p_num: "34、18、11",
    children: [
      {
        id: 11,
        name: "自由之鹿",
        count: 6,
        money: 566,
        total_money: 5675,
        status: 0,
        room_num: "A11",
        p_num: "34、18、11"
      },
      {
        id: 12,
        name: "自由之鹿",
        count: 6,
        money: 566,
        total_money: 5675,
        status: 0,
        room_num: "A11",
        p_num: "34、18、11"
      },
      {
        id: 13,
        name: "自由之鹿",
        count: 6,
        money: 566,
        total_money: 5675,
        status: 0,
        room_num: "A11",
        p_num: "34、18、11"
      }
    ]
  }
])
const drawerShow = ref(false)
const modalShow0 = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)
const modalShow8 = ref(false)
const modalShow9 = ref(false)
const modalShow10 = ref(false)

// 技师状态点击事件
const handleOnJishi = (item: any) => {
  jishiTitle.value = `技师：${item.number}`
  modalShow10.value = true
}
// 点击包厢
const handleOnRoom = (item: any) => {
  currentRoomTitle.value = `包厢：[${item.name}]`
  currentRoomStatus.value = item.status
  modalShow9.value = true
}
const handleTab = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const handleAction = (idx: number) => {
  switch (idx) {
    case 0:
      modalShow0.value = true
      break
    case 1:
      modalShow1.value = true
      break
    case 2:
      modalShow2.value = true
      break
    case 3:
      modalShow3.value = true
      break
    case 4:
      modalShow4.value = true
      break
    case 5:
      modalShow5.value = true
      break
    case 6:
      modalShow6.value = true
      break
    case 7:
      modalShow7.value = true
      break
    case 8:
      modalShow8.value = true
      break
    default:
      break
  }
}
const handleSettlement = () => {
  drawerShow.value = true
}
const jishiList = [
  {
    number: "520",
    status: 0,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 1,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 2,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 3,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 4,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 5,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 6,
    p: 0,
    d: 0
  },
  {
    number: "520",
    status: 7,
    p: 0,
    d: 0
  }
]
const status = [
  { label: "空闲", value: 0 },
  { label: "预约", value: 1 },
  { label: "有等钟", value: 2 },
  { label: "待上钟", value: 3 },
  { label: "服务中", value: 4 },
  { label: "超时", value: 5 },
  { label: "暂停", value: 6 },
  { label: "下班/请假", value: 7 }
]
const colors = ["#30d7d1", "#A16AEB", "#E19340", "#46B55E", "#6A6AEC", "#F25A5A", "#808a94", "#b8bdc3"]
const actionBtns = [
  { label: "会员办卡", value: 0 },
  { label: "挂账管理", value: 1 },
  { label: "退款审核", value: 2 },
  { label: "等钟列表", value: 3, badge: true },
  { label: "包厢监控", value: 4 },
  { label: "技师监控", value: 5 },
  { label: "包厢组合", value: 6 },
  { label: "预约管理", value: 7 },
  { label: "活动订单", value: 8 },
  { label: "一键提醒", value: 9 }
]
const currentStatus = (s: number) => {
  const target = status.find((e) => e.value === s)
  return target?.label
}
</script>
<style lang="scss" scoped>
.jishi-current-status {
  margin-bottom: 20px;
  .cur-item {
    font-size: 14px;
    margin-bottom: 16px;
    @extend .df;
    @extend .aic;
    gap: 10px;
    & > span {
      color: #666;
    }
    & > span:first-child {
      color: #333;
    }
  }
}
.room-action {
  @extend .df;
  gap: 16px;
  flex-wrap: wrap;
  button {
    width: 96px;
    margin-left: 0;
  }
}
.js-list {
  @extend .df;
  gap: 16px;
  flex-wrap: wrap;
  .jsc0 {
    background: rgba(#30d7d1, 0.6);
  }
  .jsc1 {
    background: rgba(#a16aeb, 0.6);
  }
  .jsc2 {
    background: rgba(#e19340, 0.6);
  }
  .jsc3 {
    background: rgba(#46b55e, 0.6);
  }
  .jsc4 {
    background: rgba(#6a6aec, 0.6);
  }
  .jsc5 {
    background: rgba(#f25a5a, 0.6);
  }
  .jsc6 {
    background: rgba(#808a94, 0.6);
  }
  .jsc7 {
    background: rgba(#b8bdc3, 0.6);
  }
  .js-box {
    width: 5.625rem;
    height: 5.625rem;
    border-radius: 10px;
    @extend .df;
    @extend .fdc;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      opacity: 0.9;
    }
    & > div:first-child {
      @extend .df;
      @extend .fdc;
      @extend .jcc;
      @extend .aic;
      font-weight: bold;
      line-height: 20px;
      color: #fff;
      font-size: 14px;
      flex: 1;
      height: 0;
      border-radius: 10px 10px 0 0;
    }
    & > div:last-child {
      height: 1.25rem;
      padding: 0 10px;
      @extend .df;
      @extend .aic;
      border-radius: 0 0 10px 10px;
      justify-content: space-between;
    }
  }
}
.box-card {
  border-radius: 10px;
}
.cate-box-card {
  :deep(.el-card__header) {
    // padding: 0;
  }
}
.room-list {
  @extend .df;
  gap: 16px;
  flex-wrap: wrap;
  :deep(.el-card__body) {
    @extend .df;
    @extend .fdc;
    padding: 10px;
  }
}
.room-box {
  border: none;
  cursor: pointer;
  width: 6.875rem;
  border-radius: 10px;
  &:hover {
    // background: linear-gradient(90deg, rgba(21, 33, 90, 0.8) 0%, #f26f99 100%);
    // :deep(.el-card__header) {
    //   background: linear-gradient(90deg, rgba(21, 33, 90, 0.8) 0%, #f26f99 100%);
    // }
  }
  .card-header {
    text-align: center;
  }
  :deep(.el-card__body) {
    height: 120px !important;
    background: #da2d6f;
    // background: linear-gradient(90deg, #f26f99 0%, #fae0e0 100%);
  }
  :deep(.el-card__header) {
    padding: 10px;
    border: none;
    // background: linear-gradient(90deg, rgba(21, 33, 90, 0.8) 0%, #f26f99 100%);
    background: rgba(#da2d6f, 0.8);
    // &:hover {
    //   background: linear-gradient(90deg, rgba(21, 33, 90, 0.8) 0%, #f26f99 100%);
    // }
  }
  .c-title {
    font-weight: bold;
    color: #fff;
  }
}
.spa-room {
  :deep(.el-card__body) {
    height: 120px !important;
    background: radial-gradient(at 10% 10%, #fd5b5d 0%, #dd2255 40%, #44000a 100%);
    // background: linear-gradient(90deg, #f26f99 0%, #fae0e0 100%);
  }
  :deep(.el-card__header) {
    padding: 10px;
    border: none;
    background: #44000a;
    // &:hover {
    //   background: linear-gradient(90deg, rgba(21, 33, 90, 0.8) 0%, #f26f99 100%);
    // }
  }
}
.card-header-title {
  font-weight: bold;
  font-size: 16px;
}
.zy-box-card {
  :deep(.el-card__header) {
    // color: #fff;
    font-weight: bold;
    font-size: 16px;
    // background: rgba(#da2d6f, 0.8);
  }
}
.spa-box-card {
  :deep(.el-card__header) {
    // color: #fff;
    font-weight: bold;
    font-size: 16px;
    // background: #44000a;
  }
}
:deep(.el-input-group__append) {
  padding: 0;
}
.home-page {
  // height: 100%;
  padding: 16px;
  @extend .df;
  @extend .fdc;
  gap: 16px;
  // background: radial-gradient(at 10% 10%, $m-color1 0%, $m-color2 40%, $m-color3 100%);
}
.search-box {
  @extend .df;
  @extend .aic;
  gap: 50px;
  :deep(.el-input__inner) {
    height: 40px;
  }
}
.action-box {
  @extend .df;
  @extend .aic;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}
.status-list {
  @extend .df;
  @extend .aic;
  gap: 20px;
  color: #fff;
  & > div {
    @extend .df;
    & > span:first-child {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }
  }
}
.my-btn-badge {
  position: absolute;
  top: -2px;
  right: 0;
}
.block-title {
  @extend .df;
  @extend .aic;
  @extend .jcsb;
  padding: 16px;
  border-bottom: 1px solid $m-color1;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: $m-color2;
}
.tcpc {
  color: #da2d6f;
}
.drawer-header-title {
  @extend .df;
  @extend .aic;
  gap: 10px;
}
.room-card-content {
  flex: 1;
  @extend .df;
  @extend .fdc;
  @extend .aic;
  @extend .jcc;
  color: #fff;
  .room-status-box {
    font-size: 20px;
    font-weight: bold;
  }
}
.pay-box {
  font-size: 14px;
  color: #fff;
  @extend .df;
  @extend .aic;
  @extend .jcc;
}
</style>
<style lang="scss">
.el-drawer-w .el-drawer__body {
  padding-top: 0px !important;
}
.el-drawer-w .el-drawer__footer {
  padding-top: 20px;
  border-top: 1px solid $m-color1;
}
.el-drawer-w .el-drawer__header {
  margin-top: 0px;
  padding: 16px;
  background: $m-color1;
  font-size: 16px;
  color: #fff;
}
.input-innerw100 .el-input-number {
  width: 100% !important;
}
.input-innerw100 .el-select {
  width: 100% !important;
}
.el-drawer__close:hover {
  color: #fff !important;
}
</style>
