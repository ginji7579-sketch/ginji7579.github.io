// 预加载五张敌机图片
const enemyImages = [];
for (let i = 1; i <= 5; i++) {
    const img = new Image();
    img.src = `images/enemy${i}.png`;  // 确保文件存在
    enemyImages.push(img);
}

const playerImg = new Image();
playerImg.src = 'images/player1.png'; // 玩家图片

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 玩家对象
const player = {
    x: 300,
    y: 300,
    width: 90,
    height: 90,
    speed: 5
};

// 子弹数组
let bullets = [];
// 敌机数组
let enemies = [];

// 键盘状态
const keys = {};

document.addEventListener('keydown', e => keys[e.code] = true);
document.addEventListener('keyup', e => keys[e.code] = false);

// 游戏循环
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function update() {
    // 玩家移动 (左右箭头)
    if (keys['ArrowLeft'] && player.x > 0) player.x -= player.speed;
    if (keys['ArrowRight'] && player.x < canvas.width - player.width) player.x += player.speed;
    if (keys['Space']) {
        // 发射子弹
        bullets.push({ x: player.x + player.width/2 - 2, y: player.y, width: 4, height: 8 });
    }

    // 子弹移动
    bullets.forEach(b => b.y -= 5);
    bullets = bullets.filter(b => b.y > 0);

    // 随机生成敌机（五张图随机）
    if (Math.random() < 0.02) {
        const type = Math.floor(Math.random() * 5); // 0-4
        enemies.push({
            x: Math.random() * (canvas.width - 80),
            y: 0,
            width: 80,
            height: 80,
            type: type
        });
    }

    // 敌机移动
    enemies.forEach(e => e.y += 2);
    enemies = enemies.filter(e => e.y < canvas.height);

    // 碰撞检测（留给你实现）
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 画玩家飞机
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    // 画子弹（黄色方块）
    ctx.fillStyle = 'yellow';
    bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

    // 画敌机（五张图片随机）
    enemies.forEach(e => {
        const img = enemyImages[e.type];
        if (img.complete) {
            ctx.drawImage(img, e.x, e.y, e.width, e.height);
        } else {
            // 图片未加载时画灰色矩形占位
            ctx.fillStyle = 'gray';
            ctx.fillRect(e.x, e.y, e.width, e.height);
        }
    });
}

// 启动游戏
gameLoop();