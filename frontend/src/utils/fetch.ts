"use client";

import apiClient from '@/utils/api';

// fetcher function using apiClient
export const fetcher = async (url: string) => {
    try {
      const response = await apiClient.get(url);
      return response.data;
    } catch (err) {
      console.log('Error fetching data:', err);
      throw err; // Re-throw the error to let SWR handle it
    }
  };