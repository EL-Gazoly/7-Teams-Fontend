import { gql } from "@apollo/client"

export const GetDevices = gql`
 query Devices {
    admin {
        devices {
            name
            macAddress
                student {
                    name
                    facilityId
                }
        }
  }
}
`

export const GetDevice = gql`
query DeviceByMac($macAddress: String!) {
  deviceByMac(macAddress: $macAddress) {
    name
    student {
      name
      facilityId
      studnetExpriment {
        exprimentId
        progress
      }
    }
  }
}
`