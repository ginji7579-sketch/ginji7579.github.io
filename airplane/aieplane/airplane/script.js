const playerImg = new Image();
playerImg.src = 'images/player1.png'; // 根据实际路径修改

const enemyImg = new Image();
enemyImg.src = 'images/enemy1.png';
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 玩家对象
const player = {
    x: 300,
    y: 350,
    width: 30,
    height: 30,
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
        // 发射子弹（防止连发过快，可添加冷却时间）
        bullets.push({ x: player.x + player.width/2 - 2, y: player.y, width: 4, height: 8 });
    }

    // 子弹移动
    bullets.forEach(b => b.y -= 5);
    bullets = bullets.filter(b => b.y > 0);

    // 随机生成敌机（简化）
    if (Math.random() < 0.02) {
        enemies.push({ x: Math.random() * (canvas.width - 30), y: 0, width: 30, height: 30 });
    }

    // 敌机移动
    enemies.forEach(e => e.y += 2);
    enemies = enemies.filter(e => e.y < canvas.height);

    // 碰撞检测（子弹 vs 敌机）—— 留给你实现
    // 玩家与敌机碰撞检测 —— 留给你实现
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 画玩家飞机
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    // 画子弹（保持方块或也换成图片）
    ctx.fillStyle = 'yellow';
    bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

    // 画敌机
    enemies.forEach(e => ctx.drawImage(enemyImg, e.x, e.y, e.width, e.height));
}
// 启动游戏
gameLoop();