"use client";

import { fetcher } from "@/utils/fetch";
import useSWR from 'swr';
import { useAuth } from "@/app/context/AuthContext";

// Define a TypeScript interface for the course data
interface ProgressData {
  id: string;
  first_name: string;
  last_name: string;
  course_title: string;
  progress: string;
  status: string;
}

interface StudentProgress {
  id: string;
  course_title: string;
  progress: string;
  status: string;
}

// Custom hook for fetching grades
export function useProgress() {
  const { data, error, isValidating } = useSWR<ProgressData[]>('/api/progress', fetcher, {
    revalidateOnFocus: true, // Automatically refresh when window regains focus
    shouldRetryOnError: true, // Retry failed requests
    dedupingInterval: 10000, // Prevent duplicate requests within 10 seconds
  });

  return {
    allProgressData: data || [], // Default to an empty array to prevent undefined errors
    isLoading: isValidating,
    hasError: Boolean(error),
    isEmpty: data?.length === 0, // Check if data array is empty
    error, // Expose the error for debugging purposes
  };
}


export function useStudentProgress() {
  const { isUser } = useAuth();
  const userId = isUser?.id || null;

  const { data, error, isValidating } = useSWR<StudentProgress[]>(userId ? `/api/progress/${userId}` : null, fetcher, {
    revalidateOnFocus: true, // Automatically refresh when window regains focus
    shouldRetryOnError: true, // Retry failed requests
    dedupingInterval: 10000, // Prevent duplicate requests within 10 seconds
  });

  return {
    studentProgressData: data || [], // Default to an empty array to prevent undefined errors
    isLoading: isValidating,
    hasError: Boolean(error),
    isEmpty: data?.length === 0, // Check if data array is empty
    error, // Expose the error for debugging purposes
  };
}
