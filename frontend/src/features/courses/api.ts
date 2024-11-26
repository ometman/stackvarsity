import apiClient from '../../utils/api';

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await apiClient.post("/auth/signup", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};
