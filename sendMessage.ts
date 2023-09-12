{ 
  interface IMessage {
    id: string,                   // message id
    text: string,                 // message text
    date: number,                 // message timestamp
    author: string,               // message author id
    authorLabel: string,          // message author label
    attachment: string,           // message attachment link
    attachmentMimeType?: string   // message attachment mime type
    source: string,               // message source (app, SMS...)
    twilioStatus?: string,        // status of twilio (delivered, unsent...)
  }

  const jwtToken:string = '[token]';
  const chatId:string = '[chat-id]';
  const newMessage:string = 'Hello!'
  const attachment:string = 'base64 of a file'; // https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
  const attachmentMimeType:string = 'mime type of a file (e.g. image/png)';

  fetch('https://api.qix.cloud/message', {
    method: 'POST',
    body: JSON.stringify({
      chat: chatId,
      message: newMessage,
      attachment: attachment,
      attachmentMimeType: attachmentMimeType,
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

