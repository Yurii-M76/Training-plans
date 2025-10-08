export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

const env = process.env.NODE_ENV;
const API_URL =
  env === "development"
    ? "http://192.168.1.141:3000/api"
    : process.env.NEXT_PUBLIC_API_URL;

export const findPlansFromApi = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}/${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
    });
    return await checkResponse<T>(response);
  } catch (error) {
    console.error(`Request failed (${path} find all):`, error);
    return Promise.reject(error);
  }
};
