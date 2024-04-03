import ContentDisplay from '@/components/content/ContentDisplay';
import { getDocuments } from '@/lib/docs'
import { getDocumentBytag } from '@/utils/DocsUtils';


const TagsPage = ({params:{name}}) => {

    const docs = getDocuments();
    const matchedDocuments = getDocumentBytag(docs,name)
  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  )
}

export default TagsPage