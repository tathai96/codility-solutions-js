function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

test(10, 85, 30);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}