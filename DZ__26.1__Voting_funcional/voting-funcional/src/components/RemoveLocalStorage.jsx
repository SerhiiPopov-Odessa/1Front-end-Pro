import { useEffect } from 'react';

export default function RemoveLocalStorage() {

  useEffect(() => {
    return () => {
      localStorage.removeItem("smiles");
    };
  }, []);

  return null;
}