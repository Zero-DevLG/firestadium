
export interface valUsr  {
    accessToken: string,
    accessTokenExpiration: string,
    refreshToken: string,
    userName: string
}


export interface plataformGames {
    value: [{
        id:         string,
        name:       string,
        enabled:    boolean 
    }]

    sucess: boolean,
    errors: []
}

export interface plataforms{
    ps4: {
        id:         string,
        name:       string,
        enabled:    boolean 
    },
    xbox: {
        id:         string,
        name:       string,
        enabled:    boolean 
    },
    pc: {
        id:         string,
        name:       string,
        enabled:    boolean 
    },
    nintendo: {
        id:         string,
        name:       string,
        enabled:    boolean 
    }
}


export interface score{
    value: {
        id: string,
        userName: string,
        wins: number,
        loses: number
    },
    success: boolean,
    errors: []
}

export interface history{
    value: [
        {
            userName: string,
            game: string,
            platform: string,
            modality: string,
            amount: number,
            matchDate: string,
            result: string
        }
    ]
   
}

export interface historyMatch{
    value: 
        {
            userName: string,
            game: string,
            platform: string,
            modality: string,
            amount: number,
            matchDate: string,
            result: string
        }
    
   
}


export interface gameListA{
    value:[{
     id: string,
     title: {
         first: string,
         second?: string
     },
     subtitle?: string,
     link: string,
     image: string,
     order: number,
     marginLeft: number
     }
    ]
 }

 export interface modeList{
    value: [
        {
            id: string,
            name: string,
            gameId: string,
            enabled: boolean
        }
    ],
 }
   





export interface gameList{
   value:{
    id: string,
    title: {
        first: string,
        second: null
    },
    subtitle: null,
    link: string,
    image: string,
    order: number,
    marginLeft: number
    }
}