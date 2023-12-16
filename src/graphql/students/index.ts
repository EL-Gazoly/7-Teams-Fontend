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

export const createStudent = gql`
mutation createStudent($data: CreateStudentInput!, $image: Upload) {
  createStudent(data: $data, image: $image) {
    name
  }
}
`