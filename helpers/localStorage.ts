export const getLocalStorageData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '')
}

export const checkLocalStorage = (key: string, id: string) => {
  return getLocalStorageData(key).includes(id)
}

export const clearLocalStorage = (key: string) => {
  localStorage.setItem(key, JSON.stringify([]))
}

export const setLocalStorage = (key: string, id: string) => {
  const data: string[] = getLocalStorageData(key)

  if (!data) {
    return localStorage.setItem(key, JSON.stringify([id] as string[]))
  }

  if (data.includes(id)) {
    return
  }

  localStorage.setItem(key, JSON.stringify([...data, id]))
}

export const removeFromLocalStorage = (key: string, id: string) => {
  const data: string[] = getLocalStorageData(key)

  if (data.length === 1) {
    return clearLocalStorage(key)
  }

  const filteredData = data.filter(fav => fav !== id)
  localStorage.setItem(key, JSON.stringify(filteredData))
}
