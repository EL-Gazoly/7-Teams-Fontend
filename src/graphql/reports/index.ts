import { gql } from "@apollo/client";

export const GetStudentReports = gql`
 query Student($studentId: String!) {
  student(id: $studentId) {
    name
    facilityId
    imageUrl
    team {
      teamId
      name
      school {
          name
        }
    }
    class {
      number
    }
    studnetExpriment {
      expriment {
        exprimentId
        name
      }
      enterPratical
      enterTheortical
      enterTraining
      totalPraticalTime
      totalTheorticalTime
      totalTrainingTime
      theoreticalTestGrade
      practicalTestGrade
    }
  }
}
`;

export const GetStudents = gql`
    query Students {
    admin {
        students {
        studentId
        name
        imageUrl
        facilityId
          team {
            name
            school {
              name
            }
          }
          class {
            number
          }
          classalpha
        }
    }
}
`

export const GetStudentTime = gql`
    query StudentExpermientByPeriod($studentId: String!) {
  StudentExpermientByPeriod(studentId: $studentId) {
    expriementsByMonth {
      totalPraticalTime
      totalTheorticalTime
      totalTrainingTime
    }
    expriementsByYear {
      totalPraticalTime
      totalTheorticalTime
      totalTrainingTime
    }
    expriemntsByDay {
      totalTheorticalTime
      totalPraticalTime
      totalTrainingTime
    }
  }
}
`;

export const GetTeamReports = gql`
  query TeamByName($name: String!) {
  teamByName(name: $name) {
     classes {
       classId
        number
      students {
        studnetExpriment {
            expriment {
            exprimentId
            name
          }
          theoreticalTestGrade
          totalPraticalTime
          totalTheorticalTime
          totalTrainingTime
          practicalTestGrade
          enterTraining
          enterTheortical
          enterPratical
        
        }
      
      }
     }
  }
}
`

export const GetClassReports = gql`
  query ClassesByNumber($number: String!, $name: String!) {
  classesByNumber(number: $number, name: $name) {
    classId
        number
      students {
        classalpha
        studnetExpriment {
            expriment {
            exprimentId
            name
          }
          theoreticalTestGrade
          totalPraticalTime
          totalTheorticalTime
          totalTrainingTime
          practicalTestGrade
          enterTraining
          enterTheortical
          enterPratical
        
        }
      }
  }
}
`;

export const GetSchoolReports = gql`
  query School($schoolId: String!) {
  school(schoolId: $schoolId) {
    name
    uniqueId
    imageUrl
    teams {
      name
      classes {
        classId
        number
        students {
          studnetExpriment {
            expriment {
              exprimentId
              name
            }
            theoreticalTestGrade
            practicalTestGrade
            totalPraticalTime
            totalTheorticalTime
            totalTrainingTime
            enterTheortical
            enterTraining
            enterPratical
          }
        }
      }
    }
  }
}
`