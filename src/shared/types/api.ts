export interface IGeneralAPIData<TData> {
  data: TData
  message: string
  success: true
}

interface IPaginationResponse {
  current_page: number
  pages_count: number
  from: number
  to: number
  per_page: number
  total: number
}

export interface IGeneralAPIDataInfinite<TData> {
  data: TData
  message: string
  success: true
  pagination: IPaginationResponse
  hasPages: boolean
}
