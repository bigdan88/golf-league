/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  PasswordField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Players } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RegisterPlater(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    first_name: "",
    last_name: "",
    password: undefined,
    email: "",
    phone: "",
    handicap: "",
    plays_mondays: false,
    subs_mondays: false,
    plays_wednesdays: false,
    subs_wednesdays: false,
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [password, setPassword] = React.useState(initialValues.password);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [handicap, setHandicap] = React.useState(initialValues.handicap);
  const [plays_mondays, setPlays_mondays] = React.useState(
    initialValues.plays_mondays
  );
  const [subs_mondays, setSubs_mondays] = React.useState(
    initialValues.subs_mondays
  );
  const [plays_wednesdays, setPlays_wednesdays] = React.useState(
    initialValues.plays_wednesdays
  );
  const [subs_wednesdays, setSubs_wednesdays] = React.useState(
    initialValues.subs_wednesdays
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setPassword(initialValues.password);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setHandicap(initialValues.handicap);
    setPlays_mondays(initialValues.plays_mondays);
    setSubs_mondays(initialValues.subs_mondays);
    setPlays_wednesdays(initialValues.plays_wednesdays);
    setSubs_wednesdays(initialValues.subs_wednesdays);
    setErrors({});
  };
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    password: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    phone: [{ type: "Phone" }],
    handicap: [],
    plays_mondays: [],
    subs_mondays: [],
    plays_wednesdays: [],
    subs_wednesdays: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          first_name,
          last_name,
          password,
          email,
          phone,
          handicap,
          plays_mondays,
          subs_mondays,
          plays_wednesdays,
          subs_wednesdays,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Players(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RegisterPlater")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              password,
              email,
              phone,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              password,
              email,
              phone,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <PasswordField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password: value,
              email,
              phone,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></PasswordField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email: value,
              phone,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email,
              phone: value,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Handicap"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={handicap}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email,
              phone,
              handicap: value,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.handicap ?? value;
          }
          if (errors.handicap?.hasError) {
            runValidationTasks("handicap", value);
          }
          setHandicap(value);
        }}
        onBlur={() => runValidationTasks("handicap", handicap)}
        errorMessage={errors.handicap?.errorMessage}
        hasError={errors.handicap?.hasError}
        {...getOverrideProps(overrides, "handicap")}
      ></TextField>
      <SwitchField
        label="Plays mondays"
        defaultChecked={false}
        isDisabled={false}
        isChecked={plays_mondays}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email,
              phone,
              handicap,
              plays_mondays: value,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.plays_mondays ?? value;
          }
          if (errors.plays_mondays?.hasError) {
            runValidationTasks("plays_mondays", value);
          }
          setPlays_mondays(value);
        }}
        onBlur={() => runValidationTasks("plays_mondays", plays_mondays)}
        errorMessage={errors.plays_mondays?.errorMessage}
        hasError={errors.plays_mondays?.hasError}
        {...getOverrideProps(overrides, "plays_mondays")}
      ></SwitchField>
      <SwitchField
        label="Subs mondays"
        defaultChecked={false}
        isDisabled={false}
        isChecked={subs_mondays}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email,
              phone,
              handicap,
              plays_mondays,
              subs_mondays: value,
              plays_wednesdays,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.subs_mondays ?? value;
          }
          if (errors.subs_mondays?.hasError) {
            runValidationTasks("subs_mondays", value);
          }
          setSubs_mondays(value);
        }}
        onBlur={() => runValidationTasks("subs_mondays", subs_mondays)}
        errorMessage={errors.subs_mondays?.errorMessage}
        hasError={errors.subs_mondays?.hasError}
        {...getOverrideProps(overrides, "subs_mondays")}
      ></SwitchField>
      <SwitchField
        label="Plays wednesdays"
        defaultChecked={false}
        isDisabled={false}
        isChecked={plays_wednesdays}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email,
              phone,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays: value,
              subs_wednesdays,
            };
            const result = onChange(modelFields);
            value = result?.plays_wednesdays ?? value;
          }
          if (errors.plays_wednesdays?.hasError) {
            runValidationTasks("plays_wednesdays", value);
          }
          setPlays_wednesdays(value);
        }}
        onBlur={() => runValidationTasks("plays_wednesdays", plays_wednesdays)}
        errorMessage={errors.plays_wednesdays?.errorMessage}
        hasError={errors.plays_wednesdays?.hasError}
        {...getOverrideProps(overrides, "plays_wednesdays")}
      ></SwitchField>
      <SwitchField
        label="Subs wednesdays"
        defaultChecked={false}
        isDisabled={false}
        isChecked={subs_wednesdays}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              password,
              email,
              phone,
              handicap,
              plays_mondays,
              subs_mondays,
              plays_wednesdays,
              subs_wednesdays: value,
            };
            const result = onChange(modelFields);
            value = result?.subs_wednesdays ?? value;
          }
          if (errors.subs_wednesdays?.hasError) {
            runValidationTasks("subs_wednesdays", value);
          }
          setSubs_wednesdays(value);
        }}
        onBlur={() => runValidationTasks("subs_wednesdays", subs_wednesdays)}
        errorMessage={errors.subs_wednesdays?.errorMessage}
        hasError={errors.subs_wednesdays?.hasError}
        {...getOverrideProps(overrides, "subs_wednesdays")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
