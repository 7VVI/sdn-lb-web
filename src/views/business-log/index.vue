<template>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column,record }">
      <template v-if="column.key === 'action'">
        <a>Delete</a>
      </template>
      <template v-if="column.key === 'time'">
        <span>
          <a-tag
              color="cyan"
          >
               {{ record.time }}
          </a-tag>
        </span>
      </template> <template v-else-if="column.key === 'type'">
        <span>
          <a-tag
              color="green"
          >
            {{ record.type }}
          </a-tag>
        </span>
    </template>

    </template>
    <template #expandedRowRender="{ record }">
      <p style="margin: 0">
        {{ record.description }}
      </p>
    </template>
  </a-table>
</template>
<script setup lang="ts">

const columns = [
  { title: '用户名', dataIndex: 'name', key: 'name', fixed: true },
  { title: 'IP', dataIndex: 'IP', key: 'age' },
  { title: 'IP来源', dataIndex: 'address', key: 'address' },
  { title: '用户操作', dataIndex: 'type', key: 'type' },
  { title: '浏览器', dataIndex: 'browser', key: 'browser' },
  { title: '耗时', dataIndex: 'time', key: 'time' },
  { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
  { title: 'Action', key: 'action' },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    IP: "22.35.6.32",
    address: 'New York No. 1 Lake Park',
    text:"用户登录",
    browser:"chrome",
    time:"123mm",
    createTime:"2022-11-18 10:10:33",
    type:"用户登录",
    description: '用户登录',
  },
  {
    key: 2,
    name: 'John Brown',
    IP: "22.35.6.32",
    address: 'New York No. 1 Lake Park',
    text:"用户登录",
    browser:"chrome",
    time:"123mm",
    createTime:"2022-11-18 10:10:33",
    type:"用户登录",
    description: '用户登录',
  },
  {
    key: 3,
    name: 'John Brown',
    IP: "22.35.6.32",
    address: 'New York No. 1 Lake Park',
    text:"用户登录",
    browser:"chrome",
    time:"123mm",
    createTime:"2022-11-18 10:10:33",
    type:"用户登录",
    description: '用户登录',
  },
];

</script>

