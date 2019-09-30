function solution(A, K) {
    K = (A.length > K) ? K : K % A.length;
    // console.log(K);

    var d = A.slice(0, A.length - K);
    // console.log(d);
    var e = A.splice(A.length - K);
    // console.log(e);
    return e.concat(d);
}

test([10, 20, 30, 40, 50], 3);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}