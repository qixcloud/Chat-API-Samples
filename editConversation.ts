{
  const jwtToken:string = '[token]';

  fetch('https://api.qix.cloud/conversation', {
    method: 'PUT',
    body: JSON.stringify({
      id: '[conversation id]',
      language: '[language]',
      fullName: '[full name]',
      phone: '[phone]',
      email: '[email]',
      birthday: '[birthday]',
      device: '[device]',
      accountStatus: '[account status]',
      cases: [],  // list of case matters
      party: [],  // list of party info
      tags: [],   // list of tags
      events: [], // list of events
      advanced: {
        fileVineProjectIds: [], // list of ids (strings)
        caseFileIds: [], // list of ids (strings)
      }
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  });
}

