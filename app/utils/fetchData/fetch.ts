export default async  function  fetchWithParams(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: any,
    headers?: { [key: string]: string }
  ): Promise<Response> {
    const options = {
      method: method,
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };
    if (data) {
        //@ts-ignore
      options.body = data;
    }
    return await fetch(url, options);
  }