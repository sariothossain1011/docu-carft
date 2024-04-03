import ContentDisplay from '@/components/content/ContentDisplay'

const ContentPage = ({params:{contentId}}) => {
  return (
    <>
      <ContentDisplay id={contentId}/>
    </>
  )
}

export default ContentPage
