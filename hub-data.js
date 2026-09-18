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

  // 热点速递：精选当前热门内容，点开即看（bvid 用于站内直接播放 B 站）
  // 数据由站长手工精选维护，非实时抓取；链接均为正版平台。
  hotspots: [
    { title:"葬送的芙莉莲 第二季", emoji:"🧙", desc:"2026 冬季榜首，治愈系神作续作；一级魔法使测验篇，全 28 话。", platform:"B 站", tags:["奇幻","治愈","续作"], bvid:"BV1dq421A7aT", url:"https://www.bilibili.com/bangumi/media/md21087073", hot:true },
    { title:"穹庐下的魔女", emoji:"⚔️", desc:"7 月新番口碑第一，山田尚子执导的蒙古宫廷历史正剧（PV）。", platform:"B 站", tags:["历史","正剧","新番"], bvid:"BV1SvGy6gEdD", url:"https://www.bilibili.com/video/BV1SvGy6gEdD", hot:true },
    { title:"我推的孩子 第三季", emoji:"⭐", desc:"2026 年 1 月新番，谎言化作武器的娱乐圈群像（PV）。", platform:"B 站", tags:["偶像","悬疑","续作"], bvid:"BV1remBB8Eff", url:"https://www.bilibili.com/video/BV1remBB8Eff" },
    { title:"BanG Dream! MyGO!!!!!", emoji:"🎸", desc:"迷途之子！乐队成长神作，全 13 话，1 亿播放。", platform:"B 站", tags:["音乐","乐队","励志"], bvid:"BV19ZzqYKEDP", url:"https://b23.tv/ep1182847", hot:true },
    { title:"无职转生 第三季", emoji:"🔥", desc:"7 月人气顶流，异世界标杆续作（B 站主平台）。", platform:"B 站", tags:["异世界","续作"], url:"https://b23.tv/c8nUm2Z" },
    { title:"鬼灭之刃 柱训练篇", emoji:"🗡️", desc:"B 站最稳基本盘，九柱集训燃向必看，全 8 话。", platform:"B 站", tags:["热血","Jump"], url:"https://www.bilibili.com/bangumi/media/md21226899" }
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
        { title: "半次元 COS", url: "https://bcy.net/cos", platform: "半次元", tags: ["COS", "社区"], desc: "国内最大的 COS 作品社区，妆娘与正片集中地。", hot: true },
        { title: "微博 COSPLAY 超话", url: "https://s.weibo.com/weibo?q=%23COSPLAY%23", platform: "微博", tags: ["COS", "话题"], desc: "微博 COSPLAY 话题广场，最新正片与活动。", hot: true },
        { title: "小红书 COSPLAY", url: "https://www.xiaohongshu.com/search_result?keyword=cosplay", platform: "小红书", tags: ["COS", "妆娘", "教程"], desc: "妆娘教程、道具与 Cos 日常分享。" },
        { title: "WorldCosplay", url: "https://worldcosplay.net/", platform: "WorldCosplay", tags: ["COS", "国际"], desc: "全球 Coser 作品平台，各国大大云集。" },
        { title: "DeviantArt · Cosplay", url: "https://www.deviantart.com/tag/cosplay", platform: "DeviantArt", tags: ["COS", "图库"], desc: "海外同人 / Cos 图库，画质很高。" },
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
