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

export const updateRole = gql`
mutation UpdateRole($updateRoleId: String!, $data: UpdateRoleInput!) {
  updateRole(id: $updateRoleId, data: $data) {
    name
  }
}
`