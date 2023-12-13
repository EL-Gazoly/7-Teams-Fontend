import { gql } from "@apollo/client";

export const LOGINADMIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
  loginAdmin(email: $email, password: $password) {
    token
    name
  }
}
`;

export const LOGINUSER  = gql`
    mutation LoginUser($email: String!, $hashedPassword: String!) {
  loginUser(email: $email, hashedPassword: $hashedPassword) {
    token
    name
  }
}
`