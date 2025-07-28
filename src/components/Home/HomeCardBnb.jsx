import React from "react";

export default function HomeCardBnb({item}){
    return (
        <>
            <div className="list-bnb-item">
                street : {item.address.street}
            </div>
        </>
    )
}

// {
//     "id": "733d8be6-5708-4551-b221-5c1156fd2b9a",
//     "email": "gamble@.directory",
//     "type": "home",
//     "username": "Holt_Meadows",
//     "address": {
//       "city": "Tryon",
//       "street": "Moffat Street"
//     },
//     "owner": {
//       "id": "7ea5c7ee-7c25-411a-b874-6ea07a7eef84",
//       "name": "Faith Douglas",
//       "image": "https://picsum.photos/id/1/200/300"
//     },
//     "image": [
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300"
//     ],
//     "description": "in non aute officia ad occaecat minim qui ex minim",
//     "price": {
//       "currency": "TR",
//       "amount": 2756
//     },
//     "location": {
//       "lat": 41.618268689797176,
//       "long": 29.68589363075304
//     },
//     "rate": 4
//   },