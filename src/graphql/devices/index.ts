import { gql } from "@apollo/client"

export const GetDevices = gql`
 query Devices {
  devices {
    name
    macAddress
    student {
      name
    }
  }
}
`