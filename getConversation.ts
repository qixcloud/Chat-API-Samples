{
  // interfaces

  interface IConversation {
    id: string,             // conversation id
    appId: string,          // app id
    chatType: string,       // type of the conversation
    chatStatus: string,     // status of the conversation (active, archived, new...)
    language?: string,      // conversation language
    fullName?: string,      // client full name
    phone?: string,         // client full phone
    email?: string,         // client email
    birthday?: string,      // client birthday
    accountStatus?: string, // client account status
    tags: ITag[],           // list of tags
    cases: ICaseMatter[],   // list of case matters
    party: IPartyInfo[],    // list of party info
    events: IEvent[],       // list of events
    lastMessage: {          
      text: string,         // last message text
      author: string,       // last message author id
    },
    lastActivity: number    // timesatmp of the last activity in the conversation
    members: {              // list of conversation members
      [key:string]: IConversationMember
    }
  }

  interface IConversationMember {
    id: string,             // member id
    label: string,          // member label
    img: string,            // member img
    status: string,         // member status (read, unread, replied, assigned...)
    newMessages: number,    // new messages amount
    role: string            // role of the member (client, creator, team)
  }

  interface ICaseMatter {
    name: string,
    details: string,
    creator: string,
    recipient: string,
    timestamp: number,
  }
  
  interface IPartyInfo {
    name: string,
    details: string,
    creator: string,
    recipient: string,
    address1: string,
    address2: string,
    city: string,
    country: string,
    zipCode: string,
    timestamp: number,
  }
  
  interface IEvent {
    name: string,
    details: string,
    eventTimestamp: number,
    eventDate: string,
    eventTime: string,
    eventType: string,
    members: string[],
    location: string,
    creator: string,
    timestamp: number,
    demo: boolean,
  }
  
  interface ITag {
    name: string,
    id: string,
  }


  // code

  const jwtToken:string = '[token]';

  fetch('https://api.qix.cloud/conversation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  }).then((res:Response) => {
    return res.json();
  }).then((res:IConversation) => {

    const conversation:IConversation = res; // user conversation
  
  });
}

