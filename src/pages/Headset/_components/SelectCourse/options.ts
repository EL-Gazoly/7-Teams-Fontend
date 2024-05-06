
import Chemistry from '../../../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../../../assets/SelectCourse/SelectSubject/physics.svg'
import Biology from '../../../../assets/SelectCourse/SelectSubject/biology.svg'
import Geology from '../../../../assets/SelectCourse/SelectSubject/geology.svg'
// Chemistry
import LiquidExpirment from '../../../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import DenistyOfWood from '../../../../assets/SelectCourse/SelectExpriment/Chemistry/DensityOfWood.svg'
import VolumeCalculation from '../../../../assets/SelectCourse/SelectExpriment/Chemistry/size.svg'
import HeatExpriment from '../../../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
import CharlesLaw from '../../../../assets/SelectCourse/SelectExpriment/Chemistry/Charles.svg'
import SizeOfMole from '../../../../assets/SelectCourse/SelectExpriment/Chemistry/SizeOfMole.svg'

// Physics
import GeigerDevice from '../../../../assets/SelectCourse/SelectExpriment/Physics/GeigerDevice.svg'
import Inertia from '../../../../assets/SelectCourse/SelectExpriment/Physics/Inertia.svg'

import { chemistryOptions, physicsOptions } from '../../../../data/expermients'

const options = {
    Chemistry: {
      icon: Chemistry,
      name: 'الكيمياء',
      value : "chemistry",
      chapters : {
          first : {
            icon : Chemistry,
            name : 'الكيمياء 1',
            value : "first",
            expermients :  [
              ...chemistryOptions
            ],
          }
      }
    },
    Physics: {
      icon: Physics,
      name: 'الفيزياء',
      value : "physics",
      chapters : {
        first : {
          icon : Physics,
          name : 'الفيزياء 1',
          value : "first",
          expermients : [
            ...physicsOptions
        ],
        }
      }
    },
  }

  export default options