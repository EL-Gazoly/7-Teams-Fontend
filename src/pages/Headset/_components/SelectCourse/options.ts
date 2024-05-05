
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
             {
              name : "لزوجة السائل",
              icon : LiquidExpirment,
              value : "bf018686-aa10-40ba-99b8-a2d272110bb3",
              title: "LiquidViscosity"
            },
            {
              name : " كثافة الخشب ",
              icon : DenistyOfWood,
              value : "e196ece4-990a-4944-8940-00ccc9de50a3",
              title: "DensityOfWood"
            },
            {
              name : "  استخدام موقد بنسن ",
              icon : HeatExpriment,
              value : "ace39607-1086-4ec6-a207-76969e5419c8",
              title: "EffectiveUseOfBunsenBurner"
            },
            {
              name : "تحديد الحجم",
              icon : VolumeCalculation,
              value : "ca7823aa-2a14-49d5-b509-d218c68bf892",
              title: "VolumeCalculation"
            },
              {
                name : "قانون تشارلز",
                icon : CharlesLaw,
                value : "f07fc617-1414-49bc-b042-4d308d0625b4",
                title: "Charles"
              },
              {
                name : "حجم المول",
                icon : SizeOfMole,
                value : "b5161b4a-e770-48f6-9e2a-4a732996bd15",
                title: "SizeOfMole"
              },
        
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
          {
            name : "النشاط الإشعاعي",
            icon : GeigerDevice,
            value : "e453806f-6e02-456d-8dd1-2927ee64eb8a",
            title: "GeigerDevice"
          },
          {
            name : "القصور الذاتي",
            icon : Inertia,
            value : "3692ce59-e5fd-4d60-aad6-0ae42b08f910",
            title: "Inertia"
          },
        ],
        }
      }
    },
  }

  export default options