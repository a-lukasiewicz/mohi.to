'use client'

export const getLocalStorageData = (key: string) => {
  if (typeof window !== 'undefined') {
    const elements: any = localStorage.getItem(key)
    if (!elements) return []
    return JSON.parse(elements)
  }
}

export const checkLocalStorage = (key: string, id: string) => {
  return getLocalStorageData(key)?.includes(id)
}

export const clearLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify([]))
  }
}

export const setLocalStorage = (key: string, id: string) => {
  const data: string[] = getLocalStorageData(key)

  if (typeof window !== 'undefined') {
    if (!data) {
      return localStorage.setItem(key, JSON.stringify([id] as string[]))
    }

    if (data.includes(id)) {
      return
    }

    localStorage.setItem(key, JSON.stringify([...data, id]))
  }
}

export const removeFromLocalStorage = (key: string, id: string) => {
  const data: string[] = getLocalStorageData(key)

  if (data.length === 1) {
    return clearLocalStorage(key)
  }

  const filteredData = data.filter(fav => fav !== id)

  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(filteredData))
  }
}
