{
  const userPhone:string = '[phone (+12345678...)]';
  const appId:string = '[app-id]';
  const code:number = 1234;

  fetch('https://api.qix.cloud/sign/phone', {
    method: 'POST',
    body: JSON.stringify({
      phone: userPhone,
      app: appId,
      code: code
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res:Response) => {
    return res.json();
  }).then((res:string) => {

    const token:string = res; // jwt (it is needed fro api requests) 
  
  });
}

