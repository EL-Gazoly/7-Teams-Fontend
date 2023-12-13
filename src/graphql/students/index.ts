import { gql } from "@apollo/client";

export const getStudents = gql`
query Students {
    admin {
        students {
        name
        imageUrl
        generatedId
            device {
                name
            }
        }
    }
}
`