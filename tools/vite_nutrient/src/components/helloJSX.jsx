import {ref, reactive} from 'vue'

export default {
	name: 'HelloJSX',
	props: {
		title: String,
		num: Number
	},
	setup(props) {
		const data = reactive({
			title: 'HelloJSX',
			message: 'this is JSX sample message',
		});
		console.log(props, data);
		return ()=>(
			<div class="alert alert-primary">
				<h2>{data.title}</h2>
				<p>{data.message}</p>
			</div>
		);
	}
}