import { useEffect, useState } from 'react';
import axios from 'axios';

// Adresse du backend : définir VITE_API_URL en production (ex. https://nour-tech-api.onrender.com)
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Les images envoyées depuis l'admin sont servies par le backend (/media/...)
export const mediaUrl = (path) => (path?.startsWith('/media/') ? `${API_URL}${path}` : path);

// Charge une liste publique (projects, posts, team) depuis l'API
export const useContent = (route) => {
  const [state, setState] = useState({ items: [], loading: true, error: null });

  useEffect(() => {
    let active = true;
    axios
      .get(`${API_URL}/api/${route}`)
      .then((res) => active && setState({ items: res.data, loading: false, error: null }))
      .catch((error) => active && setState({ items: [], loading: false, error }));
    return () => {
      active = false;
    };
  }, [route]);

  return state;
};
