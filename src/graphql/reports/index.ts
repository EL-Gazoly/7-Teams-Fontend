import { gql } from "@apollo/client";

export const GetStudentReports = gql`
 query Student($studentId: String!) {
  student(id: $studentId) {
    name
    generatedId
    imageUrl
    team {
      teamId
      name
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
        generatedId
          team {
            name
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
query Team($teamId: String!) {
  team(id: $teamId) {
    classes {
       classId
        number
      students {
        studnetExpriment {
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