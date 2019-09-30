function solution(A) {
    return A.reduce((x, y) => x ^ y)
}

test([9, 3, 9, 3, 9, 7, 9]);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}