export const api = async (config) => {
  const { endpoint, method = "GET", body } = config;
  const url = `https://api.freeapi.app/api/v1/${endpoint}`;
  try {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();

      return data.data;
    }
    throw new Error("Something went wrong", { cause: res });
  } catch (e) {
    console.log(e, url);
    throw e;
  }
};
