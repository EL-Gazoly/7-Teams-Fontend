import { gql } from "@apollo/client";

export const UploadFileToS3 = gql`
mutation UploadFileToS3($file: Upload!, $facilityId: String!) {
  uploadFileToS3(file: $file, facilityId: $facilityId)
}
`