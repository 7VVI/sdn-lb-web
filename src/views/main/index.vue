<template>
  <div class="main">
    <div class="context">
      <div class="card">
        <Card :device="hostInfo" :style="{'background-color':'rgba(81, 176, 234,0.8)'}"></Card>
        <Card :device="switchInfo" :style="{'background-color':'rgba(132, 216, 182,0.8)'}"></Card>
        <Card :device="controllerInfo" :style="{'background-color':'rgba(113, 90, 233,0.8)'}"></Card>
      </div>
      <div class="table_trend">
        <div id="container"></div>
      </div>
      <div class="warning_info">
        <div class="warning_info_left">
          <h4>最新告警消息</h4>
          <a-table :columns="columns" :data-source="data"   :scroll="{ y: tableHeight }" size="middle" />
        </div>
        <div class="warning_info_right">
            <div ref="chart" class="chart"></div>
        </div>
      </div>
    </div>

    <div class="context_right">
     <div class="service_time">

     </div>
      <div class="context_right_center">
        时间
      </div>
      <div class="context_right_footer">
        footer
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,provide, reactive, computed,watch, onMounted,onBeforeMount } from "vue";
import * as echarts from 'echarts';
import { Area } from '@antv/g2plot';
import ServiceTime from "@/components/system/ServiceTime.vue";


declare var require :any;

let hostInfo:API.device=reactive({
  deviceName:"主机",
  deviceNum:12,
  deviceImgSrc:require('@/assets/img/PC.svg'),
})

let switchInfo:API.device=reactive({
  deviceName:"交换机",
  deviceNum:4,
  deviceImgSrc:require('@/assets/img/ovs.svg'),
})

let controllerInfo:API.device=reactive({
  deviceName:"控制器",
  deviceNum:1,
  deviceImgSrc:require('@/assets/img/SDN.svg'),
})
//----------------设备占比-----------------

// 获取 DOM 节点的引用
const chart =  ref<HTMLDivElement | null>(null);


// 初始化 Echarts 图表
const initChart = (container: HTMLElement) => {
  const myChart = echarts.init(container);

  // 模拟南丁格尔玫瑰图的数据
  const data = [
    { value: 30, name: '主机' },
    { value: 28, name: 'Ovs交换机' },
    { value: 26, name: '控制器' },
  ]

  // 配置选项
  const option = {
    title: {
      text: '设备类别占比',
      subtext: '',
      left: 'left'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      // top: '5%',
      left: 'center',
      top: 'bottom',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '设备',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '主机' },
          { value: 735, name: 'Ovs交换机' },
          { value: 580, name: '控制器' },
        ]
      }
    ]
  };

  // 使用配置选项显示图表
  myChart.setOption(option);
};


onMounted(() => {
  if (chart.value) {
    initChart(chart.value);
  }
})

//---------------趋势表-----------------------

fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
    .then((res) => res.json())
    .then((data) => {
      const area = new Area('container', {
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
          range: [0, 1],
          tickCount: 5,
        },
        areaStyle: () => {
          return {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          };
        },
      });
      area.render();
    });

//----------------告警表--------------------

const columns = [
  { title: '序号', dataIndex: 'number' },
  { title: '告警内容', dataIndex: 'content' },
  { title: '时间', dataIndex: 'time' },
  { title: '级别', dataIndex: 'level' },
];
const data = [
  {
    key: '1',
    number: '1',
    content: "流量过载",
    time: '2023-2-4',
    level:"严重告警"
  },
  {
    key: '2',
    number: '2',
    content: "流量过载",
    time: '2023-2-4',
    level:"告警"
  },
  {
    key: '3',
    number: '3',
    content: "流量过载",
    time: '2023-2-4',
    level: "普通"
  },
  {
    key: '4',
    number: '2',
    content: "流量过载",
    time: '2023-2-4',
    level:"告警"
  },
  {
    key: '5',
    number: '3',
    content: "流量过载",
    time: '2023-2-4',
    level: "普通"
  }
];

let   tableHeight= 128 // 表格总高度为四行的高度，即 32 x 4 = 128

</script>

<style lang="less" scoped>
.main {
  display: flex;
  margin-top: 20px;
}

.context {
  height: 100%;
  display: flex;
  flex: 3.5;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  background-color: rgb(240, 242, 245);
}

.context_right {
  background-color: cornflowerblue;
  flex: 1  1 auto;
  //height: 800px;
}

.table_trend {
  //background-color: #ad45e3;
  background-color: white;
  height: 400px;
  margin: 20px 20px 0 0;
  border: 0px solid gray;
  outline: 2px solid #ccc;
  border-radius: 1%;
  box-shadow: 0 0 0 6px #f5f1f1;
}

.card {
  display: flex;
  justify-content: space-between;
}

.warning_info {
  height: 300px;
  display: flex;
  margin:20px 20px 0 0;
}

.warning_info_left {
  flex: 1;
  background-color: white;
  margin-right: 10px;
  border: 0px solid gray;
  outline: 2px solid #ccc;
  border-radius: 1%;
  box-shadow: 0 0 0 6px #f5f1f1;
  padding: 10px;
}

.warning_info_right {
  flex: 1;
  background-color: white;
  margin-left: 10px;
  padding: 5px 0 10px 0;
  border: 0px solid gray;
  outline: 2px solid #ccc;
  border-radius: 1%;
  box-shadow: 0 0 0 6px #f5f1f1;
  padding: 10px;
}
.chart{
  width: 100%;
  height: 100%;
}

#components-table-demo-size h4 {
  //margin-bottom: 16px;
  margin: 16px;
}

.service_time{
  background-color: #b490ca;
  height: 250px;
  margin-bottom: 20px;
}

.context_right_center{
  background-color: #2af598;
  height: 300px;
  margin-bottom: 20px;
}

.context_right_footer{
  background-color: aqua;
  height: 250px;
}
</style>