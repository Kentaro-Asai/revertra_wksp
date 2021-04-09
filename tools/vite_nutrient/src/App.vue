<template>
	<!--<img alt="Vue logo" src="./assets/logo.png" />
	<div>
		<router-link to="/">Go to top</router-link>
		<router-link to="/jsx">go to jsx</router-link>
	</div>-->
	<router-view></router-view>
	<!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
	<!-- <HelloJSX title="hoge" message="i am first message" /> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import HelloJSX from './components/helloJSX.jsx'

export default {
	name: 'app',
	created() {
		console.log('**** App Created! ****');
	},
	mounted() {
		console.log("---- App Mounted! ----");
		//console.log(nutrient_table);
	},
	data() {
		return {
			title: 'Router'
		}
	}
	/*components: {
	HelloWorld
	//HelloJSX
	}*/
}

</script>
