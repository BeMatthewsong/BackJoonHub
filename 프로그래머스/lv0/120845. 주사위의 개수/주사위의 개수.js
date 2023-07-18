// box = [가로, 세로, 높이], n = 정육면체 한 변의 길이
// (상자의 부피 / 주사위의 부피) -> 이렇게 하면 실질적인 쌓기가 불가능함.
// 나누기 몫의 정수값만 추출하자. (parseInt or Math.floor() or ~~)
const solution = (box, n) => ~~(box[0] / n) * ~~(box[1] / n) * ~~(box[2] / n);

    