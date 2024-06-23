import { useState, useRef, useEffect } from 'react';
import ControlCard from '../../Components/ControlCard';
import SchoolIcon from '../../assets/SideBar/Open/school.svg';
import LightSchoolIcon from '../../assets/SideBar/Open/default/school.svg';
import { Button } from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg';
import { CreateSchools, getSchools, getLatestSchool } from '../../graphql/School';
import { useMutation, useQuery } from '@apollo/client';
import Loading from '../../Components/Loading';
import { toast } from 'sonner';
import { useThemeStore } from '../../stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';

const CreateSchool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const nameRef = useRef<HTMLInputElement>();
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();

  const { data: schoolData, loading: schoolLoading, error: schoolError } = useQuery(getLatestSchool);
  const [createSchool, { data, loading, error }] = useMutation(CreateSchools, {
    refetchQueries: [{ query: getSchools }, { query: getLatestSchool }]
  });

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

  const handleCreateSchool = async () => {
    if (!nameRef.current.value) {
      toast.error(getTranslation('enter_school_name_error'));
      return;
    }
    try {
      await createSchool({
        variables: {
          data: { name: nameRef.current.value },
          image: selectedFile
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      toast.success(getTranslation('school_added_success'));
      nameRef.current.value = '';
      setSelectedImage(null);
      setSelectedFile(null);
    }
  }, [data]);

  if (loading || schoolLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(getTranslation('school_add_error'));
  }

  function convertToFiveDigits(number) {
    number = Number(number) + 1;
    let numString = number.toString();
    if (numString.length < 5) {
      numString = '0'.repeat(5 - numString.length) + numString;
    }
    return numString;
  }

  return (
    <div className="flex flex-col gap-y-8 items-center">
      <ControlCard icon="Schools" title={getTranslation('add_new_school')} neasted={true} />
      <div className="w-full h-[655px] bg-white dark:bg-[#252A33] rounded-lg flex items-center justify-center"
        style={{
            direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <div className="flex flex-col gap-y-9 items-center justify-center">
          <div className="flex flex-col gap-y-8">
            <div className="w-[116px] h-[116px] self-center rounded-full bg-[#EEEFF2] dark:bg-[#EEEFF2]/20 flex items-center justify-center">
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="w-full h-full object-cover rounded-full" />
              ) : (
                <img src={dark ? SchoolIcon : LightSchoolIcon} alt="Placeholder" className="w-[59px] h-[60px]" />
              )}
            </div>
            <div className="flex flex-col gap-y-5">
              <div className={cn("flex flex-row-reverse items-center self-center gap-x-3",
              )}>
                <Button
                  className="w-[171px] h-[51px] rounded-lg text-white bg-[#CF0644] dark:bg-[#FF5948]/60"
                  onPress={handleImageRemove}
                >
                  {getTranslation('delete')}
                </Button>
                <label
                  htmlFor="image-upload"
                  className="w-[171px] h-[51px] text-white bg-primary bg-[#52D867]/40 flex items-center justify-center rounded-lg cursor-pointer"
                >
                  {getTranslation('upload_new_image')}
                </label>
                <input
                  key={selectedImage}
                  type="file"
                  id="image-upload"
                  accept=".png, .jpeg, .jpg"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </div>
              <span className="text-sm text-white">{getTranslation('image_requirements')}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-14">
            <div className="flex flex-col gap-y-3 text-[15.25px]">
              <span className="text-text-black/60 dark:text-white/60 font-bold ">
                {getTranslation('school_name')}
              </span>
              <input
                type="text"
                ref={nameRef}
                className="w-[379.28px] h-[65.75px] px-5  rounded-lg bg-[#E9E9E9] dark:bg-[#1F242D]/70 text-text-black dark:text-white dark:placeholder:text-white/60 placeholder:text-text-black/40 placeholder:font-bold"
                placeholder={getTranslation('enter_school_name')}
              />
            </div>
            <div className="flex flex-col gap-y-6">
              <span className="text-text-black dark:text-white font-bold  text-sm">
                {getTranslation('school_number')}
              </span>
              <span className="text-[32px] font-bold text-text-black/40 dark:text-white/70">
                {convertToFiveDigits(schoolData?.latestSchool?.uniqueId)}
              </span>
            </div>
          </div>
          <Button
            className="w-[217px] h-16 mt-6 rounded-md bg-[#4E5464] text-white"
            onPress={handleCreateSchool}
          >
            <img src={AddIcon} alt="" />
            <span>{getTranslation('add_new_school_button')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateSchool;