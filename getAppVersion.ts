{
  const jwtToken:string = '[token]';

  fetch('https://api.qix.cloud/app/version', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + jwtToken,
    },
  }).then((res) => {
    return res.json();
  }).then((res:string) => {
    
    const version:string = res; // version

  })
}