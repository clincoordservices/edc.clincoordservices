function fetchWithParams(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: any,
    headers?: { [key: string]: string }
  ): Promise<Response> {
    const options = {
      method: method,
      headers: headers,
    };
      //@ts-ignore
    if (data) {
      options.body = data;
    }
  
    return fetch(url, options);
  }