{
  const userPhone:string = '[phone (+12345678...)]';

  fetch('https://api.qix.cloud/sendCode', {
    method: 'POST',
    body: JSON.stringify({
      phone: userPhone,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

