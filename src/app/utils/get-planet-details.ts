import { API_URL } from "../constants";

export const getPlanetDetails = async () => {
  return await fetch(`${API_URL}planets`).then((data) => data.json());
};
