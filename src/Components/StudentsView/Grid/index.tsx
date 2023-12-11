import StudentCard from "./item"

const StudentsGridView = () => {
  return (
    <div className=" w-full grid grid-cols-4 gap-x-2 gap-y-[9px]">
      {
        new Array(8).fill(undefined).map((_,index) => (
          <StudentCard key={index} />
        ))
      }

    </div>
  )
}

export default StudentsGridView