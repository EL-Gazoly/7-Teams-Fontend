import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query Teams {
  teams {
    teamId
    name
    classes {
      classId
      number
    }
  }
}
`;