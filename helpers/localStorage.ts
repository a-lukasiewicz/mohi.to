export const getLocalStorageData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '')
}

export const setLocalStorage = (key: string, id: string) => {
  const allFavorites: string[] = getLocalStorageData(key)

  if (!allFavorites) {
    return localStorage.setItem(key, JSON.stringify([id] as string[]))
  }

  localStorage.setItem(key, JSON.stringify([...allFavorites, id]))
}

export const clearLocalStorage = (key: string) => {
  localStorage.setItem(key, JSON.stringify([]))
}
