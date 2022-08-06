
import { gql } from "@apollo/client"

export const GET_ACTIVE_MUSICS = gql`
    {
        activeMusics(skip: 8) {
            id
            buyer
            seller
            nftAddress
            price
            tokenId
          }
    }
`
export const GET_USER_MUSICS = gql`
{
    musicBoughts(first: 5, where: {buyer: "0x9ecb6b5e7055a48667482097f51bd700ae82285d"}) {
           id
           buyer
           nftAddress
           tokenId
           price
       }
   }

`
export const GET_ACTIVE_COURSES = gql`
    {
        activeCourses(first: 5) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`
