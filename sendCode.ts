{
  const userPhone:string = '[phone]';

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

