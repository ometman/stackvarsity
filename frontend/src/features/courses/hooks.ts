import useSWR from 'swr';
import apiClient from '@/utils/api';

const fetcher = async (url: string): Promise<any> => await apiClient(url).then((res) => res.data);

export function useCourses() {
  const { data, isLoading, error } = useSWR('/api/courses', fetcher);

  return {
    courses: data,
    isLoading: !error && !data,
    error,
  };
}