import Chemistry from '../../../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../../../../assets/SelectCourse/SelectSubject/physics.svg'
import useTranslationStore from '@/stores/LanguageStore'


const Body = ({chemistryTotalTime, physicsTotalTime}) => {
  const {getTranslation} = useTranslationStore()
  const options = [
  {
    value: 'الكيمياء',
    label: 'chemistry',
    icon: Chemistry,
    time: chemistryTotalTime
  },
  {
    value: 'الفيزياء',
    label: 'physics',
    icon: Physics,
    time: physicsTotalTime
  },

]
  return (
    <div className=' flex flex-col gap-y-1 justify-center'>
      {
          options.map((option, index) => {
              return (
                  <div className=' flex items-center justify-between py-3'>
                      <div className=' flex items-center gap-x-5 mx-5'>
                          <span> {index + 1} </span>
                          <div className=' flex items-center gap-x-3'>
                              <img src={option.icon} alt={option.label} />
                              <span className='font-bold'> {getTranslation(option.label)} </span>
                          </div>
                      </div>
                      <div className=' mx-12 flex items-center gap-x-2'>
                          <span> {option.time} </span>
                      </div>
                  </div>
              )
          })
      }
    </div>
  )
}

export default Body
