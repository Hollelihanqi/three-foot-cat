<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
      <el-button type="primary" @click="handleClick(1)">浴资参数设置</el-button>
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
      <el-row>
        <el-col :span="12">
          <el-form-item label="手牌号码">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手牌ID">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="顺序号">
            <el-input v-model="store.queryParams.name" placeholder="" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
  <BaseDialog v-model="modalShow1" w="50%" title="浴资参数设置">
    <el-form :model="store.queryParams" :rules="rules">
      <el-row>
        <el-col :span="6">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>自动计算浴资</span>
              </div>
            </template>
            <el-form-item label="开启后，手牌开牌后，自动添加浴资项目">
              <el-switch v-model="store.queryParams.delivery" />
            </el-form-item>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>浴资项目</span>
              </div>
            </template>
            <el-form-item label="自动添加的浴资项目">
              <el-select v-model="store.queryParams.name" placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>计算周期</span>
              </div>
            </template>
            <el-form-item label="浴资计算周期，单位分钟">
              <el-input type="number" v-model="store.queryParams.name" />
            </el-form-item>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>延迟添加浴资</span>
              </div>
            </template>
            <el-form-item label="开牌后延迟">
              <el-input type="number" v-model="store.queryParams.name" />
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="增加过夜费的时间点">
            <el-time-picker v-model="store.queryParams.value1" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="增加的过夜费项目">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
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
            @selection-change="handleSelectionChange"
          >
            <template #header>
              <div>需要免商品的项目</div>
            </template>
          </BaseTable>
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

interface User {
  date: string
  name: string
  address: string
}

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
const multipleSelection = ref<User[]>([])
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
// 多选
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
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
const columns1 = [
  {
    type: "selection"
  },
  {
    label: "类别",
    slot: "number"
  },
  {
    label: "项目名称",
    prop: "systemName"
  },
  {
    label: "单价",
    prop: "systemCode"
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
