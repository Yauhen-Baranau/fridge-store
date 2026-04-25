import { useState } from "react";

export interface Body {
  name: string;
  phone: string;
}

const url = "http://localhost:8080/api/send-email";

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const request = async (body: Body) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        setError("Ошибка запроса");
        setSuccess(false);
        return { ok: false, status: response.status };
      }

      setSuccess(true);
      return { ok: true, status: response.status };

    } catch (err) {
      setError("Сетевая ошибка");
      setSuccess(false);
      return { ok: false };
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error, success };
}