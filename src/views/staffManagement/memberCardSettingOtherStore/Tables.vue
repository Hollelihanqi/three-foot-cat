<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleCreate">本店会员卡在他店使用申请</el-button>
      <el-radio-group v-model="memberSType">
        <el-radio-button label="0">本店会员卡</el-radio-button>
        <el-radio-button label="1">他店会员卡</el-radio-button>
      </el-radio-group>
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
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">编辑</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
        <i class="el-icon-minus vhi" />
      </template>
    </BaseTable>
  </div>
  <BaseDialog v-model="modalShow" w="36%" title="新会员办卡">
    <el-form :model="store.queryParams">
      <el-row :gutter="16">
        <el-col :span="24">
          <el-form-item label="会员卡选择">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="22">
          <el-form-item label="店铺查询">
            <el-input v-model="store.queryParams.name" placeholder="输入店铺名称查询" />
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseDialog from "@/components/BaseDialog.vue"
import BaseTable from "@/components/BaseTable.vue"
import { useReserveOrderStore } from "@/store/modules/useReserveOrder"
const store = useReserveOrderStore()
const memberSType = ref("0")
const modalShow = ref(false)
// 创建
const handleCreate = () => {
  modalShow.value = true
}

// 打印报表
const handlePrint = () => {}
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.setQueryParamsAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.setQueryParamsAction({ pageNum: 1, pageSize: num })
  }
}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "序号",
    slot: "number"
  },
  {
    label: "会员卡名称",
    slot: "number"
  },
  {
    label: "所属店铺",
    prop: "systemName"
  },
  {
    label: "使用店铺",
    prop: "systemCode"
  },
  {
    label: "折扣方案",
    prop: "name"
  },
  {
    label: "状态",
    prop: "name"
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
