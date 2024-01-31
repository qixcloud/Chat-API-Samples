{
  const jwtToken:string = '[token]';
  const conversationId:string = '[conversationId]';

  fetch(`https://api.qix.cloud/conversation/${conversationId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  });
}

