<template class="seller-system-header">
  <v-app-bar color="primary" prominent :elevation="2">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>SHARP.INVENTORY</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" :permanent="true">
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        @click="router.push({ name: item.routeName })"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";

import ROUTES from "@/const/routes";
import {useRouter} from "vue-router";

const router = useRouter();

const drawer = ref(true);
const group = ref(false);
const items = ref([
  {
    title: "아이템 조회",
    routeName: ROUTES.ITEM.LIST.NAME,
  },
]);

watch(group, () => {
  this.drawer = false;
});
</script>
