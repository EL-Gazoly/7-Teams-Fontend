import StudentCard from "@/pages/LIbraryPage/_components/StudentsCard";

const GridView = ({data, link}) => {
  return (
    <div className=' max-w-full grid grid-cols-4 gap-x-4 gap-y-6'
        style={{ direction: 'rtl' }}
    >
       {
        data.map((student, index) => (
            <StudentCard link={link} key={index} student={student} />
        ))
       }

       
    </div>
  )
}

export default GridView
