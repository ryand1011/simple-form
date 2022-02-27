// Copyright 2022 Ryan Diaz - All rights reserved
// validator for twitter 

import { AccountValidator } from "../../account-validation-facade";

// import axios from "axios";

// interface for api response 
// interface TwitterAPIResponse {
//     data?: {
//         id: string;
//         name: string;
//         username: string;
//     };
//     errors?: any;
// }

// api specific to twitter
const doesTwitterAccountExistAPICall = async (twitterUsername: string): Promise<boolean> => {

    // const { data, status } = await axios.get<TwitterAPIResponse>(
    //   `https://api.twitter.com/2/users/by/username/${twitterUsername}`,
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       Bearer: '',
    //     },
    //   },
    // );

    // console.log(JSON.stringify(data, null, 4));
    // console.log('response status is: ', status);

    // placeholder - use response validation and custom twitter logic
    if(twitterUsername === "twitter") {
        // then the account DOES exist
        // console.log("twitter account DOES exist");
        return new Promise(resolve => resolve(true));
    } 

    // console.log("twitter account does NOT exist");
    return new Promise(resolve => resolve(false));
}

// export account validator
export const isValidTwitter: AccountValidator = {
    accountExists: doesTwitterAccountExistAPICall
}