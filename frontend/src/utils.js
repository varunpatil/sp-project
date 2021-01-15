import axios from "axios";

export const logout = async () => {
  localStorage.clear();
  await axios.post("/api/logout", {});
  location.replace("/");
};