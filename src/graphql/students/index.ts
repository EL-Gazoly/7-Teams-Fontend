import { gql } from "@apollo/client";

export const getStudents = gql`
query Students {
    admin {
        students {
        studentId
        name
        imageUrl
        facilityId
            device {
                name
            }
            team {
              teamId
              name
            }
            class {
              number
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

export const createStudentWithExcel = gql`
    mutation UploadStudentByExcel($file: Upload) {
    uploadStudentByExcel(file: $file) 
  }
`