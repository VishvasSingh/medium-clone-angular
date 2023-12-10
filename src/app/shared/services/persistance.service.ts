import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: unknown): void {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to session storage', error);
    }
  }

  get(key: string): unknown {
    try {
      const localStorageItem = localStorage.getItem(key);
      return localStorageItem ? JSON.parse(localStorageItem) : null;
    } catch (error) {
      console.error('Error getting from session storage', error);
      return null;
    }
  }
}