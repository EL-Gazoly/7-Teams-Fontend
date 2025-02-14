import { gql } from "@apollo/client";

export const getDashboardData = gql`
   query Query {
    timeByMonth
    studentActuallyBegein
    admin {
        Team {
        name
        classes {
            number
            students {
            classalpha
            }
        }
        }
        roles {
        name
        users {
            name
        }
        }
    }
    studentExperiments {
        expriemntsByDay {
        totalPraticalTime
        totalTheorticalTime
        totalTrainingTime
        }
        expriementsByYear {
        totalPraticalTime
        totalTheorticalTime
        totalTrainingTime
        }
        expriementsByMonth {
        totalPraticalTime
        totalTheorticalTime
        totalTrainingTime
        }
    }
}

`
export const getTotalCourseTime = gql`
query Admin {
  admin {
    Team {
      classes {
        courses {
          chapters {
            expriments {
              exprimentId
              StudentExpriment {
                totalPraticalTime
                totalTheorticalTime
                totalTrainingTime
              }
            }
          }
        }
      }
    }
  }
}
`