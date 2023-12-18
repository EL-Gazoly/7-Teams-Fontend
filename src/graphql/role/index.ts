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

export const createRole = gql`
mutation CreateRole($data: CreateRoleInput!) {
  createRole(data: $data) {
    name
  }
}
`