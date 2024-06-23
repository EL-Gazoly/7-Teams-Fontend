import NoPic from '@/assets/students/no-pic-light.svg';
import { Button } from '@nextui-org/react';
import { useThemeStore } from '@/stores/ThemeStore';
import DarkPlaceholder from '@/assets/students/dark-placeholder.png';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

export function UploadImage({ selectedImage, setSelectedImage, setSelectedFile }) {
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();

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

  return (
    <div className={cn("flex items-center gap-x-4",
      language === "ar" ? "flex-row-reverse" : "flex-row"
    )}>
      <div className="w-[122px] h-[122px] rounded-full flex items-center justify-center image-bg bg-[#EEEFF2] dark:bg-[#EEEFF2]/10">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        ) : (
          <img src={dark ? DarkPlaceholder : NoPic} alt="Placeholder" />
        )}
      </div>
      <div className="flex flex-col gap-y-4">
        <div className={cn("flex  items-center gap-x-4",
          language === "ar" ? "flex-row-reverse" : "flex-row"
        )}>
          <label
            htmlFor="image-upload"
            className="inline-flex text-white h-[54px] py-2 px-4 bg-primary dark:bg-primary/40 items-center justify-center rounded-lg cursor-pointer"
          >
            {getTranslation('upload_new_image')}
          </label>
          <input
            key={selectedImage} // Add this key to force re-render on file change
            type="file"
            id="image-upload"
            accept=".png, .jpeg, .jpg"
            style={{
              display: 'none',
            }}
            onChange={handleImageUpload}
          />
          <Button
            className="inline-flex h-[54px] py-2 px-4 bg-[#CF0644] text-white dark:bg-[#CF0644]/60 items-center justify-center rounded-lg"
            onClick={handleImageRemove}
          >
            {getTranslation('remove')}
          </Button>
        </div>
        <span className="text-[#8C8F93] dark:text-white/60 text-sm">
          {getTranslation('image_requirements')}
        </span>
      </div>
    </div>
  );
}