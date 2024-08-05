{
  const jwtToken:string = '[token]';
  const conversationId:string = '[conversationId]';
  const fcmToken:string = '[fcmToken]';

  fetch(`https://api.qix.cloud/conversation/${conversationId}/legalpal_app_fcm`, {
    method: 'PUT',
    body: JSON.stringify({
      fcm: fcmToken,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  });
}

