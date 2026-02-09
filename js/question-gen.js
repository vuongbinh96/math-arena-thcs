// Hàm tạo câu hỏi ngẫu nhiên cho THCS
function generateMathTask(grade) {
    let a, b, x, question, answer;

    switch(grade) {
        case 6: // Số nguyên & Ước chung
            a = Math.floor(Math.random() * 40) - 20;
            b = Math.floor(Math.random() * 40) - 20;
            question = `Tính: ${a} + (${b})`;
            answer = a + b;
            break;
        case 7: // Số hữu tỉ & Tìm X
            x = Math.floor(Math.random() * 12);
            a = Math.floor(Math.random() * 5) + 2;
            let result = a * x;
            question = `Tìm x biết: ${a}x = ${result}`;
            answer = x;
            break;
        case 8: // Hằng đẳng thức đơn giản
            a = Math.floor(Math.random() * 5) + 1;
            question = `Khai triển (x + ${a})² có hệ số tự do là?`;
            answer = a * a;
            break;
        case 9: // Căn bậc hai
            x = Math.floor(Math.random() * 10) + 2;
            question = `Giá trị của √${x*x} là:`;
            answer = x;
            break;
    }
    return { question, answer };
}
