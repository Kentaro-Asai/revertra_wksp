# coding: utf-8
import os
import sys
import json

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
# python mkHtml.py

rtn = []
awaken_ary = [
	"HP強化", "攻撃強化", "回復強化", "HP弱化", "攻撃弱化", "回復弱化",
	"チームHP強化", "チーム回復強化", "マルチブースト", 
	"火ダメージ軽減", "水ダメージ軽減", "木ダメージ軽減",
	"光ダメージ軽減", "闇ダメージ軽減", "火ドロップ強化", "水ドロップ強化", "木ドロップ強化",
	"光ドロップ強化", "闇ドロップ強化", "回復ドロップ強化", "バインド回復", "コンボドロップ", "火属性強化",
	"水属性強化", "木属性強化", "光属性強化", "闇属性強化", "暗闇耐性", "暗闇耐性＋", 
	"お邪魔耐性", "お邪魔耐性＋", "毒耐性", "毒耐性＋", "封印耐性",
	"バインド耐性", "バインド耐性+", "雲耐性", "操作不可耐性",
	"神キラー", "ドラゴンキラー", "攻撃キラー", "悪魔キラー", "体力キラー",
	"バランスキラー", "回復キラー", "マシンキラー", "売却用キラー", "進化用キラー",
	"強化合成用キラー", "能力覚醒用キラー", "2体攻撃", "コンボ強化", "超コンボ強化",
	"HP80％以上強化", "HP50％以下強化", "自動回復", "操作時間延長", "操作時間延長+",
	"スキルブースト", "スキルブースト+", "追加攻撃", "超追加攻撃", "L字消し攻撃", "回復L字消し",
	"ダメージ無効貫通", "ガードブレイク", "スキルチャージ", "お邪魔ドロップの加護", "毒ドロップの加護",
	"スキルボイス", "ダンジョンボーナス", "覚醒アシスト"
]
counter = 0
for v in awaken_ary:
	rtn.append(f'<li><img src="img_awaken/{v}.png" title="{v}"><span>0</span></li>')
	counter += 1
with open('pd.json', 'w', newline='', encoding='utf8') as f:
  json.dump(rtn, f, indent=2, ensure_ascii=False)