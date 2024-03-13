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

export const getRole = gql`
  query getRole($roleId: String!) {
  role(id: $roleId) {
    id
    name
    isUsersAccess
    isStudentsAccess
    isSchoolAccess
    isRolesAccess
    isReportsAccess
    isLogsAccess
    isLibraryAccess
    isDevicesAccess
    isDashboardAccess
    isCoursesAccsess
    isCertificatesAccess
  }
}
`

export const GetRolesWithPermessions = gql`
query GetRolesWithPermessions {
  admin {
    roles {
      id
      name
      isUsersAccess
      isRolesAccess
      isStudentsAccess
      isSchoolAccess
      isReportsAccess
      isLogsAccess
      isLibraryAccess
      isDevicesAccess
      isDashboardAccess
      isCoursesAccsess
      isCertificatesAccess
    }
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