export interface IAuthor{
    avatarUrl: string,
    name: string,
    role: string
}

export interface IContent{
    type: string,
    content: string
}

export interface IPost{
    id: number,
    author: IAuthor,
    content: IContent[],
    publishedAt: Date,
}