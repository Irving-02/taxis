import api from "./api";

export const login = async (email, password) => {
  return await api.post("/login", { email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
