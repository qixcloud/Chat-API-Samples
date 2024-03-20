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
    noteId?: string               // FileVine
    projectId?: string            // FileVine
  }

  const jwtToken:string = '[token]';
  const chatId:string = '[chat-id]';

  fetch('https://api.qix.cloud/messages?chat=' + chatId, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + jwtToken,
    },
  }).then((res) => {
    return res.json();
  }).then((res:IMessage[]) => {
    
    const messagesList:IMessage[] = res; // list of messages

  })
}