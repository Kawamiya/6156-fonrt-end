import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Helloworld from "@/views/Helloworld";
import UserList from "@/views/UserList";
import UserProfile from "@/views/UserProfile";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import AddItem from "@/views/AddItem";
import AddUser from "@/views/AddUser";
import ItemInfo from "@/views/ItemInfo";
import ItemList from "@/views/ItemList";
import GoogleAuth from "@/components/GoogleAuth";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Helloworld
  },
  {
    path: '/user/list',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/profile/:id',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/item/add',
    name: 'AddItem',
    component: AddItem
  },
  {
    path: '/user/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/item/info/:itemID',
    name: 'ItemInfo',
    component: ItemInfo
  },
  {
    path: '/item/list',
    name: 'ItemList',
    component: ItemList
  },
  {
    path: '/auth/google/callback',
    name: 'GoogleAuth',
    component: GoogleAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
