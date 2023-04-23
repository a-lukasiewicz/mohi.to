'use client'

export const getLocalStorageData = (key: string) => {
  const elements: any = window.localStorage.getItem(key)

  if (!elements) return []
  return JSON.parse(elements)
}

export const checkLocalStorage = (key: string, id: string) => {
  return getLocalStorageData(key)?.includes(id)
}

export const clearLocalStorage = (key: string) => {
  window.localStorage.setItem(key, JSON.stringify([]))
}

export const setLocalStorage = (key: string, id: string) => {
  const data: string[] = getLocalStorageData(key)

  if (!data) {
    return window.localStorage.setItem(key, JSON.stringify([id] as string[]))
  }

  if (data.includes(id)) {
    return
  }

  window.localStorage.setItem(key, JSON.stringify([...data, id]))
}

export const removeFromLocalStorage = (key: string, id: string) => {
  const data: string[] = getLocalStorageData(key)

  if (data.length === 1) {
    return clearLocalStorage(key)
  }

  const filteredData = data.filter(fav => fav !== id)
  window.localStorage.setItem(key, JSON.stringify(filteredData))
}
