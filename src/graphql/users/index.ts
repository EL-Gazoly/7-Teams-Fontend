import { gql } from "@apollo/client";

export const GetUsers = gql`    
query getUsers {
  admin {
    users {
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