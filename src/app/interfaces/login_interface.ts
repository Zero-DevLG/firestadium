export interface res {
    value: Val[],
    success:boolean,
    errors:[]
}

export interface Val{
    
}

export interface user{
    errors: [],
    success: boolean,
    value: {
        accessToken: string,
        accessTokenExpiration: string,
        refreshToken: string,
        userName: string

    }
}


export interface dataUser{
    value: {
        avatar: string,
        balance: number,
        birthDate: string,
        country: string,
        countryId: string,
        email: string,
        emailAuthenticatedDate: string,
        expirationDate: string,
        id: string,
        isEmailAuthenticated: false,
        lastNames: string,
        names: string,
        password: string,
        refreshToken: string,
        registeredDate: string,
        secretAnswer: string,
        secretQuestion: string,
        secretQuestionId: string,
        userGameFavorites: [
            {
                id: string,
                gameId: string,
                game: {
                    id: string,
                    principalTittle: string,
                    secondaryTittle: null,
                    subtitle: null,
                    link: string,
                    image: string,
                    order: number,
                    marginLeft: number
                },
                userId: string
            }
        ]
        userName: string,
        userPlatformFavorites: [{
            id: string,
        platformId: string,
        platform: {
            id: string,
            name: string,
            enabled: boolean
        },
        userId: string
        }],
        userPlatformTags: [{
            
                id: string,
                tagName: string,
                platformId: string,
                platform: {
                    id: string,
                    name: string,
                    enabled: boolean
                },
                userId: string
            
        }]
    },
    success: boolean,
    errors: []
    
}


export interface userPlatformTags{
    id: string,
    tagName: string,
    platformId: string,
    platform: {
        id: string,
        name: string,
        enabled: boolean
    },
    userId: string

}


export interface userPlataformFavorites {
    
        id: string,
        platformId: string,
        platform: {
            id: string,
            name: string,
            enabled: boolean
        },
        userId: string
        
}

export interface userGameFavorites 
    {
        id: string,
        gameId: string,
        game: {
            id: string,
            principalTittle: string,
            secondaryTittle: null,
            subtitle: null,
            link: string,
            image: string,
            order: number,
            marginLeft: number
        },
        userId: string
    }
