import onProgressLight from '../../assets/library/onProgrss-light.svg'
import onProgressDark from '../../assets/library/onProgrss-dark.svg'
import { useThemeStore } from '../../stores/ThemeStore'
import ControlCard from '../../Components/ControlCard'
import { Button } from '@nextui-org/react'
import { UploadFileToS3 } from '../../graphql/AmazonS3'
import { useMutation } from '@apollo/client'

const Library = () => {
  const [uploadFileToS3, {data, loading, error}] = useMutation(UploadFileToS3)
  const {dark} = useThemeStore()
  const onUpload = async() => {
    const imagePath = await ("../../../assets/none.png")
      try {
          const response = await fetch(imagePath);
          const blob = await response.blob();
          // Create a File object using the blob and file name
          const file = new File([blob], `20246.png`, { type: blob.type });
          // Call the mutation 
        
          await uploadFileToS3({
              variables: {
                  file: file,
                  facilityId: `20249`
              }
          });
          } catch (error) {
            console.error('Error reading file:', error);
        }
  }
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  // this code 
  
    
  return (
    <div className=' w-full h-full flex flex-col'>
      <ControlCard icon="Library" title=' الوسائط المحفوظه ' neasted={false}/>
      <div className=' w-full h-full flex flex-col gap-y-8 items-center justify-center'>
            <img src={dark ? onProgressDark : onProgressLight} alt="" width={150} height={150} />
            <span className={` ${dark ? "opacity-40" : "opacity-50"}`}>
              جاري العمل على هذه الصفحة
            </span>
            <Button onPress={onUpload}> Upload</Button>
      </div>

    
    

    </div>
  )
}

export default Library