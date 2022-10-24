<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">打印报表</el-button>
      <el-button type="primary" @click="handlePrint">导出报表</el-button>
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
      </template>
    </BaseTable>
  </div>
  <BaseDialog v-model="modalShow" w="50%" title="新会员办卡">
    <el-form :model="store.queryParams" :rules="rules">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="姓名">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号码">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="生日">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
        <el-col :span="12">
          <el-form-item label="卡类型">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体卡号">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体卡内码">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="消费验证方式">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="不开启验证" value="0" />
              <el-option label="开启短信验证" value="1" />
              <el-option label="开启密码验证" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否接收短信通知">
            <el-select v-model="store.queryParams.name" placeholder="请选择">
              <el-option label="接收" value="0" />
              <el-option label="不接收" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="推荐人">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实收金额">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="支付方式">
            <el-input v-model="store.queryParams.name" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
  <BaseDialog v-model="modalShow1" w="50%" title="新会员办卡" hideFooter>
    <el-form :model="store.queryParams" :rules="rules">
      <el-row :gutter="16">
        <el-col :span="18">
          <el-form-item>
            <el-input v-model="store.queryParams.name" placeholder="请输入会员手机号码/姓名/实体卡号/内码Id" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
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

// 导出报表
const handleExport = () => {}

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
    label: "工号",
    prop: "systemName"
  },
  {
    label: "姓名",
    slot: "number"
  },
  {
    label: "类型",
    prop: "systemCode"
  },
  {
    label: "统计天数",
    prop: "name"
  },
  {
    label: "上班打卡次数",
    prop: "code"
  },
  {
    label: "下班打卡次数",
    prop: "url"
  },
  {
    label: "迟到次数",
    prop: "url"
  },
  {
    label: "迟到总时长(分钟)",
    slot: "action"
  },
  {
    label: "早退次数",
    slot: "action"
  },
  {
    label: "早退总时长(分钟)",
    slot: "action"
  },
  {
    label: "迟到和早退总次数",
    slot: "action"
  },
  {
    label: "迟到和早退总时长(分钟)",
    slot: "action"
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
