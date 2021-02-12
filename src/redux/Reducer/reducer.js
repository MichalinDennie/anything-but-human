// const productState = {
//     products: [
//         {
//             id: 1,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%207..png?alt=media&token=20964b30-6cb3-4718-8e49-f3243cadc2b0",
//             name: 'firstProduct',
//             price: 40,
//         },
//         {
//             id: 2,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2010..png?alt=media&token=2ec6041a-a979-456d-813c-ad6ba3e5ff04",
//             name: 'Second Product',
//             price: 42,
//         },
//         {
//             id: 3,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2011..png?alt=media&token=a1643278-5e0b-4531-a50a-fcd7a907a5a9",
//             name: 'Third Product',
//             price: 45,
//         },
//         {
//             id: 4,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2012..png?alt=media&token=b9796601-c10b-4f41-9ea0-666244e9b3d3",
//             name: 'Fourth Product',
//             price: 49,
//         },
//         {
//             id: 5,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2013..png?alt=media&token=d8865e29-e334-45ce-b20e-61b244715162",
//             name: 'Fifth Product',
//             price: 37,
//         },
//         {
//             id: 6,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2014..png?alt=media&token=0318ad2d-4c03-4dcc-88b0-c2f95ce43099",
//             name: 'Sixth Product',
//             price: 70,
//         },
//         {
//             id: 7,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2015..png?alt=media&token=f8b11919-22fa-415d-867d-0392f35b0035",
//             name: 'Seventh Product',
//             price: 82,
//         },
//         {
//             id: 8,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2016..png?alt=media&token=259bb004-b2a2-44e0-8280-98456b8a0acb",
//             name: 'Eighth Product',
//             price: 63,
//         },
//         {
//             id: 9,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2017.png?alt=media&token=8b5c3f9b-c5a1-42cc-949b-6e1d887ff434",
//             name: 'Ninth Product',
//             price: 86,
//         },
//         {
//             id: 10,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2018.png?alt=media&token=4599e890-f9b8-4331-9a03-79242f81497b",
//             name: 'Tenth Product',
//             price: 45,
//         },
//         {
//             id: 11,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2019..png?alt=media&token=2bff1ba2-6f4e-4dd2-9521-c8864efbc191",
//             name: 'Eleventh',
//             price: 96,
//         },
//         {
//             id: 12,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2020..png?alt=media&token=48a3adce-40e9-4371-841d-c50654cfb41d",
//             name: 'Twelveth Product',
//             price: 128,
//         },
//         {
//             id: 13,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2020..png?alt=media&token=48a3adce-40e9-4371-841d-c50654cfb41d",
//             name: 'Thirteen Product',
//             price: 49,
//         },
//         {
//             id: 14,
//             image: "https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2022..png?alt=media&token=0c9d281a-1204-4a47-a445-268cdf797ae1",
//             name: 'Forteen Product',
//             price: 140,
//         },


//     ]

// }
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "../../Constants/productConstants";


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case (PRODUCT_LIST_SUCCESS):
            return ({
                products: action.payload
            })
        case (PRODUCT_LIST_FAIL):
            return ({
                error: action.payload
            })
        default:
            return state;
    }
}