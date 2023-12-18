import React from "react";
import NoPic from '../../assets/students/no-pic-light.svg'
import { Button } from "@nextui-org/react";
export function UploadImage({
  selectedImage,
    setSelectedImage,
    setSelectedFile
}) {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setSelectedFile(file);
            setSelectedImage(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      };
      const handleImageRemove = () => {
        setSelectedImage(null);
      };

  return <div className=" flex items-center flex-row-reverse gap-x-4">        
            <div className='w-[122px] h-[122px] rounded-full flex items-center justify-center image-bg bg-[#EEEFF2] dark:bg-white/30'>
                {selectedImage ? <img src={selectedImage} alt="Selected" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',

            }} /> : <img src={NoPic} alt="Placeholder" />}
            </div>
            <div className='flex flex-col gap-y-4 '>
                <div className='flex flex-row-reverse items-center gap-x-4'>
                <label htmlFor="image-upload" className='inline-flex text-white h-[54px] py-2 px-4 bg-primary items-center justify-center rounded-lg cursor-pointer'>
                    تحميل صوره جديده
                </label>
                <input key={selectedImage} // Add this key to force re-render on file change
        type="file" id="image-upload" accept=".png, .jpeg, .jpg" style={{
          display: 'none'
        }} onChange={handleImageUpload} />
                <Button className='inline-flex h-[54px] py-2 px-4 bg-[#CF0644] text-white dark:text-[#CF0644] dark:bg-white items-center justify-center rounded-lg' onClick={handleImageRemove}>
                    حذف
                </Button>
                </div>
                <span className='text-[#8C8F93] dark:text-white/60 text-sm'> png أو jpeg يجب أن تكون الصور بحجم 300 × 300 بكسل على الأقل بصيغة </span>
            </div>
            </div>;
}
  