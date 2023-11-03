import { createRouter, createWebHistory } from "vue-router";

/**
 * pages
 */
import ROUTES from "@/const/routes";

import ItemListPage from "@/component/page/ItemListPage.vue";
import ItemInModal from "@/component/modal/ItemInModal.vue";
import NewSkuPage from "@/component/page/NewSkuPage.vue";
import ItemOutModal from "@/component/modal/ItemOutModal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.ITEM.LIST.PATH,
      name: ROUTES.ITEM.LIST.NAME,
      component: ItemListPage,
      props: (route) => ({
        page: route.query.page === undefined ? 0 : route.query.page,
        size: route.query.size === undefined ? 1 : route.query.size,
        sort: route.query.sort === undefined ? "asc" : route.query.sort,
        query: route.query.query === undefined ? "" : route.query.query,
      }),

      children: [
        {
          path: ROUTES.ITEM.IN.PATH,
          name: ROUTES.ITEM.IN.NAME,
          props: true,
          components: { itemInModal: ItemInModal },
        },
        {
          path: ROUTES.ITEM.OUT.PATH,
          name: ROUTES.ITEM.OUT.NAME,
          props: true,
          components: { itemOutModal: ItemOutModal },
        },
      ],
    },
    {
      path: ROUTES.ITEM.NEW.PATH,
      name: ROUTES.ITEM.NEW.NAME,
      component: NewSkuPage,
    },
  ],
});

export default router;
