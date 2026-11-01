/**
 * Centralized API Client Configuration
 * 
 * In local development: Calls relative path (/api/...)
 * When deployed on GitHub Pages: Set VITE_API_URL in .env or GitHub Secrets
 * to point to your live Render backend (e.g. https://your-backend.onrender.com)
 */

export const API_BASE_URL: string = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export function getApiUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!API_BASE_URL) {
    return cleanPath;
  }
  return `${API_BASE_URL}${cleanPath}`;
}
