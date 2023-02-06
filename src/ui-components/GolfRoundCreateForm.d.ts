/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GolfRoundCreateFormInputValues = {
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
export declare type GolfRoundCreateFormValidationValues = {
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
export declare type GolfRoundCreateFormOverridesProps = {
    GolfRoundCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
