// 가위는 2 바위는 0 보는 5로 표현합니다.
// ex) rsp = [r, s, p] 
// 이기는 경우가 들어있는 배열을 리턴하면 된다.

const solution = (rsp) => [...rsp].map(x => x == 2 ? 0 : x == 0? 5 : 2).join('');
