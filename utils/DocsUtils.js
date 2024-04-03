

export function getDocumentByCategorie(docs, category) {
    return docs.filter(doc => doc.category === category);
 }


export function getDocumentByAuthor(docs, author) {
    return docs.filter(doc => encodeURI(doc.author) === author);
}



export function getDocumentBytag(docs ,tags){
    return docs.filter((doc)=>doc.tags.some(inputTag=>inputTag ===tags));
}