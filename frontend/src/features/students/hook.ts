import useSWR from 'swr';
import apiClient from '@/utils/api';

const fetcher = async (url: string) => await apiClient(url).then((res) => res.data);
 
export function useStudents() {
  const { data, isValidating, error } = useSWR('/api/students', fetcher);

  return {
    students: data || [],
    isLoading: !error && !data || isValidating,
    error,
  };
}


