import { createRouter, createWebHistory } from "vue-router";
import SkillList from "../components/SkillList.vue";
import SkillCreate from "../components/SkillCreate.vue";

const routes = [
  {
    path: "/",
    name: "SkillList",
    component: SkillList,
  },
  {
    path: "/skill-list",
    name: "SkillList",
    component: SkillList,
  },
  {
    path: "/skill-list/:msg",
    name: "SkillUpdatedList",
    component: SkillList,
  },
  {
    path: "/skill-create",
    name: "SkillCreate",
    component: SkillCreate,
  },
  {
    path: "/skill-create/:pk",
    name: "SkillUpdate",
    component: SkillCreate,
  },
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
 })

export default router;
