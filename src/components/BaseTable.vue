<template>
  <div class="table-w" :class="paginationFixed ? 'table-bt60' : ''">
    <el-table :data="data" style="width: 100%" class="my-table" header-cell-class-name="my-header-cell" v-bind="$attrs">
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column v-if="!item.slot && !item.hideCell" show-overflow-tooltip v-bind="item" />
        <el-table-column v-if="item.slot && !item.hideCell" show-overflow-tooltip v-bind="item">
          <template #default="scope">
            <slot :name="item.slot" :index="scope.$index" :row="scope.row" />
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="!paginationHide"
      class="my-pagination"
      :class="paginationFixed ? 'pagination-box-fixed' : ''"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @size-change="handleSizeChange"
      @current-change="handleTableChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"
export interface ColumnsItemProps {
  prop?: string
  [propsName: string]: any
}

export default defineComponent({
  directives: {
    loading: {
      // 指令的定义
      mounted(el: HTMLElement) {
        console.log(el.querySelector(".el-table__empty-text"))
      }
    },
    hoverTip: {
      // 指令的定义
      mounted(el: HTMLElement) {
        console.log(el)
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    columns: {
      type: Array as PropType<ColumnsItemProps[]>,
      default: () => [],
      required: true
    },
    paginationHide: {
      // 是否隐藏分页组件
      type: Boolean,
      default: false
    },
    paginationFixed: {
      // 分页组件是否固定在底部
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPage: {
      type: Number,
      default: 1
    },
    handleChange: {
      type: Function,
      default: null
    }
  },

  setup(props) {
    const handleTableChange = (num: number) => {
      if (props.handleChange && typeof props.handleChange === "function") {
        props.handleChange("page", num)
      }
    }
    const handleSizeChange = (val: number): void => {
      if (props.handleChange && typeof props.handleChange === "function") {
        props.handleChange("size", val)
      }
    }

    return {
      handleTableChange,
      handleSizeChange
    }
  }
})
</script>
<style lang="scss" scoped>
.table-w {
  height: 100%;
  @extend .df;
  @extend .fdc;
}
.my-table {
  flex: 1;
}
.table-w :deep(.my-header-cell) {
  background: #f7f8fa !important;
  .cell {
    color: #333;
  }
}
.my-table::before {
  display: none;
}
:deep(.el-table__fixed::before) {
  display: none;
}

.my-notooltip-text {
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

// 分页
.my-pagination {
  padding: 16px;
  @extend .df;
  justify-content: flex-end;
}
.my-pagination :deep(.el-pagination__jump) {
  margin-left: 0;
}
:deep(.el-input__inner) {
  height: 32px !important;
}
:deep(.el-pager li) {
  width: auto !important;
  min-width: 32px !important;
}
// :deep(.btn-quicknext + li.number) {
//   display: none;
// }
:deep(.el-input__inner:focus) {
  // border-color: $important-color !important;
}
.table-w :deep(.el-pager .active) {
  // background: $important-color !important;
  // border-color: $important-color !important;
  color: #fff !important;
  &:hover {
    color: #fff !important;
  }
}
.table-w :deep(.btn-prev),
.table-w :deep(.btn-next),
.table-w :deep(.el-pager li) {
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #dcdee0;
  padding: 0;
  margin: 0;
  margin-right: 4px;
  &:hover {
    // color: $important-color !important;
  }
}

.pagination-box-fixed {
  position: fixed;
  bottom: 41px;
  right: 8px;
  width: calc(100% - 224px);
  background: rgba(234, 236, 251);
  z-index: 666;
  padding-top: 10px;
  padding-bottom: 10px;
}
.table-bt60 {
  padding-bottom: 55px;
}

:deep(.stext-overflow-hide .cell) {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
