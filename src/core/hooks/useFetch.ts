import { useEffect, useState } from "react";

type FetchType<T> = {
  data: T;
  error: string;
  loading: boolean;
};

const useFetch = <T>(fCallback: () => Promise<T[]>): FetchType<T[]> => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fCallback();
        setData(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fCallback]);

  return { data, error, loading };
};

export default useFetch;
