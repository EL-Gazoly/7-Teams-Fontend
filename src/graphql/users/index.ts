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

export const getUser = gql`
  query getUser($userId: String!) {
  user(id: $userId) {
    imageUrl
    name
    email
    roles {
      name
      id
    }
  }
}
`

export const updateUser = gql`
mutation UpdateUser($updateUserId: String!, $data: UpdateUserInput!, $image: Upload, $removeImage: Boolean) {
  updateUser(id: $updateUserId, data: $data, image: $image, removeImage: $removeImage) {
    name
    email
    imageUrl
    roles {
      id
      name
    }
  }
}
`