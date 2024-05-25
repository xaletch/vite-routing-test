/* eslint-disable @typescript-eslint/no-explicit-any */
export function setLocalStorageItem(key: string, value: any) {
  localStorage.setItem(key, value);
}

export function getLocalStorageItem(key: string, defaultValue: any) {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? storedValue : defaultValue;
}
