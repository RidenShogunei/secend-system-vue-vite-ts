<template>
  <div class="genshin">
    <a-card class="search">
      <div class="title">原神剧情文本搜索（初步阶段）</div>
      <div>
        <a-input-search
          class="search-input"
          v-model:value="value"
          placeholder="input search text"
          enter-button
          @search="onSearch"
        />
      </div>
      <div>
        <a-select
          v-model:value="language"
          class="langSelect"
          placeholder="Select a language"
        >
          <a-select-option value="en">English</a-select-option>
          <a-select-option value="zh">中文</a-select-option>
        </a-select>
      </div>
    </a-card>
    <a-card class="respond">
      <a-list size="large" bordered :data-source="currentData">
        <template #renderItem="{ item }">
          <a-list-item>{{ item }}</a-list-item>
        </template>
      </a-list>
      <br />
      <a-pagination
        v-model:current="current"
        :total="totalPages"
        @change="onChange"
      />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { genshinApi } from "../../api/genshin.ts";
const value = ref<string>("");
const language = ref<string>("");
const current = ref(1);
// 创建响应式数据
// 初始化参数为一个空对象
const params = ref({});
const itemsPerPage = 10;
const totalPages = ref(0);
const allData = ref<string[]>([]);
const currentData = computed(() => {
  // 计算当前页的数据开始和结束的索引
  const start = (current.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  // 从 allData 中取出对应的部分
  return allData.value.slice(start, end);
});
const callApi = async () => {
  const response = await genshinApi(params.value);
  console.log(response);
  if (
    Array.isArray(response) &&
    response.every((item) => typeof item === "string")
  ) {
    allData.value = response;
    totalPages.value = Math.ceil(response.length / itemsPerPage);
  } else {
    console.error("API response is not a string array");
  }
};
const onChange = (page: number) => {
  current.value = page;
};
const onSearch = (searchValue: string) => {
  // 更新 params 的值，加入了语言选择
  params.value = { search: searchValue, lang: language.value };
  callApi();
};
</script>

<style scoped>
.genshin {
  margin-top: 4%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.search {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 50%;
  margin-top: 2%;
}

.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  margin-bottom: 2%;
  text-align: center;
}

.search-input {
  margin-bottom: 1%;
  width: 300px;
}

.langSelect {
  width: 120px;
}

.respond {
  width: 50%;
  margin-top: 2%;
}
</style>
