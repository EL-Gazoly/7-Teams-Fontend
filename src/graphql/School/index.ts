import { gql } from "@apollo/client";


export const CreateSchools = gql`
    mutation CreateSchool($data: CreateSchoolInput!, $image: Upload) {
  createSchool(data: $data, image: $image) {
    uniqueId
    imageUrl
  }
}
`
export const getSchools = gql`
    query Schools {
        admin {
            schools {
            imageUrl
            name
            uniqueId
            }
        }
}
`
export const getLatestSchool = gql`
    query LatestSchool {
        latestSchool {
            uniqueId
        }
    }
`