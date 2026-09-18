/* ============================================================================
 * hub-data.js  —  二次元聚合导航 数据源
 * ----------------------------------------------------------------------------
 * 这是「ATRI 的小站 · 二次元导航」(hub.html) 的数据文件。
 * 想加内容，只要往对应 category 的 items 里加一条对象即可，无需改页面代码：
 *
 *   { "title":"站点名", "url":"https://...", "platform":"来源/平台",
 *     "tags":["标签1","标签2"], "desc":"一句话简介", "hot":true }   // hot 可选，显示🔥
 *
 * 注意：本站为纯静态站，数据由站长手工精选维护，非实时抓取。
 * 请以合法、正版的平台/社区为主。
 * ========================================================================== */
window.HUB_DATA = {
  updated: "2026-09-18",

  // 全网热榜：参考 https://top.open2hub.com 的聚合形式，按平台分组展示热门标题
  // 快照日期见 updated；非实时数据，标题均为各平台真实热门；点击跳对应平台搜索页
  // region: domestic(国内) / overseas(国外)；base 决定跳转平台：bili/tieba/weibo/zhihu/mal/anilist
  trends: [
    // —— 国内热榜 ——
    { platform:"哔哩哔哩", emoji:"📺", base:"bili", region:"domestic", items:[
      "《原神》薇斯纳角色PV「风行迷踪」",
      "《鸣潮》动画短片 | 寻心",
      "天津漫展手机事件",
      "S1赛季「逐风启程」《伊莫》PC端上线",
      "炽日将烬 2026无畏契约全球冠军赛主题曲",
      "⚡️请被欧拉吧DIO大人（JOJO同人）",
      "立志成为恶兽 第四集",
      "《异环》1.4版本PV「祷歌为谁而诵」"
    ]},
    { platform:"百度贴吧", emoji:"🎮", base:"tieba", region:"domestic", items:[
      "TES进世界赛 IG准备卖票",
      "买手机换签售 兔娘怒退漫展",
      "碧蓝金鹿皮肤被曝用AI",
      "再16强就退役 左手Bin成共识",
      "勇哥跑路 B站切片全停",
      "管泽元离开LPL资源反增"
    ]},
    { platform:"微博", emoji:"💬", base:"weibo", region:"domestic", items:[
      "兰香如故能否成为下一个知否",
      "黄婷婷真的上再见朋友了",
      "何瑞贤的化妆技术比钟楚曦还厉害",
      "池昌旭林珍娜吻戏",
      "WE对战JDG",
      "杜翠雀被赶出林府"
    ]},
    { platform:"知乎", emoji:"📚", base:"zhihu", region:"domestic", items:[
      "孙悟空为什么被压前叫泼猴，出来后都喊大圣",
      "如何看待华为突破冯诺依曼单机架构",
      "媒体称美国大模型已被日本错误历史观污染",
      "名古屋亚运会用邮轮集装箱房替代亚运村",
      "人民币兑美元再破6.7 为何不跌反涨",
      "新一任007詹姆斯邦德6人候选名单"
    ]},
    // —— 国外热榜 ——（item 为 { t:"英文搜索词", cn:"中文译名" }，搜索用英文、显示含中文）
    { platform:"MyAnimeList", emoji:"🌐", base:"mal", region:"overseas", items:[
      { t:"Sousou no Frieren", cn:"葬送的芙莉莲" },
      { t:"Fullmetal Alchemist: Brotherhood", cn:"钢之炼金术师 FA" },
      { t:"Re:Zero kara Hajimeru Isekai Seikatsu 4th Season", cn:"Re0 第四季" },
      { t:"Steel Ball Run: JoJo no Kimyou na Bouken", cn:"JOJO 飙马野郎" },
      { t:"Bleach: Sennen Kessen-hen - Kashin-tan", cn:"死神 千年血战篇" },
      { t:"Steins;Gate", cn:"命运石之门" },
      { t:"Chainsaw Man Movie: Reze-hen", cn:"电锯人 蕾塞篇" },
      { t:"Gintama: The Final", cn:"银魂 最终篇" }
    ]},
    { platform:"AniList", emoji:"📊", base:"anilist", region:"overseas", items:[
      { t:"Super no Ura de Yani Suu Futari", cn:"吸烟的双人" },
      { t:"Tsuihou Sareta Tensei Juukishi wa Game Chishiki de Musou Suru", cn:"被放逐的转生枪士" },
      { t:"ONE PIECE", cn:"海贼王" },
      { t:"Re:Zero kara Hajimeru Isekai Seikatsu 4th Season", cn:"Re0 第四季" },
      { t:"Yani Neko", cn:"烟猫" },
      { t:"BLEACH", cn:"死神" },
      { t:"Otome Kaijuu Caraméliser", cn:"乙女怪兽焦糖化" },
      { t:"Tensei Shitara Slime Datta Ken 4th Season", cn:"转生史莱姆 第四季" }
    ]}
  ],

  categories: [
    {
      id: "anime",
      name: "番剧 / 动漫",
      icon: "📺",
      desc: "追番、评分、时间表与百科",
      items: [
        { title: "Bangumi 番组计划", url: "https://bangumi.tv/", platform: "Bangumi", tags: ["追番", "评分", "日历"], desc: "中文 ACG 数据库，番剧评分与放送日历，圈子口碑最好。" },
        { title: "AniList", url: "https://anilist.co/", platform: "AniList", tags: ["英文", "追番", "统计"], desc: "国际追番站，数据丰富，可同步观看进度与生成年度报告。", hot: true },
        { title: "MyAnimeList", url: "https://myanimelist.net/", platform: "MAL", tags: ["英文", "排名", "数据库"], desc: "全球最大番剧数据库与各类排行榜。" },
        { title: "哔哩哔哩 番剧", url: "https://www.bilibili.com/anime/", platform: "B 站", tags: ["正版", "在线看"], desc: "国内正版番剧在线观看，新番同步更新。", hot: true },
        { title: "番组计划 · 当季新番", url: "https://bgm.tv/calendar", platform: "番组计划", tags: ["新番", "时间表"], desc: "当季新番放送时间表，按周排播一目了然。" },
        { title: "萌娘百科 · 动画", url: "https://zh.moegirl.org.cn/", platform: "萌娘百科", tags: ["百科", "考据"], desc: "二次元动画角色、术语与梗的考据百科。" },
        { title: "动漫之家", url: "https://www.dmzj.com/", platform: "动漫之家", tags: ["漫画", "资讯"], desc: "正版漫画连载与动漫资讯聚合。" }
      ]
    },
    {
      id: "coser",
      name: "Coser / 妆娘",
      icon: "🎀",
      desc: "COS 作品、教程与约稿",
      items: [
        { title: "Lofter COS 标签", url: "https://www.lofter.com/tag/cosplay", platform: "Lofter", tags: ["COS", "图文"], desc: "网易 Lofter 的 cosplay 图文标签，国内妆娘与正片集散地。", hot: true },
        { title: "微博 COSPLAY 超话", url: "https://s.weibo.com/weibo?q=%23COSPLAY%23", platform: "微博", tags: ["COS", "话题"], desc: "微博 COSPLAY 话题广场，最新正片与活动。", hot: true },
        { title: "小红书 COSPLAY", url: "https://www.xiaohongshu.com/search_result?keyword=cosplay", platform: "小红书", tags: ["COS", "妆娘", "教程"], desc: "妆娘教程、道具与 Cos 日常分享。" },
        { title: "WorldCosplay", url: "https://worldcosplay.net/", platform: "WorldCosplay", tags: ["COS", "国际"], desc: "全球 Coser 作品平台，各国大大云集。" },
        { title: "B 站 Cosplay 区", url: "https://search.bilibili.com/all?keyword=cosplay", platform: "B 站", tags: ["COS", "视频"], desc: "B 站 Cosplay 视频与教程合集。" }
      ]
    },
    {
      id: "game",
      name: "游戏",
      icon: "🎮",
      desc: "商城、社区、资讯与攻略",
      items: [
        { title: "Steam", url: "https://store.steampowered.com/", platform: "Steam", tags: ["正版", "商城"], desc: "全球最大 PC 游戏平台，夏促必逛。", hot: true },
        { title: "杉果游戏", url: "https://www.shanguo.com/", platform: "杉果", tags: ["特惠", "商城"], desc: "国内游戏特惠商城，常有限时折扣。" },
        { title: "Epic Games", url: "https://store.epicgames.com/", platform: "Epic", tags: ["周免", "商城"], desc: "每周免费送游戏，独立大作也不少。" },
        { title: "小黑盒", url: "https://www.xiaoheihe.cn/", platform: "小黑盒", tags: ["社区", "资讯"], desc: "游戏社区与资讯，梗图浓度高。" },
        { title: "游民星空", url: "https://www.gamersky.com/", platform: "游民星空", tags: ["资讯", "攻略"], desc: "老牌游戏媒体，攻略与新闻齐全。", hot: true },
        { title: "机核 GCORES", url: "https://www.gcores.com/", platform: "机核", tags: ["文化", "播客"], desc: "游戏文化与深度内容，播客很耐听。" },
        { title: "indienova  indie 游戏", url: "https://indienova.com/", platform: "indienova", tags: ["独立游戏"], desc: "独立游戏资讯、开发与发行。" },
        { title: "篝火营地", url: "https://gouhuo.qq.com/", platform: "篝火营地", tags: ["社区"], desc: "腾讯系游戏社区，攻略与讨论活跃。" }
      ]
    },
    {
      id: "gal",
      name: "视觉小说 / Galgame",
      icon: "💿",
      desc: "Galgame 资料、评测与商城",
      items: [
        { title: "月幕 Galgame", url: "https://www.ymgal.com/", platform: "月幕", tags: ["galgame", "数据库"], desc: "Galgame 资料库，汉化与个人评分。", hot: true },
        { title: "getchu", url: "https://www.getchu.com/", platform: "getchu", tags: ["日系", "商城"], desc: "日本 Galgame 官方商城与排行。" },
        { title: "2DFAN", url: "https://2dfan.com/", platform: "2DFAN", tags: ["galgame", "评测"], desc: "Galgame 评测与汉化资讯社区。" },
        { title: "萌娘百科 · Galgame", url: "https://zh.moegirl.org.cn/Galgame", platform: "萌娘百科", tags: ["百科"], desc: "Galgame 科普与作品词条。" }
      ]
    },
    {
      id: "illust",
      name: "插画 / 图库",
      icon: "🎨",
      desc: "插画、同人与采集板",
      items: [
        { title: "Pixiv", url: "https://www.pixiv.net/", platform: "Pixiv", tags: ["插画", "日系"], desc: "全球最大插画社区，画师与每日榜。", hot: true },
        { title: "微博", url: "https://weibo.com/", platform: "微博", tags: ["插画", "话题"], desc: "插画师与同人话题的集散地。" },
        { title: "Lofter", url: "https://www.lofter.com/", platform: "Lofter", tags: ["插画", "同人"], desc: "网易 Lofter 同人图库，画风多样。" },
        { title: "花瓣", url: "https://huaban.com/", platform: "花瓣", tags: ["采集", "图库"], desc: "设计 / 插画采集板，攒灵感用。" },
        { title: "堆糖", url: "https://www.duitang.com/", platform: "堆糖", tags: ["图", "二次元"], desc: "二次元图片社区，壁纸很多。" },
        { title: "涂鸦王国", url: "https://www.gracg.com/", platform: "涂鸦王国", tags: ["插画", "约稿"], desc: "插画约稿与作品平台。" }
      ]
    },
    {
      id: "community",
      name: "社区 / 论坛",
      icon: "💬",
      desc: "综合讨论与玩家共建",
      items: [
        { title: "NGA", url: "https://nga.178.com/", platform: "NGA", tags: ["论坛", "综合"], desc: "老牌游戏动漫论坛，专楼文化浓厚。", hot: true },
        { title: "AcFun", url: "https://www.acfun.cn/", platform: "AcFun", tags: ["弹幕", "综合"], desc: "老牌二次元弹幕站，鬼畜与番剧都有。" },
        { title: "奶牛关", url: "https://cowlevel.net/", platform: "奶牛关", tags: ["游戏wiki"], desc: "玩家共建的游戏百科与考据。" },
        { title: "动漫之家 论坛", url: "https://www.dmzj.com/", platform: "动漫之家", tags: ["论坛", "漫画"], desc: "漫画与动漫讨论区。" }
      ]
    },
    {
      id: "music",
      name: "音乐 / 声优",
      icon: "🎵",
      desc: "动漫 BGM、同人与声优考据",
      items: [
        { title: "网易云音乐", url: "https://music.163.com/", platform: "网易云", tags: ["歌单", "动漫"], desc: "动漫 / 游戏 BGM 与同人翻唱歌单。", hot: true },
        { title: "萌娘百科 · 声优", url: "https://zh.moegirl.org.cn/", platform: "萌娘百科", tags: ["声优", "考据"], desc: "声优百科与作品年表。" },
        { title: "B 站 音乐区", url: "https://www.bilibili.com/v/music/", platform: "B 站", tags: ["翻唱", "同人"], desc: "同人翻唱与 VOCALOID 作品。" },
        { title: "萌娘百科 · 音乐", url: "https://zh.moegirl.org.cn/Category:%E9%9F%B3%E4%B9%90", platform: "萌娘百科", tags: ["术语"], desc: "动画音乐术语科普。" }
      ]
    },
    {
      id: "rank",
      name: "萌战 / 榜单",
      icon: "🏆",
      desc: "角色人气大赏与各站排行",
      items: [
        { title: "世萌 ISML 国际最萌大会", url: "https://www.internationalsaimoe.moe", platform: "世萌", tags: ["萌战", "国际"], desc: "2026 官方赛站，投票决出动画角色最萌之星。", hot: true },
        { title: "日萌（动画最萌大会）", url: "https://zh.moegirl.org.cn/日萌", platform: "萌娘百科", tags: ["萌战", "历史"], desc: "2ch 动画最萌大赛词条；2015 年起停办，此处为历史与规则考据。" },
        { title: "B 萌 2026 动画角色人气大赏", url: "https://zh.moegirl.org/Bilibili_Moe_2026_%E5%8A%A8%E7%94%BB%E8%A7%92%E8%89%B2%E4%BA%BA%E6%B0%94%E5%A4%A7%E8%B5%8F", platform: "B 站", tags: ["萌战", "B站"], desc: "bilibili moe 2026 百科：萌王千早爱音、燃王菜月昴。" },
        { title: "B 站番剧热播榜", url: "https://bangumi.bilibili.com/anime/2730", platform: "B 站", tags: ["番剧", "热播"], desc: "B 站番剧实时热播榜与新番时间表。", hot: true },
        { title: "Bangumi 番剧排行", url: "https://bangumi.tv/anime/browser?sort=rank", platform: "Bangumi", tags: ["评分", "排名"], desc: "中文 ACG 数据库按评分排行的番剧榜。" },
        { title: "MyAnimeList Top", url: "https://myanimelist.net/topanime.php", platform: "MAL", tags: ["全球", "排名"], desc: "全球最大番剧数据库热门排行。" },
        { title: "AniList Trending", url: "https://anilist.co/search/anime?sort=TRENDING_DESC", platform: "AniList", tags: ["全球", "趋势"], desc: "国际站当季 trending 番剧。" },
        { title: "Anime Trending（每周 TOP10）", url: "https://www.anitrendz.com/", platform: "AniTrendz", tags: ["周榜", "社区"], desc: "社区每周投票的当季人气 TOP10 与角色榜。" },
        { title: "豆瓣动画榜", url: "https://www.douban.com/chart?sid=10024", platform: "豆瓣", tags: ["评分", "华语"], desc: "豆瓣动画分类评分排行榜。" },
        { title: "AniDB", url: "https://anidb.net/", platform: "AniDB", tags: ["档案", "数据库"], desc: "硬核向番剧档案库与标签筛选。" }
      ]
    }
  ]
};
