import { gql } from "@apollo/client";

export const GetUsers = gql`    
query getUsers {
  admin {
    users {
      id
      name
      email
      imageUrl
      roles {
        name
      }
    }
  }
}
`
export const CreateUser = gql`
mutation CreateUser($data: CreateUserInput!, $image: Upload) {
  createUser(data: $data, image: $image) {
    name
    email
    roles {
      name
    }
  }
}
`