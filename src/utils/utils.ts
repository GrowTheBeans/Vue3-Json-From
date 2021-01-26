/**
 * 邮箱验证
 */

 export function emailText(val: any) {
  let reg = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/
  reg.test(val)
 }

 export function iptName(val: any) {
   let reg = /^\w\w{7,11}$/;//用户名必须为8-12为字母或数字
   reg.test(val)
 }
