// 일단 숫자를 담은 배열로 만들고 k인지 판별하기
const solution = (i,j,k) => {
    return Array(j)
        .fill(1)
        .map((v, i)=> v = v+i)
        .slice(i-1,j)
        .join('')
        .split('')
        .filter(el => el == k)
        .length
}