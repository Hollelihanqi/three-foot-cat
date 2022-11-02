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
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">查看</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">修改</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </BaseTable>
  </div>
  <BaseDialog v-model="modalShow" w="50%" title="添加">
    <el-form :model="store.queryParams" :rules="rules">
      <el-row :gutter="16">
        <el-col :span="24">
          <el-tabs v-model="activeName">
            <el-tab-pane label="项目基础信息" name="0" />
            <el-tab-pane label="项目技师" name="1" />
            <el-tab-pane label="项目折扣方案价格" name="2" />
            <el-tab-pane label="项目展示" name="3" />
          </el-tabs>
        </el-col>
      </el-row>
      <el-row v-if="activeName === '0'">
        <el-col :span="12">
          <el-form-item label="服务名称">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="加钟价">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="服务项目类型">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排钟提成">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="顺序号">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="点钟提成">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="一个钟时长（分钟）">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="括钟提成">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="加钟时长（分钟）">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="加钟提成">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="服务所属部门">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="买钟提成">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目是否参与技师排钟系统">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排钟推荐费">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="该项目为小项目时是否动牌">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="点钟推荐费">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="门市价">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="加钟推荐费">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="activeName === '1'">
        <el-col :span="24">
          <span>选择做此项目的技师</span>
          <el-checkbox v-model="store.queryParams.checked" size="large" />
        </el-col>
        <el-col>
          <!-- <el-checkbox-group v-model="checkboxGroup1" size="large">
            <el-checkbox-button v-for="city in cities" :key="city" :label="city">
              {{ city }}
            </el-checkbox-button>
          </el-checkbox-group> -->
        </el-col>
      </el-row>
      <el-row v-if="activeName === '2'" />
      <el-row v-if="activeName === '3'">
        <el-col :span="4">
          <div class="p-item">
            <img src="" alt="" />
            <el-checkbox v-model="store.queryParams.checked" size="large" />
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
const activeName = ref("0")
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
    label: "序号",
    slot: "number"
  },
  {
    label: "所属部门",
    prop: "systemName"
  },
  {
    label: "项目类别",
    prop: "systemCode"
  },
  {
    label: "项目名称",
    prop: "systemCode"
  },
  {
    label: "门市价（元）",
    prop: "systemCode"
  },
  {
    label: "一个钟时长（分钟）",
    prop: "systemCode"
  },
  {
    label: "顺序",
    prop: "systemCode"
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
.p-item {
  @extend .df;
  @extend .fdc;
  @extend .aic;
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
