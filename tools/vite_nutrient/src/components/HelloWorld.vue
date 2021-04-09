<template>
	<div class="alert">
		<h1>{{ data.title }}</h1>
		<p class="">{{data.count}}</p>
	</div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
	//name: 'HelloWorld',
  props: {
		count: Number,
    title: String
  },
  setup(props) {
    const data = reactive({
      title: "test",
			count: 0
		});
		setInterval(()=>{
			data.count++;
		}, 1000);
		return {data};
	}
}
</script>
