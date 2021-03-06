export const isBrowser = () => {
  return typeof window !== 'undefined' && !window.process
}

export const isNode = () => {
  return !isBrowser() && typeof process !== 'undefined'
}

export const params2queryString = params =>
  Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
