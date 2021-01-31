/**
 * 定义结构
 */
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

// 登录列表数据定义
export interface UserProps {
  id?: number | string
  name?: string
  isLogin: boolean
}

// 学校类型Card
export interface ColleageProps {
  key: number | string
  Affiliation: string
  City: string
  Logo: string
  Name: string
  UpdateDate?: Date
  Type: string
}
