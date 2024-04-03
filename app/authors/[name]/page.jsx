import ContentDisplay from '@/components/content/ContentDisplay'
import { getDocuments } from '@/lib/docs'
import { getDocumentByAuthor } from '@/utils/DocsUtils'


const AuthorsPage = ({params:{name}}) => {
    const docs = getDocuments()
    const matchedDocuments = getDocumentByAuthor(docs,name)
  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  )
}

export default AuthorsPage