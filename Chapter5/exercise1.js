false || (true && false); //False
true || (1 + 2); //True
(1 + 2) || true; //3
true && (1 + 2); //3
false && (1 + 2); //False
(1 + 2) && true; //True
(32 * 4) >= 129; //False
false !== !true; //False
true === 4; //False
false === (847 === '847'); //True
false === (847 == '847'); //False
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //True
