import { gql } from "@apollo/client";


export const CreateSchools = gql`
    mutation CreateSchool($data: CreateSchoolInput!, $image: Upload) {
  createSchool(data: $data, image: $image) {
    uniqueId
    imageUrl
  }
}
`