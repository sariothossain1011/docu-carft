import ContentDisplay from '@/components/content/ContentDisplay'


const SubContent = ({params:{subContent}}) => {
  return (
    <>
    <ContentDisplay id={subContent}/>
    </>
  )
}

export default SubContent