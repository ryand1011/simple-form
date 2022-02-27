// Copyright 2022 Ryan Diaz - All rights reserved
// validator for twitch

import { AccountValidator } from "../../account-validation-facade";

// import axios from "axios";

// interface for api response - TODO: lookup model of response
// interface TwitchAPIResponse {
//
// }

// api specific to twitch
const doesTwitchAccountExistAPICall = async (twitchUsername: string): Promise<boolean> => {

    // const { data, status } = await axios.get<TwitchAPIResponse>(
    //   `URI/${twitchUsername}`,
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       Bearer: '',
    //     },
    //   },
    // );

    // console.log(JSON.stringify(data, null, 4));
    // console.log('response status is: ', status);

    // placeholder - use response validation and custom twitch logic
    if(twitchUsername === "twitch") {
        // then the account DOES exist
        // console.log("twitch account DOES exist");
        return new Promise(resolve => resolve(true));
    }
    // console.log("twitch account does NOT exist");
    return new Promise(resolve => resolve(false));
}

export const isValidTwitch: AccountValidator = {
    accountExists: doesTwitchAccountExistAPICall
}