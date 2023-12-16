import { gql } from "@apollo/client";

export const getRoles = gql`
query Roles {
  admin {
    roles {
      id
      name
    }
  }
}
`