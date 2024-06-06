import { gql } from "@apollo/client";

export const UploadFileToS3 = gql`
mutation UploadFileToS3($file: Upload!, $facilityId: String!) {
  uploadFileToS3(file: $file, facilityId: $facilityId)
}
`
export const getPicturesByFacilityId = gql`
query GetPicturesByFacilityId($facilityId: String!) {
  getPicturesByFacilityId(facilityId: $facilityId) {
    student {
      name
      imageUrl
    }
    pictureId
    key
    location
  }
}
`
export const getVideosByFacilityId = gql`
query GetVideosByFacilityId($facilityId: String!) {
  getVideosByFacilityId(facilityId: $facilityId) {
    student {
      name
      imageUrl
    }
    videoId
    location
    key
  }
}
`