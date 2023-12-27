
import Chemistry from '../../assets/SelectCourse/SelectSubject/chemistry.svg'
import Physics from '../../assets/SelectCourse/SelectSubject/physics.svg'
import Biology from '../../assets/SelectCourse/SelectSubject/biology.svg'
import Geology from '../../assets/SelectCourse/SelectSubject/geology.svg'

import LiquidExpirment from '../../assets/SelectCourse/SelectExpriment/Chemistry/liquid.svg'
import MetalExpriment from '../../assets/SelectCourse/SelectExpriment/Chemistry/metals.png'
import ColdExpriment from '../../assets/SelectCourse/SelectExpriment/Chemistry/cold.png'
import HeatExpriment from '../../assets/SelectCourse/SelectExpriment/Chemistry/heat.svg'
const options = {
    Chemistry: {
      icon: Chemistry,
      name: 'الكيمياء',
      value : "chemistry",
      chapters : {
        'الكيمياء 1' : [
          {
            name : "اختبار الفلزات",
            icon : MetalExpriment,
            value : "metal"
          },
          {
            name : "لزوجة السائل",
            icon : LiquidExpirment,
            value : "liquid"
          },
          {
            name : "كمادات باردة",
            icon : ColdExpriment,
            value : "cold"
          },
          {
            name : "حرارة نوعية",
            icon : HeatExpriment,
            value : "heat"
          },
        
        ],
      }
    },
  }

  export default options