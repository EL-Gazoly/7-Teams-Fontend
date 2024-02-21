import { gql } from "@apollo/client";

export const GETLOGS = gql`
 query GETLOGS($skip: Int, $take: Int) {
  logs(skip: $skip, take: $take) {
    admin {
      name
    }
    action
    user {
      imageUrl
      name
      roles {
        name
      }
    }
    createdAt
  }
  logsCount
}
`;