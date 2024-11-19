// 定义一个包含诗句的数组，这些诗句将被用来在页面上显示。
const words = [
    '霞落纤凝',
    '望舒云隐',
    '微尘浩渺',
    '曦和摇曳',
    '山川饰黛',
    '薄雾晚晴',
    '妃塔挂月',
    '挽玉台亭',
    '羽翰初启',
    '待续丹青',
    '晨光熹微君莫恨',
    '日暮且听晚风吟',
    '夜雨可否话西窗',
    '烛尽无需剪落尘',
    '桂落夜赏雨中秋',
    '繁花醉春春起舞',
    '暗香入曲径',
    '玉蝶拂青衿',
    '泛舟探疏影',
    '寻幽北梁上',
    '陌上轻饰黛',
    '推舟浅入怀',
    '月承天弦外',
    '星河坠梦来',
    '蝶舞蹁跹落眉间',
    '千树万树胜春颜',
    '清风无端入怀袖',
    '何愁烟雨拢衣衫',
    '思君跋涉阡陌里',
    '云停月起望山川',
    '朝闻芒种暮观荷',
    '斗丙积阴凝雨润',
    '草木零落人迟暮',
    '春秋代序日更迭',
    '春倾千酒洗花妆',
    '风抚倩影染云容',
    '夜来片香涤月魂',
    '思慕作雨缓入尘',
    '温柔揉成诗色',
    '漫散撒入云弦',
    '良辰诚可方物',
    '玉韫愿兮珠怀',
    '半抹余晖春未尽',
    '幸得斜阳留三分',
    '一江华灯初上月',
    '几重山影似天明',
    '相顾无言却已含羞',
    '相遇是久别的重逢',
    '回眸是短暂的邂逅',
    '皎月清辉引以驻足',
    '纵是轻丝化凝雨',
    '何故陌路又重游',
    '朔风拂袖枫落晚',
];

// 定义一个名为 randomNum 的函数，用于生成指定范围内的随机数。
function randomNum(min, max) {
    // 使用 Math.random() 生成一个范围内的随机数，然后将其缩放到 [min, max] 范围内。
    // toFixed(2) 用于将结果保留两位小数。
    // 返回生成的随机数。
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}

function init() {
    // 使用 document.querySelector 选择页面上的 .container 元素。
    let container = document.querySelector('.container');
    // 创建一个文档片段，用于提高 DOM 操作的性能。
    let f = document.createDocumentFragment();
    // 随机选择27个不同的索引，用于从words数组中选取诗句
    let indices = new Set();
    while (indices.size < 27) {
        indices.add(Math.floor(Math.random() * words.length));
    }

    // 使用 for...of 循环遍历随机索引集合。
    for (let i of indices) {
        // 为每个诗句创建一个 div 元素，用作诗句的容器。
        let word_box = document.createElement('div');
        // 为诗句创建一个 div 元素。
        let word = document.createElement('div');

        // 设置诗句文本内容。
        word.innerText = words[i];
        // 添加一个类名为 'word'，以便可以通过 CSS 进行样式定制。
        word.classList.add('word');
        // 设置诗句的样式，包括颜色、字体和字号。
        word.style.color = 'rgba(255,253,253,0.52)';
        word.style.textShadow = '1px 0 1px rgba(255,255,255,0.27)';
        word.style.fontFamily = '华文行楷';
        word.style.fontSize = '27px';

        // 为诗句容器添加类名 'word-box'。
        word_box.classList.add('word-box');
        // 使用 CSS 变量设置诗句容器的上下边距，使用 randomNum 函数生成随机值。
        word_box.style.setProperty("--margin-top", randomNum(-40, 10) + 'vh');
        // 使用 CSS 变量设置诗句容器的左右边距，使用 randomNum 函数生成随机值。
        word_box.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
        // 使用 CSS 变量设置诗句容器的动画时长，使用 randomNum 函数生成随机值。
        word_box.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
        // 使用 CSS 变量设置诗句容器的动画延迟，使用 randomNum 函数生成随机值。
        word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

        // 将诗句元素添加到诗句容器中。
        word_box.appendChild(word);
        // 将诗句容器添加到文档片段中。
        f.appendChild(word_box);
    }

    // 将文档片段添加到 .container 元素中，从而更新页面内容。
    container.appendChild(f);

    // 初始化动画播放状态
    let isPlaying = true;

    // 添加点击事件监听器
    container.addEventListener('click', function() {
        // 切换动画播放状态
        isPlaying = !isPlaying;

        // 获取所有诗句容器
        let wordBoxes = document.querySelectorAll('.word-box');

        // 根据播放状态控制动画
        if (isPlaying) {
            wordBoxes.forEach(wordBox => {
                wordBox.style.animationPlayState = 'running';
            });
        } else {
            wordBoxes.forEach(wordBox => {
                wordBox.style.animationPlayState = 'paused';
            });
        }
    });
}

// 为 window 对象的 load 事件添加一个事件监听器，当页面加载完成时，会调用 init 函数。
window.addEventListener('load', init);