$(function(){
	var mns = {
		//kilr=キラー, mlb=マルチブースト
597:{'nm':'覚醒ヘラ・イース','main':2,'sub':5,'type':['evil', 'god'],'hp':3504,'atk':1334,'re':428,'aw':{'mz': 1, 'mzdec': 1, 'skb': 1}},
986:{'nm':'八界蛇神・ヤマタノオロチ','main':2,'sub':2,'type':['god', 'vitality'],'hp':4590,'atk':1150,'re':222,'aw':{'2way': 2, 'mzr': 1, 'skb': 1, 'huin': 1, 'kilr': 1}},
1112:{'nm':'宿業の破壊神・シヴァ','main':1,'sub':2,'type':['god', 'vitality'],'hp':4131,'atk':1452,'re':125,'aw':{'hir': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
1113:{'nm':'破戒の創造神・シヴァ','main':1,'sub':5,'type':['god', 'evil'],'hp':3331,'atk':1802,'re':125,'aw':{'hir': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
1127:{'nm':'アンジェリウス','main':4,'sub':4,'type':['god', 'recovery'],'hp':2750,'atk':1108,'re':518,'aw':{'hkr': 1, 're': 1, 'skb': 1}},
1196:{'nm':'空の王・リオレウス&レウスネコ','main':1,'sub':5,'type':['balance', 'dragon'],'hp':3120,'atk':1580,'re':365,'aw':{'hi': 2, 'hir': 1, 'dk': 2, 'skb': 3}},
1197:{'nm':'陸の女王・リオレイア&レイアネコ','main':3,'sub':4,'type':['recovery', 'dragon'],'hp':3083,'atk':1305,'re':542,'aw':{'ki': 1, 'kir': 1, 'hkr': 1, 'birs': 2, 'dk': 2, 'skb': 1}},
1201:{'nm':'シンジ&カヲル&第13号機・FI','main':2,'sub':5,'type':['attack', 'machine'],'hp':3470,'atk':2215,'re':198,'aw':{'2way': 1, 'mzr': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
1206:{'nm':'五機龍合体・ゴッドカノープス','main':3,'sub':4,'type':['dragon', 'machine', 'god'],'hp':4326,'atk':1602,'re':179,'aw':{'2way': 1, 'kir': 1, 're': 1, 'skb': 1}},
1207:{'nm':'五機龍融合・デモンハダル','main':5,'sub':1,'type':['dragon', 'machine', 'evil'],'hp':4318,'atk':1709,'re':98,'aw':{'2way': 1, 'ymr': 1, 're': 1, 'skb': 1}},
1217:{'nm':'神書の管理者・メタトロン','main':4,'sub':2,'type':['god', 'recovery'],'hp':2454,'atk':1330,'re':863,'aw':{'re': 1, 'birs': 2, 'bire': 1, 'skb': 2}},
1262:{'nm':'天樹華の朱雀・レイラン','main':1,'sub':3,'type':['god', 'balance'],'hp':3335,'atk':1477,'re':352,'aw':{'hi': 1, 'ki': 1, 'hk': 1, 'hir': 1, 'kilr': 2}},
1263:{'nm':'天聖導の朱雀・レイラン','main':1,'sub':4,'type':['god', 'attack'],'hp':2935,'atk':1807,'re':272,'aw':{'2way': 1, 'hi': 1, 'ki': 1, 'hk': 1, 'hir': 1, 'hkr': 1, 'skb': 1}},
1264:{'nm':'守護命の青龍・カリン','main':2,'sub':3,'type':['god', 'dragon'],'hp':3345,'atk':1581,'re':284,'aw':{'mz': 1, 'ki': 1, 'ym': 1, 'mzr': 1, 'kilr': 2}},
1265:{'nm':'妙霊護の青龍・カリン','main':2,'sub':5,'type':['god', 'vitality'],'hp':4005,'atk':1401,'re':194,'aw':{'2way': 1, 'mz': 1, 'ki': 1, 'ym': 1, 'mzr': 1, 'ymr': 1, 'skb': 1}},
1266:{'nm':'冥地鎮の玄武・メイメイ','main':3,'sub':5,'type':['god', 'evil'],'hp':3525,'atk':1524,'re':266,'aw':{'ki': 1, 'hk': 1, 'ym': 1, 'kir': 1, 'kilr': 2}},
1267:{'nm':'道明守の玄武・メイメイ','main':3,'sub':4,'type':['god', 'balance'],'hp':3475,'atk':1414,'re':346,'aw':{'2way': 1, 'ki': 1, 'hk': 1, 'ym': 1, 'kir': 1, 'hkr': 1, 'skb': 1}},
1268:{'nm':'焔月輪の白虎・ハク','main':5,'sub':1,'type':['god', 'dragon'],'hp':3353,'atk':1491,'re':309,'aw':{'hi': 1, 'mz': 1, 'ym': 1, 'ymr': 1, 'kilr': 2}},
1269:{'nm':'退魔爪の白虎・ハク','main':5,'sub':5,'type':['god', 'evil'],'hp':3293,'atk':1741,'re':179,'aw':{'2way': 1, 'hi': 1, 'mz': 1, 'ym': 1, 'ymr': 2, 'skb': 1}},
1279:{'nm':'ヨウ&カイゼルジークフリート','main':2,'sub':2,'type':['balance'],'hp':3020,'atk':1419,'re':342,'aw':{'mz': 1, 'mzr': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
1281:{'nm':'チカ&戦女神・ミネルヴァ','main':1,'sub':1,'type':['recovery', 'god'],'hp':2805,'atk':1058,'re':500,'aw':{'hi': 1, 'hir': 2, 'skb': 2, 'mlb': 1}},
1283:{'nm':'ムラクモ&剛腕の巨人・ギガンテス','main':1,'sub':1,'type':['attack'],'hp':3158,'atk':1623,'re':56,'aw':{'hi': 1, 'hir': 1, 'dk': 2, 'skb': 1, 'mlb': 1}},
1285:{'nm':'リオナ&大海の歌姫・セイレーン','main':2,'sub':2,'type':['balance'],'hp':2685,'atk':1182,'re':436,'aw':{'mz': 1, 'mzr': 1, 're': 2, 'skb': 1, 'mlb': 1}},
1287:{'nm':'フォーレン&狩猟神・アルテミス','main':3,'sub':3,'type':['recovery', 'god'],'hp':2328,'atk':1259,'re':524,'aw':{'ki': 1, 'kir': 2, 'skb': 2, 'mlb': 1}},
1289:{'nm':'パトリシア&ヴァルキリー','main':4,'sub':4,'type':['vitality'],'hp':3595,'atk':1198,'re':180,'aw':{'hk': 1, 'hkr': 1, 'gls': 2, 'skb': 1, 'mlb': 1}},
1291:{'nm':'アンリ&カオスデビルドラゴン','main':5,'sub':5,'type':['evil', 'dragon'],'hp':2400,'atk':1231,'re':511,'aw':{'ym': 1, 'ymr': 2, 'skb': 2, 'mlb': 1}},
1296:{'nm':'岩戸の芸女神・アメノウズメ','main':1,'sub':1,'type':['god', 'attack'],'hp':2645,'atk':1575,'re':501,'aw':{'hi': 1, 'hir': 1, 're': 2, 'kilr': 2}},
1299:{'nm':'天道の皇祖神・イザナギ','main':4,'sub':4,'type':['god', 'vitality'],'hp':4245,'atk':1466,'re':325,'aw':{'2way': 1, 'hk': 3, 'ht': 1, 'skb': 1, 'huin': 1, 'kilr': 1}},
1300:{'nm':'漫遊の国造神・オオクニヌシ','main':5,'sub':5,'type':['god', 'vitality'],'hp':5045,'atk':1269,'re':54,'aw':{'ym': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
1301:{'nm':'ディノライダー・ワイルドドレーク','main':1,'sub':3,'type':['attack', 'dragon'],'hp':2702,'atk':1960,'re':80,'aw':{'2way': 2, 'ht': 1, 'hir': 1, 'kir': 1, 'skb': 1, 'huin': 1}},
1302:{'nm':'ビーストライダー・ウィズマーリン','main':2,'sub':1,'type':['attack', 'evil'],'hp':2653,'atk':1951,'re':102,'aw':{'2way': 2, 'ht': 1, 'hir': 1, 'mzr': 1, 'skb': 1, 'huin': 1}},
1303:{'nm':'マリンライダー・バードロビン','main':3,'sub':2,'type':['attack', 'evil'],'hp':2641,'atk':1942,'re':96,'aw':{'2way': 2, 'ht': 1, 'mzr': 1, 'kir': 1, 'skb': 1, 'huin': 1}},
1304:{'nm':'ドラゴンライダー・キングアーサー','main':4,'sub':5,'type':['attack', 'dragon'],'hp':2906,'atk':1857,'re':72,'aw':{'2way': 2, 'ht': 1, 'hkr': 1, 'ymr': 1, 'skb': 1, 'huin': 1}},
1305:{'nm':'グリプスライダー・ベクターフィン','main':5,'sub':4,'type':['attack', 'evil'],'hp':2850,'atk':1876,'re':86,'aw':{'2way': 2, 'ht': 1, 'hkr': 1, 'ymr': 1, 'skb': 1, 'huin': 1}},
1344:{'nm':'龍剣の勝利神・フレイ','main':1,'sub':4,'type':['god', 'dragon'],'hp':3355,'atk':1402,'re':437,'aw':{'ht': 1, 'hir': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
1345:{'nm':'永久の双星神・イズン&イズーナ','main':2,'sub':4,'type':['god', 'recovery'],'hp':2805,'atk':1332,'re':649,'aw':{'ht': 1, 'mzr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
1346:{'nm':'煌樹の豊麗神・ フレイヤ','main':3,'sub':4,'type':['god', 'balance'],'hp':3035,'atk':1365,'re':560,'aw':{'ht': 1, 'kir': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
1347:{'nm':'奪還の雷戦神・トール','main':4,'sub':3,'type':['god', 'attack'],'hp':2813,'atk':1800,'re':374,'aw':{'ht': 1, 'hkr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
1348:{'nm':'暗躍の狡知神・ロキ','main':5,'sub':2,'type':['evil', 'balance'],'hp':3018,'atk':1442,'re':527,'aw':{'ht': 1, 'ymr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
1352:{'nm':'フォレストバーン','main':3,'sub':3,'type':['dragon'],'hp':3140,'atk':1359,'re':243,'aw':{'kir': 1, 'jm': 1, 'skb': 1}},
1371:{'nm':'獄羅苦狂魔皇・ベルゼブブ','main':5,'sub':5,'type':['evil', 'attack'],'hp':2473,'atk':2115,'re':250,'aw':{'2way': 2, 'ym': 1, 'birs': 1, 'gls': 1, 'dk': 1, 'skb': 2}},
1423:{'nm':'光槍の魔術神・オーディン','main':3,'sub':4,'type':['god', 'balance'],'hp':4299,'atk':1303,'re':548,'aw':{'re': 4, 'birs': 2, 'skb': 2}},
1425:{'nm':'決死の燕将軍・張飛','main':3,'sub':1,'type':['vitality', 'attack'],'hp':3335,'atk':1640,'re':0,'aw':{'2way': 1, 'birs': 1, 'skb': 1}},
1435:{'nm':'青銅聖闘士・鳳凰星座の一輝','main':1,'sub':5,'type':['attack', 'recovery'],'hp':1293,'atk':2363,'re':464,'aw':{'hir': 2, 'ymr': 2, 'birs': 2, 'skb': 1}},
1505:{'nm':'ウォータードラゴンナイト','main':2,'sub':2,'type':['dragon'],'hp':2368,'atk':1215,'re':286,'aw':{'2way': 1, 'birs': 2, 'skb': 1}},
1532:{'nm':'覚醒ゼウス・マーキュリー','main':2,'sub':4,'type':['god', 'attack'],'hp':2525,'atk':1702,'re':500,'aw':{'2way': 1, 'mz': 1, 'mzr': 1}},
1552:{'nm':'天滅の神魔王・ルシファー','main':5,'sub':1,'type':['evil', 'balance'],'hp':2678,'atk':1406,'re':554,'aw':{'ymr': 2, 'skb': 2, 'huin': 1, 'kilr': 1}},
1553:{'nm':'創獄の神魔王・ルシファー','main':5,'sub':5,'type':['evil', 'attack'],'hp':2078,'atk':1706,'re':554,'aw':{'ymr': 2, 'skb': 2, 'huin': 1, 'kilr': 1}},
1555:{'nm':'八相龍神・ヤマタノオロチ','main':2,'sub':1,'type':['god', 'dragon'],'hp':3830,'atk':1390,'re':222,'aw':{'2way': 2, 'mzr': 2, 'skb': 2}},
1556:{'nm':'斬魔閃神・スサノオノミコト','main':3,'sub':4,'type':['god', 'attack'],'hp':2200,'atk':1836,'re':438,'aw':{'2way': 1, 'ki': 1, 'birs': 2, 'skb': 1, 'huin': 1}},
1557:{'nm':'焔天舞神・アマテラスオオカミ','main':4,'sub':1,'type':['god', 'attack'],'hp':2721,'atk':1511,'re':502,'aw':{'2way': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'yb': 1}},
1558:{'nm':'超サイヤ人3・孫 悟空','main':1,'sub':4,'type':['vitality', 'dragon'],'hp':5258,'atk':1604,'re':203,'aw':{'2way': 1, 'hir': 1, 'hkr': 1, 'birs': 2, 'skb': 3, 'kilr': 1}},
1559:{'nm':'アルティメット孫 悟飯','main':2,'sub':4,'type':['balance', 'dragon'],'hp':4070,'atk':1804,'re':412,'aw':{'2way': 2, 'mzr': 1, 'hkr': 1, 'skb': 2, 'huin': 2, 'yb': 1}},
1560:{'nm':'超サイヤ人・破壊王子ベジータ','main':5,'sub':4,'type':['attack', 'dragon'],'hp':3078,'atk':2405,'re':204,'aw':{'2way': 2, 'hkr': 1, 'ymr': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
1561:{'nm':'超サイヤ人第三段階・トランクス','main':2,'sub':4,'type':['attack', 'dragon'],'hp':3868,'atk':2344,'re':0,'aw':{'2way': 3, 'mzr': 1, 'hkr': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
1615:{'nm':'猛炎の魔道士・ライラ','main':1,'sub':1,'type':['attack', 'recovery'],'hp':2025,'atk':1436,'re':511,'aw':{'2way': 1, 'hir': 1, 'skb': 1, 'huin': 1, 'kilr': 2}},
1617:{'nm':'錬水の魔道士・シャロン','main':2,'sub':2,'type':['attack', 'recovery'],'hp':2065,'atk':1417,'re':511,'aw':{'2way': 1, 'mzr': 1, 'skb': 1, 'huin': 1, 'kilr': 2}},
1619:{'nm':'神木の魔道士・リーザ','main':3,'sub':3,'type':['attack', 'recovery'],'hp':2045,'atk':1409,'re':518,'aw':{'2way': 1, 'kir': 1, 'skb': 1, 'huin': 1, 'kilr': 2}},
1621:{'nm':'閃光の魔道士・レイ=シリウス','main':4,'sub':4,'type':['god', 'recovery'],'hp':2133,'atk':1418,'re':504,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'kilr': 2}},
1623:{'nm':'冥闇の魔道士・ディル=シリウス','main':5,'sub':5,'type':['evil', 'recovery'],'hp':2118,'atk':1429,'re':500,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'kilr': 2}},
1627:{'nm':'次元の魔術師・チェスター','main':5,'sub':5,'type':['dragon', 'evil'],'hp':2605,'atk':1410,'re':172,'aw':{'2way': 1, 'skb': 1, 'huin': 3, 'yb': 1, 'kilr': 2}},
1644:{'nm':'神罰の審理者・メタトロン','main':5,'sub':2,'type':['god', 'attack'],'hp':3530,'atk':1931,'re':333,'aw':{'ymr': 2, 'birs': 2, 'skb': 3, 'huin': 1, 'brk': 1}},
1645:{'nm':'絶世の紅龍喚士・ソニア','main':1,'sub':5,'type':['dragon', 'evil'],'hp':3297,'atk':1925,'re':165,'aw':{'hir': 1, 'ymr': 1, 'bire': 1, 'skb': 2, 'yb': 1}},
1705:{'nm':'永世の魔術師・ウィジャス','main':3,'sub':3,'type':['dragon', 'recovery'],'hp':2213,'atk':1054,'re':504,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'yb': 2, 'kilr': 2}},
1707:{'nm':'黄昏の魔術師・チェスター','main':1,'sub':1,'type':['dragon', 'evil'],'hp':2605,'atk':1410,'re':172,'aw':{'2way': 1, 'skb': 1, 'huin': 3, 'yb': 1, 'kilr': 2}},
1723:{'nm':'黄金聖闘士・天秤座の童虎','main':3,'sub':4,'type':['dragon', 'balance'],'hp':3530,'atk':1454,'re':347,'aw':{'2way': 2, 'ki': 2, 'skb': 1, 'yb': 1, 'kilr': 1}},
1724:{'nm':'託されし魂・龍星座の紫龍','main':3,'sub':4,'type':['dragon', 'attack'],'hp':3365,'atk':1509,'re':124,'aw':{'ki': 2, 'kir': 2, 'skb': 1, 'yb': 1}},
1725:{'nm':'黄金の一矢・射手座の星矢','main':4,'sub':4,'type':['balance', 'god'],'hp':3573,'atk':1532,'re':412,'aw':{'2way': 4, 'gls': 1, 'skb': 1}},
1726:{'nm':'覚醒ヒノカグツチ','main':1,'sub':5,'type':['dragon', 'vitality'],'hp':4520,'atk':1660,'re':91,'aw':{'2way': 3, 'hi': 1, 'ym': 1, 'hir': 1, 're': 1, 'skb': 1, 'huin': 1}},
1727:{'nm':'神命姫神・ヴァルキリーローズ','main':4,'sub':3,'type':['recovery', 'god', 'attack'],'hp':2308,'atk':1589,'re':656,'aw':{'2way': 1, 'hk': 2, 'ht': 1, 'hp': 1, 'skb': 1}},
1728:{'nm':'凰華姫神・ヴァルキリーファム','main':1,'sub':4,'type':['recovery', 'god', 'attack'],'hp':2508,'atk':1639,'re':766,'aw':{'2way': 2, 'ht': 1, 'hir': 2, 'hidec': 1, 'skb': 1, 'cmbs': 1, 'brk': 1}},
1729:{'nm':'蒼翔姫神・ヴァルキリーレイン','main':2,'sub':4,'type':['recovery', 'god', 'attack'],'hp':2508,'atk':1639,'re':766,'aw':{'2way': 2, 'ht': 1, 'mzr': 2, 'mzdec': 1, 'skb': 1, 'cmbs': 1, 'brk': 1}},
1730:{'nm':'茨戒姫神・ヴァルキリーエリーゼ','main':3,'sub':5,'type':['recovery', 'god', 'attack'],'hp':2508,'atk':1639,'re':766,'aw':{'2way': 2, 'ht': 1, 'kir': 2, 'kidec': 1, 'skb': 1, 'cmbs': 1, 'brk': 1}},
1731:{'nm':'黒翼姫神・ヴァルキリークレール','main':5,'sub':1,'type':['recovery', 'god', 'evil'],'hp':2708,'atk':1639,'re':706,'aw':{'2way': 2, 'ht': 1, 'ymr': 2, 'ymdec': 1, 'skb': 1, 'cmbs': 1, 'brk': 1}},
1737:{'nm':'澪王妃・ヘラ・イース','main':2,'sub':2,'type':['evil', 'god'],'hp':3504,'atk':1534,'re':428,'aw':{'mz': 2, 're': 2, 'mzdec': 1, 'skb': 1}},
1738:{'nm':'覇征の龍武王・曹操','main':1,'sub':3,'type':['dragon', 'attack'],'hp':3295,'atk':1956,'re':27,'aw':{'2way': 2, 'hi': 1, 'hir': 1, 'skb': 2, 'huin': 1}},
1739:{'nm':'統覇の武王神・曹操','main':1,'sub':5,'type':['god', 'attack'],'hp':3195,'atk':1906,'re':107,'aw':{'hi': 1, 'hir': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
1740:{'nm':'勇壮の将軍神・孫権','main':2,'sub':4,'type':['god', 'recovery'],'hp':2795,'atk':1283,'re':580,'aw':{'mz': 1, 'mzr': 1, 'gls': 1, 'skb': 1, 'huin': 1, 'kilr': 1}},
1741:{'nm':'雄飛の龍将軍・孫権','main':2,'sub':3,'type':['dragon', 'recovery'],'hp':2695,'atk':1183,'re':650,'aw':{'2way': 1, 'mz': 1, 'mzr': 2, 'gls': 1, 'skb': 1, 'yb': 1}},
1742:{'nm':'護誓の英帝神・劉備','main':3,'sub':4,'type':['god', 'attack'],'hp':2525,'atk':1745,'re':403,'aw':{'ki': 1, 'kir': 1, 'jm': 1, 'skb': 1, 'huin': 1, 'kilr': 1}},
1743:{'nm':'克己の龍英傑・劉備','main':3,'sub':1,'type':['dragon', 'attack'],'hp':2625,'atk':1705,'re':353,'aw':{'2way': 3, 'ki': 1, 'kir': 1, 'jm': 1, 'skb': 1}},
1744:{'nm':'天禄の龍聖姫・大喬','main':4,'sub':4,'type':['dragon', 'recovery'],'hp':2715,'atk':1221,'re':641,'aw':{'2way': 1, 'hkr': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
1745:{'nm':'天奏の聖華神・小喬','main':4,'sub':2,'type':['god', 'recovery'],'hp':2865,'atk':1321,'re':541,'aw':{'mzr': 1, 'hkr': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
1747:{'nm':'綺羅の秘女神・カーリー','main':4,'sub':1,'type':['god', 'recovery'],'hp':3015,'atk':1411,'re':633,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
1748:{'nm':'覚醒ハーデス','main':5,'sub':3,'type':['evil', 'attack'],'hp':2471,'atk':2160,'re':396,'aw':{'2way': 2, 'ki': 1, 'ym': 1, 'ymr': 1, 'gls': 2, 'skb': 1, 'huin': 1}},
1756:{'nm':'煌灯の魔導姫・アルス=ノウァ','main':4,'sub':1,'type':['attack', 'evil'],'hp':2610,'atk':1714,'re':149,'aw':{'hi': 2, 'hk': 4, 'skb': 1}},
1758:{'nm':'闇翔の魔導姫・ゴエティア','main':5,'sub':3,'type':['vitality', 'evil'],'hp':3508,'atk':1312,'re':120,'aw':{'ki': 2, 'ym': 4, 'skb': 1}},
1839:{'nm':'雷天の頑龍王・ガイノウト','main':1,'sub':4,'type':['dragon', 'vitality'],'hp':4283,'atk':1615,'re':120,'aw':{'hi': 3, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 2, 'mlb': 1}},
1841:{'nm':'大弯の海龍王・ヴォルスーン','main':2,'sub':1,'type':['dragon', 'attack'],'hp':4071,'atk':1812,'re':65,'aw':{'2way': 1, 'mz': 2, 'ht': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
1843:{'nm':'玻璃の風龍王・リンシア','main':3,'sub':5,'type':['dragon', 'balance'],'hp':3340,'atk':1678,'re':360,'aw':{'2way': 1, 're': 3, 'skb': 1, 'huin': 1, 'yb': 2, 'mlb': 1}},
1845:{'nm':'解放の騎龍王・ノルディス','main':4,'sub':3,'type':['dragon', 'balance'],'hp':3610,'atk':1454,'re':389,'aw':{'kir': 2, 'hkr': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
1847:{'nm':'黒天の幻龍王・ゼローグ∞','main':5,'sub':2,'type':['dragon', 'vitality', 'evil'],'hp':4085,'atk':1625,'re':305,'aw':{'2way': 1, 'ym': 3, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
1848:{'nm':'密命の天使・イーリア','main':4,'sub':4,'type':['god', 'recovery'],'hp':2651,'atk':1523,'re':614,'aw':{'2way': 2, 'ymdec': 2, 'skb': 1, 'huin': 1}},
1849:{'nm':'忘却の死神・グリザル','main':5,'sub':5,'type':['evil', 'attack'],'hp':3047,'atk':2013,'re':201,'aw':{'ymr': 2, 'hkdec': 2, 'skb': 1, 'huin': 1}},
1881:{'nm':'双曲剣の勇士・ショーテル','main':1,'sub':3,'type':['attack'],'hp':2916,'atk':1719,'re':221,'aw':{'2way': 2, 'skb': 2, 'mlb': 1}},
1882:{'nm':'両刃剣の勇士・クレイモア','main':2,'sub':1,'type':['attack'],'hp':2601,'atk':1750,'re':300,'aw':{'2way': 2, 'skb': 2, 'mlb': 1}},
1883:{'nm':'無銘刀の勇士・正宗','main':3,'sub':2,'type':['attack'],'hp':2304,'atk':2006,'re':251,'aw':{'2way': 2, 'skb': 2, 'mlb': 1}},
1884:{'nm':'曲刃剣の勇士・コピス','main':4,'sub':1,'type':['attack'],'hp':3101,'atk':1708,'re':188,'aw':{'2way': 2, 'skb': 2, 'mlb': 1}},
1885:{'nm':'巨重剣の勇士・ツヴァイハンダー','main':5,'sub':2,'type':['attack', 'vitality'],'hp':4002,'atk':1852,'re':271,'aw':{'2way': 2, 'skb': 2, 'mlb': 1}},
1897:{'nm':'アースドラゴンナイト','main':3,'sub':3,'type':['dragon'],'hp':2260,'atk':1255,'re':294,'aw':{'2way': 1, 'birs': 2, 'skb': 1}},
1899:{'nm':'シャドウドラゴンナイト','main':5,'sub':5,'type':['dragon'],'hp':2350,'atk':1295,'re':242,'aw':{'2way': 1, 'birs': 2, 'skb': 1}},
1902:{'nm':'究極装備・シーフ','main':3,'sub':5,'type':['balance', 'evil'],'hp':2820,'atk':1518,'re':483,'aw':{'2way': 2, 'ki': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'yb': 1}},
1903:{'nm':'究極装備・時魔道士','main':4,'sub':4,'type':['recovery', 'god'],'hp':2633,'atk':1315,'re':668,'aw':{'skb': 1, 'huin': 1, 'yb': 3}},
1904:{'nm':'究極装備・狩人','main':1,'sub':5,'type':['attack', 'evil'],'hp':2280,'atk':1748,'re':218,'aw':{'2way': 1, 'hi': 1, 'skb': 1, 'yb': 1}},
1906:{'nm':'究極装備・フェンサー','main':5,'sub':5,'type':['balance', 'evil'],'hp':2505,'atk':1375,'re':395,'aw':{'2way': 1, 'ym': 1, 'ymr': 1, 'skb': 1}},
1923:{'nm':'相思の天界神・ゼウス&ヘラ','main':4,'sub':5,'type':['god', 'evil'],'hp':3965,'atk':1361,'re':362,'aw':{'2way': 1, 'hk': 1, 'ym': 1, 're': 2, 'skb': 3}},
1924:{'nm':'怪盗キッド','main':4,'sub':5,'type':['balance'],'hp':2621,'atk':1203,'re':301,'aw':{'hk': 3, 'gls': 5, 'yb': 1}},
1925:{'nm':'魔槍の秘術神・オーディン','main':2,'sub':5,'type':['god', 'vitality'],'hp':4531,'atk':1291,'re':548,'aw':{'2way': 3, 'mzr': 3, 'skb': 3}},
1926:{'nm':'破天の雷霆龍・インドラ','main':4,'sub':4,'type':['dragon', 'balance'],'hp':3450,'atk':1467,'re':319,'aw':{'hkr': 2, 'skb': 1, 'huin': 2, 'yb': 1}},
1927:{'nm':'深獄の暗黒龍・ヴリトラ','main':5,'sub':5,'type':['dragon', 'evil'],'hp':3867,'atk':1625,'re':111,'aw':{'ymr': 3, 'skb': 2, 'huin': 1}},
1928:{'nm':'覚醒ヴィーナス','main':4,'sub':2,'type':['evil', 'recovery'],'hp':3075,'atk':1436,'re':645,'aw':{'2way': 1, 'hk': 1, 'hkr': 3, 're': 2, 'skb': 1, 'huin': 1}},
1937:{'nm':'最強戦士・超ベジット','main':1,'sub':5,'type':['attack', 'dragon'],'hp':5510,'atk':2005,'re':203,'aw':{'2way': 2, 'birs': 2, 'skb': 2, 'yb': 2, 'cmbs': 1}},
1938:{'nm':'超サイヤ人3・ゴテンクス','main':2,'sub':1,'type':['attack', 'dragon'],'hp':3605,'atk':2302,'re':103,'aw':{'2way': 2, 'hi': 1, 'mz': 1, 'birs': 2, 'skb': 3}},
1939:{'nm':'パーフェクトセル','main':3,'sub':5,'type':['evil', 'machine', 'dragon'],'hp':4226,'atk':1804,'re':202,'aw':{'2way': 2, 'kir': 2, 'ymr': 1, 're': 1, 'skb': 2, 'yb': 1}},
1969:{'nm':'神羅聖龍神サイガ アナザー','main':3,'sub':4,'type':['dragon', 'god'],'hp':3300,'atk':1618,'re':316,'aw':{'2way': 2, 'kir': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 1}},
1973:{'nm':'光翼聖天キリコ アナザー','main':1,'sub':4,'type':['recovery', 'attack'],'hp':2288,'atk':1543,'re':551,'aw':{'2way': 1, 'hir': 1, 'ymdec': 3, 'skb': 2, 'huin': 1}},
2006:{'nm':'天下御免の大泥棒・石川五右衛門','main':1,'sub':4,'type':['vitality', 'dragon'],'hp':4678,'atk':1259,'re':217,'aw':{'hi': 1, 'hir': 2, 'skb': 1}},
2009:{'nm':'覚醒ホルス','main':1,'sub':5,'type':['evil', 'god'],'hp':3375,'atk':1424,'re':570,'aw':{'2way': 1, 'hi': 2, 'skb': 2, 'huin': 2, 'yb': 1}},
2010:{'nm':'覚醒イシス','main':2,'sub':3,'type':['evil', 'god'],'hp':3438,'atk':1597,'re':433,'aw':{'mz': 2, 'mzr': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
2011:{'nm':'覚醒バステト','main':3,'sub':1,'type':['evil', 'balance'],'hp':3560,'atk':1457,'re':485,'aw':{'2way': 1, 'ki': 1, 'dk': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
2012:{'nm':'覚醒ラー','main':4,'sub':1,'type':['evil', 'god'],'hp':4355,'atk':1300,'re':366,'aw':{'hk': 1, 'birs': 2, 'gls': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2013:{'nm':'覚醒アヌビス','main':5,'sub':1,'type':['evil', 'god'],'hp':3348,'atk':1350,'re':618,'aw':{'re': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
2014:{'nm':'生徒会長・ルシファー','main':4,'sub':5,'type':['god', 'attack', 'evil'],'hp':2628,'atk':2006,'re':504,'aw':{'2way': 3, 're': 3, 'skb': 2, 'huin': 1}},
2020:{'nm':'紅焔の舞巫女・ミニちよめ','main':1,'sub':1,'type':['balance'],'hp':2738,'atk':1390,'re':383,'aw':{'2way': 3}},
2021:{'nm':'幻神・ミニおーでぃん','main':1,'sub':1,'type':['god'],'hp':3506,'atk':1513,'re':58,'aw':{'2way': 3, 'dk': 2, 'skb': 1}},
2073:{'nm':'覚醒レイラン','main':1,'sub':1,'type':['vitality', 'attack'],'hp':4035,'atk':1707,'re':202,'aw':{'hi': 2, 'hir': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2074:{'nm':'覚醒カリン','main':2,'sub':2,'type':['dragon', 'attack'],'hp':3545,'atk':1851,'re':284,'aw':{'mz': 1, 'mzr': 2, 'dk': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2075:{'nm':'覚醒メイメイ','main':3,'sub':3,'type':['vitality', 'attack'],'hp':4175,'atk':1804,'re':106,'aw':{'2way': 2, 'ki': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2076:{'nm':'覚醒ハク','main':5,'sub':2,'type':['god', 'recovery'],'hp':3193,'atk':1441,'re':609,'aw':{'2way': 2, 'mz': 1, 'ym': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
2077:{'nm':'翠輝星の麒麟・サクヤ','main':4,'sub':3,'type':['god', 'vitality', 'dragon'],'hp':4028,'atk':1470,'re':384,'aw':{'2way': 1, 'hk': 2, 'gls': 1, 'jm': 1, 'dk': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2078:{'nm':'劫火の威女神・カーリー','main':5,'sub':1,'type':['god', 'dragon'],'hp':3325,'atk':1774,'re':355,'aw':{'2way': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
2084:{'nm':'きまぐれ召喚・でぶチョコボ','main':4,'sub':4,'type':['vitality'],'hp':5082,'atk':726,'re':0,'aw':{'hk': 2, 'hkdec': 2, 'ymdec': 2, 'dk': 2, 'skb': 1}},
2088:{'nm':'メロディ&ブラキオス','main':3,'sub':3,'type':['balance', 'dragon'],'hp':2959,'atk':1378,'re':324,'aw':{'2way': 2, 'ki': 1, 'skb': 1, 'huin': 1}},
2089:{'nm':'たまドラプリン☆アラモード','main':4,'sub':4,'type':['vitality'],'hp':5003,'atk':1053,'re':116,'aw':{'hkr': 2, 'birs': 2, 'gls': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2090:{'nm':'プリンセス・ヴァルキティハート','main':4,'sub':4,'type':['recovery'],'hp':2880,'atk':1335,'re':600,'aw':{'hkr': 4, 're': 2, 'birs': 2, 'skb': 1}},
2094:{'nm':'フェニックスライダー・ヴァレン','main':1,'sub':2,'type':['attack', 'recovery'],'hp':2290,'atk':1508,'re':353,'aw':{'2way': 2, 'hir': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
2098:{'nm':'グリフォンライダー・ギリアム','main':3,'sub':5,'type':['attack', 'evil'],'hp':2213,'atk':1659,'re':272,'aw':{'2way': 2, 'kir': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
2102:{'nm':'ケルベロスライダー・ジゼ','main':5,'sub':3,'type':['attack', 'evil'],'hp':2250,'atk':2001,'re':60,'aw':{'2way': 2, 'ymr': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
2121:{'nm':'聖王アーサー','main':4,'sub':4,'type':['balance'],'hp':2710,'atk':1358,'re':378,'aw':{'2way': 1, 'hkr': 2, 'skb': 1}},
2124:{'nm':'アテナの使命・沙織','main':4,'sub':4,'type':['recovery', 'god'],'hp':2808,'atk':1344,'re':700,'aw':{'hkr': 1, 're': 3, 'skb': 2, 'huin': 2}},
2127:{'nm':'光の機神将・シェロスパーダ','main':4,'sub':3,'type':['vitality', 'machine', 'god'],'hp':5135,'atk':1086,'re':10,'aw':{'hi': 1, 'mz': 1, 'ki': 1, 'hk': 1, 'birs': 2, 'skb': 1}},
2128:{'nm':'闇の機神将・ハイスフェルゼン','main':5,'sub':1,'type':['vitality', 'machine', 'evil'],'hp':5045,'atk':1119,'re':10,'aw':{'hi': 1, 'mz': 1, 'ki': 1, 'ym': 1, 'birs': 2, 'skb': 1}},
2129:{'nm':'無間の破戒神・大天狗','main':3,'sub':5,'type':['vitality', 'evil'],'hp':4026,'atk':1317,'re':0,'aw':{'jm': 1, 'skb': 4, 'huin': 1}},
2179:{'nm':'滅槍の幻術神・オーディン','main':1,'sub':5,'type':['god', 'attack'],'hp':4189,'atk':2143,'re':154,'aw':{'hir': 4, 'birs': 2, 'skb': 3}},
2180:{'nm':'平定の黄泉神・イザナミ','main':5,'sub':1,'type':['god', 'vitality'],'hp':4711,'atk':1551,'re':57,'aw':{'ym': 1, 're': 3, 'ymdec': 1}},
2185:{'nm':'暴炎機導龍・トゥバン','main':1,'sub':1,'type':['machine', 'dragon'],'hp':3096,'atk':1491,'re':125,'aw':{'hir': 3, 'birs': 2, 'bire': 1, 'skb': 2}},
2186:{'nm':'深海機導龍・サダルメリク','main':2,'sub':2,'type':['machine', 'dragon'],'hp':3393,'atk':1435,'re':73,'aw':{'mzr': 3, 'birs': 2, 'bire': 1, 'skb': 2}},
2187:{'nm':'烈風機導龍・アルナイル','main':3,'sub':3,'type':['machine', 'dragon'],'hp':3339,'atk':1246,'re':205,'aw':{'kir': 3, 'birs': 2, 'bire': 1, 'skb': 2}},
2188:{'nm':'天雷機導龍・シェザル','main':4,'sub':4,'type':['machine', 'dragon'],'hp':2804,'atk':1652,'re':99,'aw':{'hkr': 3, 'birs': 2, 'bire': 1, 'skb': 2}},
2189:{'nm':'刻滅機導龍・ディアデム','main':5,'sub':5,'type':['machine', 'dragon'],'hp':2961,'atk':1754,'re':0,'aw':{'ymr': 3, 'birs': 2, 'bire': 1, 'skb': 2}},
2190:{'nm':'灼翼機導獣・マルカブ','main':1,'sub':3,'type':['machine', 'god'],'hp':3024,'atk':1467,'re':254,'aw':{'2way': 3, 'birs': 2, 'skb': 2, 'huin': 1}},
2191:{'nm':'氷牙機導獣・アルフェッカ','main':2,'sub':5,'type':['machine', 'vitality'],'hp':4046,'atk':1309,'re':33,'aw':{'2way': 3, 'birs': 2, 'skb': 2, 'huin': 1}},
2192:{'nm':'風翼機導獣・ファクト','main':3,'sub':4,'type':['machine', 'balance'],'hp':3011,'atk':1474,'re':257,'aw':{'2way': 3, 'birs': 2, 'skb': 2, 'huin': 1}},
2193:{'nm':'閃爪機導獣・レオニス','main':4,'sub':2,'type':['machine', 'attack'],'hp':2714,'atk':1757,'re':168,'aw':{'2way': 3, 'birs': 2, 'skb': 2, 'huin': 1}},
2194:{'nm':'冥眼機導獣・カッカブ','main':5,'sub':1,'type':['machine', 'evil'],'hp':3213,'atk':1663,'re':76,'aw':{'2way': 3, 'birs': 2, 'skb': 2, 'huin': 1}},
2206:{'nm':'闊達の灼冥魔・スカーレット','main':1,'sub':5,'type':['evil'],'hp':3172,'atk':1652,'re':422,'aw':{'hi': 1, 'hir': 2, 'hidec': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2226:{'nm':'制約と誓約・ゴン＝フリークス','main':3,'sub':1,'type':['vitality', 'attack'],'hp':4005,'atk':1908,'re':202,'aw':{'2way': 1, 'ki': 1, 'kir': 4, 'skb': 3}},
2227:{'nm':'神速・キルア＝ゾルディック','main':5,'sub':4,'type':['attack', 'evil'],'hp':2945,'atk':1973,'re':486,'aw':{'2way': 3, 'ym': 1, 'ymr': 1, 'birs': 2, 'dk': 1, 'skb': 1}},
2230:{'nm':'気狂いピエロ・カイト','main':5,'sub':4,'type':['balance', 'evil'],'hp':3323,'atk':1468,'re':377,'aw':{'hi': 1, 'mz': 1, 'ki': 1, 'hk': 1, 'ym': 1, 'skb': 1, 'huin': 2, 'yb': 1}},
2235:{'nm':'復仇の戦軍神・アレス','main':1,'sub':4,'type':['god', 'vitality'],'hp':3712,'atk':1694,'re':80,'aw':{'2way': 1, 'hir': 3, 'gls': 1, 'skb': 1, 'huin': 1}},
2236:{'nm':'還魂の商業神・ヘルメス','main':2,'sub':5,'type':['god', 'attack'],'hp':2974,'atk':1898,'re':164,'aw':{'2way': 1, 'mzr': 3, 'skb': 2, 'huin': 1}},
2237:{'nm':'月華の狩猟神・アルテミス','main':3,'sub':5,'type':['god', 'attack'],'hp':3040,'atk':1705,'re':271,'aw':{'2way': 1, 'kir': 3, 'gls': 1, 'skb': 1, 'huin': 1}},
2238:{'nm':'渾天の光明神・アポロン','main':4,'sub':2,'type':['god', 'attack'],'hp':2558,'atk':1823,'re':466,'aw':{'2way': 2, 'ht': 2, 'hkr': 2, 'skb': 1}},
2239:{'nm':'揺籃の冥府神・ペルセポネ','main':5,'sub':3,'type':['god', 'recovery'],'hp':2939,'atk':1337,'re':640,'aw':{'2way': 2, 'ht': 2, 'ymr': 2, 'skb': 1}},
2249:{'nm':'純血の魔王アスモ・デウス・アナザー','main':5,'sub':3,'type':['evil', 'recovery'],'hp':2593,'atk':1401,'re':667,'aw':{'2way': 2, 'skb': 1, 'huin': 2, 'yb': 2, 'cmbs': 1}},
2278:{'nm':'笑覧の芸女神・アメノウズメ','main':1,'sub':2,'type':['god', 'balance'],'hp':3145,'atk':1325,'re':501,'aw':{'hi': 1, 'hir': 1, 're': 2, 'birs': 2, 'skb': 1}},
2279:{'nm':'賦活の漁猟神・ウミサチヤマサチ','main':2,'sub':3,'type':['god', 'recovery', 'vitality'],'hp':3555,'atk':1251,'re':651,'aw':{'2way': 2, 'mz': 2, 'ki': 2, 'gls': 1, 'skb': 1, 'huin': 1}},
2280:{'nm':'庇護の巫女神・クシナダヒメ','main':3,'sub':3,'type':['god', 'recovery', 'attack'],'hp':2805,'atk':1732,'re':640,'aw':{'ki': 2, 'ht': 1, 'kir': 1, 're': 1, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2281:{'nm':'双天の皇祖神・イザナギ','main':4,'sub':5,'type':['god', 'balance'],'hp':3645,'atk':1616,'re':415,'aw':{'2way': 2, 'hk': 1, 'ht': 1, 'skb': 2, 'huin': 2}},
2282:{'nm':'鎮撫の国造神・ オオクニヌシ','main':5,'sub':2,'type':['god', 'attack'],'hp':3845,'atk':1819,'re':74,'aw':{'2way': 2, 'ym': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2286:{'nm':'お忍びの王女・アルビダ','main':2,'sub':2,'type':['dragon', 'attack'],'hp':3083,'atk':1848,'re':59,'aw':{'mz': 5, 'mzdec': 4}},
2287:{'nm':'楽園の緑龍喚士・ソニア','main':3,'sub':2,'type':['dragon', 'attack'],'hp':3038,'atk':1919,'re':274,'aw':{'2way': 2, 'kir': 2, 'bire': 1, 'skb': 2, 'yb': 1}},
2289:{'nm':'楽園の時女神・ウルド','main':2,'sub':1,'type':['god', 'attack'],'hp':3715,'atk':1688,'re':122,'aw':{'2way': 1, 'mz': 3, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2290:{'nm':'雪白の美姫・ヴァルキリークレール','main':5,'sub':2,'type':['recovery', 'evil', 'god'],'hp':2558,'atk':1689,'re':656,'aw':{'2way': 2, 'ymr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
2291:{'nm':'夏色の旅行者・チェスター','main':2,'sub':2,'type':['dragon', 'evil'],'hp':2605,'atk':1410,'re':172,'aw':{'2way': 1, 'huin': 4, 'yb': 1}},
2292:{'nm':'冥夜の令嬢・パンドラ','main':5,'sub':2,'type':['god', 'evil'],'hp':3048,'atk':1484,'re':509,'aw':{'2way': 2, 'ymr': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
2294:{'nm':'破壊の赤機操士・ピュール＝マキナ','main':1,'sub':3,'type':['machine'],'hp':2885,'atk':1386,'re':358,'aw':{'hi': 1, 'ki': 1, 'hir': 1, 'skb': 1, 'yb': 2, 'brk': 1}},
2296:{'nm':'再生の青機操士・シャリテ＝マキナ','main':2,'sub':1,'type':['machine'],'hp':2908,'atk':1330,'re':385,'aw':{'hi': 1, 'mz': 1, 'mzr': 1, 'skb': 1, 'yb': 2, 'brk': 1}},
2298:{'nm':'創造の緑機操士・クラジュ＝マキナ','main':3,'sub':2,'type':['machine'],'hp':2928,'atk':1364,'re':358,'aw':{'mz': 1, 'ki': 1, 'kir': 1, 'skb': 1, 'yb': 2, 'brk': 1}},
2317:{'nm':'絶世の紅龍喚士・ミニそにあ','main':1,'sub':5,'type':['dragon', 'evil'],'hp':3097,'atk':1975,'re':165,'aw':{'hir': 3, 'ymr': 2, 'skb': 1, 'yb': 1}},
2318:{'nm':'琥珀の美姫・ヴァルキリークレール','main':5,'sub':2,'type':['attack', 'evil', 'god'],'hp':2558,'atk':1689,'re':656,'aw':{'2way': 2, 'ymr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
2321:{'nm':'神命姫神・ミニばるきりーろーず','main':4,'sub':3,'type':['recovery', 'god'],'hp':2308,'atk':1489,'re':656,'aw':{'2way': 3, 'skb': 1, 'huin': 1, 'brk': 1}},
2322:{'nm':'覚醒ヤマタノオロチ','main':2,'sub':3,'type':['dragon', 'vitality'],'hp':5090,'atk':1000,'re':282,'aw':{'2way': 4, 'mzr': 1, 'skb': 2, 'yb': 1}},
2323:{'nm':'覚醒スサノオノミコト','main':3,'sub':1,'type':['vitality', 'dragon'],'hp':4370,'atk':1386,'re':298,'aw':{'2way': 2, 'ki': 1, 'birs': 2, 'skb': 2, 'yb': 1}},
2324:{'nm':'覚醒アマテラスオオカミ','main':4,'sub':3,'type':['recovery', 'vitality'],'hp':3821,'atk':1011,'re':682,'aw':{'2way': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 2}},
2325:{'nm':'覚醒ツクヨミ','main':5,'sub':3,'type':['vitality', 'evil'],'hp':4372,'atk':1536,'re':205,'aw':{'ym': 3, 'skb': 1, 'huin': 1, 'yb': 3}},
2328:{'nm':'ミサト&AAAヴンダー・主砲斉射','main':1,'sub':4,'type':['attack', 'machine'],'hp':2895,'atk':2230,'re':342,'aw':{'2way': 3, 'hir': 1, 'birs': 2, 'bire': 1, 'skb': 1}},
2340:{'nm':'ナルガクルガ&ナルガネコ','main':5,'sub':1,'type':['attack', 'dragon'],'hp':2543,'atk':1936,'re':193,'aw':{'2way': 1, 'skb': 1, 'huin': 2}},
2342:{'nm':'ジンオウガ&オウガネコ','main':4,'sub':2,'type':['vitality', 'dragon'],'hp':4005,'atk':1454,'re':41,'aw':{'2way': 1, 'skb': 1, 'huin': 2}},
2343:{'nm':'怒るティガレックス&レックスネコ','main':3,'sub':1,'type':['dragon', 'vitality'],'hp':4140,'atk':1565,'re':115,'aw':{'2way': 2, 'hir': 2, 'kir': 2, 'skb': 2, 'huin': 1}},
2344:{'nm':'狂竜化ゴア・マガラ&ゴアネコ','main':5,'sub':5,'type':['evil', 'dragon'],'hp':3145,'atk':1912,'re':209,'aw':{'2way': 2, 'ym': 1, 'ymr': 2, 'gls': 1, 'skb': 2, 'huin': 1}},
2355:{'nm':'反攻の巨人・エレン・イェーガー','main':1,'sub':4,'type':['attack', 'vitality'],'hp':4508,'atk':1801,'re':162,'aw':{'hir': 4, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1}},
2357:{'nm':'冷静な猛獣・ミカサ・アッカーマン','main':2,'sub':1,'type':['attack', 'machine'],'hp':3818,'atk':1955,'re':103,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'cmbs': 1}},
2360:{'nm':'人類最強の兵士・リヴァイ','main':5,'sub':5,'type':['attack', 'machine'],'hp':3525,'atk':2851,'re':291,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 3, 'cmbs': 1}},
2384:{'nm':'統嵐焦炎神・セト','main':1,'sub':3,'type':['god', 'attack'],'hp':3450,'atk':1689,'re':126,'aw':{'2way': 3, 'hi': 2, 'ki': 1, 'ht': 1, 'skb': 1}},
2385:{'nm':'占命星雲神・ヌト','main':2,'sub':2,'type':['god', 'vitality'],'hp':3660,'atk':1332,'re':288,'aw':{'2way': 2, 'mz': 4, 'ht': 1, 'yb': 1}},
2386:{'nm':'裁魂冥穣神・オシリス','main':3,'sub':3,'type':['god', 'balance'],'hp':3090,'atk':1467,'re':368,'aw':{'2way': 2, 'ki': 4, 'ht': 1, 'yb': 1}},
2387:{'nm':'彩天聖命神・ハトホル','main':4,'sub':2,'type':['god', 'recovery'],'hp':2760,'atk':1281,'re':568,'aw':{'mz': 1, 'hk': 4, 'skb': 1, 'huin': 1, 'yb': 1}},
2388:{'nm':'翔夜冥霊神・ネフティス','main':5,'sub':1,'type':['god', 'evil'],'hp':2653,'atk':1405,'re':538,'aw':{'hi': 1, 'ym': 4, 'ht': 1, 'skb': 1, 'huin': 1}},
2389:{'nm':'覚醒サクヤ','main':4,'sub':2,'type':['dragon', 'recovery'],'hp':3378,'atk':1570,'re':504,'aw':{'2way': 1, 'birs': 2, 'gls': 1, 'jm': 1, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2390:{'nm':'想紡の時女神・ヴェルダンディ','main':3,'sub':1,'type':['god', 'balance', 'machine'],'hp':3455,'atk':1567,'re':522,'aw':{'2way': 1, 'ki': 3, 'ht': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2391:{'nm':'白虹の聖舟神・ノア','main':2,'sub':4,'type':['god', 'vitality'],'hp':6003,'atk':1113,'re':0,'aw':{'mzr': 1, 're': 1, 'birs': 1, 'skb': 1, 'huin': 1}},
2392:{'nm':'覚醒フレイ','main':1,'sub':2,'type':['attack', 'vitality'],'hp':4225,'atk':1712,'re':137,'aw':{'2way': 2, 'ht': 1, 'hir': 2, 'skb': 1, 'huin': 2}},
2393:{'nm':'覚醒イズン&イズーナ','main':2,'sub':5,'type':['vitality', 'evil'],'hp':3915,'atk':1732,'re':219,'aw':{'2way': 2, 'ht': 1, 'mzr': 2, 'skb': 1, 'huin': 2}},
2394:{'nm':'覚醒フレイヤ','main':3,'sub':5,'type':['evil', 'attack'],'hp':3635,'atk':1815,'re':260,'aw':{'2way': 1, 'ht': 1, 'kir': 3, 'skb': 1, 'huin': 2}},
2395:{'nm':'覚醒トール','main':4,'sub':2,'type':['evil', 'attack'],'hp':3213,'atk':2150,'re':184,'aw':{'ht': 1, 'hkr': 3, 'skb': 2, 'huin': 2}},
2396:{'nm':'覚醒ロキ','main':5,'sub':4,'type':['vitality', 'evil'],'hp':3868,'atk':1662,'re':277,'aw':{'2way': 2, 'ht': 1, 'ymr': 2, 'skb': 1, 'huin': 2}},
2398:{'nm':'覚醒スルト','main':1,'sub':5,'type':['vitality', 'attack'],'hp':3815,'atk':1555,'re':0,'aw':{'2way': 1, 'hir': 1, 'skb': 1}},
2406:{'nm':'古城の青龍喚士・ソニア','main':5,'sub':2,'type':['dragon', 'vitality'],'hp':5180,'atk':1409,'re':0,'aw':{'ym': 1, 'mzr': 1, 'ymr': 3, 'bire': 1, 'skb': 2}},
2407:{'nm':'古城の女主神・カーリー','main':5,'sub':4,'type':['god', 'evil'],'hp':3015,'atk':1411,'re':633,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2408:{'nm':'仮装祭の来賓・イザナミ','main':5,'sub':2,'type':['god', 'balance'],'hp':3287,'atk':1239,'re':409,'aw':{'ym': 5, 'hkdec': 3, 'skb': 1}},
2409:{'nm':'好奇の客人・ライラ','main':5,'sub':5,'type':['attack', 'evil'],'hp':2325,'atk':1606,'re':511,'aw':{'2way': 1, 'ymr': 3, 'skb': 1, 'huin': 1}},
2410:{'nm':'月夜の魔狼・ヴァンパイアロード','main':5,'sub':1,'type':['evil', 'balance'],'hp':2996,'atk':1368,'re':463,'aw':{'2way': 2, 'ymr': 1, 'skb': 1, 'huin': 1, 'kilr': 1}},
2441:{'nm':'裁爪の橙龍契士・サリア','main':4,'sub':1,'type':['dragon', 'vitality'],'hp':4118,'atk':1518,'re':120,'aw':{'2way': 1, 'hkr': 2, 'skb': 1, 'yb': 1}},
2443:{'nm':'還爪の青龍契士・リューネ','main':2,'sub':5,'type':['dragon', 'attack'],'hp':3418,'atk':2103,'re':275,'aw':{'2way': 2, 'mzr': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
2444:{'nm':'北斗神拳伝承者・ケンシロウ','main':1,'sub':4,'type':['vitality', 'attack'],'hp':4205,'atk':2020,'re':76,'aw':{'2way': 3, 'skb': 2, 'huin': 2, 'yb': 2}},
2445:{'nm':'最大の強敵・ラオウ','main':1,'sub':5,'type':['evil', 'attack'],'hp':3638,'atk':2325,'re':63,'aw':{'hir': 4, 'ymr': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
2447:{'nm':'南斗最後の将・ユリア','main':4,'sub':4,'type':['recovery'],'hp':2685,'atk':1255,'re':704,'aw':{'ht': 1, 'hkr': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2459:{'nm':'鉄砕牙の奥義・犬夜叉','main':1,'sub':4,'type':['attack', 'evil'],'hp':4803,'atk':1760,'re':108,'aw':{'2way': 1, 'skb': 2, 'huin': 2, 'yb': 2, 'mlb': 1, 'cmbs': 1}},
2463:{'nm':'鬼族の宇宙人・ラム','main':4,'sub':3,'type':['attack', 'vitality'],'hp':3215,'atk':1802,'re':56,'aw':{'hk': 3, 'ht': 2, 'skb': 1, 'huin': 1}},
2473:{'nm':'創世の魔法使い・アラジン','main':4,'sub':4,'type':['balance', 'god'],'hp':3018,'atk':1496,'re':455,'aw':{'hk': 2, 'ht': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'cmbs': 1}},
2475:{'nm':'王の器・アリババ','main':1,'sub':4,'type':['attack', 'evil'],'hp':2645,'atk':1827,'re':216,'aw':{'hi': 2, 'hk': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2486:{'nm':'とら','main':4,'sub':5,'type':['evil'],'hp':3603,'atk':1459,'re':0,'aw':{'hk': 5, 'skb': 3, 'yb': 1}},
2493:{'nm':'愛護の星天使・ロズエル','main':1,'sub':2,'type':['god', 'attack'],'hp':3720,'atk':1613,'re':90,'aw':{'2way': 3, 'birs': 2, 'bire': 1, 'skb': 1}},
2494:{'nm':'巡警の星天使・ファミエル','main':2,'sub':4,'type':['god', 'recovery'],'hp':2458,'atk':1411,'re':600,'aw':{'2way': 3, 'mz': 1, 'birs': 2, 'skb': 1}},
2495:{'nm':'魔壊の星天使・リュエル','main':3,'sub':5,'type':['god', 'evil'],'hp':2598,'atk':1659,'re':398,'aw':{'2way': 3, 'ht': 1, 'birs': 2, 'skb': 1}},
2496:{'nm':'煌斧の星天使・アリエル','main':4,'sub':1,'type':['god', 'attack'],'hp':2805,'atk':1703,'re':308,'aw':{'2way': 3, 'ht': 1, 'birs': 2, 'skb': 1}},
2497:{'nm':'冥鈴の星天使・ルミエル','main':5,'sub':2,'type':['god', 'evil'],'hp':3468,'atk':1582,'re':187,'aw':{'2way': 3, 'ym': 1, 'birs': 2, 'skb': 1}},
2498:{'nm':'灼龍の熾天使・ウリエル','main':1,'sub':1,'type':['god', 'dragon', 'recovery'],'hp':2545,'atk':1892,'re':606,'aw':{'hir': 3, 're': 4, 'skb': 1, 'huin': 1}},
2499:{'nm':'神成の大天使・ガブリエル','main':2,'sub':2,'type':['god', 'recovery', 'attack'],'hp':2538,'atk':1719,'re':723,'aw':{'mzr': 3, 're': 4, 'skb': 1, 'huin': 1}},
2500:{'nm':'滅尽の大天使・ミカエル','main':3,'sub':3,'type':['god', 'attack', 'recovery'],'hp':2420,'atk':1969,'re':611,'aw':{'kir': 3, 're': 4, 'skb': 1, 'huin': 1}},
2501:{'nm':'創智の大天使・ラファエル','main':4,'sub':1,'type':['god', 'recovery', 'vitality'],'hp':3720,'atk':1278,'re':635,'aw':{'hkr': 5, 'bire': 1, 'skb': 2, 'huin': 1}},
2502:{'nm':'背徳の熾天使・ルシファー','main':5,'sub':2,'type':['god', 'balance', 'evil'],'hp':3228,'atk':1656,'re':554,'aw':{'2way': 3, 're': 4, 'skb': 1, 'huin': 1}},
2503:{'nm':'爆轟の魔神卿・ベリアル','main':1,'sub':1,'type':['evil', 'vitality', 'attack'],'hp':4040,'atk':1606,'re':327,'aw':{'hir': 3, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2504:{'nm':'我道の魔神卿・アモン','main':2,'sub':4,'type':['evil', 'vitality', 'recovery'],'hp':3895,'atk':1363,'re':513,'aw':{'mzr': 3, 'birs': 2, 'skb': 2, 'huin': 1, 'kilr': 1}},
2505:{'nm':'覚醒アスタロト','main':3,'sub':4,'type':['evil', 'recovery'],'hp':2800,'atk':1680,'re':604,'aw':{'kir': 3, 'birs': 2, 'skb': 2, 'huin': 1}},
2506:{'nm':'王眼の魔神卿・バアル','main':4,'sub':5,'type':['evil', 'attack', 'recovery'],'hp':2893,'atk':1826,'re':530,'aw':{'hkr': 3, 'birs': 2, 'skb': 2, 'huin': 1, 'mlb': 1}},
2507:{'nm':'覚醒神魔王ルシファー','main':5,'sub':4,'type':['evil', 'god'],'hp':3028,'atk':1606,'re':584,'aw':{'ymr': 3, 'skb': 3, 'huin': 1, 'kilr': 1}},
2509:{'nm':'伐爪の緑龍契士・シルヴィ','main':3,'sub':4,'type':['dragon', 'attack'],'hp':3010,'atk':2063,'re':233,'aw':{'2way': 2, 'kir': 2, 'skb': 1, 'yb': 1}},
2510:{'nm':'星鐘の麒麟姫・サクヤ','main':4,'sub':1,'type':['god', 'recovery'],'hp':3428,'atk':1470,'re':654,'aw':{'2way': 2, 'hi': 1, 'hk': 1, 'gls': 1, 'jm': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2511:{'nm':'聖堂の女主神・カーリー','main':1,'sub':5,'type':['god', 'dragon'],'hp':4025,'atk':2074,'re':405,'aw':{'2way': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
2512:{'nm':'聖夜の赤龍喚士・ソニア','main':1,'sub':3,'type':['dragon', 'evil'],'hp':3397,'atk':2175,'re':165,'aw':{'hir': 2, 'kir': 1, 'bire': 1, 'skb': 2, 'yb': 1}},
2513:{'nm':'星雪の白虎・ハク','main':5,'sub':1,'type':['god', 'dragon'],'hp':3493,'atk':1491,'re':309,'aw':{'hi': 1, 'mz': 1, 'ym': 5, 'skb': 1, 'yb': 1}},
2515:{'nm':'聖祭の女傑・エキドナ','main':1,'sub':3,'type':['recovery'],'hp':1277,'atk':1349,'re':650,'aw':{'ht': 2, 'hir': 1, 'skb': 1}},
2516:{'nm':'聖堂の歌姫・セイレーン','main':2,'sub':1,'type':['recovery'],'hp':1611,'atk':1135,'re':691,'aw':{'ht': 2, 'mzr': 1, 'skb': 1}},
2517:{'nm':'聖樹の精霊・アルラウネ','main':3,'sub':1,'type':['recovery'],'hp':2224,'atk':1099,'re':518,'aw':{'ht': 2, 'kir': 1, 'skb': 1}},
2518:{'nm':'聖天の使徒・エンジェル','main':4,'sub':1,'type':['recovery'],'hp':1530,'atk':1110,'re':730,'aw':{'ht': 2, 'hkr': 1, 'skb': 1}},
2519:{'nm':'聖夜の魔女・リリス','main':5,'sub':1,'type':['recovery'],'hp':1427,'atk':1358,'re':608,'aw':{'ht': 2, 'ymr': 1, 'skb': 1}},
2520:{'nm':'遊覧の魔導姫・アルス＝パウリナ','main':2,'sub':1,'type':['vitality', 'evil'],'hp':3638,'atk':1217,'re':0,'aw':{'hi': 2, 'mz': 5, 'skb': 2}},
2526:{'nm':'覚醒マシンヘラ','main':5,'sub':0,'type':['machine'],'hp':5000,'atk':2000,'re':300,'aw':{'2way': 1, 'ymr': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'kilr': 1}},
2528:{'nm':'覚醒マシンゼウス','main':4,'sub':0,'type':['machine'],'hp':4000,'atk':2350,'re':400,'aw':{'2way': 1, 'hkr': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'kilr': 1}},
2533:{'nm':'遊山の天舞神・アマテラスオオカミ','main':4,'sub':2,'type':['god', 'recovery'],'hp':3821,'atk':1011,'re':682,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 2, 'kilr': 1}},
2534:{'nm':'紅日の寿龍喚士・カンナ','main':4,'sub':1,'type':['dragon', 'god'],'hp':4078,'atk':2100,'re':403,'aw':{'2way': 4, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
2535:{'nm':'初日の朱雀姫・レイラン','main':1,'sub':4,'type':['god', 'dragon'],'hp':3335,'atk':1577,'re':302,'aw':{'hi': 5, 'ki': 1, 'hk': 1, 'skb': 1, 'yb': 1}},
2536:{'nm':'宿願の武皇神・ヤマトタケル','main':1,'sub':4,'type':['god', 'dragon'],'hp':3473,'atk':1301,'re':428,'aw':{'hir': 1, 'bire': 1, 'skb': 3, 'huin': 1, 'yb': 1, 'mlb': 1, 'kilr': 1}},
2537:{'nm':'初夢招福神・ホルス','main':1,'sub':4,'type':['god', 'attack'],'hp':3255,'atk':1874,'re':150,'aw':{'hi': 5, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
2538:{'nm':'初日影の幻光・服部半蔵','main':4,'sub':5,'type':['attack', 'evil'],'hp':2089,'atk':1898,'re':480,'aw':{'2way': 1, 'hkr': 1, 'skb': 2, 'huin': 1, 'kilr': 1}},
2539:{'nm':'鎮守の翠月花・かぐや姫','main':4,'sub':3,'type':['recovery', 'god'],'hp':2195,'atk':1409,'re':623,'aw':{'2way': 1, 'ymdec': 4, 'skb': 1, 'yb': 1}},
2540:{'nm':'伝統のだるま・大天狗','main':3,'sub':4,'type':['vitality', 'evil'],'hp':4126,'atk':1317,'re':0,'aw':{'jm': 1, 'skb': 4, 'huin': 1}},
2563:{'nm':'滅弓の鋼星神・アウストラリス','main':3,'sub':2,'type':['machine', 'god'],'hp':3110,'atk':1555,'re':475,'aw':{'kir': 5}},
2566:{'nm':'隔世の蒼龍喚士・ソニア','main':2,'sub':5,'type':['dragon', 'vitality'],'hp':5780,'atk':1609,'re':0,'aw':{'mz': 1, 'mzr': 2, 'ymr': 1, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2567:{'nm':'宿世の翠龍喚士・ソニア','main':3,'sub':5,'type':['dragon', 'balance'],'hp':3938,'atk':1820,'re':425,'aw':{'ki': 1, 'kir': 2, 'ymr': 1, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2568:{'nm':'聖都の守護神・アテナ アナザー','main':4,'sub':3,'type':['god', 'attack'],'hp':3018,'atk':2251,'re':0,'aw':{'2way': 2, 'kir': 1, 'gls': 2, 'skb': 1, 'huin': 1, 'mlb': 1, 'brk': 1}},
2569:{'nm':'翠輝星の麒麟・サクヤ アナザー','main':4,'sub':3,'type':['god', 'vitality', 'dragon'],'hp':4028,'atk':1470,'re':384,'aw':{'2way': 1, 'hk': 1, 'gls': 1, 'jm': 1, 'dk': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
2570:{'nm':'絶世の紅龍喚士・ソニア アナザー','main':1,'sub':5,'type':['dragon', 'evil'],'hp':3297,'atk':1925,'re':165,'aw':{'hir': 1, 'ymr': 1, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1, 'cmbs': 1}},
2592:{'nm':'裁秤の鋼星神・エスカマリ','main':5,'sub':4,'type':['machine', 'god'],'hp':3805,'atk':1555,'re':293,'aw':{'ym': 7, 'skb': 1, 'huin': 1}},
2594:{'nm':'抗神機・ラグナロク＝ドラゴン','main':3,'sub':5,'type':['dragon', 'machine'],'hp':5030,'atk':1605,'re':0,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 2}},
2595:{'nm':'ボルメテウス・蒼炎・ドラゴン','main':1,'sub':2,'type':['dragon', 'machine'],'hp':3863,'atk':1863,'re':108,'aw':{'2way': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2606:{'nm':'黒焚連合初代総長・古川修','main':3,'sub':1,'type':['vitality'],'hp':3803,'atk':1458,'re':103,'aw':{'skb': 3, 'huin': 1, 'kilr': 1}},
2639:{'nm':'神脅の毒蛇・ヨルムンガンド','main':3,'sub':2,'type':['dragon', 'evil'],'hp':4195,'atk':1508,'re':103,'aw':{'2way': 1, 'dk': 1, 'skb': 2, 'yb': 2}},
2641:{'nm':'神仇の魔狼・フェンリル','main':5,'sub':1,'type':['evil', 'attack'],'hp':3005,'atk':2010,'re':213,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 1}},
2657:{'nm':'義烈の武皇神・ヤマトタケル','main':1,'sub':1,'type':['god', 'dragon', 'attack'],'hp':3573,'atk':1701,'re':428,'aw':{'hir': 3, 'bire': 1, 'skb': 3, 'huin': 1, 'yb': 1}},
2658:{'nm':'敬愛の星海神・アンドロメダ','main':2,'sub':2,'type':['god', 'recovery', 'vitality'],'hp':3985,'atk':1238,'re':578,'aw':{'2way': 1, 'mzr': 3, 'bire': 1, 'skb': 1, 'huin': 2, 'yb': 1}},
2659:{'nm':'勇武の破邪神・ペルセウス','main':3,'sub':3,'type':['god', 'balance', 'dragon'],'hp':3745,'atk':1644,'re':409,'aw':{'kir': 2, 'bire': 1, 'skb': 2, 'huin': 2, 'yb': 2}},
2660:{'nm':'功徳の金猿神・孫悟空','main':4,'sub':4,'type':['god', 'vitality', 'recovery'],'hp':3728,'atk':1374,'re':576,'aw':{'2way': 1, 'hkr': 2, 'bire': 1, 'skb': 3, 'huin': 1, 'yb': 1}},
2661:{'nm':'冷刻の冥夜神・パンドラ','main':5,'sub':5,'type':['god', 'evil', 'recovery'],'hp':3248,'atk':1474,'re':659,'aw':{'2way': 1, 'ymr': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
2662:{'nm':'覚醒パンドラ','main':5,'sub':1,'type':['evil', 'vitality'],'hp':4148,'atk':1474,'re':279,'aw':{'ymr': 3, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2663:{'nm':'追憶の時女神・ウルド','main':1,'sub':2,'type':['god', 'attack'],'hp':2715,'atk':1888,'re':421,'aw':{'2way': 1, 'hi': 3, 'ht': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2685:{'nm':'魔人の一撃・茶渡泰虎','main':1,'sub':3,'type':['vitality'],'hp':3165,'atk':1648,'re':13,'aw':{'hi': 1, 'hir': 1, 'gls': 1}},
2689:{'nm':'元技術開発局局長・浦原喜助','main':3,'sub':5,'type':['balance'],'hp':3310,'atk':1570,'re':313,'aw':{'kir': 4, 'gls': 2, 'skb': 1, 'huin': 1}},
2691:{'nm':'十番隊隊長・日番谷冬獅郎','main':2,'sub':2,'type':['balance', 'god'],'hp':3035,'atk':1678,'re':333,'aw':{'mzr': 1, 'dk': 2, 'skb': 2, 'yb': 1}},
2695:{'nm':'十一番隊隊長・更木剣八','main':5,'sub':5,'type':['attack', 'god'],'hp':3055,'atk':2225,'re':0,'aw':{'ym': 2, 'ymr': 2, 'jm': 2, 'skb': 1}},
2711:{'nm':'救翼の龍騎神・シェリアス','main':2,'sub':4,'type':['dragon', 'god'],'hp':3628,'atk':1533,'re':230,'aw':{'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 2}},
2713:{'nm':'灼刃の龍機神・バルディン','main':1,'sub':5,'type':['dragon', 'machine'],'hp':3028,'atk':2003,'re':248,'aw':{'skb': 2, 'huin': 2, 'kilr': 2}},
2714:{'nm':'予知の時女神・スクルド','main':2,'sub':3,'type':['god', 'vitality'],'hp':5075,'atk':1411,'re':301,'aw':{'2way': 2, 'mz': 2, 'ki': 1, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2716:{'nm':'鍛錬神・ヘパイストス＝ドラゴン','main':1,'sub':0,'type':['dragon', 'god'],'hp':4400,'atk':2200,'re':200,'aw':{'2way': 2, 'hir': 1, 'skb': 1}},
2717:{'nm':'聖舶神・ノア＝ドラゴン','main':2,'sub':0,'type':['dragon', 'god'],'hp':6000,'atk':1500,'re':150,'aw':{'mzr': 2, 'skb': 1, 'yb': 1}},
2718:{'nm':'起源神・ガイア=ドラゴン','main':3,'sub':0,'type':['dragon', 'machine'],'hp':5500,'atk':1700,'re':180,'aw':{'2way': 2, 'skb': 1, 'yb': 1}},
2719:{'nm':'全能神・ゼウス＝ドラゴン','main':4,'sub':0,'type':['dragon', 'god'],'hp':5000,'atk':2000,'re':300,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2720:{'nm':'暗黒神・ヘラ＝ドラゴン','main':5,'sub':0,'type':['dragon', 'god'],'hp':4800,'atk':2100,'re':300,'aw':{'ym': 2, 'skb': 1, 'yb': 1}},
2722:{'nm':'覚醒ヘパイストス','main':1,'sub':1,'type':['god', 'attack'],'hp':3565,'atk':1655,'re':173,'aw':{'2way': 1, 'hi': 1, 'skb': 1}},
2735:{'nm':'GCナビゲーター・リンカ','main':4,'sub':4,'type':['balance'],'hp':3035,'atk':1378,'re':320,'aw':{'hk': 6, 'yb': 1}},
2739:{'nm':'転生バーンフェニックスナイト・ホムラ','main':1,'sub':1,'type':['balance', 'god', 'machine'],'hp':3134,'atk':1373,'re':419,'aw':{'2way': 2, 'hi': 3}},
2740:{'nm':'転生フラッドフェンリルナイト・カムイ','main':2,'sub':2,'type':['balance', 'evil', 'machine'],'hp':3137,'atk':1453,'re':356,'aw':{'2way': 2, 'mz': 3}},
2741:{'nm':'転生エンシェントドラゴンナイト・セロ','main':3,'sub':3,'type':['dragon', 'balance', 'machine'],'hp':3238,'atk':1412,'re':366,'aw':{'2way': 2, 'ki': 3}},
2742:{'nm':'転生スカイゴッドナイト・ヴァーチェ','main':4,'sub':4,'type':['god', 'balance', 'machine'],'hp':3079,'atk':1397,'re':408,'aw':{'2way': 2, 'hk': 3}},
2743:{'nm':'転生カオスドラゴンナイト・ヴォイス','main':5,'sub':5,'type':['dragon', 'balance', 'machine'],'hp':3197,'atk':1436,'re':345,'aw':{'2way': 2, 'ym': 3}},
2744:{'nm':'忘我の赤龍契士・ガディウス','main':1,'sub':4,'type':['dragon', 'recovery'],'hp':3663,'atk':1204,'re':753,'aw':{'hi': 1, 'hir': 2, 'birs': 2, 'bire': 1, 'yb': 1, 'kilr': 1}},
2745:{'nm':'滅法の黒龍契士・ティフォン','main':5,'sub':2,'type':['dragon', 'balance'],'hp':4213,'atk':1746,'re':416,'aw':{'2way': 1, 'ymr': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
2746:{'nm':'隻眼の獄幻魔・ズオー','main':5,'sub':3,'type':['evil', 'vitality'],'hp':5195,'atk':1621,'re':0,'aw':{'2way': 1, 'kir': 1, 'ymr': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
2749:{'nm':'覚醒アルテミス','main':3,'sub':2,'type':['attack', 'evil'],'hp':2540,'atk':1965,'re':501,'aw':{'2way': 2, 'ki': 2, 'kir': 1, 'gls': 1, 'skb': 1, 'huin': 1}},
2752:{'nm':'天空の守護龍・アヴァロンドレイク','main':3,'sub':4,'type':['god', 'dragon', 'machine'],'hp':4075,'atk':1509,'re':250,'aw':{'kir': 3, 'skb': 4, 'huin': 1}},
2756:{'nm':'紅蘭の君子・シャンメイ','main':1,'sub':0,'type':['recovery'],'hp':2812,'atk':1903,'re':1001,'aw':{'hir': 3, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
2758:{'nm':'蒼竹の君子・ヨウユウ','main':2,'sub':0,'type':['attack'],'hp':3655,'atk':2606,'re':325,'aw':{'mz': 3, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1, 'cmbs': 1}},
2760:{'nm':'黄菊の君子・シュウミン','main':4,'sub':0,'type':['vitality'],'hp':7011,'atk':1465,'re':0,'aw':{'hkr': 4, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
2762:{'nm':'紫梅の君子・シンファ','main':5,'sub':0,'type':['balance'],'hp':4496,'atk':1714,'re':599,'aw':{'2way': 2, 'ymr': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
2764:{'nm':'クラウド＆フェンリル','main':4,'sub':4,'type':['attack', 'machine'],'hp':2873,'atk':2009,'re':488,'aw':{'2way': 2, 'hkr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
2765:{'nm':'片翼の天使・セフィロス','main':5,'sub':5,'type':['attack', 'evil'],'hp':4035,'atk':2302,'re':123,'aw':{'2way': 2, 'skb': 1, 'yb': 2, 'kilr': 3, 'cmbs': 1}},
2766:{'nm':'覚悟の召喚士・ユウナ','main':4,'sub':2,'type':['recovery', 'attack'],'hp':3038,'atk':2078,'re':896,'aw':{'skb': 1, 'huin': 2, 'yb': 4, 'cmbs':2}},
2768:{'nm':'暗黒騎士・セシル','main':5,'sub':5,'type':['attack', 'evil'],'hp':2798,'atk':2153,'re':428,'aw':{'2way': 2, 'ymdec': 3, 'skb': 1, 'huin': 1, 'yb': 2}},
2769:{'nm':'パラディン・セシル','main':4,'sub':5,'type':['attack', 'vitality'],'hp':5102,'atk':1596,'re':78,'aw':{'2way': 2, 're': 3, 'skb': 1, 'huin': 1, 'yb': 2}},
2771:{'nm':'探求の風・バッツ','main':3,'sub':4,'type':['balance'],'hp':3495,'atk':1455,'re':328,'aw':{'2way': 3, 'hkdec': 3, 'huin': 2, 'yb': 1}},
2780:{'nm':'解放者・ライトニング','main':4,'sub':4,'type':['attack', 'recovery', 'god'],'hp':3475,'atk':1790,'re':598,'aw':{'hkr': 3, 'skb': 3, 'huin': 1, 'yb': 1, 'kilr': 1}},
2800:{'nm':'究極装備・バーサーカー','main':1,'sub':1,'type':['vitality', 'attack'],'hp':3538,'atk':1508,'re':4,'aw':{'2way': 1, 'hir': 1, 'skb': 3, 'kilr': 1}},
2807:{'nm':'彩王妃・ヘラ・ベオーク','main':3,'sub':5,'type':['evil', 'god'],'hp':3456,'atk':1815,'re':274,'aw':{'ki': 2, 'kir': 2, 'hkdec': 1, 'skb': 1}},
2808:{'nm':'翠光の月天花・かぐや姫','main':3,'sub':4,'type':['recovery', 'god'],'hp':2795,'atk':1409,'re':653,'aw':{'2way': 1, 'kir': 1, 'skb': 2, 'yb': 1}},
2810:{'nm':'誠意の学級委員長・アテナ','main':3,'sub':4,'type':['god', 'recovery', 'attack'],'hp':2710,'atk':2005,'re':683,'aw':{'2way': 3, 'kir': 2, 'birs': 2, 'skb': 1, 'huin': 1}},
2811:{'nm':'神聖の風紀委員長・アテナ','main':3,'sub':3,'type':['god', 'attack', 'recovery'],'hp':2710,'atk':2005,'re':683,'aw':{'2way': 3, 'kir': 2, 'birs': 2, 'skb': 1, 'huin': 1}},
2812:{'nm':'才色兼備の特待生・イシス','main':2,'sub':5,'type':['attack', 'recovery'],'hp':2538,'atk':1655,'re':673,'aw':{'2way': 2, 'mz': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
2813:{'nm':'軽音部の麒麟姫・サクヤ','main':2,'sub':3,'type':['dragon', 'balance', 'machine'],'hp':3378,'atk':1570,'re':504,'aw':{'2way': 2, 'gls': 1, 'jm': 1, 'dk': 1, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2814:{'nm':'図書室の管理神・カーリー','main':3,'sub':5,'type':['god', 'recovery'],'hp':3325,'atk':1774,'re':355,'aw':{'kir': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
2815:{'nm':'新聞部の特命記者・猿飛佐助','main':2,'sub':3,'type':['attack', 'evil'],'hp':2697,'atk':2036,'re':216,'aw':{'2way': 1, 'mzr': 1, 'skb': 2, 'huin': 1, 'kilr': 1}},
2816:{'nm':'飼育部の元気娘・赤ずきん','main':1,'sub':1,'type':['recovery', 'vitality'],'hp':3003,'atk':810,'re':511,'aw':{'hi': 1, 'hir': 1, 'birs': 2, 'skb': 1, 'huin': 1}},
2817:{'nm':'占い部の名物部長・白雪姫','main':2,'sub':2,'type':['vitality', 'god'],'hp':2851,'atk':863,'re':522,'aw':{'mz': 1, 'mzr': 1, 'birs': 2, 'bire': 1, 'skb': 1}},
2818:{'nm':'帰宅部のおてんば娘・おやゆび姫','main':3,'sub':3,'type':['attack', 'recovery'],'hp':1415,'atk':1613,'re':504,'aw':{'2way': 1, 'ki': 1, 'birs': 2, 'skb': 1, 'huin': 1}},
2819:{'nm':'演劇部のヒロイン・シンデレラ','main':4,'sub':4,'type':['vitality', 'god'],'hp':3030,'atk':802,'re':507,'aw':{'2way': 1, 'hk': 1, 'birs': 2, 'skb': 1, 'yb': 1}},
2820:{'nm':'読書部の才媛・ねむり姫','main':5,'sub':5,'type':['balance', 'evil'],'hp':2530,'atk':1372,'re':315,'aw':{'2way': 1, 'ym': 1, 'birs': 2, 'skb': 1, 'huin': 1}},
2821:{'nm':'バレー部の悪魔・テウルギア','main':1,'sub':3,'type':['attack', 'evil'],'hp':2950,'atk':1900,'re':246,'aw':{'hi': 5, 'ki': 2, 'skb': 1, 'huin': 1}},
2824:{'nm':'メトロポリスの守護者・スーパーマン','main':4,'sub':1,'type':['attack', 'vitality'],'hp':3915,'atk':1977,'re':110,'aw':{'2way': 1, 'hkr': 2, 'skb': 2, 'huin': 1, 'kilr': 1}},
2827:{'nm':'アーマード・バットマン','main':5,'sub':0,'type':['evil', 'machine'],'hp':4515,'atk':2003,'re':285,'aw':{'ymr': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
2838:{'nm':'忠心の白猿臣・ハヌマーン','main':3,'sub':2,'type':['attack', 'vitality'],'hp':4512,'atk':1703,'re':-100,'aw':{'kir': 4, 'gls': 2, 'yb': 1}},
2842:{'nm':'浄化の力・桔梗','main':4,'sub':5,'type':['recovery'],'hp':2328,'atk':1193,'re':553,'aw':{'huin': 3, 'yb': 1}},
2844:{'nm':'符咒士・ヒョウ','main':5,'sub':5,'type':['attack', 'evil'],'hp':2685,'atk':1810,'re':213,'aw':{'birs': 2, 'huin': 1, 'kilr': 2}},
2846:{'nm':'麗の首領・紅麗','main':1,'sub':5,'type':['attack', 'evil'],'hp':2405,'atk':1778,'re':320,'aw':{'hir': 3, 'huin': 2}},
2854:{'nm':'魔装フォカロル・シンドバッド','main':3,'sub':5,'type':['balance', 'evil'],'hp':4016,'atk':1755,'re':344,'aw':{'2way': 2, 'birs': 2, 'skb': 2, 'huin': 2, 'yb': 1}},
2856:{'nm':'魔装ザガン・練白龍','main':3,'sub':5,'type':['attack', 'evil'],'hp':2613,'atk':1678,'re':173,'aw':{'skb': 1, 'yb': 4}},
2891:{'nm':'光の星導機・オルファリオン','main':4,'sub':0,'type':['machine'],'hp':6002,'atk':1917,'re':200,'aw':{'2way': 1, 'hk': 1, 'birs': 2, 'skb': 3, 'huin': 1, 'yb': 1}},
2892:{'nm':'開眼の瞑想神・サンダルフォン','main':4,'sub':2,'type':['god', 'recovery'],'hp':2745,'atk':1307,'re':705,'aw':{'hk': 1, 'hkr': 1, 'birs': 2, 'huin': 1}},
2893:{'nm':'魂縛の黒冥姫・ヘル','main':5,'sub':4,'type':['evil', 'dragon'],'hp':4018,'atk':1855,'re':20,'aw':{'2way': 2, 'ym': 2, 'skb': 1, 'huin': 1}},
2894:{'nm':'忠実の魔公子・コシュまる','main':3,'sub':5,'type':['evil', 'vitality'],'hp':4035,'atk':1619,'re':150,'aw':{'kir': 2, 're': 1, 'skb': 2}},
2900:{'nm':'神討の魔狼・フェンリル＝ヴィズ','main':4,'sub':2,'type':['evil', 'vitality'],'hp':4666,'atk':1449,'re':111,'aw':{'skb': 2, 'huin': 2, 'yb': 2, 'kilr': 1}},
2901:{'nm':'覚醒曹操','main':1,'sub':1,'type':['vitality', 'evil'],'hp':4395,'atk':1856,'re':27,'aw':{'hi': 2, 'hir': 2, 'birs': 2, 'skb': 1, 'huin': 1}},
2905:{'nm':'凶星の飛将神・呂布','main':5,'sub':1,'type':['god', 'evil', 'dragon'],'hp':3813,'atk':2293,'re':0,'aw':{'ym': 1, 'ymr': 2, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1}},
2916:{'nm':'歴戦の皇帝・ナポレオン','main':1,'sub':4,'type':['dragon', 'attack'],'hp':3412,'atk':1801,'re':88,'aw':{'hi': 5, 'skb': 1, 'huin': 1, 'kilr': 1, 'cmbs': 1}},
2918:{'nm':'蛮力の赤髭・バルバロッサ','main':2,'sub':1,'type':['attack', 'evil'],'hp':4221,'atk':1542,'re':0,'aw':{'2way': 3, 'skb': 1, 'huin': 2, 'yb': 1, 'kilr': 1}},
2920:{'nm':'神業の義賊・ロビンフッド','main':3,'sub':1,'type':['balance', 'god'],'hp':3198,'atk':1453,'re':388,'aw':{'2way': 2, 'skb': 1, 'huin': 2, 'yb': 1, 'kilr': 1, 'cmbs': 1}},
2922:{'nm':'美玉の寵姫・楊貴妃','main':4,'sub':3,'type':['balance', 'evil'],'hp':3614,'atk':1350,'re':330,'aw':{'2way': 1, 'skb': 2, 'huin': 2, 'yb': 1, 'kilr': 1, 'cmbs': 1}},
2924:{'nm':'反乱の天魔・織田信長','main':5,'sub':1,'type':['evil', 'dragon'],'hp':2899,'atk':1706,'re':301,'aw':{'ymr': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
2925:{'nm':'残光の破壊龍・アポカリプス','main':4,'sub':4,'type':['dragon', 'god', 'machine'],'hp':4000,'atk':1650,'re':179,'aw':{'2way': 2, 'hkr': 2, 'gls': 1, 'skb': 2, 'huin': 1}},
2927:{'nm':'白光炎隼神のアーマー・エース','main':1,'sub':4,'type':['god', 'attack'],'hp':3905,'atk':1974,'re':90,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 1}},
2929:{'nm':'月下の愛猫神のアーマー・エース','main':3,'sub':5,'type':['god', 'evil'],'hp':3810,'atk':1507,'re':385,'aw':{'ki': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 1}},
2939:{'nm':'宝剣龍・ドラクリスト','main':1,'sub':3,'type':['dragon', 'attack'],'hp':2742,'atk':1798,'re':52,'aw':{'hir': 5, 'kir': 4}},
2940:{'nm':'絶海龍・ウェルドール','main':2,'sub':4,'type':['dragon', 'vitality'],'hp':4514,'atk':986,'re':0,'aw':{'skb': 5}},
2941:{'nm':'緑冥龍・ラグウェル','main':3,'sub':2,'type':['dragon', 'evil'],'hp':2716,'atk':1387,'re':302,'aw':{'huin': 5}},
2945:{'nm':'鋼杖の龍機神・バルボワ','main':3,'sub':2,'type':['dragon', 'machine'],'hp':3624,'atk':1524,'re':252,'aw':{'skb': 2, 'huin': 1, 'kilr': 2}},
2948:{'nm':'超覚醒ゼウス・ディオス','main':3,'sub':4,'type':['god', 'balance'],'hp':3682,'atk':1418,'re':514,'aw':{'ki': 2, 'kir': 1, 'skb': 2, 'mlb': 1}},
2949:{'nm':'聖鐘の花嫁・エスカマリ','main':4,'sub':4,'type':['machine', 'god'],'hp':3805,'atk':1555,'re':293,'aw':{'hk': 7, 'skb': 1, 'huin': 1}},
2950:{'nm':'疾走する新郎・ガディウス','main':4,'sub':1,'type':['dragon', 'recovery'],'hp':3063,'atk':1204,'re':753,'aw':{'hk': 1, 'hkr': 2, 'birs': 2, 'bire': 1, 'skb': 1, 'yb': 1}},
2951:{'nm':'無邪気な新婦・サツキ','main':4,'sub':5,'type':['dragon', 'attack'],'hp':4005,'atk':1703,'re':146,'aw':{'2way': 3, 'skb': 1, 'huin': 1}},
2952:{'nm':'可憐な花嫁・バステト','main':4,'sub':3,'type':['evil', 'balance'],'hp':3560,'atk':1457,'re':485,'aw':{'2way': 1, 'hk': 1, 'dk': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
2953:{'nm':'情熱の太陽神・ラー','main':1,'sub':4,'type':['evil', 'god'],'hp':4355,'atk':1300,'re':366,'aw':{'hi': 1, 'birs': 2, 'gls': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
2954:{'nm':'深愛の新郎・明智光秀','main':4,'sub':4,'type':['god', 'evil'],'hp':2828,'atk':1719,'re':189,'aw':{'hkr': 2, 'skb': 1, 'huin': 1}},
2969:{'nm':'星刻の時龍契士・ミル','main':4,'sub':0,'type':['dragon', 'machine', 'god'],'hp':4580,'atk':1710,'re':660,'aw':{'2way': 1, 'hk': 3, 'hkr': 1, 'birs': 2, 'skb': 1, 'huin': 1}},
2970:{'nm':'緋空の焔龍喚士・ツバキ','main':1,'sub':4,'type':['dragon', 'god', 'vitality'],'hp':4013,'atk':1658,'re':298,'aw':{'hi': 3, 'hk': 2, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2971:{'nm':'藍海の水龍喚士・スミレ','main':2,'sub':4,'type':['dragon', 'vitality'],'hp':4803,'atk':1305,'re':121,'aw':{'mz': 4, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
2972:{'nm':'碧地の風龍喚士・カエデ','main':3,'sub':4,'type':['dragon', 'attack'],'hp':4130,'atk':1840,'re':281,'aw':{'2way': 3, 'ki': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
2979:{'nm':'覚醒インドラ','main':4,'sub':3,'type':['dragon', 'vitality'],'hp':4550,'atk':1427,'re':219,'aw':{'2way': 2, 'skb': 2, 'huin': 2, 'yb': 2}},
2980:{'nm':'覚醒ヴリトラ','main':5,'sub':1,'type':['dragon', 'evil'],'hp':4067,'atk':1845,'re':111,'aw':{'ymr': 4, 'skb': 2, 'huin': 1, 'kilr': 1}},
2981:{'nm':'覚醒アメノウズメ','main':1,'sub':5,'type':['vitality', 'evil'],'hp':4545,'atk':1325,'re':301,'aw':{'hi': 1, 'hir': 2, 're': 2, 'birs': 2, 'skb': 1}},
2982:{'nm':'覚醒ウミサチヤマサチ','main':2,'sub':5,'type':['balance', 'evil'],'hp':3355,'atk':1551,'re':551,'aw':{'2way': 2, 'mz': 1, 'gls': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
2983:{'nm':'覚醒クシナダヒメ','main':3,'sub':4,'type':['recovery', 'dragon'],'hp':4305,'atk':1632,'re':610,'aw':{'ki': 1, 'ht': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2984:{'nm':'覚醒イザナギ','main':4,'sub':2,'type':['god', 'balance'],'hp':3795,'atk':1566,'re':375,'aw':{'2way': 2, 'hk': 2, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
2985:{'nm':'覚醒オオクニヌシ','main':5,'sub':3,'type':['dragon', 'evil'],'hp':5145,'atk':1479,'re':54,'aw':{'2way': 1, 'ym': 1, 'skb': 2, 'huin': 2, 'yb': 2}},
2987:{'nm':'鉄機王・スタージャスティス','main':3,'sub':4,'type':['machine', 'vitality'],'hp':4442,'atk':1493,'re':46,'aw':{'kir': 1, 'birs': 2, 'skb': 2, 'yb': 1}},
2989:{'nm':'鉄機帝・アナザージャスティス','main':2,'sub':5,'type':['machine', 'attack'],'hp':3484,'atk':2008,'re':155,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 2, 'yb': 1}},
2991:{'nm':'狂面の魔公爵・ダンタリオン','main':1,'sub':0,'type':['evil', 'attack'],'hp':4504,'atk':2303,'re':266,'aw':{'hi': 5, 'skb': 1, 'huin': 1, 'yb': 1}},
2993:{'nm':'愛楽の魔君主・シトリー','main':2,'sub':0,'type':['evil', 'recovery'],'hp':3306,'atk':1442,'re':835,'aw':{'mz': 3, 'skb': 1, 'huin': 1, 'yb': 1}},
2995:{'nm':'爆叫の魔伯爵・ロノウェ','main':3,'sub':0,'type':['evil', 'machine'],'hp':3211,'atk':1702,'re':696,'aw':{'skb': 2, 'huin': 1, 'yb': 2}},
2997:{'nm':'宝冠の聖魔王・パイモン','main':4,'sub':0,'type':['evil', 'vitality'],'hp':5502,'atk':1745,'re':302,'aw':{'hk': 4, 'skb': 1, 'huin': 1, 'yb': 2}},
2999:{'nm':'冥瞳の魔神爵・グレモリー','main':5,'sub':0,'type':['evil', 'balance', 'god'],'hp':5002,'atk':1701,'re':600,'aw':{'ymr': 3, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3007:{'nm':'閃光の冒険野郎ヴァン・クロウ','main':4,'sub':3,'type':['evil', 'machine'],'hp':3615,'atk':1810,'re':120,'aw':{'2way': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
3011:{'nm':'アハトロス','main':2,'sub':0,'type':['dragon'],'hp':3342,'atk':1522,'re':506,'aw':{'mz': 3, 'birs': 2, 'gls': 2, 'skb': 1}},
3012:{'nm':'ディエイク','main':4,'sub':0,'type':['dragon'],'hp':3950,'atk':1485,'re':328,'aw':{'hk': 3, 'skb': 1, 'huin': 2, 'yb': 2}},
3015:{'nm':'闘機王・リバティーガイスト','main':1,'sub':3,'type':['machine', 'attack'],'hp':3525,'atk':1859,'re':98,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
3017:{'nm':'闘機帝・アナザーガイスト','main':5,'sub':4,'type':['machine', 'evil'],'hp':4369,'atk':1794,'re':35,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
3019:{'nm':'流浪人・緋村剣心','main':1,'sub':4,'type':['balance'],'hp':4212,'atk':1501,'re':354,'aw':{'hi': 3, 'hk': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
3021:{'nm':'神谷活心流師範代・神谷薫','main':2,'sub':4,'type':['attack'],'hp':2373,'atk':1625,'re':113,'aw':{'mz': 3, 'hk': 3, 'mzr': 2, 'skb': 1}},
3023:{'nm':'神谷活心流門下生・明神弥彦','main':4,'sub':1,'type':['attack'],'hp':2698,'atk':1863,'re':23,'aw':{'2way': 2, 'skb': 1, 'kilr': 1}},
3025:{'nm':'喧嘩屋・相楽左之助','main':3,'sub':1,'type':['vitality'],'hp':4010,'atk':1643,'re':65,'aw':{'skb': 2, 'kilr': 2, 'cmbs': 1}},
3045:{'nm':'十本刀"明王"・悠久山安慈','main':5,'sub':5,'type':['vitality'],'hp':3855,'atk':1453,'re':65,'aw':{'2way': 1, 'skb': 1}},
3053:{'nm':'灼球の星機神・アンタレス','main':1,'sub':4,'type':['machine', 'god'],'hp':2988,'atk':1973,'re':158,'aw':{'hi': 2, 'ht': 2, 'skb': 1, 'huin': 2}},
3054:{'nm':'灼鎌の星機神・アンタレス','main':1,'sub':3,'type':['machine', 'god'],'hp':2788,'atk':2173,'re':108,'aw':{'hi': 2, 'ht': 2, 'skb': 2, 'huin': 2, 'kilr': 1}},
3055:{'nm':'爽河の星機神・アルレシャ','main':2,'sub':3,'type':['machine', 'god'],'hp':3128,'atk':1503,'re':408,'aw':{'mz': 2, 'ht': 2, 'skb': 1, 'huin': 2}},
3056:{'nm':'霊河の星機神・アルレシャ','main':2,'sub':5,'type':['machine', 'god'],'hp':2928,'atk':1703,'re':348,'aw':{'mz': 2, 'ht': 2, 'skb': 2, 'huin': 2, 'kilr': 1}},
3057:{'nm':'幽樹の星機神・スピカ','main':3,'sub':5,'type':['machine', 'god'],'hp':3220,'atk':1585,'re':333,'aw':{'ki': 2, 'ht': 2, 'skb': 1, 'huin': 2}},
3058:{'nm':'命樹の星機神・スピカ','main':3,'sub':2,'type':['machine', 'god'],'hp':3020,'atk':1735,'re':303,'aw':{'ki': 2, 'ht': 2, 'skb': 2, 'huin': 2, 'kilr': 1}},
3059:{'nm':'奏空の星機神・ポルックス','main':4,'sub':1,'type':['machine', 'god'],'hp':3023,'atk':1785,'re':263,'aw':{'hk': 2, 'ht': 2, 'skb': 1, 'huin': 2}},
3060:{'nm':'奏冥の星機神・ポルックス','main':4,'sub':5,'type':['machine', 'god'],'hp':2823,'atk':1935,'re':243,'aw':{'hk': 2, 'ht': 2, 'skb': 2, 'huin': 2, 'kilr': 1}},
3061:{'nm':'滅砲の星機神・カストル','main':5,'sub':2,'type':['machine', 'god'],'hp':2733,'atk':2080,'re':178,'aw':{'ym': 2, 'ht': 2, 'skb': 1, 'huin': 2}},
3062:{'nm':'滅刃の星機神・カストル','main':5,'sub':4,'type':['machine', 'god'],'hp':2583,'atk':2330,'re':78,'aw':{'ym': 2, 'ht': 2, 'skb': 2, 'huin': 2, 'kilr': 1}},
3068:{'nm':'灼天の勇将神・クリシュナ','main':1,'sub':1,'type':['god', 'balance', 'evil'],'hp':3735,'atk':1767,'re':353,'aw':{'hi': 5, 'hir': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3069:{'nm':'聖徳の麗女神・サラスヴァティ','main':2,'sub':2,'type':['god', 'recovery', 'vitality'],'hp':3815,'atk':1300,'re':608,'aw':{'mz': 1, 'mzr': 2, 'skb': 3, 'huin': 1, 'yb': 2}},
3070:{'nm':'均衡の創界神・ヴィシュヌ','main':3,'sub':3,'type':['god', 'attack', 'evil'],'hp':3565,'atk':1930,'re':306,'aw':{'2way': 3, 'ki': 1, 'skb': 1, 'huin': 2, 'yb': 2}},
3071:{'nm':'財成の学問神・ガネーシャ','main':4,'sub':4,'type':['god', 'recovery', 'attack'],'hp':2725,'atk':1768,'re':670,'aw':{'2way': 2, 'birs': 2, 'jm': 1, 'skb': 1, 'huin': 2, 'yb': 1}},
3072:{'nm':'殲掌の討女神・ドゥルガー','main':5,'sub':2,'type':['god', 'evil', 'attack'],'hp':3823,'atk':1922,'re':223,'aw':{'2way': 2, 'gls': 2, 'skb': 2, 'huin': 2, 'yb': 1}},
3074:{'nm':'覚醒マシンアテナ','main':3,'sub':0,'type':['machine'],'hp':3900,'atk':2650,'re':240,'aw':{'2way': 2, 'ki': 2, 'kir': 1, 'birs': 2, 'skb': 1, 'kilr': 1}},
3076:{'nm':'拳王をめざした男・トキ','main':2,'sub':4,'type':['recovery', 'attack'],'hp':2415,'atk':1957,'re':652,'aw':{'mzr': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
3078:{'nm':'南斗五車星・風のヒューイ','main':3,'sub':3,'type':['attack'],'hp':2375,'atk':1705,'re':215,'aw':{'ki': 3, 'skb': 1, 'mlb': 1}},
3080:{'nm':'南斗五車星・炎のシュレン','main':1,'sub':1,'type':['attack'],'hp':2458,'atk':1993,'re':15,'aw':{'hi': 3, 'skb': 1, 'mlb': 1}},
3082:{'nm':'ケンを慕う少女・リン','main':4,'sub':1,'type':['recovery'],'hp':2198,'atk':805,'re':598,'aw':{'birs': 2, 'skb': 1, 'huin': 1}},
3083:{'nm':'凶災の幻影龍・アニマ','main':1,'sub':5,'type':['dragon', 'evil'],'hp':3275,'atk':1784,'re':296,'aw':{'hir': 1, 'skb': 1, 'huin': 1, 'kilr': 1}},
3084:{'nm':'禍乱の不死龍・カースドラゴン','main':5,'sub':5,'type':['dragon', 'evil'],'hp':5033,'atk':1354,'re':25,'aw':{'2way': 1, 're': 1, 'skb': 1, 'kilr': 1}},
3085:{'nm':'破軍・ドラゴン・ショウグン','main':5,'sub':5,'type':['dragon', 'attack'],'hp':3718,'atk':1643,'re':56,'aw':{'2way': 1, 'ymr': 1, 'skb': 1}},
3088:{'nm':'神命姫神のアーマー・アナ','main':4,'sub':3,'type':['recovery', 'god', 'attack'],'hp':2508,'atk':1639,'re':686,'aw':{'2way': 1, 'hk': 3, 'ht': 1, 'skb': 1, 'yb': 1}},
3089:{'nm':'ホーリーセレスのアーマー・アナ','main':3,'sub':4,'type':['god', 'recovery'],'hp':3074,'atk':1261,'re':771,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'kilr': 2}},
3090:{'nm':'滅法の黒龍契士のアーマーＸ龍喚士・アナ','main':5,'sub':2,'type':['dragon', 'balance'],'hp':4513,'atk':1796,'re':446,'aw':{'2way': 1, 'ymr': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 1}},
3091:{'nm':'大灼熱・クレナイゴウカミ','main':1,'sub':4,'type':['dragon', 'attack'],'hp':2351,'atk':1761,'re':64,'aw':{'hi': 1, 'hir': 1, 'skb': 1}},
3092:{'nm':'剣氷山・シラハ','main':2,'sub':5,'type':['dragon', 'vitality'],'hp':3279,'atk':1123,'re':169,'aw':{'mz': 1, 'mzr': 1, 'skb': 1}},
3093:{'nm':'碧辻風・アデカザキリ','main':3,'sub':2,'type':['dragon', 'recovery'],'hp':2012,'atk':1022,'re':611,'aw':{'ki': 1, 'kir': 1, 'skb': 1}},
3095:{'nm':'タマゾーX覚醒オーディン','main':3,'sub':4,'type':['dragon', 'god', 'balance'],'hp':3601,'atk':1103,'re':364,'aw':{'ki': 7, 'birs': 2}},
3096:{'nm':'青龍契士・ミニりゅーね','main':2,'sub':2,'type':['dragon'],'hp':3009,'atk':1695,'re':191,'aw':{'mz': 5, 'skb': 1}},
3097:{'nm':'緑龍契士・ミニしるびぃ','main':3,'sub':3,'type':['dragon'],'hp':2795,'atk':1767,'re':213,'aw':{'ki': 5, 'skb': 1}},
3098:{'nm':'橙龍契士・ミニさりあ','main':4,'sub':4,'type':['dragon'],'hp':3759,'atk':1374,'re':73,'aw':{'hk': 4, 'skb': 1}},
3099:{'nm':'秘女神・ミニかーりー','main':4,'sub':4,'type':['god'],'hp':2582,'atk':1240,'re':502,'aw':{'kilr': 3}},
3100:{'nm':'龍喚士・ミニそにあ＝ぐらん＝りばーす','main':5,'sub':4,'type':['dragon'],'hp':2458,'atk':1305,'re':300,'aw':{'skb': 2, 'yb': 1, 'kilr': 1}},
3101:{'nm':'烈士の勇猛神・真田幸村','main':1,'sub':1,'type':['god', 'attack'],'hp':2968,'atk':2226,'re':203,'aw':{'hir': 5, 'skb': 2, 'huin': 1}},
3102:{'nm':'鬼気の勇猛神・真田幸村','main':1,'sub':5,'type':['god', 'evil'],'hp':3668,'atk':1876,'re':203,'aw':{'hi': 3, 'hir': 2, 'skb': 1, 'huin': 1}},
3103:{'nm':'観想の智謀神・毛利元就','main':2,'sub':2,'type':['god', 'vitality'],'hp':4135,'atk':1356,'re':196,'aw':{'mzr': 4, 'skb': 2, 'huin': 1}},
3104:{'nm':'果断の智謀神・毛利元就','main':2,'sub':1,'type':['god', 'attack'],'hp':3235,'atk':1806,'re':196,'aw':{'2way': 1, 'mzr': 2, 'skb': 1, 'huin': 1}},
3105:{'nm':'情義の諜報神・石田三成','main':3,'sub':3,'type':['god', 'attack'],'hp':2025,'atk':2083,'re':391,'aw':{'kir': 4, 'skb': 2, 'huin': 1}},
3106:{'nm':'圧制の諜報神・石田三成','main':3,'sub':5,'type':['god', 'evil'],'hp':2525,'atk':1933,'re':331,'aw':{'2way': 1, 'kir': 2, 'skb': 1, 'huin': 1}},
3107:{'nm':'燦爛の傾奇神・前田慶次','main':4,'sub':1,'type':['god', 'balance'],'hp':3220,'atk':1524,'re':368,'aw':{'2way': 2, 'skb': 1, 'huin': 2, 'yb': 1, 'kilr': 1}},
3108:{'nm':'豪壮の傾奇神・前田慶次','main':4,'sub':5,'type':['god', 'attack'],'hp':3020,'atk':1724,'re':308,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
3109:{'nm':'周到の謀略神・明智光秀','main':5,'sub':5,'type':['god', 'evil'],'hp':3128,'atk':1869,'re':189,'aw':{'ymr': 4, 'skb': 2, 'huin': 1}},
3110:{'nm':'憂愁の謀略神・明智光秀','main':5,'sub':4,'type':['god', 'balance'],'hp':3028,'atk':1719,'re':309,'aw':{'ym': 2, 'ymr': 2, 'skb': 1, 'huin': 1}},
3111:{'nm':'楽園の守護者・メタトロン','main':2,'sub':4,'type':['god', 'recovery'],'hp':2454,'atk':1430,'re':893,'aw':{'re': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 2}},
3112:{'nm':'休息の狙撃手・ミル','main':2,'sub':0,'type':['dragon', 'machine', 'god'],'hp':4580,'atk':1710,'re':660,'aw':{'2way': 1, 'mz': 3, 'mzr': 1, 'birs': 2, 'skb': 1, 'huin': 1}},
3113:{'nm':'渚の星女神・エスカマリ','main':2,'sub':2,'type':['machine', 'god'],'hp':3805,'atk':1555,'re':293,'aw':{'mz': 7, 'skb': 1, 'huin': 1}},
3114:{'nm':'楽園の玄武姫・メイメイ','main':2,'sub':3,'type':['god', 'balance'],'hp':3475,'atk':1464,'re':336,'aw':{'mz': 5, 'ki': 1, 'hk': 1, 'skb': 1, 'yb': 1}},
3118:{'nm':'破天荒の波乗り・石川五右衛門','main':1,'sub':2,'type':['vitality', 'dragon'],'hp':3778,'atk':1259,'re':217,'aw':{'hir': 2, 'skb': 2}},
3119:{'nm':'夕涼の魔導姫・アルマデル','main':3,'sub':2,'type':['balance', 'evil'],'hp':2645,'atk':1245,'re':279,'aw':{'mz': 2, 'ki': 5, 'skb': 1, 'huin': 1}},
3120:{'nm':'休翼の龍喚士・ナヴィ','main':2,'sub':4,'type':['dragon'],'hp':3385,'atk':1535,'re':124,'aw':{'ht': 3, 'mzr': 3, 'skb': 2, 'mlb': 1}},
3125:{'nm':'奇跡の逆転ファイター・キン肉マン','main':1,'sub':4,'type':['vitality', 'attack'],'hp':4615,'atk':1860,'re':65,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 2, 'cmbs': 1}},
3127:{'nm':'超人血盟軍・大将・キン肉マンソルジャー','main':3,'sub':4,'type':['vitality', 'attack'],'hp':4313,'atk':1840,'re':163,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 2, 'brk': 1, 'tmHP': 1}},
3129:{'nm':'悪魔超人最後の刺客・悪魔将軍','main':5,'sub':5,'type':['evil', 'attack'],'hp':3655,'atk':2223,'re':120,'aw':{'ymr': 3, 'skb': 2, 'huin': 1, 'yb': 2, 'kilr': 1}},
3137:{'nm':'超人凶器・ウォーズマン','main':5,'sub':4,'type':['machine', 'balance'],'hp':2698,'atk':1453,'re':265,'aw':{'ym': 6, 'skb': 1}},
3151:{'nm':'優遊の玄武姫・メイメイ','main':3,'sub':2,'type':['god', 'balance'],'hp':3475,'atk':1464,'re':336,'aw':{'mz': 1, 'ki': 5, 'hk': 1, 'skb': 1, 'yb': 1}},
3157:{'nm':'閃機帝・アナザークルセイダー','main':3,'sub':2,'type':['machine', 'attack'],'hp':3002,'atk':1915,'re':353,'aw':{'2way': 1, 'gls': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
3159:{'nm':'暁天の蒼空神・ケプリ','main':2,'sub':4,'type':['god', 'attack'],'hp':3230,'atk':1903,'re':273,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
3162:{'nm':'タマゾーX覚醒幻神・オーディン','main':1,'sub':5,'type':['dragon', 'god', 'attack'],'hp':3014,'atk':1851,'re':55,'aw':{'hi': 5, 'birs': 2, 'skb': 2}},
3163:{'nm':'タマゾーX覚醒秘神・オーディン','main':2,'sub':5,'type':['dragon', 'god', 'vitality'],'hp':4013,'atk':1103,'re':202,'aw':{'mz': 3, 'birs': 2, 'skb': 2, 'yb': 2}},
3165:{'nm':'邪眼大帝ラスト・ロマノフ','main':5,'sub':2,'type':['evil', 'dragon'],'hp':3205,'atk':1933,'re':262,'aw':{'ymr': 3, 'skb': 2, 'yb': 1, 'kilr': 1}},
3166:{'nm':'燃える革命ドギラゴン','main':1,'sub':1,'type':['dragon', 'attack', 'evil'],'hp':3440,'atk':1945,'re':75,'aw':{'hir': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
3167:{'nm':'蒼き団長ドギラゴン剣','main':1,'sub':3,'type':['dragon', 'attack', 'god'],'hp':3340,'atk':1645,'re':285,'aw':{'hir': 2, 'kir': 2, 'skb': 1, 'huin': 1}},
3173:{'nm':'冥道の根源神・イザナギX','main':5,'sub':1,'type':['god', 'balance'],'hp':3645,'atk':1616,'re':415,'aw':{'2way': 3, 'ym': 1, 'skb': 2, 'huin': 2, 'yb': 1}},
3175:{'nm':'紫光の深淵龍・アポカリプスX','main':5,'sub':4,'type':['dragon', 'god', 'machine'],'hp':4000,'atk':1650,'re':179,'aw':{'2way': 2, 'hkr': 2, 'ymr': 2, 'skb': 2, 'huin': 1}},
3193:{'nm':'帝都の守護神・アテナ','main':5,'sub':2,'type':['god', 'evil', 'attack'],'hp':3618,'atk':2501,'re':0,'aw':{'2way': 3, 'birs': 2, 'skb': 3}},
3198:{'nm':'降魔の神・降三世明王','main':1,'sub':5,'type':['god', 'vitality'],'hp':4043,'atk':1448,'re':13,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 2, 'mlb': 1}},
3200:{'nm':'息災の神・軍荼利明王','main':2,'sub':3,'type':['god', 'attack'],'hp':2855,'atk':1698,'re':220,'aw':{'2way': 1, 'skb': 1, 'huin': 2, 'yb': 1, 'mlb': 1}},
3202:{'nm':'慈悲の神・不動明王','main':3,'sub':1,'type':['god', 'balance'],'hp':3240,'atk':1508,'re':210,'aw':{'skb': 1, 'huin': 1, 'yb': 3, 'mlb': 1}},
3204:{'nm':'智慧の神・金剛夜叉明王','main':4,'sub':2,'type':['god', 'attack'],'hp':3093,'atk':1755,'re':113,'aw':{'skb': 2, 'huin': 1, 'yb': 2, 'mlb': 1}},
3206:{'nm':'畏怖の神・大威徳明王','main':5,'sub':4,'type':['god', 'attack'],'hp':2805,'atk':1840,'re':148,'aw':{'2way': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
3218:{'nm':'最強装備・魔砲士','main':1,'sub':4,'type':['attack', 'machine'],'hp':3820,'atk':1905,'re':103,'aw':{'skb': 1, 'huin': 1, 'yb': 3}},
3221:{'nm':'蒼響の龍楽士・ミオン','main':2,'sub':3,'type':['balance', 'dragon'],'hp':3560,'atk':1584,'re':374,'aw':{'mzr': 2, 'dk': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
3222:{'nm':'紅蘭の黒魔女・シャンメイ','main':5,'sub':0,'type':['evil'],'hp':2812,'atk':1903,'re':1001,'aw':{'ymr': 3, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
3223:{'nm':'古城の居候・ソニア＝グラン','main':4,'sub':5,'type':['dragon'],'hp':3778,'atk':1658,'re':271,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 1}},
3224:{'nm':'演舞の青龍姫・カリン','main':2,'sub':5,'type':['god', 'dragon'],'hp':3345,'atk':1631,'re':284,'aw':{'mz': 5, 'ki': 1, 'ym': 1, 'skb': 1, 'yb': 1}},
3225:{'nm':'仮装祭の小悪魔・ロズエル','main':5,'sub':1,'type':['evil', 'attack'],'hp':3720,'atk':1613,'re':90,'aw':{'2way': 3, 'birs': 2, 'bire': 1, 'skb': 1}},
3226:{'nm':'御茶屋の看板娘・望月千代女','main':5,'sub':1,'type':['balance', 'evil'],'hp':3238,'atk':1490,'re':383,'aw':{'2way': 1, 'ymr': 1, 'skb': 2, 'huin': 1, 'kilr': 1}},
3227:{'nm':'仮装祭の女神・パールヴァティー','main':3,'sub':5,'type':['balance', 'evil'],'hp':3543,'atk':1226,'re':483,'aw':{'2way': 1, 'dk': 3, 'kilr': 2}},
3233:{'nm':'朝陽の日龍喚士・カンナ','main':4,'sub':4,'type':['dragon', 'god'],'hp':3878,'atk':1660,'re':403,'aw':{'2way': 4, 'birs': 2, 'skb': 2, 'huin': 1}},
3234:{'nm':'夜陰の日龍喚士・カンナ','main':5,'sub':4,'type':['dragon', 'god', 'attack'],'hp':3378,'atk':2010,'re':353,'aw':{'2way': 3, 'skb': 2, 'huin': 1, 'yb': 1}},
3235:{'nm':'魔究の狂幻魔・イルム','main':4,'sub':1,'type':['evil', 'attack', 'vitality'],'hp':4875,'atk':1759,'re':311,'aw':{'2way': 1, 'hkr': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
3236:{'nm':'人世の妖幻魔・イルム','main':4,'sub':0,'type':['evil', 'attack'],'hp':4545,'atk':2159,'re':491,'aw':{'2way': 2, 'hkr': 3, 'skb': 2, 'huin': 1, 'yb': 1}},
3237:{'nm':'疾速の龍騎姫・イシュタル','main':3,'sub':0,'type':['dragon', 'vitality', 'god'],'hp':4327,'atk':1709,'re':138,'aw':{'2way': 2, 'skb': 2, 'kilr': 1}},
3238:{'nm':'転生ミネルヴァ','main':1,'sub':4,'type':['dragon', 'evil', 'god'],'hp':4110,'atk':2109,'re':503,'aw':{'hi': 1, 'hir': 1, 'hidec': 1, 'birs': 2, 'jm': 2, 'skb': 1, 'huin': 1}},
3239:{'nm':'転生ネプチューン','main':2,'sub':5,'type':['attack', 'evil', 'god'],'hp':3412,'atk':2351,'re':567,'aw':{'mz': 1, 'mzr': 1, 'mzdec': 1, 'birs': 2, 'dk': 2, 'skb': 1, 'huin': 1}},
3240:{'nm':'転生セレス','main':3,'sub':5,'type':['balance', 'evil', 'god'],'hp':4094,'atk':1915,'re':623,'aw':{'ki': 1, 'ht': 1, 'kir': 1, 're': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1}},
3241:{'nm':'転生シヴァ','main':1,'sub':5,'type':['attack', 'evil', 'god'],'hp':4361,'atk':2615,'re':123,'aw':{'2way': 2, 'hi': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
3242:{'nm':'転生ラクシュミー','main':2,'sub':4,'type':['vitality', 'god', 'attack'],'hp':5410,'atk':1962,'re':200,'aw':{'2way': 1, 'mz': 1, 'mzr': 1, 're': 1, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
3243:{'nm':'転生パールヴァティー','main':3,'sub':4,'type':['balance', 'evil', 'god'],'hp':4043,'atk':1956,'re':613,'aw':{'2way': 2, 'ki': 1, 're': 1, 'birs': 2, 'dk': 1, 'bire': 1, 'skb': 1}},
3245:{'nm':'爆怒の鉄龍帝・ナインガルダ','main':5,'sub':1,'type':['dragon', 'machine'],'hp':4999,'atk':1089,'re':399,'aw':{'hir': 4, 'ymr': 5}},
3246:{'nm':'カーリー【塗り絵コンテスト】','main':2,'sub':3,'type':['god', 'recovery'],'hp':2765,'atk':1361,'re':603,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
3247:{'nm':'サクヤ【塗り絵コンテスト】','main':1,'sub':4,'type':['dragon', 'recovery'],'hp':3528,'atk':1370,'re':384,'aw':{'birs': 2, 'gls': 2, 'jm': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
3249:{'nm':'霊幻の青龍姫・カリン','main':5,'sub':2,'type':['god', 'dragon'],'hp':3345,'atk':1631,'re':284,'aw':{'mz': 1, 'ki': 1, 'ym': 5, 'skb': 1, 'yb': 1}},
3252:{'nm':'覚醒神魔王ミニるしふぁー','main':5,'sub':4,'type':['evil', 'god'],'hp':2628,'atk':1406,'re':404,'aw':{'ym': 3, 'skb': 3}},
3259:{'nm':'隼護の冥蝎神・セルケト','main':5,'sub':1,'type':['god', 'vitality'],'hp':4125,'atk':1569,'re':214,'aw':{'jm': 3, 'dk': 3, 'skb': 1, 'huin': 1, 'yb': 1}},
3260:{'nm':'大和の焔龍喚士・ツバキ','main':1,'sub':0,'type':['dragon', 'god'],'hp':3813,'atk':1958,'re':388,'aw':{'hi': 3, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 2}},
3262:{'nm':'鍛煉神・シヴァ＝ドラゴン','main':1,'sub':5,'type':['god', 'dragon'],'hp':5118,'atk':2105,'re':218,'aw':{'2way': 3, 'hir': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
3263:{'nm':'聖舶神・ネプチューン＝ドラゴン','main':2,'sub':5,'type':['god', 'dragon'],'hp':5328,'atk':1504,'re':521,'aw':{'mzr': 4, 'ymr': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
3264:{'nm':'起源神・オーディン＝ドラゴン・光槍型','main':3,'sub':4,'type':['god', 'dragon', 'attack'],'hp':5400,'atk':1800,'re':750,'aw':{'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3265:{'nm':'全能神・ラー＝ドラゴン','main':4,'sub':4,'type':['god', 'dragon'],'hp':5605,'atk':1880,'re':340,'aw':{'2way': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
3266:{'nm':'暗黒神・ツクヨミ＝ドラゴン','main':5,'sub':4,'type':['god', 'dragon'],'hp':4901,'atk':2404,'re':245,'aw':{'ym': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
3268:{'nm':'浄光の天陽神・アテン','main':4,'sub':1,'type':['god'],'hp':5015,'atk':605,'re':373,'aw':{'kilr': 8}},
3269:{'nm':'転生ヴィーナス','main':4,'sub':4,'type':['evil', 'recovery', 'god'],'hp':3475,'atk':1536,'re':1035,'aw':{'2way': 1, 'hk': 1, 'hkr': 3, 're': 2, 'skb': 1, 'huin': 1}},
3270:{'nm':'転生ハーデス','main':5,'sub':5,'type':['evil', 'attack', 'god'],'hp':3370,'atk':2555,'re':455,'aw':{'2way': 2, 'ym': 2, 'ymr': 1, 'gls': 2, 'skb': 1, 'huin': 1}},
3271:{'nm':'転生ヒノカグツチ','main':1,'sub':1,'type':['dragon', 'vitality', 'god'],'hp':5550,'atk':1960,'re':160,'aw':{'2way': 3, 'hi': 2, 'hir': 1, 're': 1, 'skb': 1, 'huin': 1}},
3272:{'nm':'転生ホルス','main':1,'sub':2,'type':['evil', 'god', 'attack'],'hp':3575,'atk':2164,'re':630,'aw':{'2way': 2, 'hi': 2, 'skb': 2, 'huin': 2, 'yb': 1}},
3273:{'nm':'転生ラー','main':4,'sub':3,'type':['evil', 'god', 'vitality'],'hp':5555,'atk':1548,'re':406,'aw':{'hk': 1, 'birs': 2, 'gls': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
3274:{'nm':'魔導書の幻魔・イルミナ','main':1,'sub':4,'type':['evil', 'attack'],'hp':4685,'atk':2405,'re':164,'aw':{'skb': 4, 'yb': 2, 'kilr': 3}},
3276:{'nm':'討弓の鋼星神・メリディオナリス','main':2,'sub':3,'type':['machine', 'god'],'hp':3875,'atk':1468,'re':334,'aw':{'mzr': 5, 'skb': 1}},
3294:{'nm':'シャーレアンの賢者・ヤ・シュトラ','main':2,'sub':3,'type':['recovery', 'attack'],'hp':2608,'atk':1705,'re':573,'aw':{'birs': 2, 'bire': 2, 'skb': 2, 'yb': 2}},
3299:{'nm':'想い秘めし者・ティファ','main':4,'sub':1,'type':['attack', 'vitality'],'hp':4755,'atk':1945,'re':109,'aw':{'hkr': 5, 'skb': 1, 'huin': 1, 'yb': 2}},
3305:{'nm':'託されし未来の王・ノクティス','main':5,'sub':4,'type':['vitality', 'attack'],'hp':4038,'atk':1877,'re':214,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 3, 'kilr': 1}},
3306:{'nm':'グラウカ','main':5,'sub':5,'type':['balance', 'evil'],'hp':3404,'atk':1615,'re':134,'aw':{'ymr': 3, 'skb': 1}},
3330:{'nm':'異刻の黒龍喚士・ソニア','main':5,'sub':1,'type':['dragon', 'evil'],'hp':3397,'atk':1875,'re':105,'aw':{'2way': 2, 'bire': 1, 'skb': 2, 'yb': 1}},
3331:{'nm':'火の古老・エルドラ','main':1,'sub':1,'type':['dragon'],'hp':3851,'atk':1537,'re':165,'aw':{'hi': 3, 'mzdec': 3, 'skb': 1, 'yb': 2}},
3332:{'nm':'火古龍・エルドラ','main':1,'sub':1,'type':['dragon'],'hp':3851,'atk':1537,'re':165,'aw':{'hi': 3, 'hidec': 3, 'skb': 1, 'yb': 2}},
3344:{'nm':'厳烈の猛将神・夏侯惇','main':1,'sub':5,'type':['god', 'vitality'],'hp':3735,'atk':1643,'re':140,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3346:{'nm':'金鈴の水兵神・甘寧','main':2,'sub':1,'type':['god', 'attack'],'hp':3048,'atk':2128,'re':58,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3348:{'nm':'煌槍の錦龍神・馬超','main':3,'sub':4,'type':['god', 'dragon'],'hp':3413,'atk':1755,'re':173,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3350:{'nm':'傾国の歌姫神・貂蝉','main':4,'sub':5,'type':['god', 'recovery'],'hp':2733,'atk':1265,'re':670,'aw':{'hkdec': 2, 'ymdec': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3352:{'nm':'鬼謀の宣王神・司馬懿','main':5,'sub':2,'type':['god', 'balance'],'hp':3115,'atk':1563,'re':373,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3353:{'nm':'最後の月牙天衝・黒崎一護','main':5,'sub':2,'type':['god', 'balance'],'hp':3330,'atk':1915,'re':428,'aw':{'ymr': 1, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
3354:{'nm':'完全虚化・黒崎一護','main':5,'sub':5,'type':['balance', 'evil'],'hp':3630,'atk':1865,'re':468,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 3}},
3355:{'nm':'次の舞『白漣』・朽木ルキア','main':2,'sub':4,'type':['balance', 'god'],'hp':3515,'atk':1613,'re':475,'aw':{'2way': 1, 'skb': 2, 'huin': 3, 'yb': 1}},
3357:{'nm':'護廷十三隊総隊長・山本元柳斎重國','main':1,'sub':1,'type':['vitality', 'god'],'hp':5113,'atk':1474,'re':131,'aw':{'hir': 5, 'skb': 2}},
3359:{'nm':'元五番隊隊長・藍染惣右介','main':2,'sub':5,'type':['god', 'evil'],'hp':4557,'atk':1564,'re':394,'aw':{'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 3}},
3361:{'nm':'第4十刃・ウルキオラ・シファー','main':5,'sub':4,'type':['recovery', 'evil'],'hp':2870,'atk':1215,'re':653,'aw':{'ym': 4, 'birs': 2, 'skb': 1, 'yb': 1}},
3363:{'nm':'第6十刃・グリムジョー・ジャガージャック','main':2,'sub':3,'type':['attack', 'evil'],'hp':3565,'atk':1625,'re':205,'aw':{'2way': 1, 'mz': 2, 'skb': 1, 'huin': 2}},
3370:{'nm':'獄刃の龍機神・バルディン','main':1,'sub':5,'type':['dragon', 'machine', 'evil'],'hp':3928,'atk':2053,'re':248,'aw':{'skb': 2, 'huin': 2, 'kilr': 5}},
3371:{'nm':'灼剣の龍機神・バルディン','main':1,'sub':0,'type':['dragon', 'machine'],'hp':4028,'atk':2443,'re':348,'aw':{'skb': 2, 'huin': 2, 'yb': 1, 'kilr': 2}},
3372:{'nm':'清杖の龍機神・バルボワ','main':3,'sub':2,'type':['dragon', 'machine', 'god'],'hp':3824,'atk':1574,'re':282,'aw':{'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'kilr': 2}},
3373:{'nm':'鋼書の龍機神・バルボワ','main':3,'sub':0,'type':['dragon', 'machine'],'hp':4524,'atk':1824,'re':252,'aw':{'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 2}},
3374:{'nm':'淡雪の白虎・ハク','main':1,'sub':5,'type':['god', 'dragon'],'hp':3493,'atk':1491,'re':309,'aw':{'hi': 5, 'mz': 1, 'ym': 1, 'skb': 1, 'yb': 1}},
3375:{'nm':'聖宴の龍英傑・劉備','main':1,'sub':3,'type':['dragon', 'attack'],'hp':3225,'atk':1905,'re':353,'aw':{'2way': 3, 'hi': 1, 'hir': 1, 'birs': 2, 'jm': 1, 'skb': 1}},
3376:{'nm':'聖堂の豊麗神・フレイヤ','main':3,'sub':1,'type':['god', 'balance'],'hp':3035,'atk':1365,'re':560,'aw':{'ht': 1, 'kir': 2, 'skb': 1, 'huin': 1, 'kilr': 1}},
3377:{'nm':'聖祭の夜叉姫・初芽局','main':1,'sub':4,'type':['recovery', 'evil'],'hp':2389,'atk':1205,'re':808,'aw':{'2way': 1, 'hir': 1, 'skb': 2, 'huin': 1, 'kilr': 1}},
3379:{'nm':'聖夜の来訪者・グレモリー','main':1,'sub':0,'type':['evil', 'god', 'balance'],'hp':5002,'atk':1701,'re':600,'aw':{'hir': 3, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3384:{'nm':'転生バステト','main':3,'sub':3,'type':['evil', 'balance', 'god'],'hp':4760,'atk':1757,'re':519,'aw':{'2way': 2, 'ki': 1, 'dk': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
3385:{'nm':'転生アヌビス','main':5,'sub':5,'type':['evil', 'god', 'balance'],'hp':5048,'atk':1450,'re':618,'aw':{'re': 2, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
3386:{'nm':'転生ヤマタノオロチ','main':2,'sub':4,'type':['dragon', 'vitality', 'god'],'hp':6760,'atk':1100,'re':312,'aw':{'2way': 4, 'mzr': 1, 'skb': 2, 'yb': 2}},
3387:{'nm':'転生スサノオノミコト','main':3,'sub':5,'type':['vitality', 'dragon', 'god'],'hp':5270,'atk':1686,'re':408,'aw':{'2way': 2, 'ki': 1, 'birs': 2, 'bire': 1, 'skb': 2, 'yb': 1}},
3389:{'nm':'転生ツクヨミ','main':5,'sub':2,'type':['vitality', 'evil', 'god'],'hp':5415,'atk':1841,'re':272,'aw':{'ym': 3, 'skb': 1, 'huin': 1, 'yb': 4}},
3390:{'nm':'神国の魔術神・オーディン','main':3,'sub':0,'type':['god', 'attack'],'hp':4349,'atk':1903,'re':278,'aw':{'2way': 1, 're': 1, 'birs': 2, 'bire': 1, 'skb': 3}},
3391:{'nm':'賢泉の秘術神・オーディン','main':2,'sub':0,'type':['god', 'attack'],'hp':5031,'atk':2271,'re':148,'aw':{'mzr': 3, 'birs': 2, 'skb': 4}},
3392:{'nm':'戦域の幻術神・オーディン','main':1,'sub':0,'type':['god', 'vitality'],'hp':4969,'atk':2493,'re':34,'aw':{'hir': 6, 'skb': 3}},
3400:{'nm':'アヤナミレイ(仮称)&Mark.09 覚醒後','main':5,'sub':4,'type':['recovery', 'machine'],'hp':2363,'atk':1293,'re':465,'aw':{'re': 6, 'birs': 2}},
3409:{'nm':'新世紀創造主・カイオウ','main':5,'sub':0,'type':['evil', 'vitality'],'hp':7503,'atk':1200,'re':0,'aw':{'hidec': 1, 'mzdec': 1, 'kidec': 1, 'hkdec': 1, 'ymdec': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
3411:{'nm':'北斗軍のリーダー・バット','main':4,'sub':3,'type':['attack', 'vitality'],'hp':3575,'atk':1625,'re':78,'aw':{'ymdec': 3, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3414:{'nm':'翠角の天鬼姫・風神','main':3,'sub':2,'type':['god', 'attack'],'hp':3418,'atk':1885,'re':130,'aw':{'skb': 2, 'yb': 3, 'cmbs': 1}},
3416:{'nm':'黄角の天鬼姫・雷神','main':4,'sub':2,'type':['god', 'attack'],'hp':3685,'atk':1933,'re':23,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 2}},
3417:{'nm':'白日の朱雀姫・レイラン','main':4,'sub':1,'type':['god', 'dragon'],'hp':3335,'atk':1577,'re':302,'aw':{'hi': 1, 'ki': 1, 'hk': 5, 'skb': 1, 'huin': 1}},
3429:{'nm':'2体で最強の妖・うしおととら','main':4,'sub':1,'type':['vitality', 'evil', 'attack'],'hp':5253,'atk':1858,'re':20,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 2, 'yb': 2, 'kilr': 1}},
3430:{'nm':'烈火の炎・花菱烈火','main':1,'sub':1,'type':['attack', 'dragon'],'hp':2910,'atk':1902,'re':401,'aw':{'2way': 3, 'hir': 2, 're': 2, 'skb': 1, 'yb': 1}},
3431:{'nm':'真の大妖怪・殺生丸','main':5,'sub':4,'type':['balance', 'evil'],'hp':4038,'atk':1705,'re':478,'aw':{'2way': 3, 'ymr': 3, 'skb': 2, 'huin': 1}},
3432:{'nm':'たった一つの真実みぬく・名探偵コナン','main':2,'sub':4,'type':['balance', 'machine'],'hp':3250,'atk':1738,'re':393,'aw':{'mz': 1, 'hk': 1, 'skb': 2, 'huin': 3, 'yb': 1, 'cmbs': 1}},
3448:{'nm':'光槍神・オーディン＝ドラゴン・嵐翼型','main':3,'sub':4,'type':['god', 'dragon', 'recovery'],'hp':4600,'atk':1200,'re':1100,'aw':{'re': 6, 'birs': 2, 'skb': 1}},
3449:{'nm':'転生インドラ','main':4,'sub':5,'type':['dragon', 'vitality', 'god'],'hp':5650,'atk':1667,'re':309,'aw':{'2way': 2, 'skb': 2, 'huin': 2, 'yb': 3}},
3450:{'nm':'転生ヴリトラ','main':5,'sub':4,'type':['dragon', 'evil', 'god'],'hp':4647,'atk':2345,'re':201,'aw':{'ymr': 4, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1}},
3451:{'nm':'掌砂焦炎神・セト','main':1,'sub':4,'type':['god', 'vitality'],'hp':4050,'atk':1589,'re':96,'aw':{'hi': 2, 'hk': 1, 'skb': 1, 'cmbs': 2}},
3452:{'nm':'創空星雲神・ヌト','main':2,'sub':3,'type':['god', 'attack'],'hp':3360,'atk':1732,'re':208,'aw':{'2way': 2, 'mz': 2, 'yb': 1, 'cmbs': 1}},
3453:{'nm':'還魂冥穣神・オシリス','main':3,'sub':5,'type':['god', 'evil'],'hp':3290,'atk':1667,'re':278,'aw':{'2way': 2, 'ki': 2, 'yb': 1, 'cmbs': 1}},
3454:{'nm':'煌拳聖命神・ハトホル','main':4,'sub':1,'type':['god', 'attack'],'hp':2860,'atk':1881,'re':278,'aw':{'hi': 1, 'hk': 2, 'skb': 1, 'cmbs': 2}},
3455:{'nm':'航夜冥霊神・ネフティス','main':5,'sub':2,'type':['god', 'balance'],'hp':3253,'atk':1455,'re':418,'aw':{'mz': 1, 'ym': 2, 'skb': 1, 'cmbs': 2}},
3457:{'nm':'不法の魔紳士・アザゼル','main':5,'sub':3,'type':['evil', 'balance'],'hp':3335,'atk':1480,'re':363,'aw':{'2way': 1, 'gls': 2, 'skb': 1, 'yb': 1}},
3460:{'nm':'最強より最高・坊屋春道','main':1,'sub':4,'type':['attack', 'dragon'],'hp':4015,'atk':2180,'re':108,'aw':{'hi': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'kilr': 1, 'cmbs': 1, 'brk': 1}},
3461:{'nm':'伝説の男・林田恵','main':1,'sub':5,'type':['attack', 'vitality'],'hp':4705,'atk':1960,'re':33,'aw':{'hir': 4, 'skb': 2, 'yb': 1, 'kilr': 2}},
3482:{'nm':'転生フレイ','main':1,'sub':1,'type':['attack', 'vitality', 'god'],'hp':5023,'atk':2015,'re':285,'aw':{'2way': 2, 'ht': 1, 'hir': 2, 'skb': 1, 'huin': 2, 'cmbs': 1}},
3483:{'nm':'転生イズン&イズーナ','main':2,'sub':2,'type':['vitality', 'evil', 'god'],'hp':5202,'atk':1877,'re':314,'aw':{'2way': 2, 'ht': 1, 'mzr': 2, 'skb': 1, 'huin': 2, 'cmbs': 1}},
3484:{'nm':'転生フレイヤ','main':3,'sub':3,'type':['evil', 'attack', 'god'],'hp':4005,'atk':2220,'re':466,'aw':{'2way': 1, 'ht': 1, 'kir': 4, 'skb': 1, 'huin': 2}},
3486:{'nm':'転生ロキ','main':5,'sub':5,'type':['vitality', 'evil', 'god'],'hp':5050,'atk':1968,'re':304,'aw':{'2way': 2, 'ht': 1, 'ymr': 2, 'skb': 1, 'huin': 2, 'cmbs': 1}},
3488:{'nm':'転生カリン','main':2,'sub':3,'type':['dragon', 'attack', 'god'],'hp':4102,'atk':2457,'re':298,'aw':{'mz': 1, 'mzr': 2, 'dk': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3489:{'nm':'転生メイメイ','main':3,'sub':5,'type':['vitality', 'attack', 'god'],'hp':5360,'atk':1986,'re':199,'aw':{'2way': 2, 'ki': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3490:{'nm':'転生サクヤ','main':4,'sub':1,'type':['dragon', 'recovery', 'god'],'hp':3978,'atk':1792,'re':731,'aw':{'2way': 1, 'birs': 2, 'gls': 1, 'jm': 1, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3491:{'nm':'転生ハク','main':5,'sub':1,'type':['god', 'recovery', 'attack'],'hp':3334,'atk':2095,'re':743,'aw':{'2way': 2, 'hi': 1, 'ym': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3492:{'nm':'転生アレス','main':1,'sub':1,'type':['evil', 'attack', 'god'],'hp':3831,'atk':2649,'re':262,'aw':{'2way': 2, 'hi': 2, 'hir': 1, 'gls': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3493:{'nm':'転生ヘルメス','main':2,'sub':2,'type':['evil', 'attack', 'god'],'hp':3528,'atk':2214,'re':612,'aw':{'2way': 1, 'mz': 2, 'mzr': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
3494:{'nm':'転生アルテミス','main':3,'sub':3,'type':['attack', 'evil', 'god'],'hp':3274,'atk':2369,'re':597,'aw':{'2way': 2, 'ki': 2, 'kir': 1, 'gls': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3495:{'nm':'転生アポロン','main':4,'sub':4,'type':['recovery', 'attack', 'god'],'hp':3057,'atk':2243,'re':738,'aw':{'2way': 2, 'hk': 2, 'ht': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
3496:{'nm':'転生ペルセポネ','main':5,'sub':5,'type':['attack', 'evil', 'god'],'hp':3039,'atk':2432,'re':630,'aw':{'2way': 2, 'ym': 2, 'ht': 2, 'skb': 1, 'huin': 1, 'yb': 1}},
3498:{'nm':'転生孫権','main':2,'sub':2,'type':['recovery', 'vitality', 'god'],'hp':5201,'atk':1233,'re':701,'aw':{'2way': 4, 'mz': 1, 'mzr': 1, 'gls': 1, 'skb': 1, 'huin': 1}},
3499:{'nm':'転生劉備','main':3,'sub':4,'type':['vitality', 'attack', 'god'],'hp':5022,'atk':2049,'re':265,'aw':{'ki': 1, 'kir': 3, 'birs': 2, 'jm': 1, 'skb': 2}},
3500:{'nm':'転生大喬＆小喬','main':4,'sub':4,'type':['god', 'dragon', 'balance'],'hp':4220,'atk':1804,'re':652,'aw':{'mzr': 2, 'hkr': 4, 'skb': 1, 'huin': 1, 'yb': 1}},
3501:{'nm':'転生アメノウズメ','main':1,'sub':4,'type':['vitality', 'evil', 'god'],'hp':5418,'atk':1685,'re':363,'aw':{'hi': 1, 'hir': 2, 're': 2, 'birs': 2, 'skb': 1, 'cmbs': 1}},
3503:{'nm':'転生クシナダヒメ','main':3,'sub':2,'type':['recovery', 'dragon', 'god'],'hp':4305,'atk':1682,'re':700,'aw':{'ki': 1, 'ht': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
3504:{'nm':'転生イザナギ','main':4,'sub':3,'type':['god', 'balance', 'dragon'],'hp':4578,'atk':1888,'re':493,'aw':{'2way': 2, 'hk': 3, 'ht': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3506:{'nm':'転生パンドラ','main':5,'sub':5,'type':['evil', 'vitality', 'god'],'hp':5518,'atk':1731,'re':307,'aw':{'ymr': 3, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2}},
3507:{'nm':'転生アスタロト','main':3,'sub':5,'type':['evil', 'recovery', 'attack'],'hp':3610,'atk':1844,'re':810,'aw':{'kir': 3, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
3509:{'nm':'覚醒ヤマトタケル','main':1,'sub':2,'type':['vitality', 'evil'],'hp':4473,'atk':1551,'re':168,'aw':{'2way': 2, 'hir': 1, 'bire': 1, 'skb': 2, 'huin': 1, 'cmbs': 1}},
3510:{'nm':'覚醒アンドロメダ','main':2,'sub':3,'type':['balance', 'dragon'],'hp':3785,'atk':1488,'re':418,'aw':{'2way': 2, 'mzr': 1, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3511:{'nm':'覚醒ペルセウス','main':3,'sub':5,'type':['attack', 'machine'],'hp':3445,'atk':1944,'re':239,'aw':{'2way': 2, 'kir': 1, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3512:{'nm':'覚醒孫悟空','main':4,'sub':3,'type':['dragon', 'attack'],'hp':3628,'atk':1990,'re':166,'aw':{'hkr': 2, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3513:{'nm':'救書の灰幻魔・イルミナ','main':4,'sub':1,'type':['evil', 'vitality'],'hp':7010,'atk':1505,'re':4,'aw':{'ymdec': 3, 'skb': 2, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3514:{'nm':'裁槌の鋼星神・エルゲヌビ','main':1,'sub':5,'type':['machine', 'god'],'hp':3745,'atk':1925,'re':437,'aw':{'hi': 7, 'skb': 1, 'huin': 1}},
3515:{'nm':'浄弓の鋼星神・メリディオナリス','main':2,'sub':3,'type':['machine', 'god'],'hp':4275,'atk':1568,'re':364,'aw':{'mzr': 6, 'skb': 1, 'yb': 1}},
3516:{'nm':'探訪の獄幻姫・ロミア','main':3,'sub':5,'type':['evil', 'vitality'],'hp':4080,'atk':1562,'re':449,'aw':{'skb': 1, 'huin': 1, 'yb': 4, 'kilr': 1, 'cmbs': 1}},
3517:{'nm':'輝翼の閃龍喚士・ナヴィ','main':4,'sub':2,'type':['dragon', 'god'],'hp':3485,'atk':2109,'re':292,'aw':{'skb': 2, 'huin': 4, 'yb': 1, 'cmbs': 1}},
3518:{'nm':'獄刃の龍機工士・バーバラ','main':5,'sub':1,'type':['dragon', 'machine'],'hp':3217,'atk':2506,'re':134,'aw':{'2way': 1, 'skb': 3, 'yb': 1, 'kilr': 3}},
3519:{'nm':'掃瓶の鋼星神・クヴィア','main':1,'sub':2,'type':['machine', 'god'],'hp':3217,'atk':1516,'re':590,'aw':{'2way': 4, 'skb': 2, 'yb': 1}},
3520:{'nm':'怪面の魔公女・メル','main':2,'sub':1,'type':['evil', 'attack'],'hp':3824,'atk':2119,'re':44,'aw':{'2way': 1, 'ht': 6, 'skb': 1, 'huin': 1}},
3521:{'nm':'聖戦の記録者・ミト','main':3,'sub':4,'type':['god', 'recovery'],'hp':3015,'atk':1263,'re':805,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'kilr': 2, 'brk': 1}},
3522:{'nm':'山守神の龍巫女・モミジ','main':4,'sub':3,'type':['dragon', 'attack'],'hp':2937,'atk':2025,'re':369,'aw':{'2way': 2, 'skb': 1, 'yb': 3, 'add': 1}},
3523:{'nm':'近世の紫龍喚士・シーナ','main':5,'sub':4,'type':['dragon', 'attack'],'hp':4231,'atk':1928,'re':40,'aw':{'ymr': 2, 'skb': 1, 'huin': 1, 'kilr': 2, 'cmbs': 1}},
3524:{'nm':'水華の喜女神・ウルカ','main':2,'sub':5,'type':['god', 'dragon'],'hp':4525,'atk':1974,'re':455,'aw':{'birs': 2, 'bire': 1, 'skb': 2, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3525:{'nm':'冥星の喜女神・ウルカ','main':5,'sub':2,'type':['god', 'dragon'],'hp':3525,'atk':2974,'re':155,'aw':{'2way': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
3526:{'nm':'静装の龍機博士・ジュリ','main':2,'sub':3,'type':['dragon', 'machine'],'hp':3512,'atk':1664,'re':321,'aw':{'skb': 1, 'huin': 1, 'yb': 1, 'kilr': 3}},
3527:{'nm':'清杖の龍機博士・ジュリ','main':2,'sub':3,'type':['dragon', 'machine'],'hp':3812,'atk':1814,'re':371,'aw':{'skb': 1, 'huin': 2, 'yb': 2, 'kilr': 3}},
3532:{'nm':'覚醒アモン','main':2,'sub':3,'type':['evil', 'dragon'],'hp':3595,'atk':1563,'re':423,'aw':{'2way': 2, 'mzr': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
3533:{'nm':'覚醒バアル','main':4,'sub':1,'type':['evil', 'machine'],'hp':3093,'atk':1926,'re':360,'aw':{'2way': 2, 'hkr': 2, 'skb': 2, 'huin': 1, 'yb': 1}},
3534:{'nm':'聖戦の調停者・メタトロン','main':4,'sub':0,'type':['god', 'attack'],'hp':3254,'atk':2580,'re':203,'aw':{'re': 1, 'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1, 'brk': 1}},
3535:{'nm':'神理の裁断者・メタトロン','main':5,'sub':0,'type':['god', 'balance'],'hp':4530,'atk':1931,'re':493,'aw':{'ymr': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3539:{'nm':'灼羽の大賢龍・ネルヴァ','main':1,'sub':2,'type':['dragon', 'machine', 'god'],'hp':4500,'atk':2750,'re':0,'aw':{'hi': 2, 'skb': 1, 'huin': 1}},
3541:{'nm':'海角の大賢龍・メルクリア','main':2,'sub':5,'type':['dragon', 'machine', 'attack'],'hp':2800,'atk':3000,'re':360,'aw':{'mz': 2, 'skb': 1, 'huin': 1}},
3543:{'nm':'峰角の大賢龍・バッケス','main':3,'sub':4,'type':['dragon', 'machine', 'vitality'],'hp':8000,'atk':1000,'re':0,'aw':{'ki': 2, 'skb': 1, 'huin': 1}},
3545:{'nm':'陽輪の大賢龍・アポルォ','main':4,'sub':1,'type':['dragon', 'machine', 'recovery'],'hp':2200,'atk':800,'re':2000,'aw':{'hk': 2, 'skb': 1, 'huin': 1}},
3547:{'nm':'月角の大賢龍・ディエナ','main':5,'sub':3,'type':['dragon', 'machine', 'evil'],'hp':2500,'atk':2500,'re':750,'aw':{'ym': 2, 'skb': 1, 'huin': 1}},
3548:{'nm':'煌炎剣の勇士・クラウソラス','main':1,'sub':4,'type':['attack'],'hp':2964,'atk':2450,'re':43,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
3549:{'nm':'麗湖剣の勇士・アロンダイト','main':2,'sub':4,'type':['attack'],'hp':3631,'atk':2148,'re':22,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
3550:{'nm':'雷石剣の勇士・カラドボルグ','main':3,'sub':4,'type':['attack'],'hp':3941,'atk':2021,'re':5,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
3551:{'nm':'陰陽剣の勇士・干将莫耶','main':4,'sub':5,'type':['attack'],'hp':2870,'atk':2211,'re':214,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
3552:{'nm':'樹霊槍の勇士・ミストルテイン','main':5,'sub':3,'type':['attack'],'hp':2741,'atk':2386,'re':146,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'mlb': 1}},
3553:{'nm':'時代の選びし者・緋村剣心','main':1,'sub':1,'type':['attack', 'dragon'],'hp':4012,'atk':1951,'re':254,'aw':{'2way': 1, 'hi': 2, 'skb': 2, 'huin': 1, 'yb': 2, 'cmbs': 1}},
3554:{'nm':'壬生の狼・斎藤一','main':5,'sub':0,'type':['attack'],'hp':2808,'atk':2552,'re':348,'aw':{'ym': 2, 'ymr': 3, 'skb': 2, 'huin': 1, 'yb': 1}},
3556:{'nm':'比古清十郎','main':4,'sub':0,'type':['balance'],'hp':4521,'atk':1854,'re':256,'aw':{'2way': 2, 'hk': 1, 'skb': 1, 'huin': 2, 'yb': 2, 'cmbs': 1}},
3558:{'nm':'隠密御庭番衆翁・柏崎念至','main':5,'sub':3,'type':['balance'],'hp':3115,'atk':1648,'re':320,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'yb': 1}},
3566:{'nm':'木古龍のアーマー・アナ','main':3,'sub':3,'type':['dragon', 'balance'],'hp':4235,'atk':1481,'re':264,'aw':{'ki': 3, 'hidec': 1, 'kidec': 1, 'skb': 1, 'huin': 1, 'yb': 2}},
3571:{'nm':'旋掌の星天使・リュエル','main':3,'sub':3,'type':['god', 'attack'],'hp':2698,'atk':1809,'re':368,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 2, 'cmbs': 1}},
3573:{'nm':'響杖の星天使・ルミエル','main':5,'sub':0,'type':['god', 'attack'],'hp':3668,'atk':1932,'re':187,'aw':{'ym': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3580:{'nm':'天魔の月龍喚士・サツキ','main':5,'sub':0,'type':['dragon', 'attack', 'evil'],'hp':4305,'atk':1903,'re':266,'aw':{'2way': 3, 'skb': 1, 'huin': 1, 'yb': 1}},
3581:{'nm':'明時の月龍喚士・サツキ','main':5,'sub':4,'type':['dragon', 'vitality'],'hp':4805,'atk':1603,'re':6,'aw':{'2way': 4, 'skb': 1, 'huin': 2, 'kilr': 1}},
3590:{'nm':'想鎌の星機神・ハマル','main':5,'sub':3,'type':['machine', 'evil'],'hp':2425,'atk':2005,'re':348,'aw':{'ym': 2, 'ymr': 3, 'skb': 1, 'huin': 2}},
3592:{'nm':'覚醒クリシュナ','main':1,'sub':4,'type':['evil', 'attack'],'hp':3435,'atk':2047,'re':203,'aw':{'2way': 1, 'hi': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
3593:{'nm':'覚醒サラスヴァティ','main':2,'sub':4,'type':['dragon', 'attack'],'hp':3615,'atk':1900,'re':238,'aw':{'2way': 1, 'mz': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
3595:{'nm':'覚醒ガネーシャ','main':4,'sub':1,'type':['machine', 'vitality'],'hp':4595,'atk':1618,'re':110,'aw':{'2way': 3, 'jm': 1, 'skb': 2, 'huin': 1, 'yb': 1}},
3598:{'nm':'闇の星壊機・デスファリオン','main':5,'sub':0,'type':['machine'],'hp':5002,'atk':2207,'re':325,'aw':{'2way': 1, 'ym': 1, 'birs': 2, 'skb': 3, 'huin': 1, 'yb': 1}},
3603:{'nm':'静謐の天央神・アメノミナカヌシ','main':2,'sub':4,'type':['god', 'vitality'],'hp':4725,'atk':1983,'re':103,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 1}},
3604:{'nm':'エルザ','main':1,'sub':1,'type':['attack'],'hp':2472,'atk':2016,'re':0,'aw':{'hir': 3, 'skb': 1, 'yb': 1}},
3606:{'nm':'火竜・ナツ','main':1,'sub':1,'type':['attack', 'dragon'],'hp':4033,'atk':2155,'re':113,'aw':{'hi': 4, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 2}},
3607:{'nm':'ルーシィ','main':4,'sub':4,'type':['attack'],'hp':2760,'atk':1810,'re':202,'aw':{'2way': 1, 'skb': 2, 'yb': 2}},
3609:{'nm':'憤怒の罪・メリオダス','main':5,'sub':1,'type':['dragon', 'evil'],'hp':3335,'atk':2268,'re':248,'aw':{'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'cmbs': 2}},
3612:{'nm':'玖楼国の姫・サクラ','main':4,'sub':4,'type':['balance'],'hp':3628,'atk':1733,'re':513,'aw':{'birs': 2, 'skb': 2, 'huin': 2, 'yb': 2}},
3615:{'nm':'三只眼','main':3,'sub':4,'type':['attack', 'god'],'hp':3610,'atk':1993,'re':335,'aw':{'birs': 2, 'bire': 1, 'skb': 1, 'yb': 2, 'cmbs': 2}},
3618:{'nm':'陸奥圓明流継承者・陸奥九十九','main':4,'sub':5,'type':['balance', 'dragon'],'hp':4215,'atk':1503,'re':485,'aw':{'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'cmbs': 2}},
3629:{'nm':'時代の終わりを告げる黒き竜・アクノロギア','main':5,'sub':2,'type':['dragon', 'evil'],'hp':3165,'atk':1733,'re':113,'aw':{'ymr': 1, 'skb': 1}},
3638:{'nm':'悪夢なるもの・クトゥルフ','main':2,'sub':2,'type':['evil', 'dragon'],'hp':4080,'atk':2027,'re':453,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
3640:{'nm':'無貌なるもの・ニャルラトホテプ','main':3,'sub':3,'type':['evil', 'dragon'],'hp':6530,'atk':1324,'re':129,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
3642:{'nm':'無形なるもの・アザトース','main':5,'sub':5,'type':['evil', 'dragon'],'hp':5510,'atk':1742,'re':303,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1, 'cmbs': 1}},
3644:{'nm':'狂炎なるもの・クトゥグア','main':1,'sub':0,'type':['evil', 'dragon'],'hp':5541,'atk':2003,'re':135,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'mlb': 1}},
3646:{'nm':'彼方なるもの・ヨグ＝ソトース','main':4,'sub':0,'type':['evil', 'dragon'],'hp':6258,'atk':1985,'re':233,'aw':{'birs': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'mlb': 1}},
3647:{'nm':'図書室の監督神・カーリー','main':3,'sub':5,'type':['god', 'recovery'],'hp':3325,'atk':2174,'re':715,'aw':{'kir': 2, 'birs': 2, 'skb': 2, 'huin': 1, 'yb': 2}},
3648:{'nm':'学園の暴れ龍・ヤマタノオロチ','main':5,'sub':2,'type':['dragon', 'vitality', 'god'],'hp':6760,'atk':1100,'re':312,'aw':{'2way': 3, 'skb': 2, 'huin': 2, 'yb': 2}},
3649:{'nm':'嵐の転校生・スサノオノミコト','main':5,'sub':3,'type':['god', 'balance'],'hp':3070,'atk':1386,'re':428,'aw':{'2way': 1, 'birs': 2, 'skb': 3}},
3650:{'nm':'料理部の新鋭・ハトホル','main':1,'sub':4,'type':['god', 'attack'],'hp':2860,'atk':1881,'re':278,'aw':{'hi': 2, 'hk': 1, 'skb': 1, 'cmbs': 2}},
3651:{'nm':'剣道部の主将・不動明王','main':2,'sub':3,'type':['god', 'balance'],'hp':3240,'atk':1508,'re':210,'aw':{'skb': 1, 'huin': 1, 'yb': 3, 'mlb': 1}},
3653:{'nm':'リオレイア','main':3,'sub':3,'type':['dragon', 'attack'],'hp':4426,'atk':2671,'re':278,'aw':{'skb': 2, 'huin': 1, 'yb': 2}},
3654:{'nm':'キリン','main':4,'sub':4,'type':['dragon', 'balance'],'hp':3520,'atk':2650,'re':655,'aw':{'hkr': 4, 'birs': 2, 'skb': 1, 'yb': 1}},
3662:{'nm':'バルファルク','main':5,'sub':1,'type':['dragon', 'evil'],'hp':3905,'atk':2704,'re':505,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 1, 'tmRE': 1}},
3688:{'nm':'砲瓶の鋼星神・シェアト','main':2,'sub':1,'type':['machine', 'balance'],'hp':5055,'atk':1553,'re':500,'aw':{'2way': 5, 'skb': 1, 'huin': 1, 'yb': 1, 'tmHP': 1}},
3691:{'nm':'覚醒稲姫','main':1,'sub':3,'type':['vitality', 'attack'],'hp':4369,'atk':1783,'re':65,'aw':{'birs': 2, 'skb': 2, 'huin': 2, 'yb': 2}},
3693:{'nm':'覚醒ねね','main':2,'sub':4,'type':['attack', 'dragon'],'hp':3508,'atk':1988,'re':205,'aw':{'birs': 2, 'skb': 2, 'huin': 2, 'yb': 2}},
3695:{'nm':'覚醒お市','main':3,'sub':5,'type':['attack', 'evil'],'hp':3228,'atk':1995,'re':285,'aw':{'birs': 2, 'skb': 3, 'huin': 2, 'yb': 1}},
3697:{'nm':'覚醒立花ぎん千代','main':4,'sub':2,'type':['vitality', 'attack'],'hp':3565,'atk':2265,'re':18,'aw':{'gls': 1, 'jm': 1, 'skb': 2, 'huin': 1, 'yb': 2, 'cmbs': 2}},
3699:{'nm':'覚醒濃姫','main':5,'sub':1,'type':['evil', 'vitality'],'hp':4305,'atk':1750,'re':110,'aw':{'gls': 1, 'dk': 1, 'skb': 3, 'huin': 1, 'yb': 1, 'cmbs': 2}},
3705:{'nm':'ハンター♂・レウスX装備','main':1,'sub':1,'type':['balance', 'dragon'],'hp':3629,'atk':1453,'re':307,'aw':{'hir': 2, 'skb': 1, 'huin': 1, 'mlb': 1, 'kilr': 1}},
3706:{'nm':'ハンター♂・ミツネX装備','main':2,'sub':2,'type':['attack', 'dragon'],'hp':3280,'atk':1863,'re':166,'aw':{'skb': 1, 'huin': 1, 'yb': 2, 'mlb': 1, 'kilr': 1}},
3711:{'nm':'ハンター♀・ディノX装備','main':1,'sub':5,'type':['attack', 'dragon'],'hp':3126,'atk':2050,'re':101,'aw':{'hir': 2, 'skb': 2, 'mlb': 1, 'kilr': 1}},
3712:{'nm':'覚醒ウリエル','main':1,'sub':3,'type':['attack', 'recovery'],'hp':2545,'atk':1762,'re':636,'aw':{'hir': 2, 're': 1, 'skb': 2, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3733:{'nm':'からくり五右衛門','main':1,'sub':0,'type':['machine'],'hp':5510,'atk':1700,'re':38,'aw':{'hir': 1, 'birs': 2, 'skb': 1, 'kilr': 1}},
3734:{'nm':'覚醒からくり五右衛門','main':1,'sub':0,'type':['machine', 'vitality'],'hp':6010,'atk':1850,'re':88,'aw':{'hi': 2, 'hir': 2, 'birs': 2, 'skb': 2, 'kilr': 1}},
3736:{'nm':'輝眼の骸龍契士・エルメ＝ド','main':2,'sub':5,'type':['dragon', 'evil'],'hp':4038,'atk':1873,'re':83,'aw':{'mz': 5, 'skb': 1, 'huin': 1, 'yb': 1}},
3738:{'nm':'烈眼の骸龍契士・エルメ＝ラ','main':2,'sub':5,'type':['dragon', 'evil'],'hp':4038,'atk':1873,'re':83,'aw':{'mzr': 4, 'skb': 1, 'huin': 1, 'yb': 1}},
3740:{'nm':'静眼の骸龍契士・エルメ＝ク','main':2,'sub':5,'type':['dragon', 'evil'],'hp':4038,'atk':1873,'re':83,'aw':{'2way': 3, 'skb': 1, 'huin': 1, 'yb': 1}},
3746:{'nm':'ヘスティア','main':1,'sub':0,'type':['god'],'hp':3273,'atk':1235,'re':548,'aw':{'birs': 2, 'yb': 1, 'add': 1}},
3748:{'nm':'テテュス','main':2,'sub':0,'type':['god'],'hp':3465,'atk':1535,'re':288,'aw':{'2way': 3, 'huin': 1}},
3750:{'nm':'クロノス','main':3,'sub':0,'type':['god'],'hp':3653,'atk':1603,'re':208,'aw':{'cmbs': 3}},
3752:{'nm':'アストレア','main':4,'sub':0,'type':['god'],'hp':3515,'atk':1555,'re':330,'aw':{'hkr': 3, 'yb': 1}},
3754:{'nm':'ウラノス','main':5,'sub':0,'type':['god'],'hp':3343,'atk':1583,'re':308,'aw':{'cmbs': 3}},
3756:{'nm':'零龍喚士・ネイ','main':5,'sub':0,'type':['dragon'],'hp':3765,'atk':1742,'re':249,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1}},
3757:{'nm':'雷天の零龍喚士・ネイ','main':1,'sub':5,'type':['dragon', 'vitality'],'hp':6045,'atk':1954,'re':12,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 2}},
3758:{'nm':'大弯の零龍喚士・ネイ','main':2,'sub':5,'type':['dragon', 'attack'],'hp':4461,'atk':2235,'re':321,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 2}},
3759:{'nm':'玻璃の零龍喚士・ネイ','main':3,'sub':5,'type':['dragon', 'balance'],'hp':5126,'atk':2013,'re':253,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 2}},
3760:{'nm':'解放の零龍喚士・ネイ','main':4,'sub':5,'type':['dragon', 'balance'],'hp':5650,'atk':1845,'re':198,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 2}},
3761:{'nm':'黒天の零龍喚士・ネイ','main':5,'sub':5,'type':['dragon', 'evil'],'hp':4945,'atk':2125,'re':241,'aw':{'2way': 2, 'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 2}},
3762:{'nm':'刻火の時女神・ウルド','main':1,'sub':0,'type':['god', 'balance'],'hp':3945,'atk':1738,'re':481,'aw':{'2way': 1, 'hi': 2, 'ht': 1, 'skb': 1, 'huin': 1, 'cmbs': 1, 'add': 1}},
3763:{'nm':'刻風の時女神・ヴェルダンディ','main':3,'sub':0,'type':['god', 'recovery'],'hp':3255,'atk':1467,'re':852,'aw':{'2way': 1, 'ki': 2, 'ht': 1, 'skb': 1, 'huin': 1, 'cmbs': 1, 'add': 1}},
3764:{'nm':'刻水の時女神・スクルド','main':2,'sub':0,'type':['god', 'attack'],'hp':5375,'atk':2011,'re':181,'aw':{'2way': 1, 'mz': 2, 'ht': 1, 'skb': 1, 'huin': 1, 'cmbs': 2, 'add': 1}},
3765:{'nm':'火守の赤龍喚士・ソニア','main':1,'sub':0,'type':['dragon', 'vitality'],'hp':4607,'atk':1925,'re':165,'aw':{'hir': 2, 'birs': 2, 'bire': 1, 'skb': 2, 'cmbs': 1}},
3766:{'nm':'木守の緑龍喚士・ソニア','main':3,'sub':0,'type':['dragon', 'attack'],'hp':4038,'atk':2520,'re':275,'aw':{'kir': 2, 'birs': 2, 'bire': 1, 'skb': 2, 'yb': 1, 'cmbs': 1}},
3767:{'nm':'水守の青龍喚士・ソニア','main':2,'sub':0,'type':['dragon', 'recovery'],'hp':4580,'atk':1549,'re':700,'aw':{'mzr': 2, 'birs': 2, 'bire': 1, 'skb': 2, 'yb': 1, 'cmbs': 1}},
3768:{'nm':'宿志の青龍契士・リューネ','main':2,'sub':5,'type':['dragon', 'attack'],'hp':3418,'atk':2303,'re':305,'aw':{'2way': 2, 'mzr': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 1, 'add': 1}},
3769:{'nm':'龍還の鮫龍契士・リューネ','main':2,'sub':0,'type':['dragon', 'recovery'],'hp':3418,'atk':1953,'re':865,'aw':{'mzr': 4, 'skb': 1, 'huin': 2, 'yb': 1}},
3770:{'nm':'奔放の緑龍契士・シルヴィ','main':3,'sub':4,'type':['dragon', 'attack'],'hp':3210,'atk':2413,'re':233,'aw':{'2way': 2, 'kir': 2, 'skb': 1, 'yb': 1, 'cmbs': 1, 'add': 1, 'tmHP': 1}},
3771:{'nm':'獣伐の鷹龍契士・シルヴィ','main':3,'sub':0,'type':['dragon', 'balance'],'hp':4110,'atk':2153,'re':473,'aw':{'kir': 4, 'skb': 1, 'huin': 1, 'yb': 1}},
3772:{'nm':'想起の橙龍契士・サリア','main':4,'sub':1,'type':['dragon', 'vitality'],'hp':4818,'atk':1518,'re':120,'aw':{'2way': 1, 'hkr': 2, 'skb': 1, 'yb': 1, 'cmbs': 1, 'add': 1, 'tmRE': 1}},
3773:{'nm':'業裁の兎龍契士・サリア','main':4,'sub':0,'type':['dragon', 'attack'],'hp':3978,'atk':2308,'re':120,'aw':{'hkr': 3, 'skb': 1, 'huin': 1, 'yb': 1}},
3774:{'nm':'人類を救う鍵・エレン・イェーガー','main':1,'sub':1,'type':['vitality', 'machine'],'hp':4293,'atk':2008,'re':98,'aw':{'hir': 2, 'birs': 2, 'skb': 1, 'huin': 2, 'cmbs': 2}},
3777:{'nm':'女型の巨人・アニ・レオンハート','main':4,'sub':2,'type':['attack', 'vitality'],'hp':4805,'atk':1982,'re':19,'aw':{'hkr': 3, 'skb': 1, 'yb': 1, 'kilr': 2}},
3779:{'nm':'鎧の巨人・ライナー・ブラウン','main':3,'sub':4,'type':['vitality', 'attack'],'hp':5298,'atk':1764,'re':0,'aw':{'kir': 2, 'skb': 2, 'yb': 1, 'kilr': 2}},
3787:{'nm':'獄眼の黒幻魔・ズオー','main':5,'sub':0,'type':['evil', 'attack'],'hp':4595,'atk':2321,'re':90,'aw':{'2way': 1, 'kir': 1, 'ymr': 1, 'skb': 1, 'yb': 1, 'kilr': 1}},
3788:{'nm':'破神機・ラグナロク＝ドラゴン','main':3,'sub':5,'type':['dragon', 'machine'],'hp':6030,'atk':1855,'re':230,'aw':{'2way': 1, 'birs': 2, 'skb': 1, 'huin': 1, 'yb': 2, 'kilr': 2}},
3789:{'nm':'輝虹の花嫁・エスカマリ','main':4,'sub':4,'type':['machine', 'god'],'hp':4505,'atk':2055,'re':413,'aw':{'hk': 7, 'skb': 1, 'huin': 1}},
3790:{'nm':'聖瓶の花嫁・シェアト','main':4,'sub':2,'type':['machine', 'god'],'hp':5055,'atk':1053,'re':460,'aw':{'2way': 5, 'skb': 2, 'yb': 1, 'add': 1}},
3791:{'nm':'星夜の花嫁・ペルセポネ','main':5,'sub':4,'type':['god', 'evil'],'hp':2639,'atk':1707,'re':630,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'tmRE': 1}},
3808:{'nm':'ドット・クラウド','main':4,'sub':0,'type':['attack', 'vitality'],'hp':4073,'atk':2159,'re':188,'aw':{'hkr': 2, 'skb': 1, 'huin': 1, 'kilr': 1, 'tmRE': 1, 'noDmg': 1}},
3809:{'nm':'ドット・セフィロス','main':5,'sub':0,'type':['attack', 'evil'],'hp':4035,'atk':2302,'re':123,'aw':{'ymr': 2, 'skb': 1, 'yb': 1, 'kilr': 1, 'tmHP': 1, 'noDmg': 1}},
3810:{'nm':'ドット・スコール','main':1,'sub':0,'type':['attack', 'vitality'],'hp':3425,'atk':2009,'re':16,'aw':{'2way': 1, 'hi': 2, 'skb': 1, 'yb': 1, 'noDmg': 1}},
3811:{'nm':'ドット・リノア','main':2,'sub':0,'type':['recovery', 'evil'],'hp':2720,'atk':1426,'re':578,'aw':{'mz': 2, 'birs': 2, 'skb': 1, 'noDmg': 1}},
3812:{'nm':'ドット・ジタン','main':3,'sub':0,'type':['attack', 'vitality'],'hp':3460,'atk':1916,'re':62,'aw':{'2way': 1, 'ki': 2, 'skb': 2, 'noDmg': 1}},
3813:{'nm':'ドット・ティーダ','main':2,'sub':0,'type':['vitality', 'attack'],'hp':3868,'atk':1714,'re':59,'aw':{'mz': 2, 'mzr': 2, 'yb': 1, 'noDmg': 1}},
3815:{'nm':'ドット・暗黒騎士・セシル','main':5,'sub':0,'type':['attack', 'vitality'],'hp':5302,'atk':1746,'re':78,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 2, 'tmHP': 1, 'noDmg': 1}},
3816:{'nm':'ドット・パラディン・セシル','main':4,'sub':0,'type':['attack', 'recovery'],'hp':3098,'atk':2253,'re':428,'aw':{'2way': 1, 'skb': 1, 'huin': 1, 'yb': 2, 'tmHP': 1, 'noDmg': 1}},
3820:{'nm':'ドット・ヴァン','main':4,'sub':0,'type':['attack', 'vitality'],'hp':4095,'atk':1670,'re':28,'aw':{'2way': 2, 'hkr': 2, 'skb': 1, 'noDmg': 1}},
3834:{'nm':'空都の守護神・アテナ＝へリオス','main':1,'sub':4,'type':['god', 'vitality', 'attack'],'hp':4550,'atk':2290,'re':0,'aw':{'2way': 3, 'hi': 2, 'skb': 2, 'kilr': 2}},
3850:{'nm':'正統王位継承者・キン肉マン','main':1,'sub':1,'type':['balance'],'hp':4115,'atk':1760,'re':425,'aw':{'2way': 3, 'birs': 2, 'skb': 2, 'huin': 1, 'tmHP': 1}},
3854:{'nm':'超人血盟軍先鋒・ザ・ニンジャ','main':5,'sub':1,'type':['evil', 'attack'],'hp':3038,'atk':1770,'re':150,'aw':{'2way': 2, 'gls': 3, 'skb': 2}},
3856:{'nm':'完璧超人・ネプチューンマン','main':4,'sub':3,'type':['vitality', 'attack'],'hp':3705,'atk':1405,'re':0,'aw':{'hk': 2, 'skb': 1, 'kilr': 1, 'brk': 1}},
3858:{'nm':'超人血盟軍中堅・バッファローマン','main':1,'sub':2,'type':['evil', 'attack'],'hp':2420,'atk':2040,'re':13,'aw':{'2way': 1, 'skb': 3}},
3867:{'nm':'ドット・紅蓮の女帝・エキドナ','main':1,'sub':0,'type':['recovery', 'evil'],'hp':1977,'atk':1149,'re':680,'aw':{'atk': 1, 'kaihuku': 1, 'gls': 1, 'skb': 1, 'yb': 1, 'noDmg': 1}},
3871:{'nm':'ドット・常夜の魔女・リリス','main':5,'sub':0,'type':['recovery', 'evil'],'hp':1877,'atk':1238,'re':668,'aw':{'kaihuku': 1, 're': 1, 'skb': 1, 'yb': 2, 'noDmg': 1}},
3872:{'nm':'滅炎の魔狼・フェンリル','main':5,'sub':1,'type':['evil', 'attack'],'hp':3005,'atk':2270,'re':213,'aw':{'2way': 2, 'skb': 2, 'huin': 1, 'yb': 2, 'kilr': 1}},
3875:{'nm':'神葬の魔狼・フェンリル＝ヴィズ','main':4,'sub':0,'type':['evil', 'balance'],'hp':4826,'atk':1899,'re':411,'aw':{'skb': 2, 'huin': 2, 'yb': 2, 'kilr': 2}},
3897:{'nm':'灼爪の玩龍喚士・コットン','main':1,'sub':4,'type':['dragon', 'attack'],'hp':4003,'atk':2349,'re':398,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 2, 'add': 1}},
3898:{'nm':'穿鮫の玩龍喚士・コットン','main':2,'sub':4,'type':['dragon', 'vitality'],'hp':5804,'atk':1851,'re':153,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 2, 'add': 1}},
3899:{'nm':'角砦の玩龍喚士・コットン','main':3,'sub':4,'type':['dragon', 'balance'],'hp':4511,'atk':2003,'re':451,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 2, 'add': 1}},
3900:{'nm':'聖獣の玩龍喚士・コットン','main':4,'sub':4,'type':['dragon', 'recovery'],'hp':3189,'atk':1749,'re':1000,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 2, 'add': 1}},
3901:{'nm':'道化の玩龍喚士・コットン','main':5,'sub':5,'type':['dragon', 'evil'],'hp':4813,'atk':2203,'re':241,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'yb': 1, 'cmbs': 2, 'add': 1}},
3903:{'nm':'魔星の神王妃・ヘラ＝ニクス','main':5,'sub':4,'type':['evil', 'god'],'hp':4245,'atk':1778,'re':395,'aw':{'ymr': 3, 'skb': 2, 'kilr': 1, 'cmbs': 1}},
3907:{'nm':'魔浄の雷龍契士・ガディウス','main':1,'sub':0,'type':['dragon', 'balance'],'hp':3963,'atk':1704,'re':513,'aw':{'hir': 2, 'bire': 1, 'skb': 2, 'yb': 3}},
3908:{'nm':'邪滅の雷龍契士・ティフォン','main':5,'sub':0,'type':['dragon', 'attack'],'hp':4023,'atk':2866,'re':86,'aw':{'2way': 3, 'bire': 1, 'skb': 1, 'huin': 1, 'yb': 3}},
3912:{'nm':'ステラウィル＆グランガード','main':1,'sub':0,'type':['attack', 'vitality'],'hp':1650,'atk':1200,'re':0,'aw':{'hir': 2, 'hp': 1, 'atk': 1, 'kilr': 1}},
3914:{'nm':'光槍グングニール＆アスガルドハット','main':3,'sub':0,'type':['attack', 'vitality'],'hp':1350,'atk':1350,'re':0,'aw':{'hp': 1, 'atk': 1, 're': 2, 'kilr': 1}},
3933:{'nm':'秘匿の漂龍喚士・エンラ','main':1,'sub':3,'type':['dragon', 'evil'],'hp':5711,'atk':1603,'re':325,'aw':{'birs': 2, 'skb': 1, 'huin': 1, 'cmbs': 3}},
3935:{'nm':'警守の荊龍喚士・ヴェルド','main':2,'sub':1,'type':['dragon', 'attack'],'hp':3001,'atk':2006,'re':306,'aw':{'2way': 1, 'mz': 1, 'hidec': 1, 'kilr': 1}},
3937:{'nm':'悲願の庭龍喚士・シャゼル','main':3,'sub':4,'type':['dragon', 'recovery'],'hp':3369,'atk':1496,'re':795,'aw':{'skb': 2, 'yb': 1, 'kilr': 3}},
3943:{'nm':'滅腕の荒龍契士・6号','main':1,'sub':2,'type':['dragon', 'attack'],'hp':3194,'atk':2705,'re':119,'aw':{'huin': 2, 'yb': 1, 'kilr': 3}},
3945:{'nm':'冷牙の虚龍契士・キリ','main':2,'sub':5,'type':['dragon', 'attack'],'hp':4189,'atk':1920,'re':290,'aw':{'hidec': 1, 'skb': 1, 'huin': 1, 'kilr': 3}},
3947:{'nm':'裂爪の蛮龍契士・ターディス','main':3,'sub':2,'type':['dragon', 'vitality'],'hp':6021,'atk':1842,'re':91,'aw':{'2way': 2, 'huin': 1, 'yb': 1, 'tmRE': 3}},
3949:{'nm':'狂影の恐龍契士・リィ','main':4,'sub':2,'type':['dragon', 'attack'],'hp':4335,'atk':2503,'re':195,'aw':{'2way': 2, 'skb': 1, 'huin': 1, 'tmHP': 3}},
3951:{'nm':'歪想の妖龍契士・クーリア','main':5,'sub':2,'type':['dragon', 'evil'],'hp':3794,'atk':2012,'re':359,'aw':{'skb': 1, 'huin': 2, 'yb': 2, 'cmbs': 1}},
3967:{'nm':'唱導の神・ルシャナ','main':3,'sub':4,'type':['god', 'recovery'],'hp':4067,'atk':1828,'re':722,'aw':{'ki': 2, 'gls': 2, 'skb': 2, 'huin': 1, 'yb': 1, 'add': 1}},
3968:{'nm':'ドット・爆炎龍ティラノス','main':1,'sub':0,'type':['dragon', 'balance'],'hp':3045,'atk':1264,'re':301,'aw':{'hp': 1, 'atk': 1, 'skb': 1, 'tmHP': 1, 'tmRE': 1, 'noDmg': 1}},
3969:{'nm':'ドット・氷塊龍プレシオス','main':2,'sub':0,'type':['dragon', 'balance'],'hp':3195,'atk':1206,'re':294,'aw':{'hp': 1, 'atk': 1, 'skb': 1, 'tmHP': 1, 'tmRE': 1, 'noDmg': 1}},
3975:{'nm':'暴叫の魔伯爵・ロノウェ','main':3,'sub':0,'type':['evil', 'machine'],'hp':4811,'atk':1852,'re':726,'aw':{'skb': 2, 'huin': 1, 'yb': 2, 'kilr': 1}},
3976:{'nm':'轟叫の魔伯爵・ロノウェ','main':3,'sub':1,'type':['evil', 'attack'],'hp':3811,'atk':2252,'re':486,'aw':{'2way': 1, 'skb': 2, 'huin': 1, 'yb': 2}},

};
	var sttm = 0; //for requestAnimationFrame
	var is_ld_type = true;
	var msm = ['A', 'B', 'C', 'D', 'E', 'F'];
	var zk_tg_btn = [true, false, false, false, false]; //for selecting monster (toggle button)
	var zk_tg_btn_sub = [true, false, false, false, false, false];
	var max_page = 0;
	//現在のチームの覚醒保有状況。
	var aw_list = {
		'hidec':[0,0,0,0,0,0], 'mzdec':[0,0,0,0,0,0], 'kidec':[0,0,0,0,0,0], 'hkdec':[0,0,0,0,0,0], 'ymdec':[0,0,0,0,0,0],
		'hi':[0,0,0,0,0,0], 'mz':[0,0,0,0,0,0], 'ki':[0,0,0,0,0,0], 'hk':[0,0,0,0,0,0], 'ym':[0,0,0,0,0,0], 'ht':[0,0,0,0,0,0],
		'hir':[0,0,0,0,0,0], 'mzr':[0,0,0,0,0,0], 'kir':[0,0,0,0,0,0], 'hkr':[0,0,0,0,0,0], 'ymr':[0,0,0,0,0,0],
		'2way':[0,0,0,0,0,0], 'skb':[0,0,0,0,0,0], 'mlb':[0,0,0,0,0,0], 'kilr':[0,0,0,0,0,0], 'huin':[0,0,0,0,0,0],
		'jm':[0,0,0,0,0,0], 'dk':[0,0,0,0,0,0], 'gls':[0,0,0,0,0,0], 'birs':[0,0,0,0,0,0], 'bire':[0,0,0,0,0,0],
		're':[0,0,0,0,0,0], 'yb':[0,0,0,0,0,0], 'cmbs':[0,0,0,0,0,0], 'brk':[0,0,0,0,0,0], 'sen_klr':[0,0,0,0,0,0],
		'add':[0,0,0,0,0,0], 'tmHP':[0,0,0,0,0,0], 'tmRE':[0,0,0,0,0,0], 'noDmg':[0,0,0,0,0,0]
	};
	//現在のチームのステータス。
	var status_list = {
		'hp':[0,0,0,0,0,0], 'atk':[1000,1000,1000,1000,1000,1000], 're':[300,300,300,300,300,300]
	};
	var assist_mns = {
		'no':[0,0,0,0,0,0], 'hp':[0,0,0,0,0,0],	'atk':[0,0,0,0,0,0],
		're':[0,0,0,0,0,0], 'up':[false, false, false, false, false, false]
	};
/*
microsoft edgeではworker動く
var monswork = new Worker("monswork.js");
monswork.postMessage(mns);
monswork.onmessage = function(e){
	//console.log(e);
	$('select[name^=nm]').append(e.data);
};
*/

	function selectGUI(num, str) {
		$('#'+str + num).append('<div class="bk" data-000="'+num+'" data-nm="'+str+'" ></div>');
		sttm = Date.now();
		requestAnimationFrame(reqAnim);
	};

	for (let id_fragment in [...Array(6).keys()]) {
		const id_num = parseInt(id_fragment) + 1;
		$('#nm' + id_num).on('click', function () {
			selectGUI(id_num, "nm");
		});
		$('#asis_nm' + id_num).on('click', function () {
			selectGUI(id_num, "asis_nm");
		});
	}

	function listMons(page, num) {
		var item = 24;
		var index = 0;
		var bgc = '';
		var hs = '<ul class=page>'
				+ '<li data-001=' + (page - 1) + '>previous</li>'
				+ '<li data-001=' + (parseInt(page) + 1) + '>next</li>'
			+ '</ul>'
			+ '<ul class=tgl_btn>'
				+ '<li id=tg1>火</li>'
				+ '<li id=tg2>水</li>'
				+ '<li id=tg3>木</li>'
				+ '<li id=tg4>光</li>'
				+ '<li id=tg5>闇</li>'
			+ '</ul>'
			+ '<ul class=tgl_btn_sub>'
				+ '<li id=tg_sub0>無</li>'
				+ '<li id=tg_sub1>火</li>'
				+ '<li id=tg_sub2>水</li>'
				+ '<li id=tg_sub3>木</li>'
				+ '<li id=tg_sub4>光</li>'
				+ '<li id=tg_sub5>闇</li>'
			+ '</ul>'
			+'<ul class="mns_list" >';
		for (let ky in mns) {
			if (zk_tg_btn[mns[ky]['main']-1] === true && zk_tg_btn_sub[mns[ky]['sub']] === true) {
				if (index >= item * (page - 1) && index < item * page) {
					bgc = 'z' + mns[ky]['main'] +'_'+mns[ky]['sub'];
					hs += '<li class='+bgc+'><span>'+ky+':</span><br>'+mns[ky]['nm']+'</li>';
				}
				index++;
			}
		}
		max_page = parseInt(index / item) + (index % item > 0 ? 1 : 0);
		hs += '</ul>';
		$('.bk').html(hs);
		for (let i = 0; i < zk_tg_btn.length; i++) {
			$('#tg' + (parseInt(i) + 1)).attr('class',(zk_tg_btn[i] ? 'on_btn' : 'off_btn'));
		}
		for (let i = 0; i < zk_tg_btn_sub.length; i++) {
			$('#tg_sub' + i).attr('class', (zk_tg_btn_sub[i] ? 'on_btn' : 'off_btn') );
		}
	}

	//mnsボタンクリックしたからステータスを入れる
	$('body').on('click', '.mns_list li', function () {
		var hs_char = $(this).children('span').html();
		var mns_num = hs_char.substring(0, hs_char.length - 1);
		var num = $('.bk').data('000');
		var hp = parseInt(mns[mns_num]['hp']);
		var atk = parseInt(mns[mns_num]['atk']);
		var re = parseInt(mns[mns_num]['re']);
		var nm = $('.bk').data('nm');
		$('.bk').remove();
		//
		$('#'+ nm + num).html(mns[mns_num]['nm']);
		$('#'+ nm + num).removeAttr('class');
		$('#'+ nm + num).attr('class', 'z' + mns[mns_num]['main'] + '_' + mns[mns_num]['sub']);
		if (nm.length === 2) {
			//main ele
			$('select[name=main' + num + ']').val(mns[mns_num]['main']);
			//sub ele
			$('select[name=sub' + num + ']').val(mns[mns_num]['sub']);
			//for status
			if ($('#pls' + num).prop('checked')) {
				hp += 990;
				atk += 495;
				re += 297;
			}
			//change awakens
			awakensIni(num);
			for (var k in mns[mns_num]['aw']) {
				//キラーは3個以上刺さらない
				if (k === 'kilr' && mns[mns_num]['aw'][k] >= 3) $('select[name=' + k + num + ']').val(3);
				$('select[name=' + k + num + ']').val(mns[mns_num]['aw'][k]);
			}
			//awaken part
			awList(num, mns[mns_num]['aw']);
			statusChange(num, hp, atk, re);
			commitAssist(num, 0, {'hp':0, 'atk':0, 're':0});
		} else {
			assist_mns['no'][num - 1] = mns_num;
			if ($('#asis_pls' + num).prop('checked')) {
				hp += 990;
				atk += 495;
				re += 297;
			}
			//引数のステータスを反映させるべきか、足すべきか引くべきか判断 => assist_mnsに入れる
			commitAssist(num, mns_num, {'hp':hp, 'atk':atk, 're':re});
		}
	});
	
	//
	$('body').on('click', '.page li', function () {
		let page = parseInt($(this).data('001'));
		const num = parseInt($('.bk').data('000'));
		if (page < 1) {
			page = 1;
		} else if (page > max_page) {
			page = max_page;
		}
		listMons(page, num);
	});

	//for toggle button addEventListener
	$('body').on('click', '.tgl_btn li', function () {
		var zk = $(this).attr('id').substr(2, 1);
		//true->false or false->true, because toggle
		zk_tg_btn[zk - 1] = !zk_tg_btn[zk - 1];
		listMons(1, parseInt($('.bk').data('000')));
	});
	$('body').on('click', '.tgl_btn_sub li', function () {
		var zk = $(this).attr('id').slice(-1);
		//true->false or false->true, because toggle
		zk_tg_btn_sub[zk] = !zk_tg_btn_sub[zk];
		listMons(1, parseInt($('.bk').data('000')));
	});

	$('input[type=checkbox]').on('click', function () {
		var atr = $(this).attr('id');
		var num = atr.substr(atr.length - 1);
		var asi_no = assist_mns['no'][atr.substr(atr.length - 1)];
		if (atr.substr(0, 3) === 'pls') {
			var atk = parseInt($('input[name=atk' + num + ']').val());
			var re = parseInt($('input[name=re' + num + ']').val());
			var pls_hsi = {'atk':0, 'hp':0, 're':0};
			if ($(this).prop('checked')) {
				pls_hsi['hp'] = 990;
				pls_hsi['atk'] = 495;
				pls_hsi['re'] = 297;
			} else {
				pls_hsi['hp'] = -990;
				pls_hsi['atk'] = -495;
				pls_hsi['re'] = -297;
			}
			//change status for awaken list under team table
			statusChange(num, status_list['hp'][num-1]+pls_hsi['hp'], atk + pls_hsi['atk'], re + pls_hsi['re']);
			commitAssist(num, 0, {'hp':0, 'atk':0, 're':0});
		} else if (atr.substr(0, 8) === 'asis_pls' && assist_mns['no'][num - 1] !== 0) {
			var asi_no = assist_mns['no'][num - 1];
			if ($(this).prop('checked')) {
				commitAssist(num, asi_no, {'hp':mns[asi_no]['hp']+990, 'atk':mns[asi_no]['atk']+495, 're':mns[asi_no]['re']+297});
			} else {
				commitAssist(num, asi_no, {'hp':mns[asi_no]['hp'], 'atk':mns[asi_no]['atk'], 're':mns[asi_no]['re']});
			}

		}
	});

	//直接攻撃力か回復力の値を変更した時
	$('#team input[type=text]').on('change', e => {
		const num = e.target.name.slice(-1);
		const atk_or_re = e.target.name.slice(0, -1);
		status_list[atk_or_re][num - 1] = parseInt(e.target.value);
		// reduce関数で合計値を生成、出力
		$('#status_'+atk_or_re).html(status_list[atk_or_re].reduce((sum_val, data) => sum_val + data));
	});

	//覚醒一覧に関連させる。
	$('#team select').on('change', function(){
		var atr = $(this).attr('name').slice(0, -1);
		var num = $(this).attr('name').substr(-1);
		var effect_val = parseInt($(this).val()) - parseInt(aw_list[atr][num - 1]);
		//aw_list
		aw_list[atr][num - 1] = parseInt($(this).val());
		//覚醒一覧
		$('#aw_'+atr).html(parseInt($('#aw_'+atr).html()) + parseInt(effect_val));
	});

//コンボの項目
	//属性選んだら色変える && 総コンボ数自動変換
	$('select[name^=zk]').on('change', function(){
		var bgc = '';
		var vl = $(this).val();

		if (0 == vl) {
			$(this).parent().parent().removeAttr('class');
		} else {
			if (1 == vl) bgc = 'bgc_hi';
			else if (2 == vl) bgc = 'bgc_mz';
			else if (3 == vl) bgc = 'bgc_ki';
			else if (4 == vl) bgc = 'bgc_hk';
			else if (5 == vl) bgc = 'bgc_ym';
			else if (6 == vl) bgc = 'bgc_kh';

			$(this).parent().parent().attr('class', bgc);
		}
		var at = $(this).attr('name').substr(2, 1);
		$('#cmb').val(at);
	});


	//dmg
	$('#dir_but').on('click', function () {
		$(this).attr('disabled', 'disabled');
		$(this).val('計算中');
		//攻撃力、回復力をもってくる
		var atks = getAtk();
		//コンボをもってくる
		var cmb = getCmb();
		var sk = getLeadSkl();

		var dm_ary = getDm(atks, cmb, sk);
		//表とpタグに出力(ダメージ)
		setDm(dm_ary, atks);

		butUserble();
	});

	//ボタン連打対策（）
	function butUserble() {
		$('#dir_but').val('この条件でダメージ計算');
		$('#dir_but').removeAttr('disabled');
	};
	//攻撃力回復力をArrayに入れる
	function getAtk() {
		var ar = {
			'atk': {}, 're': {}, 'main': {}, 'sub': {}, '2way': {},
			'hi':0, 'mz':0, 'ki':0, 'hk':0, 'ym':0, 'ht':0,
			'hir':0, 'mzr':0, 'kir':0, 'hkr':0, 'ymr':0,
			'kilr': {}, 'mlb': {}, 'cmbs':{}, 'sen_klr':{}, 'noDmg':{}
		};
		for (var i = 1; i <= 6; i++) {
			ar['atk'][i] = parseInt($('input[name=atk' + i + ']').val());
			ar['re'][i] = parseInt($('input[name=re' + i + ']').val());
			ar['main'][i] = parseInt($('select[name=main' + i + ']').val());
			ar['sub'][i] = parseInt($('select[name=sub' + i + ']').val());
			ar['2way'][i] = parseInt($('select[name=2way' + i + ']').val());
			ar['hi'] += parseInt($('select[name=hi' + i + ']').val());
			ar['mz'] += parseInt($('select[name=mz' + i + ']').val());
			ar['ki'] += parseInt($('select[name=ki' + i + ']').val());
			ar['hk'] += parseInt($('select[name=hk' + i + ']').val());
			ar['ym'] += parseInt($('select[name=ym' + i + ']').val());
			ar['ht'] += parseInt($('select[name=ht' + i + ']').val());
			ar['hir'] += parseInt($('select[name=hir' + i + ']').val());
			ar['mzr'] += parseInt($('select[name=mzr' + i + ']').val());
			ar['kir'] += parseInt($('select[name=kir' + i + ']').val());
			ar['hkr'] += parseInt($('select[name=hkr' + i + ']').val());
			ar['ymr'] += parseInt($('select[name=ymr' + i + ']').val());
			ar['mlb'][i] = parseInt($('select[name=mlb' + i + ']').val());
			ar['kilr'][i] = parseInt($('select[name=kilr' + i + ']').val());
			ar['cmbs'][i] = parseInt($('select[name=cmbs' + i + ']').val());
			ar['noDmg'][i] = parseInt($('select[name=noDmg' + i + ']').val());
			ar['sen_klr'][i] = parseInt($('select[name=sen_klr' + i + ']').val());
		}
		return ar;
	}
	//コンボの中身をarrayに入れる
	function getCmb() {
		var cmb = {
			'num':$('#cmb').val(),
			'rt':{1:0, 2:0, 3:0, 4:0, 5:0},
			'square':{
				1:false, 2:false, 3:false, 4:false, 5:false,
				6:false, 7:false, 8:false, 9:false, 10:false
			},
			1:{'zk':0, 'num':0, 'pls':0},
			2:{'zk':0, 'num':0, 'pls':0},
			3:{'zk':0, 'num':0, 'pls':0},
			4:{'zk':0, 'num':0, 'pls':0},
			5:{'zk':0, 'num':0, 'pls':0},
			6:{'zk':0, 'num':0, 'pls':0},
			7:{'zk':0, 'num':0, 'pls':0},
			8:{'zk':0, 'num':0, 'pls':0},
			9:{'zk':0, 'num':0, 'pls':0},
			10:{'zk':0, 'num':0, 'pls':0}
		};
		for (var i=1; i <= 10; i++) { //これはコンボ10の10
			cmb[i]['zk'] = parseInt($('select[name=zk' + i + ']').val());
			cmb[i]['num'] = $('#cmb_dp'+i).val();
			cmb[i]['pls'] = $('#cmb_pls'+i).val();
			if ($('#cmb' + i + 'rt').prop('checked')) {
				cmb['rt'][cmb[i]['zk']]++; //add retsu
			}
			if ($('#cmb' + i + 'square').prop('checked')) {
				cmb['square'][i] = true; //add ダメージ無効貫通
			}
		}
		
		return cmb;
	}
	//リーダースキル倍率を格納する
	function getLeadSkl(){
		var sk = {
			'atk':parseFloat($('#leader_atk').val()),
			're':parseFloat($('#leader_re').val())
		};
		if (isNaN(sk['atk'])) {
			$('#leader_atk').val(1);
			sk['atk'] = 1;
		}
		if (isNaN(sk['re'])) {
			$('#leader_re').val(1);
			sk['re'] = 1;
		}
		if ($('#ld_type').prop('checked')) {
			sk['atk'] = Math.pow(sk['atk'], 2);
			sk['re'] = Math.pow(sk['re'], 2);
		}
		
		return sk;
	}

	$('#tm > p > label').on('click', function () {
		is_ld_type = !is_ld_type;
		if (is_ld_type) {
			$('#tm > p > label').css('background-color', 'white');
			$('#tm > p > label').css('color', 'blue');
			$('#tm > p > label').css('box-shadow', '1px 1px 1px 1px inset');
		} else {
			$('#tm > p > label').css('background-color', '#ccc');
			$('#tm > p > label').css('color', 'black');
			$('#tm > p > label').css('box-shadow', '1px 1px 1px 1px gray');
		}
	});

	//ダメージ
	function getDm(atks, cmb, sk) {
		var rtn = {
			'dm':{
				1:{'main':0, 'sub':0, 're':0},
				2:{'main':0, 'sub':0, 're':0},
				3:{'main':0, 'sub':0, 're':0},
				4:{'main':0, 'sub':0, 're':0},
				5:{'main':0, 'sub':0, 're':0},
				6:{'main':0, 'sub':0, 're':0},
				'sum':{1:0, 2:0, 3:0, 4:0, 5:0, 'all_zk':0, 6:0} //6 is heart
			},
			'cmb':{
				'hi':0, 'mz':0, 'ki':0, 'hk':0, 'ym':0, 'ht':0, 'sum':parseInt(cmb['num'])
			}
		};
		
		//注意！！！！！！！！！！！！！ここにコンボ10の10がある！！！
		for (let i=1; i <= 10; i++) {
			if (0 < cmb[i]['zk']) {
				var zk = '';
				if (cmb[i]['zk'] == 1) {
					zk = 'hi';
				} else if (cmb[i]['zk'] == 2) {
					zk = 'mz';
				} else if (cmb[i]['zk'] == 3) {
					zk = 'ki';
				} else if (cmb[i]['zk'] == 4) {
					zk = 'hk';
				} else if (cmb[i]['zk'] == 5) {
					zk = 'ym';
				} else {
					zk = 'ht';
				}
				rtn['cmb'][zk]++;
				for (var j=1; j <= 6; j++) {
					//var main_atk = atks['atk'][j] * sk['atk'];
					var hs = 0;
					var hs_sub = 0;
					var hs_re = 0;
					if (atks['main'][j] == cmb[i]['zk']) {
						hs += atks['atk'][j] //素の攻撃力
							* (1 + (cmb[i]['num'] - 3) * 0.25) //繋げたﾄﾞﾛｯﾌﾟ
							* (1 + (rtn['cmb']['sum'] - 1) * 0.25) //コンボ数
							* Math.pow(1.5, atks['mlb'][j]) //マルチブースト
							* Math.pow(3, atks['kilr'][j]) //キラー
							* Math.pow(1.5, atks['sen_klr'][j]) //潜在キラー
							* (1 + 0.15 * atks[zk+'r'] * cmb['rt'][cmb[i]['zk']])  //列強化
							* sk['atk']; //リーダースキル倍率
						//覚醒スキル==7コンボ以上強化
						if (rtn['cmb']['sum'] >= 7) hs *= Math.pow(2, atks['cmbs'][j]);
						if (cmb[i]['pls'] > 0) hs *= (cmb[i]['pls'] * 0.06 + 1) * (atks[zk] * 0.07 + 1);
						if (4 == cmb[i]['num']) hs *= Math.pow(1.5, atks['2way'][j]);
						if (cmb['square'][i]) hs *= Math.pow(2.5, atks['noDmg'][j]);
						rtn['dm'][j]['main'] += hs;
					}
					//sub
					if (atks['sub'][j] == cmb[i]['zk']) {
						var sub_atk = 0;
						if (atks['sub'][j] == atks['main'][j]) sub_atk = atks['atk'][j] * 0.1 * sk['atk'];
						else sub_atk = atks['atk'][j] * 0.3 * sk['atk'];
						hs_sub += sub_atk
							* (1 + (cmb[i]['num'] - 3) * 0.25)
							* (1 + (rtn['cmb']['sum'] - 1) * 0.25)
							* Math.pow(1.5, atks['mlb'][j])
							* Math.pow(3, atks['kilr'][j])
							* Math.pow(2.5, atks['noDmg'][j])
							* Math.pow(1.5, atks['sen_klr'][j])
							* (1 + 0.15 * atks[zk+'r'] * cmb['rt'][cmb[i]['zk']]);
						if (rtn['cmb']['sum'] >= 7) hs_sub *= Math.pow(2, atks['cmbs'][j]);
						if (cmb[i]['pls'] > 0) hs_sub *= (cmb[i]['pls'] * 0.06 + 1) * (atks[zk] * 0.07 + 1);
						if (4 == cmb[i]['num']) hs_sub *= Math.pow(1.5, atks['2way'][j]);
						if (cmb['square'][i]) hs *= Math.pow(2.5, atks['noDmg'][j]);
						rtn['dm'][j]['sub'] += hs_sub;
					}
					//ht
					if (6 == cmb[i]['zk']) {
						hs_re	+= atks['re'][j]
							* (1 + (cmb[i]['num'] - 3) * 0.25)
							* (1 + (rtn['cmb']['sum'] - 1) * 0.25)
							* Math.pow(1.5, atks['mlb'][j])
							* sk['re'];
						if (cmb[i]['pls'] > 0) hs_re *= (cmb[i]['pls'] * 0.06 + 1) * (atks['ht'] * 0.05 + 1);
						rtn['dm'][j]['re'] += hs_re;
					}
				}
			}
		}
		//sum
		for (var i=1; i<=5; i++) {	//各属性の合計を作っている。
			for (var j=1; j<=6; j++) { //攻撃する人
				if (i == atks['main'][j]) {
					rtn['dm']['sum'][i] += rtn['dm'][j]['main'];
				}
				if (i == atks['sub'][j]) {
					rtn['dm']['sum'][i] += rtn['dm'][j]['sub'];
				}
			}
			rtn['dm']['sum']['all_zk'] += rtn['dm']['sum'][i];
		}
		for (var i=1; i<=6; i++) { //回復合計生成
			rtn['dm']['sum'][6] += rtn['dm'][i]['re'];
		}
		
		return rtn;
	}

	function setDm(dm, atks){
		//メイン属性のダメージを示す
		let main_html = '<th>メイン属性</th>';
		for (let i=1; i<=6; i++) {
			let bgc = '';
			if (1 == atks['main'][i]) bgc = 'bgc_hi';
			else if (2 == atks['main'][i]) bgc = 'bgc_mz';
			else if (3 == atks['main'][i]) bgc = 'bgc_ki';
			else if (4 == atks['main'][i]) bgc = 'bgc_hk';
			else if (5 == atks['main'][i]) bgc = 'bgc_ym';
			main_html += '<td class='+bgc+'>'+Math.round(dm['dm'][i]['main'])+'</td>';
		}
		$('#each_main').html(main_html);
		//サブ属性のダメージを示す
		let sub_html = '<th>サブ属性</th>';
		for (let i=1; i<=6; i++) {
			let bgc = '';
			if (6 > atks['sub'][i]) {
				if (1 == atks['sub'][i]) bgc = 'bgc_hi';
				else if (2 == atks['sub'][i]) bgc = 'bgc_mz';
				else if (3 == atks['sub'][i]) bgc = 'bgc_ki';
				else if (4 == atks['sub'][i]) bgc = 'bgc_hk';
				else if (5 == atks['sub'][i]) bgc = 'bgc_ym';
				sub_html += '<td class='+bgc+'>'+Math.round(dm['dm'][i]['sub'])+'</td>';
			} else {
				sub_html += '<td>-</td>';
			}
		}
		$('#each_sub').html(sub_html);
		//回復量を示す
		let recovery_html = '<th>回復</th>';
		for (let i=1; i<=6; i++) {
			recovery_html += '<td class=bgc_kh>'+Math.round(dm['dm'][i]['re'])+'</td>';
		}
		$('#each_re').html(recovery_html);
		//下段
		let all_ele = '<th>各属性合計</th>';
		all_ele += '<td class="bgc_hi">'+Math.round(dm['dm']['sum'][1])+'</td>';		
		all_ele += '<td class="bgc_mz">'+Math.round(dm['dm']['sum'][2])+'</td>';
		all_ele += '<td class="bgc_ki">'+Math.round(dm['dm']['sum'][3])+'</td>';
		all_ele += '<td class="bgc_hk">'+Math.round(dm['dm']['sum'][4])+'</td>';
		all_ele += '<td class="bgc_ym">'+Math.round(dm['dm']['sum'][5])+'</td>';
		all_ele += '<td class="bgc_kh">'+Math.round(dm['dm']['sum'][6])+'</td>';
		$('#each_sum').html(all_ele);
		//合計ダメージ
		$('#dm_sum').html('合計 '+Math.round(dm['dm']['sum']['all_zk'])+' ダメージ');
		
		//
		let combo_html = '<th>コンボ数</th>';
		combo_html += '<td class="bgc_hi">'+dm['cmb']['hi']+'</td>';
		combo_html += '<td class="bgc_mz">'+dm['cmb']['mz']+'</td>';
		combo_html += '<td class="bgc_ki">'+dm['cmb']['ki']+'</td>';
		combo_html += '<td class="bgc_hk">'+dm['cmb']['hk']+'</td>';
		combo_html += '<td class="bgc_ym">'+dm['cmb']['ym']+'</td>';
		combo_html += '<td class="bgc_kh">'+dm['cmb']['ht']+'</td>';
		$('#each_cmb').html(combo_html);
		$('#cmb_sum').html('合計 '+dm['cmb']['sum']+' コンボ');
	}

	//覚醒の値、すべて0にする関数
	function awakensIni(num) {
		$('select[name=2way' + num + ']').val(0);
		$('select[name=hi' + num + ']').val(0);
		$('select[name=mz' + num + ']').val(0);
		$('select[name=ki' + num + ']').val(0);
		$('select[name=hk' + num + ']').val(0);
		$('select[name=ym' + num + ']').val(0);
		$('select[name=ht' + num + ']').val(0);
		$('select[name=hir' + num + ']').val(0);
		$('select[name=mzr' + num + ']').val(0);
		$('select[name=kir' + num + ']').val(0);
		$('select[name=hkr' + num + ']').val(0);
		$('select[name=ymr' + num + ']').val(0);
		$('select[name=mlb' + num + ']').val(0);
		$('select[name=kilr' + num + ']').val(0);
		$('select[name=cmbs' + num + ']').val(0);
		$('select[name=noDmg' + num + ']').val(0);
		$('select[name=sen_kilr' + num + ']').val(0);
	}

	//
	// toggle for combo && dir
	//
	$('#cmb_zone div').slideToggle();
	$('#cmb_zone span').css('transform', 'rotate(-90deg)');
	var cmb_tgl = false;

	$('#dir h4').on('click', function () {
		$('#dir div').slideToggle();
		$('#cmb_zone div').slideToggle();
		if (!cmb_tgl) {
			$('#dir span').css('transform', 'rotate(-90deg)');
			$('#cmb_zone span').css('transform', 'rotate(0deg)');
		} else {
			$('#dir span').css('transform', 'rotate(0deg)');
			$('#cmb_zone span').css('transform', 'rotate(-90deg)');
		}
		cmb_tgl = !cmb_tgl;
	});

	$('#cmb_zone h4').on('click', function () {
		$('#dir div').slideToggle();
		$('#cmb_zone div').slideToggle();
		if (!cmb_tgl) {
			$('#dir span').css('transform', 'rotate(-90deg)');
			$('#cmb_zone span').css('transform', 'rotate(0deg)');
		} else {
			$('#dir span').css('transform', 'rotate(0deg)');
			$('#cmb_zone span').css('transform', 'rotate(-90deg)');
		}
		cmb_tgl = !cmb_tgl;
	});

	//
	// ドロップの再生成ボタンの実装
	//

	$('#cmb_redrop').on('click', function () {
		var get_tbl = getDropRate();
		setBanmen(get_tbl);
	});

	function getDropRate() {
		var hi = parseInt($('#hi_gene').val());
		var mz = parseInt($('#mz_gene').val());
		var ki = parseInt($('#ki_gene').val());
		var hk = parseInt($('#hk_gene').val());
		var ym = parseInt($('#ym_gene').val());
		var ht = parseInt($('#ht_gene').val());

		if (hi + mz + ki + hk + ym + ht < 100) {
			ht = 100 - (hi + mz + ki + hk + ym);
		} else if (hi + mz + ki + hk + ym + ht > 100) {
			ht = 100 - (hi + mz + ki + hk + ym);
			if (ht < 0) {
				ht = 0;
				ym = 100 - (hi + mz + ki + hk);
				if (ym < 0) {
					ym = 0;
					hk = 100 - (hi + mz + ki);
					if (hk < 0) {
						hk = 0;
						ki = 100 - hi - mz;
						if (ki < 0) {
							ki = 0;
							mz = 100 - hi;
							if (mz < 0) {
								mz = 0;
								hi = 100;
							}
						}
					}
				}
			}
		}

		$('#hi_gene').val(hi);
		$('#mz_gene').val(mz);
		$('#ki_gene').val(ki);
		$('#hk_gene').val(hk);
		$('#ym_gene').val(ym);
		$('#ht_gene').val(ht);

		return {
			'hi': hi, 'mz': mz, 'ki': ki, 'hk': hk, 'ym': ym, 'ht': ht,
			'hip': parseInt($('#hi_pls').val()),
			'mzp': parseInt($('#mz_pls').val()),
			'kip': parseInt($('#ki_pls').val()),
			'hkp': parseInt($('#hk_pls').val()),
			'ymp': parseInt($('#ym_pls').val()),
			'htp': parseInt($('#ht_pls').val())
		};
	}

	function setBanmen(dp_tbl) {
		for (var i = 0; i < msm.length; i++) {
			for (var k = 1; k <= 5; k++) {
				var dp = getADrop(dp_tbl);
				var hs = '<img src=img/' + dp + 'A.png width=59 height=59>';
				$('#' + msm[i] + k).html(hs);
			}
		}
	}

	//to get a drop that standard the setting table
	function getADrop(dp_tbl) {
		var rd = rand(1, 100);
		var rtn = '';
		if (rd <= dp_tbl['hi']) {
			if (dp_tbl['hip'] < rand(1, 100)) rtn = 'fire';
			else rtn = 'firep';
		} else if (rd <= dp_tbl['hi'] + dp_tbl['mz']) {
			if (dp_tbl['mzp'] < rand(1, 100)) rtn = 'water';
			else rtn = 'waterp';
		} else if (rd <= dp_tbl['hi'] + dp_tbl['mz'] + dp_tbl['ki']) {
			if (dp_tbl['kip'] < rand(1, 100)) rtn = 'tree';
			else rtn = 'treep';
		} else if (rd <= dp_tbl['hi'] + dp_tbl['mz'] + dp_tbl['ki'] + dp_tbl['hk']) {
			if (dp_tbl['hkp'] < rand(1, 100)) rtn = 'light';
			else rtn = 'lightp';
		} else if (rd <= dp_tbl['hi'] + dp_tbl['mz'] + dp_tbl['ki'] + dp_tbl['hk'] + dp_tbl['ym']) {
			if (dp_tbl['ymp'] < rand(1, 100)) rtn = 'dark';
			else rtn = 'darkp';
		} else {
			if (dp_tbl['htp'] <= rand(1, 100)) rtn = 'heart';
			else rtn = 'heartp';
		}

		return rtn;
	}

	function rand(min, max) {
		var num = Math.floor((Math.random() * ((max + 1) - min)) + min);
		return parseInt(num);
	}
	//
	// 以下ドロップ操作
	//
	$('.banmen p').attr('draggable', 'true');
	$('.banmen p').addClass('movable');
	var drg = document.getElementsByClassName('movable');
	//ptagじゃないと動かせない。IMGタグでは動かせない

	var plc = {
		'pos': '', 'fst_im': ''
	};

	//dragされる
	for (let i in drg) {
		drg[i].ondragstart = function (e) {

			e.dataTransfer.setDragImage(this.children[0], '59px', '59px');

			plc['pos'] = this.id;
			plc['fst_im'] = this.children[0];
		};
		//dropされる
		drg[i].ondragover = function (e) {
			e.preventDefault();

			if (plc['pos'] != this.id) {
				let im = document.getElementById(plc['pos']);
				$('#' + plc['pos']).html(this.children[0]);
				plc['pos'] = this.id;
				$(this).html();
			}
		};
		drg[i].ondrop = function (e) {
			e.preventDefault();

			$('#' + this.id).html(plc['fst_im']);
		};
	}

	//
	//  caliculate combo
	//
	$('#cmb_calc').on('click', function () {
		var cmb = banmenCmb();
		cmb = transformCmb(cmb);
		//cmbを表にして結果を表示 -> ダメージを算出
		//console.log(cmb);
		//攻撃力、回復力をもってくる
		var atks = getAtk();
		//console.log(atks);
		var sk = getLeadSkl();
		//console.log(sk);

		var dm_ary = getDm(atks, cmb, sk);
		//console.log(dm_ary);
		//表とpタグに出力(ダメージ)
		setDm(dm_ary, atks);

	});

	function banmenCmb() {
		//cmb left and top is point
		var bmn = getBanmen();
		//{'bmn': [], 'pls':[]};
		//banmen Combo
		var cmb = bmnCmb(bmn);
		//drop drop
		var hs_cmb = cmb;
		var hs_bmn = bmn;
		var otosi = true;
		while (otosi === true) {
			hs_bmn = dropDrop(hs_bmn, hs_cmb);
			hs_cmb = bmnCmb(hs_bmn);
			var hs_cmb_length = 0;
			for (var k in hs_cmb) {
				hs_cmb_length++;
			}
			if (hs_cmb_length > 0) {
				var cmb_length = 0;
				for (var key in cmb) {
					cmb_length++;
				}
				for (var ky in hs_cmb) {
					cmb[cmb_length] = hs_cmb[ky];
					cmb_length++;
				}
			} else {
				otosi = false;
			}
		}
		return cmb;
	}

	//盤面の情報を取得
	function getBanmen() {
		var bmn_pls = { 'bmn': {}, 'pls': {} };
		for (var i = 0; i < msm.length; i++) {
			for (var k = 1; k <= 5; k++) {
				var hs = $('#' + msm[i] + k).children('img').attr('src');
				if (hs.substr(-10, 5) === '/fire') {
					bmn_pls['bmn'][msm[i] + k] = 'hi';
					bmn_pls['pls'][msm[i] + k] = false;
				} else if (hs.substr(-10, 5) === 'water') {
					bmn_pls['bmn'][msm[i] + k] = 'mz';
					bmn_pls['pls'][msm[i] + k] = false;
				} else if (hs.substr(-10, 5) === '/tree') {
					bmn_pls['bmn'][msm[i] + k] = 'ki';
					bmn_pls['pls'][msm[i] + k] = false;
				} else if (hs.substr(-10, 5) === 'light') {
					bmn_pls['bmn'][msm[i] + k] = 'hk';
					bmn_pls['pls'][msm[i] + k] = false;
				} else if (hs.substr(-10, 5) === '/dark') {
					bmn_pls['bmn'][msm[i] + k] = 'ym';
					bmn_pls['pls'][msm[i] + k] = false;
				} else if (hs.substr(-10, 5) === 'heart') {
					bmn_pls['bmn'][msm[i] + k] = 'ht';
					bmn_pls['pls'][msm[i] + k] = false;
				} else if (hs.substr(-10, 5) === 'firep') {
					bmn_pls['bmn'][msm[i] + k] = 'hi';
					bmn_pls['pls'][msm[i] + k] = true;
				} else if (hs.substr(-10, 5) === 'aterp') {
					bmn_pls['bmn'][msm[i] + k] = 'mz';
					bmn_pls['pls'][msm[i] + k] = true;
				} else if (hs.substr(-10, 5) === 'treep') {
					bmn_pls['bmn'][msm[i] + k] = 'ki';
					bmn_pls['pls'][msm[i] + k] = true;
				} else if (hs.substr(-10, 5) === 'ightp') {
					bmn_pls['bmn'][msm[i] + k] = 'hk';
					bmn_pls['pls'][msm[i] + k] = true;
				} else if (hs.substr(-10, 5) === 'darkp') {
					bmn_pls['bmn'][msm[i] + k] = 'ym';
					bmn_pls['pls'][msm[i] + k] = true;
				} else if (hs.substr(-10, 5) === 'eartp') {
					bmn_pls['bmn'][msm[i] + k] = 'ht';
					bmn_pls['pls'][msm[i] + k] = true;
				}
				//本当はプラスならtruefalseで分けて示したい
			}
		}
		return bmn_pls;
	}

	//盤面の情報からコンボ
	function bmnCmb(bmn_p) {
		var bmn = bmn_p['bmn'];
		//var pls = bmn_p['pls'];
		var combo = [];
		var m = 0;
		for (var i = 0; i < msm.length; i++) {
			for (var k = 1; k <= 5; k++) { //tateのコメントの下に3(5-2)がある
				//yoko
				if (i < msm.length - 2 && bmn[msm[i] + k] != '') {
					if (bmn[msm[i] + k] == bmn[msm[parseInt(i) + 1] + k] && bmn[msm[i] + k] == bmn[msm[parseInt(i) + 2] + k]) { //最低でも3個消し
						combo[m] = [msm[i] + k, msm[parseInt(i) + 1] + k, msm[parseInt(i) + 2] + k];
						if (i + 3 < msm.length) {
							//4つけしか
							if (bmn[msm[i] + k] == bmn[msm[parseInt(i) + 3] + k]) {
								combo[m].push(msm[parseInt(i) + 3] + k);
								//5tu
								if (i + 4 < msm.length) {
									if (bmn[msm[i] + k] == bmn[msm[parseInt(i) + 4] + k]) {
										combo[m].push(msm[parseInt(i) + 4] + k);
										//6tu
										if (i + 5 < msm.length) {
											if (bmn[msm[i] + k] == bmn[msm[parseInt(i) + 5] + k]) {
												combo[m].push(msm[parseInt(i) + 5] + k);
											}
										}
									}
								}
							}
						}
						m++;
					}
				}
				//tate
				if (k <= 3 && bmn[msm[i] + k] != '') {
					if (bmn[msm[i] + k] == bmn[msm[i] + (parseInt(k) + 1)] && bmn[msm[i] + k] == bmn[msm[i] + (parseInt(k) + 2)]) { //最低でも3個消し
						combo[m] = [msm[i] + k, msm[i] + (parseInt(k) + 1), msm[i] + (parseInt(k) + 2)];
						if (parseInt(k) + 3 <= 5) { //5 あり
							//4つけしか
							if (bmn[msm[i] + k] == bmn[msm[i] + (parseInt(k) + 3)]) {
								combo[m].push(msm[i] + (parseInt(k) + 3));
								//5tu
								if (parseInt(k) + 4 <= 5) { //5 あり
									if (bmn[msm[i] + k] == bmn[msm[i] + (parseInt(k) + 4)]) {
										combo[m].push(msm[i] + (parseInt(k) + 4));
									}
								}
							}
						}
						m++;
					}
				}
			}
		}

		return assumeCmb(bmn_p, combo);
	}

	function assumeCmb(bmn_p, combo) {
		//comboには、combo[何コンボ目][座標]と入っている
		var con_cmb = {};//0{zk:'', cmb:[]}
		var cmb_num = 1;
		//同じ座標を持つか
		for (var i = 0; i < combo.length; i++) {
			if (i == 0 && combo.length > 0) {
				var pls = 0;
				for (var m = 0; m < combo[i].length; m++) {
					if (bmn_p['pls'][combo[i][m]]) pls++;
				}
				con_cmb[0] = { 'zk': bmn_p['bmn'][combo[0][0]], 'pls': pls, 'cmb': combo[0] };
			} else {
				var umu = { 'a': 0, 'umu': false };
				for (var k = 0; k < combo[i].length && umu['umu'] === false; k++) {
					//同じ座標がある時は、con_cmbにそれを追加
					for (var a in con_cmb) {
						for (var b in con_cmb[a]['cmb']) {
							if (combo[i][k] == con_cmb[a]['cmb'][b]) {
								umu['umu'] = true;
								umu['a'] = a;
							}
						}
					}
				}
				//どの座標も無い時は、con_cmbの新しい項目に追加
				if (!umu['umu']) {
					var pls = 0;
					for (var m = 0; m < combo[i].length; m++) {
						if (bmn_p['pls'][combo[i][m]]) pls++;
					}
					con_cmb[cmb_num] = { 'zk': bmn_p['bmn'][combo[i][0]], 'pls': pls, 'cmb': combo[i] };
					cmb_num++;
				} else {
					//同じ座標がある時
					for (var k = 0; k < combo[i].length; k++) {
						//同じ座標がある時は、con_cmbにそれを追加
						var need = true;
						for (var b in con_cmb[umu['a']]['cmb']) {
							if (combo[i][k] == con_cmb[umu['a']]['cmb'][b]) need = false;
						}
						if (need) {
							con_cmb[umu['a']]['cmb'].push(combo[i][k]);
							if (bmn_p['pls'][combo[i][k]]) con_cmb[umu['a']]['pls']++;
						}
					}
				}
			}
		}

		//{cmb:{zahyo}, zk:hi, pls: int}

		var rtn_cmb = connectCombo(con_cmb);

		return rtn_cmb;
	}

	function dropDrop(bmn, cmb) {
		//erase drop
		for (var kb in bmn['bmn']) {
			for (var kc in cmb) {
				for (var zh = 0; zh < cmb[kc]['cmb'].length; zh++) {
					if (kb == cmb[kc]['cmb'][zh]) {
						bmn['bmn'][kb] = '';
						bmn['pls'][kb] = false;
					}
				}
			}
		}
		//dropDrop
		for (var i = 0; i < msm.length; i++) {
			bmn = otosu(bmn, msm[i]);
		}
		return bmn;
	}

	//横3,横3と上と下でくっつく場合
	function connectCombo(cmb) {
		var con_cmb = {};
		var ng_con = []; //くっつく組み合わせ
		for (var ky in cmb) {
			for (var ky2 in cmb) {
				if (ky != ky2 && cmb[ky]['zk'] == cmb[ky2]['zk']) {
					for (var zh in cmb[ky]['cmb']) {
						for (var zh2 in cmb[ky2]['cmb']) {
							switch (cmb[ky]['cmb'][zh].substring(0, 1)) {
								case 'A':
									if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'B'
										&& cmb[ky]['cmb'][zh].substring(1) == cmb[ky2]['cmb'][zh2].substring(1)) {
										//yoko dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									} else if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'A'
										&& (parseInt(cmb[ky]['cmb'][zh].substring(1)) - 1 == cmb[ky2]['cmb'][zh2].substring(1) || parseInt(cmb[ky]['cmb'][zh].substring(1)) + 1 == cmb[ky2]['cmb'][zh2].substring(1))) {
										//tate dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									}
									break;
								case 'B':
									if ((cmb[ky2]['cmb'][zh2].substring(0, 1) == 'A' || cmb[ky2]['cmb'][zh2].substring(0, 1) == 'C')
										&& cmb[ky]['cmb'][zh].substring(1) == cmb[ky2]['cmb'][zh2].substring(1)) {
										//yoko dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									} else if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'B'
										&& (parseInt(cmb[ky]['cmb'][zh].substring(1)) - 1 == cmb[ky2]['cmb'][zh2].substring(1) || parseInt(cmb[ky]['cmb'][zh].substring(1)) + 1 == cmb[ky2]['cmb'][zh2].substring(1))) {
										//tate dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									}
									break;
								case 'C':
									if ((cmb[ky2]['cmb'][zh2].substring(0, 1) == 'B' || cmb[ky2]['cmb'][zh2].substring(0, 1) == 'D')
										&& cmb[ky]['cmb'][zh].substring(1) == cmb[ky2]['cmb'][zh2].substring(1)) {
										//yoko dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									} else if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'C'
										&& (parseInt(cmb[ky]['cmb'][zh].substring(1)) - 1 == cmb[ky2]['cmb'][zh2].substring(1) || parseInt(cmb[ky]['cmb'][zh].substring(1)) + 1 == cmb[ky2]['cmb'][zh2].substring(1))) {
										//tate dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									}
									break;
								case 'D':
									if ((cmb[ky2]['cmb'][zh2].substring(0, 1) == 'C' || cmb[ky2]['cmb'][zh2].substring(0, 1) == 'E')
										&& cmb[ky]['cmb'][zh].substring(1) == cmb[ky2]['cmb'][zh2].substring(1)) {
										//yoko dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									} else if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'D'
										&& (parseInt(cmb[ky]['cmb'][zh].substring(1)) - 1 == cmb[ky2]['cmb'][zh2].substring(1) || parseInt(cmb[ky]['cmb'][zh].substring(1)) + 1 == cmb[ky2]['cmb'][zh2].substring(1))) {
										//tate dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									}
									break;
								case 'E':
									if ((cmb[ky2]['cmb'][zh2].substring(0, 1) == 'D' || cmb[ky2]['cmb'][zh2].substring(0, 1) == 'F')
										&& cmb[ky]['cmb'][zh].substring(1) == cmb[ky2]['cmb'][zh2].substring(1)) {
										//yoko dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									} else if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'E'
										&& (parseInt(cmb[ky]['cmb'][zh].substring(1)) - 1 == cmb[ky2]['cmb'][zh2].substring(1) || parseInt(cmb[ky]['cmb'][zh].substring(1)) + 1 == cmb[ky2]['cmb'][zh2].substring(1))) {
										//tate dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									}
									break;
								case 'F':
									if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'E'
										&& cmb[ky]['cmb'][zh].substring(1) == cmb[ky2]['cmb'][zh2].substring(1)) {
										//yoko dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									} else if (cmb[ky2]['cmb'][zh2].substring(0, 1) == 'F'
										&& (parseInt(cmb[ky]['cmb'][zh].substring(1)) - 1 == cmb[ky2]['cmb'][zh2].substring(1) || parseInt(cmb[ky]['cmb'][zh].substring(1)) + 1 == cmb[ky2]['cmb'][zh2].substring(1))) {
										//tate dousi
										ng_con = tyohukuHazusi(ky, ky2, ng_con);
									}
									break;
							}
						}
					}
				}
			}
		}

		//ng_con is doubling
		//[0,1] , [0,2] and [1,3] -> [0,1,2,3] && [0,1] , [0,2] and [1,2] -> [0,1,2]
		//関数に入れて回す->繋げたら即returnして、もう一度最初から。繋がらない時は脱出
		var mtm_ng = ng_con;
		var ary = [0, 1];
		while (ary[0] != ary[1]) {
			ary = dbrEscape(mtm_ng);
			if (ary[0] != ary[1]) mtm_ng = matomeCon(mtm_ng, ary);
		}

		var num = 0;
		var fit_key = false;
		for (var k in cmb) {
			fit_key = false;
			for (var i = 0; i < mtm_ng.length; i++) {
				for (var d = 0; d < mtm_ng[i].length; d++) {
					if (k == mtm_ng[i][d]) {
						//keyを合わせたら、cmb[k]['cmb']の値を連結
						fit_key = true;
					}
				}
			}
			//keyが合わなければ、con_cmbにそのまま代入 
			if (!fit_key) {
				con_cmb[num] = cmb[k];
				num++;
			}
		}
		for (var i = 0; i < mtm_ng.length; i++) {
			for (var d = 0; d < mtm_ng[i].length; d++) {
				if (d == 0) con_cmb[num] = cmb[mtm_ng[i][d]];
				else {
					for (var e = 0; e < cmb[mtm_ng[i][d]]['cmb'].length; e++) {
						con_cmb[num]['cmb'].push(cmb[mtm_ng[i][d]]['cmb'][e]);
					}
					con_cmb[num]['pls'] += parseInt(cmb[mtm_ng[i][d]]['pls']);
				}
			}
			num++;
		}
		return con_cmb;
	}

	function tyohukuHazusi(k, k2, grp) {
		var tyohuku = false;
		for (var i = 0; i < grp.length; i++) {
			if (grp[i][0] == k && grp[i][1] == k2) tyohuku = true;
			else if (grp[i][0] == k2 && grp[i][1] == k) tyohuku = true;
		}
		if (!tyohuku) {
			grp[grp.length] = [k, k2];
		}
		return grp;
	}

	//組み合わせるべきng_conのグループを探す
	function dbrEscape(con) {
		for (var i = 0; i < con.length; i++) {
			for (var m = i + 1; m < con.length; m++) {
				for (var k = 0; k < con[i].length; k++) {
					for (var n = 0; n < con[m].length; n++) {
						if (i != m && con[i][k] == con[m][n]) {
							return [i, m];
						}
					}
				}
			}
		}
		//組み合わせるべきものが無い時
		return [0, 0];
	}

	function matomeCon(con, ary) {
		var dbr = false;
		var adar = [];
		for (var n = 0; n < con[ary[1]].length; n++) {
			dbr = false;
			for (var k = 0; k < con[ary[0]].length; k++) {
				if (con[ary[1]][n] == con[ary[0]][k]) {
					dbr = true;
				}
			}
			if (!dbr) adar.push(con[ary[1]][n]);
		}
		for (var m = 0; m < adar.length; m++) {
			con[ary[0]].push(adar[m]);
		}
		con.splice(ary[1], ary[1]);
		return con;
	}

	function otosu(bmn, char) {
		for (var i = 0; i < 5; i++) { // 5 is tate
			for (var k = 5; k > 1; k--) {
				if (bmn['bmn'][char + k] == '') {
					//blank exchange with drop or blank
					bmn['bmn'][char + k] = bmn['bmn'][char + (parseInt(k) - 1)];
					bmn['pls'][char + k] = bmn['pls'][char + (parseInt(k) - 1)];
					bmn['bmn'][char + (parseInt(k) - 1)] = '';
					bmn['pls'][char + (parseInt(k) - 1)] = false;
				}
			}
		}

		return bmn;
	}

	function transformCmb(cmb) {
		//0:{'cmb':['A1','B1','C1'], 'pls':2, 'zk': 'hi'}
		//以下に変形
		var t_cmb = {
			'num':0,
			'rt':{1:0, 2:0, 3:0, 4:0, 5:0},
			'square':{
				1:false, 2:false, 3:false, 4:false, 5:false,
				6:false, 7:false, 8:false, 9:false, 10:false
			},
			1:{'zk':0, 'num':0, 'pls':0},
			2:{'zk':0, 'num':0, 'pls':0},
			3:{'zk':0, 'num':0, 'pls':0},
			4:{'zk':0, 'num':0, 'pls':0},
			5:{'zk':0, 'num':0, 'pls':0},
			6:{'zk':0, 'num':0, 'pls':0},
			7:{'zk':0, 'num':0, 'pls':0},
			8:{'zk':0, 'num':0, 'pls':0},
			9:{'zk':0, 'num':0, 'pls':0},
			10:{'zk':0, 'num':0, 'pls':0}
		};
		var zk = ['', 'hi', 'mz', 'ki', 'hk', 'ym', 'ht'];
		var sej = 1;
		for (var i in cmb) {
			t_cmb['num']++;
			t_cmb[sej]['num'] = cmb[i]['cmb'].length;
			t_cmb[sej]['pls'] = cmb[i]['pls'];
			for (var a = 1; a < zk.length; a++) {
				if (cmb[i]['zk'] == zk[a]) t_cmb[sej]['zk'] = a;
			}
			if (t_cmb[sej]['num'] >= 6) { //列形成か
				var rt_dbr = false;
				for (var d = 0; d < 5 && rt_dbr === false; d++) {
					var rt_ary = [false, false, false, false, false, false];
					for (var c = 0; c < cmb[i]['cmb'].length; c++) {
						for (var b = 0; b < msm.length; b++) {
							if (msm[b] + (parseInt(d) + 1) == cmb[i]['cmb'][c]) rt_ary[b] = true;
						}
					}
					if (rt_ary[0] && rt_ary[1] && rt_ary[2] && rt_ary[3] && rt_ary[4] && rt_ary[5]) {
						t_cmb['rt'][t_cmb[sej]['zk']]++;
						rt_dbr = true;
					}
				}
			}
			if (t_cmb[sej]['num'] == 9 && rt_dbr === false) { //3×3正方形 形成か
				var judge = 0;
				var candidate = [];
				for (var d = 1; d <= 5-2; d++) { //A1 - D3までで見つからなければfalseのまま 
					for (var b = 0; b < msm.length-2; b++) { 
						if (msm[b] + d == cmb[i]['cmb'][0]) {
							judge++;
							//他の8つを合わせる
							candidate = [
								/*msm[b] + d,*/ msm[b+1] + d, msm[b+2] + d,
								msm[b] + (parseInt(d)+1), msm[b+1] + (parseInt(d)+1), msm[b+2] + (parseInt(d)+1),
								msm[b] + (parseInt(d)+2), msm[b+1] + (parseInt(d)+2), msm[b+2] + (parseInt(d)+2)
							];
						}
					}
				}
				if (candidate.length === 8) {
					for (var d = 0; d < candidate.length; d++) {
						for (var b = 0; b < cmb[i]['cmb'].length; b++) {
							if (candidate[d] === cmb[i]['cmb'][b]) {
								judge++;
								break;
							}
						}
					}
				}
				if (judge === 9) {
					t_cmb['square'][sej] = true;
				}
				
			}
			sej++;
		}

		return t_cmb;
	}

	//覚醒一覧の値変更はこれでできている
	function awList(num, aw_ary){
		//aw_listの初期化(numのみ)
		for (let key in aw_list) {
			aw_list[key][num - 1] = 0;
		}
		//aw_listにmnsの値を入れる。
		for (let key in aw_ary) {
			aw_list[key][num - 1] = aw_ary[key];
		}
		//num = 1~6の値を一覧に表示
		for (let key in aw_list) {
			let hs = 0;
			for (let i=0; i < aw_list[key].length; i++) {
				hs += aw_list[key][i];
			}
			$('#aw_'+key).html(hs);
		}
	}

	//ステータスの変更を見えるようにDOM(numは変更があったモンスターの左から数えて何番目かの値)
	function statusChange(num, hp, atk, re){
		status_list['hp'][num - 1] = hp;
		status_list['atk'][num - 1] = atk;
		status_list['re'][num - 1] = re;
		
		$('input[name="atk' + num + '"]').val(atk);
		$('input[name="re' + num + '"]').val(re);
		
		var st_sum = {'atk':0, 'hp':0, 're':0};
		//マルチブースト
		for (let i=0; i < status_list['atk'].length; i++) {
			st_sum['atk'] += status_list['atk'][i] * Math.pow(1.5, aw_list['mlb'][i]);
			st_sum['hp'] += status_list['hp'][i] * Math.pow(1.5, aw_list['mlb'][i]);
			st_sum['re'] += status_list['re'][i] * Math.pow(1.5, aw_list['mlb'][i]);
		}
		var teamAw = {'HP':0, 'RE':0};
		//チームHP強化、チーム回復強化
		for (let i=0; i < aw_list['tmHP'].length; i++) {
			teamAw['HP'] += aw_list['tmHP'][i];
			teamAw['RE'] += aw_list['tmRE'][i];
		}
		//チームHP強化、チーム回復強化
		st_sum['hp'] *= (1 + 0.05 * teamAw['HP']);
		st_sum['re'] *= (1 + 0.1 * teamAw['RE']);

		$('#status_atk').html(Math.round(st_sum['atk']));
		$('#status_hp').html(Math.round(st_sum['hp']));
		$('#status_re').html(Math.round(st_sum['re']));
	}
	
	function setAssistStatus(num, hp, atk, re){
		//assist上昇 HP->10% atk->5% re->15%
		var ary = {
			'hp': Math.ceil(hp * 10/100), 
			'atk': Math.ceil(atk * 5/100),
			're': Math.ceil(re * 15/100)
		};
		assist_mns['hp'][num - 1] = ary['hp'];
		assist_mns['atk'][num - 1] = ary['atk'];
		assist_mns['re'][num - 1] = ary['re'];
		
		return ary;
	}
	//setAssistStatusの前にcommitAssistをやらなければいけない
	function commitAssist(num, mns_num, status){
		//num = どこのアシストモンス枠が押されたか
		//mns_num = 新しく設定されるmnsのkey(monster ID), 設定が変わらないなら0
		//assist_mns = {};ここには古いモンスターのデータがある
		var ar = {};
		var hp = 0;
		var atk = 0;
		var re = 0;
		//hp && atkが0のモンスターはいないので、とってくる(ベースモンスターが入っている)
		
		if (status['hp'] == 0 && status['atk'] == 0) {
			ar['hp'] = assist_mns['hp'][num - 1];
			ar['atk'] = assist_mns['atk'][num - 1];
			ar['re'] = assist_mns['re'][num - 1];
		}
		//assistのメイン属性
		var assist_main = 0;
		if (mns_num > 0) {
			assist_main = mns[mns_num]['main'];
			assist_mns['no'][num - 1] = mns_num;
		}
		if (assist_mns['no'][num - 1] > 0) assist_main = mns[assist_mns['no'][num - 1]]['main'];

		if (mns_num === 0) { //changed base_monster
			if (assist_main == $('select[name=main'+num+']').val()) {
				hp = status_list['hp'][num - 1] + ar['hp'];
				atk = status_list['atk'][num - 1] + ar['atk'];
				re = status_list['re'][num - 1] + ar['re'];
				statusChange(num, hp, atk, re);
				assist_mns['up'][num - 1] = true;
			} else {
				assist_mns['up'][num - 1] = false;
			}
		} else { //changed assist_monster
			if (assist_mns['up'][num - 1] === false) {
				if (assist_main == $('select[name=main'+num+']').val()) {
					ar = setAssistStatus(num, status['hp'], status['atk'], status['re']);
					hp = status_list['hp'][num - 1] + ar['hp'];
					atk = status_list['atk'][num - 1] + ar['atk'];
					re = status_list['re'][num - 1] + ar['re'];
					statusChange(num, hp, atk, re);
					assist_mns['up'][num - 1] = true;
				} else {
					setAssistStatus(num, status['hp'], status['atk'], status['re']);
					assist_mns['up'][num - 1] = false;
				}
			} else {
				if (assist_main == $('select[name=main'+num+']').val()) {
					//値を変更する(元のアシスト値分減らして、さらに新しい値を足す)
					hp = status_list['hp'][num - 1] - assist_mns['hp'][num - 1];
					atk = status_list['atk'][num - 1] - assist_mns['atk'][num - 1];
					re = status_list['re'][num - 1] - assist_mns['re'][num - 1];
					ar = setAssistStatus(num, status['hp'], status['atk'], status['re']);
					statusChange(num, hp + ar['hp'], atk + ar['atk'], re + ar['re']);
					assist_mns['up'][num - 1] = true;
				} else {
					//増加分を引いて終了
					hp = status_list['hp'][num - 1] - assist_mns['hp'][num - 1];
					atk = status_list['atk'][num - 1] - assist_mns['atk'][num - 1];
					re = status_list['re'][num - 1] - assist_mns['re'][num - 1];
					statusChange(num, hp, atk, re);
					assist_mns['up'][num - 1] = false;
				}
			}
		}
		return true;
	}

	function reqAnim() {
		//2つの意味がある.bk ==> ピンチ！
		var tm = Date.now() - sttm;
		$('.bk').css('width', 4*tm+'px');
		$('.bk').css('height', 4*tm + 'px');
		$('.bk').css('top', (-2 * tm) + 'px');
		$('.bk').css('left', (-2 * tm) + 'px');
		if (4*tm < window.innerWidth) {
			requestAnimationFrame(reqAnim);
		} else {
			var num = $('.bk').data('000');
			var str = $('.bk').data('nm');
			$('#'+ str + num).html('-指定無し-');
			$('body').css('position', 'relative');
			$('body').append('<div class=bk data-000=' + num + ' data-nm='+str+'></div>');
			$('.bk').css('width', window.innerWidth + 'px');
			$('.bk').css('height', window.innerHeight + 'px');
			$('.bk').css('top', 0 + 'px');
			$('.bk').css('left', 0 + 'px');
			listMons(1, num);
			cancelAnimationFrame(reqAnim);
		}
	}
	
	// モンスター選択画面が出てる時の黒い画面のサイズ再調整
	window.onresize = ()=>{
		if (!($('.bk').length)) {
			$('.bk').css('width', window.innerWidth + 'px');
			$('.bk').css('height', window.innerHeight + 'px');
		}
	};
});

