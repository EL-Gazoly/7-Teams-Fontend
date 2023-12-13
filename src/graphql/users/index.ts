import { gql } from "@apollo/client";

export const GetUsers = gql`    
query getUsers {
  admin {
    users {
      name
      email
      roles {
        name
      }
    }
  }
}
`