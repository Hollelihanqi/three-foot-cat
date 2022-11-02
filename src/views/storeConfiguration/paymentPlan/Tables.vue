<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
      <el-button type="primary" @click="handleClick(1)">包厢类型设置</el-button>
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
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">查看</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">修改</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </BaseTable>
  </div>
  <BaseDialog v-model="modalShow" w="50%" title="新会员办卡">
    <el-form :model="store.queryParams" :rules="rules">
      <el-row :gutter="16">
        <el-col :span="20">
          <el-form-item label="方案名称">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="启用折扣率">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <BaseTable
            :columns="columns1"
            :table-data="store.list"
            :total="store.listTotal"
            :current-page="store.queryParams.pageNum"
            :page-size="store.queryParams.pageSize"
            :handle-change="handleTableChange"
          >
            <template #discount="scope">
              <el-form-item>
                <el-input type="number" v-model="store.queryParams.name" />
              </el-form-item>
            </template>
            <template #activePrice="scope">
              <el-form-item>
                <el-input type="number" v-model="store.queryParams.name" />
              </el-form-item>
            </template>
          </BaseTable>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="角色权限（勾选后该角色的账号拥有此方案权限，未勾选使用此折扣方案需授权）">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经理">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收银">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
  <BaseDialog v-model="modalShow1" w="50%" title="新会员办卡">
    <el-form :model="store.queryParams" :rules="rules">
      <el-row>
        <el-col :span="4">
          <el-form-item label="是否启用会员日">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="20">
          <el-form-item label="折扣方案">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <span>选择每月会员日</span>
          <el-divider />
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :span="3" v-for="item in days">
          <el-form-item :label="item">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <span>选择每周会员日</span>
          <el-divider />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-checkbox label="星期一" v-model="store.queryParams.checked" size="large" />
            <el-checkbox label="星期二" v-model="store.queryParams.checked" size="large" />
            <el-checkbox label="星期三" v-model="store.queryParams.checked" size="large" />
            <el-checkbox label="星期四" v-model="store.queryParams.checked" size="large" />
            <el-checkbox label="星期五" v-model="store.queryParams.checked" size="large" />
            <el-checkbox label="星期六" v-model="store.queryParams.checked" size="large" />
            <el-checkbox label="星期日" v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <span>选择享受会员日折扣的会员卡</span>
          <el-form-item label="所有会员卡">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
          <el-divider />
        </el-col>
      </el-row>
      <el-row>
        <!-- <el-col :span="6">
          <el-form-item label="所有会员卡">
            <el-checkbox v-model="store.queryParams.checked" size="large" />
          </el-form-item>
        </el-col> -->
      </el-row>
    </el-form>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import { useMemberListStore } from "@/store/modules/useMemberList"
import moment from "moment"
const days = moment().daysInMonth()
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
    label: "方案名称",
    slot: "number"
  },
  {
    label: "方案类型",
    prop: "systemName"
  },
  {
    label: "操作",
    slot: "action"
  }
]
const columns1 = [
  {
    label: "项目",
    slot: "number"
  },
  {
    label: "折扣",
    slot: "discount"
  },
  {
    label: "活动价",
    slot: "activePrice"
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
