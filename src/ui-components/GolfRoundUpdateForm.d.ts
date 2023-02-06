/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GolfRound } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GolfRoundUpdateFormInputValues = {
    date?: string;
    score?: string;
};
export declare type GolfRoundUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    score?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GolfRoundUpdateFormOverridesProps = {
    GolfRoundUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type GolfRoundUpdateFormProps = React.PropsWithChildren<{
    overrides?: GolfRoundUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    golfRound?: GolfRound;
    onSubmit?: (fields: GolfRoundUpdateFormInputValues) => GolfRoundUpdateFormInputValues;
    onSuccess?: (fields: GolfRoundUpdateFormInputValues) => void;
    onError?: (fields: GolfRoundUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GolfRoundUpdateFormInputValues) => GolfRoundUpdateFormInputValues;
    onValidate?: GolfRoundUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GolfRoundUpdateForm(props: GolfRoundUpdateFormProps): React.ReactElement;
