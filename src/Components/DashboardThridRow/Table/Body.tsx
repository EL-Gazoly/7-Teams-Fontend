import Chemistry from '../../../assets/SelectCourse/SelectSubject/chemistry.svg'

const Body = ({totalTime}) => {
  return (
    <div className=' flex items-center justify-between py-3 '>
        <div className=' flex items-center gap-x-5 mx-5'>
            <span> 1 </span>
            <div className=' flex items-center gap-x-3'>
                <img src={Chemistry} alt='chemistry' />
                <span className='font-bold'> الكيمياء </span>

            </div>
        </div>
        <div className=' mx-12 flex items-center gap-x-2'>
            <span> {totalTime} </span>
        </div>
        
      
    </div>
  )
}

export default Body
