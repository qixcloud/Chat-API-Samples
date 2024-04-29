{
  const jwtToken:string = '[token]';
  const newVersion = '2.12';

  fetch('https://api.qix.cloud/app/version', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + jwtToken,
    },
    body: JSON.stringify({
      version: newVersion,
    }),
  })
}