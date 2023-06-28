{ 
  interface IMessage {
    id: string,             // message id
    text: string,           // message text
    date: number,           // message timestamp
    author: string,         // message author id
    authorLabel: string,    // message author label
    attachment: string,     // message attachment link
    source: string,         // message source (app, SMS...)
    twilioStatus?: string,  // status of twilio (delivered, unsent...)
  }

  const jwtToken:string = '[token]';
  const chatId:string = '[chat-id]';
  const newMessage:string = 'Hello!'

  fetch('https://api.qix.cloud/message', {
    method: 'POST',
    body: JSON.stringify({
      chat: chatId,
      message: newMessage,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  }).then((res) => {
    return res.json();
  }).then((res:IMessage) => {
    
    const newMessage:IMessage = res; // new message

  })
}

