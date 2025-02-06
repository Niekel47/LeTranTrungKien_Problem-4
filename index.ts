import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Iterative approach (O(n) time, O(1) space)
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Recursive approach (O(n) time, O(n) space due to recursion stack)
function sum_to_n_b(n: number): number {
    if (n <= 0) return 0;
    return n + sum_to_n_b(n - 1);
}

// Mathematical formula (O(1) time, O(1) space)
function sum_to_n_c(n: number): number {
    return (n * (n + 1)) / 2;
}

// Hàm main để chạy chương trình
function main() {
    rl.question('Nhập số n: ', (input) => {
        const n = parseInt(input);
        
        if (isNaN(n)) {
            console.log('Vui lòng nhập một số hợp lệ!');
            rl.close();
            return;
        }

        console.log(`\nKết quả tính tổng từ 1 đến ${n}:`);
        console.log(`Phương pháp A (vòng lặp): ${sum_to_n_a(n)}`);
        console.log(`Phương pháp B (đệ quy): ${sum_to_n_b(n)}`);
        console.log(`Phương pháp C (công thức): ${sum_to_n_c(n)}`);

        rl.close();
    });
}

// Chạy chương trình
main();