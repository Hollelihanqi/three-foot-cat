<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
    </div>
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
    >
      <template #action="scope">
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">收银或充卡时隐藏</el-button>
        <!-- <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">修改</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button> -->
      </template>
    </BaseTable>
  </div>
  <BaseDialog v-model="modalShow" w="50%" title="添加支付方式">
    <el-form :model="store.queryParams" :rules="rules">
      <el-row :gutter="16">
        <el-col :span="24">
          <el-form-item label="计费类型">
            <el-input v-model="store.queryParams.name" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最低消费">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="费用封顶">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="宾客开房">
            <el-input v-model="store.queryParams.name" placeholder="" />
            <span>分钟内按</span>
            <el-input v-model="store.queryParams.name" placeholder="" />
            <span>元收取，之后按一下时间段计费。</span>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <div>设置计费时间段</div>
          <div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="宾客开房">
                  <el-time-picker
                    v-model="store.queryParams.value1"
                    is-range
                    range-separator="To"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="每">
                  <el-input v-model="store.queryParams.name" placeholder="" />
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="小时">
                  <el-input v-model="store.queryParams.name" placeholder="" />
                </el-form-item>
              </el-col>
              <el-col :span="5"> 元 </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <div>不足一个计费单位的部分</div>
          <div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="时间片">
                  <span>每</span>
                  <el-input v-model="store.queryParams.name" placeholder="" />
                  <span>分钟计费一次</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="">
                  <el-checkbox-group v-model="store.queryParams.type">
                    <el-checkbox label="第一个计费单位按全额收取" name="type" />
                    <el-checkbox label="不足一个时间片的按一个时间片收取" name="type" />
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import { useMemberListStore } from "@/store/modules/useMemberList"
const store = useMemberListStore()
const modalShow = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)
const rules = {}
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.setQueryParamsAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.setQueryParamsAction({ pageNum: 1, pageSize: num })
  }
}
// 查看
const handleDetail = (row: any) => {}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}
const handleClick = (idx: number) => {
  switch (idx) {
    case 0:
      modalShow.value = true
      break
    case 1:
      modalShow1.value = true
      break
    case 2:
      modalShow1.value = true
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
    default:
      break
  }
}
onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "棋牌室计费类型",
    slot: "number"
  },
  {
    label: "开房后多久开始计费（分钟）",
    prop: "systemName"
  },
  {
    label: "计费时间片（分钟）",
    prop: "systemCode"
  },
  {
    label: "不足计费单位的计费方法",
    prop: "name"
  },
  {
    label: "最低消费",
    prop: "code"
  },
  {
    label: "封顶消费",
    prop: "url"
  },
  {
    label: "操作",
    slot: "action"
  }
]
</script>

<style lang="scss" scoped>
.table-top-box {
  @extend .df;
  gap: 16px;
  // justify-content: flex-end;
  padding-bottom: 16px;
}
.table-box {
  flex: 1;
  height: 0;
  background: #fff;
  padding: 16px 16px 0 16px;
  @extend .df;
  @extend .fdc;
  .table-w {
    height: 0;
    flex: 1;
  }
}
.handle-action-cell {
  .el-button {
    min-width: auto;
  }
  .vhi {
    transform-origin: center;
    transform: rotate(90deg);
  }
}
</style>
