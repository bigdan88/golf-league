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
export declare type CreateGolfHolesInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type CreateGolfHolesValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateGolfHolesOverridesProps = {
    CreateGolfHolesGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateGolfHolesProps = React.PropsWithChildren<{
    overrides?: CreateGolfHolesOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreateGolfHolesInputValues) => void;
    onChange?: (fields: CreateGolfHolesInputValues) => CreateGolfHolesInputValues;
    onValidate?: CreateGolfHolesValidationValues;
} & React.CSSProperties>;
export default function CreateGolfHoles(props: CreateGolfHolesProps): React.ReactElement;
