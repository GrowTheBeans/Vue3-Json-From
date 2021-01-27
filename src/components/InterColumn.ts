// list列表数据定义
export interface ColumnProps {
  id: number
  key?: number | string
  title: string
  avatar?: string
  createdDate?: Date
  excerpt?: string
  description: string
}
/**
 * 登录列表数据定义
 */

 export interface UserProps {
  id?: number,
  name?: string,
  isLogin: boolean
 }
