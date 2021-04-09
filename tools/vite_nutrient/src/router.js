import {createRouter, createWebHistory} from 'vue-router'
/*
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'
*/
import Home from './components/home.vue'
import HelloJSX from './components/HelloJSX.jsx'

//cd tools/vite_nutrient
// npm install vue-router@next

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		/*{
			path: '/',
			name: 'index',
			component: HelloWorld,
		},
		{
			path: '/jsx',
			name: 'jsx',
			component: HelloJSX
		}*/
		{
			path: '/',
			name: 'home',
			component: Home
		},

	],
})