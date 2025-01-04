"use client";

import { fetcher } from "@/utils/fetch";
import useSWR from 'swr';
import { useAuth } from "@/app/context/AuthContext";

// Define a TypeScript interface for the course data
interface AllGrades {
  enrollment_id: string;
  first_name: string;
  last_name: string;
  course_title: string;
  grade: string; 
}

interface StudentGrades {
  id: string;
  course_title: string;
  grade: string;
  comments: string; 
}

// Custom hook for fetching grades
export function useAllGrades() {
  const { data, error, isValidating } = useSWR<AllGrades[]>('/api/grades/', fetcher, {
    revalidateOnFocus: true, // Automatically refresh when window regains focus
    shouldRetryOnError: true, // Retry failed requests
    dedupingInterval: 10000, // Prevent duplicate requests within 10 seconds
  });

  return {
    grades: data || [], // Default to an empty array to prevent undefined errors
    isLoading: isValidating,
    hasError: Boolean(error),
    isEmpty: data?.length === 0, // Check if data array is empty
    error, // Expose the error for debugging purposes
  };
}

export function useStudentGrades() {
  const { isUser } = useAuth();
  const userId = isUser?.id || null;

  const { data, error, isValidating } = useSWR<StudentGrades[]>(userId ? `/api/grades/${userId}` : null, fetcher, {
    revalidateOnFocus: true, // Automatically refresh when window regains focus
    shouldRetryOnError: true, // Retry failed requests
    dedupingInterval: 10000, // Prevent duplicate requests within 10 seconds
  });

  return {
    grades: data || [], // Default to an empty array to prevent undefined errors
    isLoading: isValidating,
    hasError: Boolean(error),
    isEmpty: data?.length === 0, // Check if data array is empty
    error, // Expose the error for debugging purposes
  };
}

