export interface Post
{
    id: string;
    title: string;
    content: string;
    summary: string;
    urlHandle: string;
    visible: boolean; 
    author: string;
    publishDate: Date;
    updatedDate: Date;    
    featuredImageUrl : string;
}