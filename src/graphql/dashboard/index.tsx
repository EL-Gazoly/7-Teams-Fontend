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
            name
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