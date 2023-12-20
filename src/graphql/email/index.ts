import { gql } from "@apollo/client";

export const SendEmail = gql`
mutation SendEmail($email: String!, $certificate: Upload) {
  sendEmail(email: $email, certificate: $certificate)
}
`