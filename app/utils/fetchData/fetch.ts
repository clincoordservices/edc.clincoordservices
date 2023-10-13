export default async  function  fetchWithParams(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: any,
    headers?: { [key: string]: string }
  ): Promise<Response> {
    const options = {
      method: method,
      headers:  headers,
    };
     
    if (data) {
        //@ts-ignore
      options.body = data;
    }
  
    return await fetch(url, options);
  }