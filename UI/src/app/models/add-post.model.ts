export interface AddPostRequest
{
    title: string |undefined;
    content: string |undefined;
    summary: string |undefined;
    urlHandle: string |undefined;
    visible: boolean |undefined; 
    author: string |undefined;
    publishDate: Date |undefined;
    updatedDate: Date |undefined;    
    featuredImageUrl : string |undefined;
}