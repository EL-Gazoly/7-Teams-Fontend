import StudentCard from "./item"

type studentsGridProps = {
  students : [{
    imageUrl : string,
    name : string,
    generatedId : number,

  }]
}

const StudentsGridView = ({students}: studentsGridProps) => {
  
  return (
    <div className=" w-full grid grid-cols-4 gap-x-2 gap-y-[9px]">
      {students &&
        students.map((student ,index) => (
          <StudentCard key={index} student={student}  />
        ))
      }

    </div>
  )
}

export default StudentsGridView