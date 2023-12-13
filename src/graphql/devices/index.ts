import { gql } from "@apollo/client"

export const GetDevices = gql`
 query Devices {
    admin {
        devices {
            name
            macAddress
                student {
                    name
                }
        }
  }
}
`