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
            schoolId
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
export const getSchool = gql`
    query School($schoolId: String!) {
        school(schoolId: $schoolId) {
            imageUrl
            name
            uniqueId
        }
    }
`

export const updateSchool = gql`
mutation UpdateSchool($schoolId: String, $data: UpdateSchoolInput!, $removeImage: Boolean, $image: Upload) {
  updateSchool(schoolId: $schoolId, data: $data, removeImage: $removeImage, image: $image) {
    name
  }
}
`