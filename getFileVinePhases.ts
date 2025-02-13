{
  interface IPhase {
    phase: string,
    title: string,
    description: string,
    order: number,
    fileVineId: string,
    type?: string,
    languages?: {
      [lang: string]: {
        phase?: string; 
        title?: string; 
        description?: string; 
      }
    }
  }

  const jwtToken:string = '[token]';

  fetch('https://api.qix.cloud/phaseFileVine', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + jwtToken,
    },
  }).then((res) => {
    return res.json();
  }).then((res:IPhase[]) => {
    
    const phaseList:IPhase[] = res; // list of phases

  })
}