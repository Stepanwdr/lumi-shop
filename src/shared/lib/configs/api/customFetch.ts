async function customFetch<T>(url: string, config?: RequestInit): Promise<T> {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjo1MzA5Mzg1NywiYiI6MTE5NDg1NDI4LCJleHAiOjE3ODM5NzI0MjJ9.UF9ntdULXpXC6gMenrER77VonEv6UbyD8Kp7ZzkJdts'

    headers['Authorization'] = `Bearer ${token}`

  const defaultConfig: RequestInit = {
    method: 'GET',
    headers: headers
  }

  const mergedConfig = { ...defaultConfig, ...config }

  const response = await fetch(url, mergedConfig)

  return (await response.json()) as T
}
 
export default customFetch
