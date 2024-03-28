<template>
    <div class="menu">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
        <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
            :inline-collapsed="state.collapsed" :items="items" @select="handleSelect" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons-vue";

// 在 setup 函数中使用 Vuex 的 store
const store = useStore();

const handleSelect = ({ key }: { key: string }) => {
  store.commit('updatePage', key);
};
const state = reactive({
    collapsed: false,
    selectedKeys: ["1"],
    openKeys: ["sub1"],
    preOpenKeys: ["sub1"],
});
const items = reactive([
    {
        key: "1",
        label: "原神文本搜索",
        title: "原神文本搜索",
    },
    {
        key: "2",
        label: "星铁文本搜索",
        title: "星铁文本搜索",
    },
    {
        key: "sub1",
        label: "游戏区",
        title: "游戏区",
        children: [
            {
                key: "3",
                label: "小游戏 1",
                title: "小游戏 1",
            },
            {
                key: "4",
                label: "小游戏 2",
                title: "小游戏 2",
            },
            // 根据你的需求添加更多的小游戏
        ],
    },
    {
        key: "5",
        label: "记事本",
        title: "记事本",
    },
    {
        key: "6",
        label: "日程表",
        title: "日程表",
    },
    {
        key: "7",
        label: "个人中心",
        title: "个人中心",
    },
    {
        key: "8",
        label: "留言区",
        title: "留言区",
    },
]);
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    }
);
const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
    state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>

<style scoped></style>
