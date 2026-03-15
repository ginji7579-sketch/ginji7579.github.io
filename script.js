// 取得顯示螢幕的元素
const display = document.getElementById('display');

// 將按下的數字或運算子加到螢幕上
function append(value) {
    display.value += value;
}

// 清除螢幕
function clearDisplay() {
    display.value = '';
}

// 計算結果
function calculate() {
    try {
        // 使用 eval 計算字串表示的算式（注意：一般情況不建議用 eval，但這裡簡單用）
        display.value = eval(display.value);
    } catch (error) {
        display.value = '錯誤';
    }
}