// 获取URL中的查询参数
const urlParams = new URLSearchParams(window.location.search);
const people_name = urlParams.get("people");
let arr;
// 设置随机出现的文字数组

if (people_name == "jiajia") {
  arr = [
    "相宜_1699：很耐盘的刑侦本，细节很多，dm佳佳很会带~~很愉快的游戏体验，很适合四五人小队伍的剧本，下次还会再来~~~",
    "轻快纯情嘀嘀狮：点名表扬佳佳人长得美，有趣带本非常好，用心、善良、热情非常完美的一位dm。",
    "徐撕鱼：dm佳佳，剧本《中彩票》剧本很有意思，也很有趣，dm带的很用心很认真。",
    "匿名网友：dm佳佳，玩的中彩票过程很欢乐 游戏环节大家都很沉浸团队作战好刺激最后环节很感动。",
    "匿名网友：dm佳佳带的很认真中彩票这个本玩的很有意思。",
    "果冻烤酵母粉：佳佳带的非常好玩！小游戏也很有意思 推荐推荐",
    "陌宸：dm佳佳很专业，剧本很好第一次玩情感本体验不错，给每个玩家分的角色都很好，哭的很惨",
    "秦酒。：环境氛围特别好的店，DM:佳佳一直耐心带我们，什么问题都细心答复，本前的小游戏也特别快乐。",
    "匿名网友：本子很不错，非常细节，DM佳佳非常好非常又感染力 引导的也是很不多错的！",
    "Toru：DM佳佳超棒超认真，本子也很有意思",
    "匿名网友：季风吹过橘色的海，dm佳佳真是整个游戏的灵魂人物，通过声音动作等细节真心推荐。",
    "张骁凡：感情本能让人发自内心的流泪的，才是真的好本。别的不说，特别好评DM佳佳,声音超级好听，表演给力，特别是夏蝉那块",
    "qzuser_808441：DM佳佳整个剧本中的灵魂人物，将角色演绎的栩栩如生，让我更加深入的体验角色的魅力，遇到这样优秀的DM一定要好好珍惜。",
    "德真坚强的小博：江知礼 你的人生本不该有那么多遗憾的，还好你的身边有沈又，下一次要勇敢。DM佳佳非常棒",
    "匿名网友：店里的卫生很棒，服务态度很好DM佳佳人超级好",
    "flyingbaby：DM佳佳超级可爱的主持人特别好的小姐姐！特别好哭的本",
    "莲子焖紫薯粉：DM佳佳，风趣幽默、甜美可爱，带的很好，沉浸在故事中了",
    "在明月山参观的炒时蔬：DM佳佳姐姐人好好，剧本很好玩",
    "图南.：DM佳佳很可爱的一个小姐姐很能带动气氛，节奏带的很好。",
    "豆腐煲胡椒粉：DM佳佳姐姐很好！！！！本是桔梗物语，很好",
    "匿名网友：DM佳佳很幽默，第一次玩情感本，体验很棒",
    "匿名网友：打本季风吹过橘色的海，DM佳佳特别给力",
    "名善快乐的小顾：DM佳佳带的很好，很沉浸，打的很爽",
    "明贤高尚的小晶：DM佳佳非常有趣幽默美丽大方聪明伶俐，能够带动整体氛围十分值得体验",
    "2ero：体验很好DM佳佳很棒，幽默风趣代入感强",
    "果酱炝拌梅干：DM佳佳很棒带的特别好",
    "北陌：DM佳佳带着特别好，剧本很棒很精彩",
    "说好不成盒：唯一的亮点就是DM佳佳，少有那么专注投入沉浸的DM",
    "L：DM佳佳小姐姐，很热情还有很多小零食。",
    "匿名网友：DM佳佳小姐姐，带本很不错，代入感很强",
    "守心。_1063：DM佳佳小姐姐，语言功底很不错代入的很好还会推荐。",
    "yearn：第一次玩剧本杀，体验很好DM佳佳小姐姐，代入感很强",
    "王_82460：DM佳佳超级好",
  ];
} else {
  arr = [
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
    "nfvnfvnsnvjksdnvjdnvjsdvndjvnd",
  ];
}
document.onclick = function (x) {
  // 创建元素节点对象
  var span = document.createElement("span");
  // 获取当前鼠标的坐标
  span.style.left = x.clientX + "px";
  span.style.top = x.clientY + "px";
  // 让span的值为arr数组内随机的一个值
  span.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  // 设置span的动画效果
  setTimeout(function () {
    span.style.opacity = "1";
    span.style.transform = "translateY(-100px)";
  }, 100);
  setTimeout(function () {
    span.style.opacity = "0";
    span.style.transform = "translateY(-230px)";
  }, 1500);
  // 清掉opacort为0的span
  var chi = document.getElementsByClassName("span");
  for (var i = 0; i < chi.length; i++) {
    if (chi[i].style.opacity === "0") {
      document.body.removeChild(chi[i]);
    }
  }
  // 将span添加到body里
  document.body.appendChild(span);
};
setTimeout(function () {
  $(".load").css("display", "none");
}, 2000);
