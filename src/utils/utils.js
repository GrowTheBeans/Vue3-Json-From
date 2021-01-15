/*日期格式化目前写的太死，后期做相应的优化*/
export function DateTime(date) {
  if (!date) {
    return null;
  }
  let data = new Date(date);
  let Y = data.getFullYear(); // 年
  let M = data.getMinutes() + 1; // 月
  let D = data.getDate(); // 日
  let h = data.getHours(); // 时
  let m = data.getMinutes(); // 分
  let s = data.getSeconds(); // 秒
  let MM = M < 10 ? "0" + M : M;
  let DD = D < 10 ? "0" + D : D;
  let mm = m < 10 ? "0" + m : m;
  let ss = s < 10 ? "0" + s : s;
  return `${Y}-${MM}-${DD} ${h}:${mm}:${ss}`;
}

/*验证手机号*/
export function phoneValidator(time) {
  let reg = /^1(3\d{2}|4[14-9]\d|5([0-35689]\d|7[1-79])|66\d|7[2-35-8]\d|8\d{2}|9[13589]\d)\d{7}$/;
  return reg.test(time);
}

/*验证电话*/
export function telValidator(tel) {
  let reg = /^((d{3,4})|d{3,4}-|s)?d{7,14}$/;
  return reg.test(tel);
}

/*邮箱验证*/
export function mailValidator(mail) {
  let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  return reg.test(mail);
}

/*统一信用代码*/
export function codeValidator(code) {
  let reg = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
  return reg.test(code);
}
