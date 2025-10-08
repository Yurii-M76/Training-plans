export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const findPlansFromApi = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(`https://training-plans.vercel.app/api${path}`, {
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
