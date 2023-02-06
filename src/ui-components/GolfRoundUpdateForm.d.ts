/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GolfRound } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GolfRoundUpdateFormInputValues = {
    date?: string;
    hole1?: number;
    hole2?: number;
    hole3?: number;
    hole4?: number;
    hole5?: number;
    hole6?: number;
    hole7?: number;
    hole8?: number;
    hole9?: number;
};
export declare type GolfRoundUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    hole1?: ValidationFunction<number>;
    hole2?: ValidationFunction<number>;
    hole3?: ValidationFunction<number>;
    hole4?: ValidationFunction<number>;
    hole5?: ValidationFunction<number>;
    hole6?: ValidationFunction<number>;
    hole7?: ValidationFunction<number>;
    hole8?: ValidationFunction<number>;
    hole9?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GolfRoundUpdateFormOverridesProps = {
    GolfRoundUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    hole1?: PrimitiveOverrideProps<TextFieldProps>;
    hole2?: PrimitiveOverrideProps<TextFieldProps>;
    hole3?: PrimitiveOverrideProps<TextFieldProps>;
    hole4?: PrimitiveOverrideProps<TextFieldProps>;
    hole5?: PrimitiveOverrideProps<TextFieldProps>;
    hole6?: PrimitiveOverrideProps<TextFieldProps>;
    hole7?: PrimitiveOverrideProps<TextFieldProps>;
    hole8?: PrimitiveOverrideProps<TextFieldProps>;
    hole9?: PrimitiveOverrideProps<TextFieldProps>;
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
