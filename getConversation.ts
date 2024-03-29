{
  // interfaces

  interface IConversation {
    id: string,               // conversation id
    appId: string,            // app id
    chatType: string,         // type of the conversation
    chatStatus: string,       // status of the conversation (active, archived, new...)
    language?: string,        // conversation language
    fullName?: string,        // client full name
    phone?: string,           // client full phone
    email?: string,           // client email
    birthday?: string,        // client birthday
    device?: string,          // client device (Android)
    intake_complete?: boolean
    accountStatus?: string,   // client account status
    noteids?: string[],       
    tags: ITag[],             // list of tags
    cases: ICaseMatter[],     // list of case matters
    party: IPartyInfo[],      // list of party info
    events: IEvent[],         // list of events
    lastMessage: {          
      text: string,           // last message text
      author: string,         // last message author id
    },
    lastActivity: number      // timesatmp of the last activity in the conversation
    members: {                // list of conversation members
      [key:string]: IConversationMember
    },
    advanced: {
      fileVineProjectIds?: string[], // list of ProjectIds
      caseFileIds?: string[], // list of caseFileIds
    }
  }

  interface IConversationMember {
    id: string,             // member id
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

