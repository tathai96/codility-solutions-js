function solution(N) {
    let str = N.toString(2),
        zeroCount = 0,
        result = 0;

    for (let digit of str) {
        if (digit === '0') {
            zeroCount += 1;
        } else {
            result = Math.max(result, zeroCount);
            zeroCount = 0;
        }
    }
    return result;
}

test(529)

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}