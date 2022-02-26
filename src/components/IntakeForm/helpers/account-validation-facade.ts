// Copyright 2022 Ryan Diaz - All rights reserved
// facade for validating a social account's existance by username

import { AccountType } from "./providers/account-providers";

// result of account validation
export interface AccountNameValidationResult {
    errorMessage: string | undefined;
    accountExists: boolean;
}

// validator to check account existence
export interface AccountValidator {
    accountExists: Function;
}

// verifies if username is not empty - then calls provider's validator 
export const isValidUsername = async (provider: AccountType, usernameInput: string): Promise<AccountNameValidationResult> => {

    let errorMessage;
    let accountExists = false;

    if (!usernameInput) {
        errorMessage = provider.errorMustEnterAccountName;
    } else if (! await provider.validator.accountExists(usernameInput)) {
        errorMessage = provider.errorMessageAccountDoesNotExist;
    } else {
        accountExists = true;
    }

    return { errorMessage, accountExists };
}