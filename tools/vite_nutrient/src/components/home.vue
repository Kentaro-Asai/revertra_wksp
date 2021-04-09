<template>
	<div class="nutrient-table">
		<h5>本日の摂取量 / 推奨摂取量<small>Harris-Benedict式</small></h5>
		<ul>
			<li v-for="(val, k) in standard_nutrients" :key="k">
				<h6>{{ val.label }}</h6>
				<p><span id="intake-{{val.category}}">0</span> / <span id="need-{{val.category}}">0</span> {{val.unit}}</p>
			</li>
		</ul>
		<dl>
			<dt>カロリー</dt><dd><span id="intake-calory">0</span> / <span id="need-calory">0</span> kcal</dd>
			<dt>タンパク質</dt><dd><span id="intake-protein">0</span> / <span id="need-protein">0</span> g</dd>
			<dt>脂質</dt><dd><span id="intake-oil">0</span> / <span id="need-oil">0</span> g</dd>
			<dt>食物繊維</dt><dd><span id="intake-fiber">0</span> / <span id="need-fiber">0</span> g以上</dd>
			<dt>ビタミンA</dt><dd><span id="intake-vitaminA">0</span> / <span id="need-vitaminA">0</span> μgRAE</dd>
			<dt>ビタミンB1</dt><dd><span id="intake-vitaminB1">0</span> / <span id="need-vitaminB1">0</span> mg</dd>
			<dt>ビタミンB2</dt><dd><span id="intake-vitaminB2">0</span> / <span id="need-vitaminB2">0</span> mg</dd>
			<dt>ナイアシン</dt><dd><span id="intake-niacin">0</span> / <span id="need-niacin">0</span> mgNE</dd>
			<dt>ビタミンB6</dt><dd><span id="intake-vitaminB6">0</span> / <span id="need-vitaminB6">0</span> mg</dd>
			<dt>ビタミンB12</dt><dd><span id="intake-vitaminB12">0</span> / <span id="need-vitaminB12">0</span> μg</dd>
			<dt>葉酸</dt><dd><span id="intake-folic_acid">0</span> / <span id="need-folic_acid">0</span> μg</dd>
			<dt>パントテン酸</dt><dd><span id="intake-pantothenic_acid">0</span> / <span id="need-pantothenic_acid">0</span> mg</dd>
			<dt>ビオチン</dt><dd><span id="intake-biotin">0</span> / <span id="need-biotin">0</span> μg</dd>
			<dt>ビタミンC</dt><dd><span id="intake-vitaminC">0</span> / <span id="need-vitaminC">0</span> mg</dd>
			<dt>ビタミンD</dt><dd><span id="intake-vitaminD">0</span> / <span id="need-vitaminD">0</span> μg</dd>
			<dt>ビタミンE</dt><dd><span id="intake-vitaminE">0</span> / <span id="need-vitaminE">0</span> mg</dd>
			<dt>ビタミンK</dt><dd><span id="intake-vitaminK">0</span> / <span id="need-vitaminK">0</span> μg</dd>
			<dt>食塩相当量</dt><dd><span id="intake-Na">0</span> / <span id="need-Na">0</span> g</dd>
			<dt>カリウム</dt><dd><span id="intake-K">0</span> / <span id="need-K">0</span> mg</dd>
			<dt>カルシウム</dt><dd><span id="intake-Ca">0</span> / <span id="need-Ca">0</span> mg</dd>
			<dt>マグネシウム</dt><dd><span id="intake-Mg">0</span> / <span id="need-Mg">0</span> mg</dd>
			<dt>リン</dt><dd><span id="intake-P">0</span> / <span id="need-P">0</span> mg</dd>
			<dt>鉄</dt><dd><span id="intake-Fe">0</span> / <span id="need-Fe">0</span> mg</dd>
			<dt>亜鉛</dt><dd><span id="intake-Zn">0</span> / <span id="need-Zn">0</span> mg</dd>
			<dt>銅</dt><dd><span id="intake-Cu">0</span> / <span id="need-Cu">0</span> mg</dd>
			<dt>モリブデン</dt><dd><span id="intake-Mo">0</span> / <span id="need-Mo">0</span> μg</dd>
			<dt>マンガン</dt><dd><span id="intake-Mn">0</span> / <span id="need-Mn">0</span> mg</dd>
			<dt>セレン</dt><dd><span id="intake-Se">0</span> / <span id="need-Se">0</span> μg</dd>
			<dt>ヨウ素</dt><dd><span id="intake-I">0</span> / <span id="need-I">0</span> μg</dd>
			<dt>クロム</dt><dd><span id="intake-Cr">0</span> / <span id="need-Cr">0</span> μg</dd>
			<!-- 必須アミノ酸 -->
			<dt>トリプトファン</dt><dd><span id="intake-Trp">0</span> / <span id="need-Trp">0</span> mg</dd>
			<dt>リジン</dt><dd><span id="intake-Lys">0</span> / <span id="need-Lys">0</span> mg</dd>
			<dt>メチオニン</dt><dd><span id="intake-Met">0</span> / <span id="need-Met">0</span> mg</dd>
			<dt>フェニルアラニン</dt><dd><span id="intake-Phe">0</span> / <span id="need-Phe">0</span> mg</dd>
			<dt>スレオニン</dt><dd><span id="intake-Thr">0</span> / <span id="need-Thr">0</span> mg</dd>
			<dt>バリン</dt><dd><span id="intake-Val">0</span> / <span id="need-Val">0</span> mg</dd>
			<dt>ロイシン</dt><dd><span id="intake-Leu">0</span> / <span id="need-Leu">0</span> mg</dd>
			<dt>イソロイシン</dt><dd><span id="intake-Ile">0</span> / <span id="need-Ile">0</span> mg</dd>
			<dt>ヒスチジン</dt><dd><span id="intake-His">0</span> / <span id="need-His">0</span> mg</dd>
		</dl>
	</div>
	<!--<div id="select-menu">
		<p>メニューを選択することで本日の摂取量の項目に栄養分が加算されます。</p>
		<h4>あなたの朝食</h4>
		<ul id="morning-list">
			<li><select class="morning-menu"><option>- メニューが登録されていません -</option></select></li>
		</ul>
		<h4>あなたの昼食</h4>
		<ul id="runch-list">
			<li><select class="runch-menu"><option>- メニューが登録されていません -</option></select></li>
		</ul>
		<h4>あなたの夕食</h4>
		<ul id="dinner-list">
			<li><select class="dinner-menu"><option>- メニューが登録されていません -</option></select></li>
		</ul>
	</div>-->
</template>

<script>
import {ref, reactive} from 'vue'

console.log(standard_nutrient);
export default {
	//name: 'HelloWorld',
  props: {
		count: Number,
    title: String
  },
  setup(props) {
    const data = reactive({
      title: "test",
			standard_nutrients: standard_nutrient,
			nutrient_table: nutrient_table,
			count: 0
		});
		setInterval(()=>{
			data.count++;
		}, 1000);
		return {data};
	}
}
</script>
