// Copyright 2022 Ryan Diaz - All rights reserved
// account provider definitions 

import { AccountValidator } from "../account-validation-facade";
import { isValidTwitch } from "./twitch/twitch-api";
import { isValidTwitter } from "./twitter/twitter-api";

// an account provider
export interface AccountType {
    provider: string;
    errorMessageAccountDoesNotExist: string;
    errorMustEnterAccountName: string;
    validator: AccountValidator;
}

export const TwitterAccount: AccountType = {
    provider: "twitter",
    errorMessageAccountDoesNotExist: "Username could not be found!",
    errorMustEnterAccountName: "Please enter your twitter username",
    validator: isValidTwitter,
}

export const TwitchAccount: AccountType = {
    provider: "twitch",
    errorMessageAccountDoesNotExist: "Username could not be found!",
    errorMustEnterAccountName: "Please enter your twitch username",
    validator: isValidTwitch,
}