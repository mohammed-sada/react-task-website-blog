import { API_URL } from "./config";

export async function fetchFromApi(apiEndpoint: string, opts?: any) {
  const req = { method: "Get", body: null, ...opts };

  try {
    const res = await fetch(`${API_URL}/${apiEndpoint}`, {
      method: req.method,
      ...(req.body && { body: JSON.stringify(req.body) }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export function isEmptyObject(obj: Object) {
  return Object.keys(obj).length === 0;
}
