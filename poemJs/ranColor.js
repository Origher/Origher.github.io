document.addEventListener('DOMContentLoaded', function() {
    const colors = [
        '--submenu-color-1', '--submenu-color-2', '--submenu-color-3',
        '--submenu-color-4', '--submenu-color-5', '--submenu-color-6','--submenu-color-7'
    ];
    const submenuLinks = document.querySelectorAll('.submenu li a');

    submenuLinks.forEach((link, index) => {
        let randomColor;
        do {
            const colorIndex = Math.floor(Math.random() * colors.length);
            randomColor = colors[colorIndex];
        } while (isAdjacentColor(index, randomColor, submenuLinks));

        link.style.setProperty('--hover-color', getComputedStyle(document.documentElement).getPropertyValue(randomColor).trim());
    });

    function isAdjacentColor(index, color, links) {
        // 检查前一个和后一个元素是否已经使用了这个颜色
        const prevLink = links[index - 1];
        const nextLink = links[index + 1];
        const colorValue = getComputedStyle(document.documentElement).getPropertyValue(color).trim();

        if (prevLink && prevLink.style.getPropertyValue('--hover-color') === colorValue) {
            return true;
        }
        return !!(nextLink && nextLink.style.getPropertyValue('--hover-color') === colorValue);

    }
});