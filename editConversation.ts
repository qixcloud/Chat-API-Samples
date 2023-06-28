{
  const jwtToken:string = '[token]';

  // !!!
  // do not send empty fields, all fields below must be filled!

  fetch('https://api.qix.cloud/conversation', {
    method: 'PUT',
    body: JSON.stringify({
      id: '[conversation id]',
      language: '[language]',
      fullName: '[full name]',
      phone: '[phone]',
      email: '[email]',
      birthday: '[birthday]',
      accountStatus: '[account status]',
      cases: [],  // list of case matters
      party: [],  // list of party info
      tags: [],   // list of tags
      events: [], // list of events
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  });
}

