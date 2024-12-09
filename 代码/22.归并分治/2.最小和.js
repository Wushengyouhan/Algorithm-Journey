const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = null;
let data = [];
let help = [];

rl.on("line", (input) => {
    if (n === null) {
        n = parseInt(input);
    } else {
        data = input.split(" ").map(Number);
        rl.close();
    }
});

rl.on("close", () => {
    console.log(smallSum(0, n - 1));
});

const smallSum = (l, r) => {
    if (l === r) {
        return 0;
    }

    let m = Math.floor((l + r) / 2);
    return smallSum(l, m) + smallSum(m + 1, r) + merge(l, m, r);
};

const merge = (l, m, r) => {
    //求跨区域的和
    let ans = 0;
    for (let j = m + 1, i = l, sum = 0; j <= r; j++) {
        while (data[i] <= data[j] && i <= m) {
            sum += data[i++];
        }
        ans += sum;
    }
    //排序
    let a = l;
    let b = m + 1;
    let i = l;

    while (a <= m && b <= r) {
        help[i++] = data[a] <= data[b] ? data[a++] : data[b++];
    }

    while (a <= m) {
        help[i++] = data[a++];
    }

    while (b <= r) {
        help[i++] = data[b++];
    }

    for (let i = l; i <= r; i++) {
        data[i] = help[i];
    }

    return ans;
};