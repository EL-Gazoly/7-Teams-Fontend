import StudentCard from "./item"

type studentsGridProps = {
  students : [{
    imageUrl : string,
    name : string,
    facilityId : string,
    device : {
      name : string
    }

  }]
}

const StudentsGridView = ({students}: studentsGridProps) => {
  
  return (
    <div className=" w-full grid grid-cols-4 gap-x-4 gap-y-6 pb-5">
      {students &&
        students.map((student ,index) => (
          <StudentCard key={index} student={student}  />
        ))
      }

    </div>
  )
}

export default StudentsGridView