let musics = [
    '国语/01_You Better Not Think About Me.opus',
    '国语/02_月亮代表我的心.opus',
    '国语/03_過火.opus',
    '国语/04_追梦赤子心.opus',
    '国语/05_小幸運.opus',
    '国语/06_勁歌金曲2 - 情歌王 - Live.opus',
    '国语/07_大海.opus',
    '国语/08_明天,你好.opus',
    '国语/09_越长大越孤单.opus',
    '国语/100_被風吹過的夏天.opus',
    '国语/101_大鱼.opus',
    '国语/102_不將就 (電影何以笙簫默片尾曲).opus',
    '国语/103_模特.opus',
    '国语/104_李白.opus',
    '国语/105_麻雀.opus',
    '国语/106_浪人琵琶.opus',
    '国语/107_空空如也.opus',
    '国语/108_奇妙能力歌.opus',
    '国语/109_小半.opus',
    '国语/10_綠光.opus',
    '国语/110_易燃易爆炸.opus',
    '国语/111_紅玫瑰(國).opus',
    '国语/112_你的答案.opus',
    '国语/113_期待你的愛.opus',
    '国语/114_說散就散 - 前任3 再見前任 電影主題曲.opus',
    '国语/115_年輪.opus',
    '国语/116_可不可以 - 抖音热歌.opus',
    '国语/117_过客.opus',
    '国语/118_满天星辰不及你.opus',
    '国语/119_踏山河.opus',
    '国语/11_天黑黑 - Remastered.opus',
    '国语/120_不染 (電視劇《香蜜沉沉燼如霜》主題曲).opus',
    '国语/121_像我這樣的人.opus',
    '国语/122_體面.opus',
    '国语/123_因為愛情.opus',
    '国语/124_淘汰.opus',
    '国语/125_孤勇者 - 《英雄聯盟雙城之戰》動畫劇集中文主題曲.opus',
    '国语/126_夏天.opus',
    '国语/127_稻香.opus',
    '国语/128_好久不見.opus',
    '国语/129_蒲公英的約定.opus',
    '国语/12_不再聯繫.opus',
    '国语/130_我的歌声里 (You Exist In My Song).opus',
    '国语/131_春泥(女版).opus',
    '国语/132_堕 - 小乔版.opus',
    '国语/133_最美的期待.opus',
    '国语/134_带你去旅行.opus',
    '国语/135_11 (with Hooleeger).opus',
    '国语/136_哪里都是你.opus',
    '国语/137_潮汐.opus',
    '国语/138_那女孩对我说.opus',
    '国语/139_白月光与朱砂痣.opus',
    '国语/13_心牆.opus',
    '国语/140_勇气.opus',
    '国语/141_迷失幻境.opus',
    '国语/142_奔赴星空.opus',
    '国语/143_我走后 - 发行版.opus',
    '国语/144_嘉宾.opus',
    '国语/145_静悄悄.opus',
    '国语/14_我愛他.opus',
    '国语/15_猜不透.opus',
    '国语/16_屋頂.opus',
    '国语/17_分手快樂.opus',
    '国语/18_可惜不是你.opus',
    '国语/19_會呼吸的痛.opus',
    '国语/20_情歌.opus',
    '国语/21_流沙.opus',
    '国语/22_愛, 很簡單.opus',
    '国语/23_布拉格廣場.opus',
    '国语/24_下雨天.opus',
    '国语/25_為你寫詩.opus',
    '国语/26_青花瓷.opus',
    '国语/27_曹操.opus',
    '国语/28_中國話.opus',
    '国语/29_本草綱目.opus',
    '国语/30_明明很愛你.opus',
    '国语/31_我以為.opus',
    '国语/32_自由飞翔.opus',
    '国语/33_Super Star.opus',
    '国语/34_你曾是少年.opus',
    '国语/35_遺失的心跳.opus',
    '国语/36_愛的主打歌.opus',
    '国语/37_錯的人.opus',
    '国语/38_突然想起你.opus',
    '国语/39_小情歌.opus',
    '国语/40_你不是真正的快樂.opus',
    '国语/41_後來的我們.opus',
    '国语/42_說散就散.opus',
    '国语/43_飛雲之下.opus',
    '国语/44_紅塵客棧.opus',
    '国语/45_日不落.opus',
    '国语/46_今天妳要嫁給我.opus',
    '国语/47_說愛你.opus',
    '国语/48_倒帶.opus',
    '国语/49_快樂崇拜.opus',
    '国语/50_遺失的美好.opus',
    '国语/51_親愛的那不是愛情.opus',
    '国语/52_歐若拉.opus',
    '国语/53_後來.opus',
    '国语/54_愛丫愛丫.opus',
    '国语/55_玻璃心.opus',
    '国语/56_分手總要在雨天.opus',
    '国语/57_吻別.opus',
    '国语/58_我愛的.opus',
    '国语/59_光.opus',
    '国语/60_神話.情話(粵).opus',
    '国语/61_仙劍奇緣.opus',
    '国语/62_匆匆那年.opus',
    '国语/63_紅豆.opus',
    '国语/64_乘客.opus',
    '国语/65_風中有朵雨做的雲.opus',
    '国语/66_冬季到台北來看雨.opus',
    '国语/67_記事本.opus',
    '国语/68_關不上的窗.opus',
    '国语/69_滴答.opus',
    '国语/70_我想更懂你.opus',
    '国语/71_夏天的风.opus',
    '国语/72_那年夏天寧靜的海.opus',
    '国语/73_第一次愛的人.opus',
    '国语/74_大眠.opus',
    '国语/75_愛你.opus',
    '国语/76_當你.opus',
    '国语/77_喜歡你.opus',
    '国语/78_你的微笑.opus',
    '国语/79_勇氣.opus',
    '国语/80_手心的薔薇.opus',
    '国语/81_起风了 - 电视剧加油你是最棒的主题曲.opus',
    '国语/82_很久以後 - 電影《可不可以,你也剛好喜歡我》主題曲.opus',
    '国语/83_天空沒有極限.opus',
    '国语/84_來自天堂的魔鬼.opus',
    '国语/85_倒數.opus',
    '国语/86_我的秘密 (MySecret).opus',
    '国语/87_多遠都要在一起.opus',
    '国语/88_光年之外 (電影 《Passengers》 中國區主題曲).opus',
    '国语/89_句號.opus',
    '国语/90_幸福了 然後呢.opus',
    '国语/91_背對背擁抱.opus',
    '国语/92_再見.opus',
    '国语/93_只要平凡 (電影《我不是藥神 》主題曲).opus',
    '国语/94_沦陷.opus',
    '国语/95_凉城.opus',
    '国语/96_夏日の風.opus',
    '国语/97_成都.opus',
    '国语/98_期待愛.opus',
    '国语/99_星月神話.opus',
    "小众/01_素颜.opus",
    "小众/02_雅俗共賞.opus",
    "小众/03_他的猫.opus",
    "小众/04_红装.opus",
    "小众/05_后会无期.opus",
    "小众/06_客官不可以 - Remix版.opus",
    "小众/07_坏女孩.opus",
    "小众/08_海绵宝宝.opus",
    "小众/09_芊芊.opus",
    "小众/10_请先说你好.opus",
    "小众/11_落日与晚风.opus",
    "小众/12_浪人琵琶.opus",
    "小众/13_不知不覺.opus",
    "小众/14_說好了不見面.opus",
    "小众/15_當我唱起這首歌.opus",
    "小众/16_逢场作戏.opus",
    "小众/17_无语.opus",
    "小众/18_海誓山盟亦会分开.opus",
    "小众/19_空虚,沸腾.opus",
    "小众/20_情人节的夜晚.opus",
    "小众/21_某个心跳.opus",
    "小众/22_情花.opus",
    "小众/23_你在看孤独的风景.opus",
    "小众/24_未成年.opus",
    "小众/25_倾尽温柔.opus",
    "小众/26_我是我的情人.opus",
    "小众/27_海海海.opus",
    "小众/28_犯贱.opus",
    "小众/29_坏女孩 - Remix版.opus",
    "小众/30_不分手的恋爱.opus",
    "小众/31_苦笑.opus",
    "小众/32_你若成风.opus",
    "小众/33_说爱你.opus",
    "小众/34_醉清風.opus",
    "小众/35_Pink Gun.opus",
    "小众/36_玫瑰花的葬礼.opus",
    "小众/37_三国杀.opus",
    "小众/38_月牙湾.opus",
    "小众/39_多幸运.opus",
    "小众/40_缺氧.opus",
    "小众/41_断桥残雪.opus",
    "小众/42_爱河.opus",
    "小众/43_空山新雨后.opus",
    "小众/44_有何不可.opus",
    "小众/45_云烟成雨.opus",
    "日韩/01_SAKURA.opus",
    "日韩/02_ブルーバード.opus",
    "日韩/03_君が好きだと叫びたい.opus",
    "日韩/04_Butter-Fly (テ?シ?モンアト?ヘ?ンチャー全話OP).opus",
    "日韩/05_ハレハレヤ.opus",
    "日韩/06_Nandemonaiya - movie ver.opus",
    "日韩/07_カタオモイ.opus",
    "日韩/08_aLIEz.opus",
    "日韩/09_ヤキモチ.opus",
    "日韩/10_心做し.opus",
    "日韩/11_PLANET.opus",
    "日韩/12_紅蓮華.opus",
    "日韩/13_only my railgun.opus",
    "日韩/14_ひとつぶの涙 - Remastered.opus",
    "日韩/15_極楽浄土.opus",
    "日韩/16_LOSER.opus",
    "日韩/17_打上花火.opus",
    "日韩/18_Lemon.opus",
    "日韩/19_恋愛サーキュレーション.opus",
    "日韩/20_僕が死のうと思ったのは.opus",
    "日韩/21_僕らの手には何もないけど、.opus",
    "日韩/22_MY ALL.opus",
    "日韩/23_Refrain.opus",
    "日韩/24_恋愛サーキュレーション - Yunomi “Kawaii EDM” Remix.opus",
    "日韩/25_さくら ?あなたに出会えてよかった?.opus",
    "日韩/26_アイロニ.opus",
    "日韩/27_冬のエピローグ.opus",
    "日韩/28_灰色と青 ( + 菅田将暉 ).opus",
    "日韩/29_ありがとう.opus",
    "日韩/30_PLANET.opus",
    "日韩/31_星屑ビーナス.opus",
    "日韩/32_生きていたんだよな.opus",
    "日韩/33_美しきもの.opus",
    "日韩/34_kataomoi.opus",
    "日韩/35_secret base ~君がくれたもの~ feat.えみい (テーマパークガール).opus",
    "日韩/36_紅蓮華 - From THE FIRST TAKE.opus",
    "日韩/37_Dream lantern.opus",
    "日韩/38_Orange.opus",
    "日韩/39_光るなら.opus",
    "日韩/40_Kokoronashi.opus",
    "日韩/41_カタオモイ.opus",
    "日韩/42_Blue Bird (From Naruto Shippuden).opus",
    "日韩/43_千本桜.opus",
    "日韩/44_Irony.opus",
    "日韩/45_なんでもないや.opus",
    "日韩/46_ピースサイン.opus",
    "日韩/47_海の幽霊.opus",
    "日韩/48_Harehareya.opus",
    "日韩/49_怪物.opus",
    "日韩/50_lemon.opus",
    "日韩/51_총 맞은 것처럼.opus",
    "英文/01_Genie.opus",
    "英文/02_3.opus",
    "英文/03_You Raise Me Up.opus",
    "英文/04_Shape of You.opus",
    "英文/05_Centuries.opus",
    "英文/06_Viva La Vida.opus",
    "英文/07_It's My Life.opus",
    "英文/08_Dying In The Sun.opus",
    "英文/09_Moonlight Shadow.opus",
    "英文/10_Pretty Boy.opus",
    "英文/11_When You're Gone.opus",
    "英文/12_As Long as You Love Me.opus",
    "英文/13_Valder Fields.opus",
    "英文/14_I Could Be the One.opus",
    "英文/15_Beat It.opus",
    "英文/16_Rolling in the Deep.opus",
    "英文/17_Trouble Is a Friend.opus",
    "英文/18_Big Big World.opus",
    "英文/19_Anyone of Us (Stupid Mistake).opus",
    "英文/20_If I Were a Boy.opus",
    "英文/21_...Baby One More Time.opus",
    "英文/22_We Will Rock You - Remastered 2011.opus",
    "英文/23_Innocence.opus",
    "英文/24_Free Loop.opus",
    "英文/25_Only Time.opus",
    "英文/26_Yesterday Once More.opus",
    "英文/27_Take Me to Your Heart.opus",
    "英文/28_My Heart Will Go On - Love Theme from Titanic.opus",
    "英文/29_You're Beautiful.opus",
    "英文/30_My Love.opus",
    "英文/31_The Day You Went Away.opus",
    "英文/32_Cry on My Shoulder.opus",
    "英文/33_Trouble Is a Friend.opus",
    "英文/34_Because of You.opus",
    "英文/35_Diamonds.opus",
    "英文/36_Price Tag.opus",
    "英文/37_I Am You.opus",
    "英文/38_Nobody - English Version.opus",
    "英文/39_TiK ToK.opus",
    "英文/40_Halo.opus",
    "英文/41_God Is a Girl.opus",
    "英文/42_Rave Love.opus",
    "英文/43_Dragostea Din Tei - W&W Remix.opus",
    "英文/44_Far Away from Home.opus",
    "英文/45_Moonlight Shadow.opus",
    "英文/46_God Is A Girl.opus",
    "英文/47_Just Give Me a Reason (feat. Nate Ruess).opus",
    "英文/48_Hotel California - 2013 Remaster.opus",
    "英文/49_The Cup of Life (The Official Song of the World Cup, France '98) - Remix - English Radio Edit.opus",
    "英文/50_Judas.opus",
    "英文/51_Rain On Me (with Ariana Grande).opus",
    "英文/52_Telephone.opus",
    "英文/53_Bad Romance.opus",
    "英文/54_Just Dance.opus",
    "英文/55_Always Remember Us This Way.opus",
    "英文/56_Flowers.opus",
    "英文/57_Do You Hear The People Sing.opus",
    "英文/58_Take Me Hand.opus",
    "英文/59_Wonderful U - Demo Version.opus",
    "英文/60_My Heart Will Go On - Love Theme from Titanic.opus",
    "英文/61_Burning.opus",
    "英文/62_Be What You Wanna Be.opus",
    "英文/63_Heartbeats.opus",
    "英文/64_Love Paradise.opus",
    "英文/65_Seasons in the Sun.opus",
    "英文/66_Roar.opus",
    "英文/67_A Little Love.opus",
    "英文/68_What Are Words.opus",
    "英文/69_Everytime We Touch.opus",
    "英文/70_Nothing's Gonna Change My Love.opus",
    "英文/71_My Love Will Get You Home.opus",
    "英文/72_Only Love.opus",
    "英文/73_Just Give Me a Reason.opus",
    "英文/74_What Are Words (feat. Peter Hollens & Evynne Hollens).opus",
    "英文/75_A Thousand Miles.opus",
    "英文/76_Firework.opus",
    "英文/77_手紙 ?拝啓 十五の君へ?.opus",
    "英文/78_I Believe I Can Fly.opus",
    "英文/79_Just Give Me A Reason.opus",
    "英文/80_Fight Song.opus",
    "英文/81_Stay Here Forever.opus",
    "英文/82_The Show.opus",
    "英文/83_Hall of Fame (feat. will.i.am).opus",
    "飞车/01_Loves Me Not.opus",
    "飞车/02_In the End.opus",
    "飞车/03_Right Now (Na Na Na).opus",
    "飞车/04_Sick enough to die (Feat. JAMIE).opus",
    "飞车/05_Never Say Goodbye (feat. Kidstep).opus",
    "飞车/06_Remember the Name (feat. Styles of Beyond).opus",
    "飞车/07_Numb.opus",
    "飞车/08_Insomnia.opus",
    "飞车/09_Not A Single Day.opus",
    "飞车/10_Change (Feat. Jun Hyung Yong From BEAST).opus",
    "飞车/11_Love Story.opus",
    "飞车/12_Girlfriend.opus",
    "飞车/13_Sk8er Boi.opus",
    "飞车/14_Poker Face.opus",
    "飞车/15_Have A Nice Day.opus",
    "飞车/16_Starbucks.opus",
    "飞车/17_Something's Going On.opus",
    "飞车/18_Let U Go.opus",
    "飞车/19_Aim High.opus",
    "飞车/20_That's Not My Name.opus",
    "飞车/21_Gee.opus",
    "飞车/22_Your Love Is My Drug.opus",
    "飞车/23_Whiskey In The Jar.opus",
    "飞车/24_Gangsta Bop.opus",
    "飞车/25_The Distance.opus",
    "飞车/26_无限速.opus"
];

let count = 0;
let maxCount = 0;
let basePath = "https://githcc.github.io/music_self/";
musics = musics.map(item=>basePath+item);
let musicsNow = musics;