import { useState } from "react";

export function useApi<T>(apiFunc: Function) {
  const [data, setData] = useState<T | []>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    try {
      setLoading(true);
      const data = await apiFunc(...args);
      setLoading(false);

      setError(false);
      setData(data);
    } catch (error) {
      setError(true);
    }
  };

  return { data, error, loading, request };
}
