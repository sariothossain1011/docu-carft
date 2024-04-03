import ContentDisplay from '@/components/content/ContentDisplay';
import { getDocuments } from '@/lib/docs'
import { getDocumentByCategorie } from '@/utils/DocsUtils';

const CategoriesPage = ({params:{name}}) => {

    const docs = getDocuments();
    const matchedDocuments = getDocumentByCategorie(docs,name);
    console.log({matchedDocuments})

  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  )
}

export default CategoriesPage