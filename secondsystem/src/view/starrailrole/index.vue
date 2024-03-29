<template>
  <div class="search">
    <a-card class="card">
    <div class="title">星穹铁道数据查询</div>
    <br>
      <a-input-search
        v-model:value="value"
        placeholder="请输入您的uid"
        enter-button
        @search="onSearch"
      />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import {starrailApi} from "../../api/statrole"
const value =ref('');
const store = useStore();
const onSearch = () => {
  starrailApi(value.value).then(response => {
    // 处理响应
    console.log(response);
    store.commit('setResponse',response)
  }).catch(error => {
    // 错误处理
    console.log(error);
  });
}
</script>

<style scoped>
.search{
    display: flex;
    justify-content: center;
}
.card{
    width:80%;
    margin-top: 1%;
}
.title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    text-align: center;
}
</style>
