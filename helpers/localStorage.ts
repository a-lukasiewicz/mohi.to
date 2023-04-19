export const getLocalStorageData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '')
}

export const setLocalStorage = (key: string, id: string) => {
  const allFavorites: string[] = getLocalStorageData(key)

  if (!allFavorites) {
    return localStorage.setItem(key, JSON.stringify([id] as string[]))
  }

  if (allFavorites.includes(id)) return

  localStorage.setItem(key, JSON.stringify([...allFavorites, id]))
}

export const checkLocalStorage = (key: string, id: string) => {
  const all = getLocalStorageData(key)
  return all.includes(id)
}

export const removeFromLocalStorage = (key: string, id: string) => {
  const all: string[] = getLocalStorageData(key)
  return all.filter(fav => fav !== id)
}

export const clearLocalStorage = (key: string) => {
  localStorage.setItem(key, JSON.stringify([]))
}
