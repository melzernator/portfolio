import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

let theme: Theme =
  localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';

const listeners = new Set<() => void>();

function apply() {
  document.documentElement.dataset.theme = theme;
}

// set the attribute on load so CSS matches the stored preference immediately
apply();

export function getTheme(): Theme {
  return theme;
}

export function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(STORAGE_KEY, theme);
  apply();
  listeners.forEach((listener) => listener());
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    (callback) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
    () => theme,
  );
}
