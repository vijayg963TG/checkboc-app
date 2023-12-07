import { baseUrl } from "./config";

const fetchInstance = (endpoint: number) => {
  return fetch(`${baseUrl}/${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("API request error:", error);
      throw error;
    });
};

export default fetchInstance;
