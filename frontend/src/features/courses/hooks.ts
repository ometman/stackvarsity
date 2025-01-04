"use client";

import apiClient from '@/utils/api';
// import { useState } from "react";
import useSWR from 'swr';

// Define a fetcher function using apiClient
const fetcher = async (url: string) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err; // Re-throw the error to let SWR handle it
  }
};

// Define a TypeScript interface for the course data
interface Course {
  id: string;
  name: string;
  description: string;
  // Add additional fields as needed based on your API response
}

// Custom hook for fetching courses
export function useCourses() {
  const { data, error, isValidating } = useSWR<Course[]>('/api/courses', fetcher, {
    revalidateOnFocus: true, // Automatically refresh when window regains focus
    shouldRetryOnError: true, // Retry failed requests
    dedupingInterval: 10000, // Prevent duplicate requests within 10 seconds
  });

  return {
    courses: data || [], // Default to an empty array to prevent undefined errors
    isLoading: isValidating,
    hasError: Boolean(error),
    isEmpty: data?.length === 0, // Check if data array is empty
    error, // Expose the error for debugging purposes
  };
}


