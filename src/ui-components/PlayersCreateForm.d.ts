/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayersCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    handicap?: number;
    plays_mondays?: boolean;
    subs_mondays?: boolean;
    plays_wednesdays?: boolean;
    subs_wednesdays?: boolean;
};
export declare type PlayersCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    handicap?: ValidationFunction<number>;
    plays_mondays?: ValidationFunction<boolean>;
    subs_mondays?: ValidationFunction<boolean>;
    plays_wednesdays?: ValidationFunction<boolean>;
    subs_wednesdays?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersCreateFormOverridesProps = {
    PlayersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    handicap?: PrimitiveOverrideProps<TextFieldProps>;
    plays_mondays?: PrimitiveOverrideProps<SwitchFieldProps>;
    subs_mondays?: PrimitiveOverrideProps<SwitchFieldProps>;
    plays_wednesdays?: PrimitiveOverrideProps<SwitchFieldProps>;
    subs_wednesdays?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PlayersCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onSuccess?: (fields: PlayersCreateFormInputValues) => void;
    onError?: (fields: PlayersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onValidate?: PlayersCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersCreateForm(props: PlayersCreateFormProps): React.ReactElement;
