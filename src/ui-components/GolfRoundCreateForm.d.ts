/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GolfRoundCreateFormInputValues = {
    date?: string;
    score?: string;
};
export declare type GolfRoundCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    score?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GolfRoundCreateFormOverridesProps = {
    GolfRoundCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type GolfRoundCreateFormProps = React.PropsWithChildren<{
    overrides?: GolfRoundCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GolfRoundCreateFormInputValues) => GolfRoundCreateFormInputValues;
    onSuccess?: (fields: GolfRoundCreateFormInputValues) => void;
    onError?: (fields: GolfRoundCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GolfRoundCreateFormInputValues) => GolfRoundCreateFormInputValues;
    onValidate?: GolfRoundCreateFormValidationValues;
} & React.CSSProperties>;
export default function GolfRoundCreateForm(props: GolfRoundCreateFormProps): React.ReactElement;
