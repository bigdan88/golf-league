/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { GolfRound } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GolfRoundUpdateForm(props) {
  const {
    id: idProp,
    golfRound,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    hole1: "",
    hole2: "",
    hole3: "",
    hole4: "",
    hole5: "",
    hole6: "",
    hole7: "",
    hole8: "",
    hole9: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [hole1, setHole1] = React.useState(initialValues.hole1);
  const [hole2, setHole2] = React.useState(initialValues.hole2);
  const [hole3, setHole3] = React.useState(initialValues.hole3);
  const [hole4, setHole4] = React.useState(initialValues.hole4);
  const [hole5, setHole5] = React.useState(initialValues.hole5);
  const [hole6, setHole6] = React.useState(initialValues.hole6);
  const [hole7, setHole7] = React.useState(initialValues.hole7);
  const [hole8, setHole8] = React.useState(initialValues.hole8);
  const [hole9, setHole9] = React.useState(initialValues.hole9);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = golfRoundRecord
      ? { ...initialValues, ...golfRoundRecord }
      : initialValues;
    setDate(cleanValues.date);
    setHole1(cleanValues.hole1);
    setHole2(cleanValues.hole2);
    setHole3(cleanValues.hole3);
    setHole4(cleanValues.hole4);
    setHole5(cleanValues.hole5);
    setHole6(cleanValues.hole6);
    setHole7(cleanValues.hole7);
    setHole8(cleanValues.hole8);
    setHole9(cleanValues.hole9);
    setErrors({});
  };
  const [golfRoundRecord, setGolfRoundRecord] = React.useState(golfRound);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(GolfRound, idProp)
        : golfRound;
      setGolfRoundRecord(record);
    };
    queryData();
  }, [idProp, golfRound]);
  React.useEffect(resetStateValues, [golfRoundRecord]);
  const validations = {
    date: [],
    hole1: [],
    hole2: [],
    hole3: [],
    hole4: [],
    hole5: [],
    hole6: [],
    hole7: [],
    hole8: [],
    hole9: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          date,
          hole1,
          hole2,
          hole3,
          hole4,
          hole5,
          hole6,
          hole7,
          hole8,
          hole9,
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
          await DataStore.save(
            GolfRound.copyOf(golfRoundRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GolfRoundUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={date && convertToLocal(new Date(date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              date: value,
              hole1,
              hole2,
              hole3,
              hole4,
              hole5,
              hole6,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Hole1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1: value,
              hole2,
              hole3,
              hole4,
              hole5,
              hole6,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole1 ?? value;
          }
          if (errors.hole1?.hasError) {
            runValidationTasks("hole1", value);
          }
          setHole1(value);
        }}
        onBlur={() => runValidationTasks("hole1", hole1)}
        errorMessage={errors.hole1?.errorMessage}
        hasError={errors.hole1?.hasError}
        {...getOverrideProps(overrides, "hole1")}
      ></TextField>
      <TextField
        label="Hole2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole2}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2: value,
              hole3,
              hole4,
              hole5,
              hole6,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole2 ?? value;
          }
          if (errors.hole2?.hasError) {
            runValidationTasks("hole2", value);
          }
          setHole2(value);
        }}
        onBlur={() => runValidationTasks("hole2", hole2)}
        errorMessage={errors.hole2?.errorMessage}
        hasError={errors.hole2?.hasError}
        {...getOverrideProps(overrides, "hole2")}
      ></TextField>
      <TextField
        label="Hole3"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole3}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3: value,
              hole4,
              hole5,
              hole6,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole3 ?? value;
          }
          if (errors.hole3?.hasError) {
            runValidationTasks("hole3", value);
          }
          setHole3(value);
        }}
        onBlur={() => runValidationTasks("hole3", hole3)}
        errorMessage={errors.hole3?.errorMessage}
        hasError={errors.hole3?.hasError}
        {...getOverrideProps(overrides, "hole3")}
      ></TextField>
      <TextField
        label="Hole4"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole4}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3,
              hole4: value,
              hole5,
              hole6,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole4 ?? value;
          }
          if (errors.hole4?.hasError) {
            runValidationTasks("hole4", value);
          }
          setHole4(value);
        }}
        onBlur={() => runValidationTasks("hole4", hole4)}
        errorMessage={errors.hole4?.errorMessage}
        hasError={errors.hole4?.hasError}
        {...getOverrideProps(overrides, "hole4")}
      ></TextField>
      <TextField
        label="Hole5"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole5}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3,
              hole4,
              hole5: value,
              hole6,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole5 ?? value;
          }
          if (errors.hole5?.hasError) {
            runValidationTasks("hole5", value);
          }
          setHole5(value);
        }}
        onBlur={() => runValidationTasks("hole5", hole5)}
        errorMessage={errors.hole5?.errorMessage}
        hasError={errors.hole5?.hasError}
        {...getOverrideProps(overrides, "hole5")}
      ></TextField>
      <TextField
        label="Hole6"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole6}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3,
              hole4,
              hole5,
              hole6: value,
              hole7,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole6 ?? value;
          }
          if (errors.hole6?.hasError) {
            runValidationTasks("hole6", value);
          }
          setHole6(value);
        }}
        onBlur={() => runValidationTasks("hole6", hole6)}
        errorMessage={errors.hole6?.errorMessage}
        hasError={errors.hole6?.hasError}
        {...getOverrideProps(overrides, "hole6")}
      ></TextField>
      <TextField
        label="Hole7"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole7}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3,
              hole4,
              hole5,
              hole6,
              hole7: value,
              hole8,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole7 ?? value;
          }
          if (errors.hole7?.hasError) {
            runValidationTasks("hole7", value);
          }
          setHole7(value);
        }}
        onBlur={() => runValidationTasks("hole7", hole7)}
        errorMessage={errors.hole7?.errorMessage}
        hasError={errors.hole7?.hasError}
        {...getOverrideProps(overrides, "hole7")}
      ></TextField>
      <TextField
        label="Hole8"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole8}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3,
              hole4,
              hole5,
              hole6,
              hole7,
              hole8: value,
              hole9,
            };
            const result = onChange(modelFields);
            value = result?.hole8 ?? value;
          }
          if (errors.hole8?.hasError) {
            runValidationTasks("hole8", value);
          }
          setHole8(value);
        }}
        onBlur={() => runValidationTasks("hole8", hole8)}
        errorMessage={errors.hole8?.errorMessage}
        hasError={errors.hole8?.hasError}
        {...getOverrideProps(overrides, "hole8")}
      ></TextField>
      <TextField
        label="Hole9"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hole9}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              hole1,
              hole2,
              hole3,
              hole4,
              hole5,
              hole6,
              hole7,
              hole8,
              hole9: value,
            };
            const result = onChange(modelFields);
            value = result?.hole9 ?? value;
          }
          if (errors.hole9?.hasError) {
            runValidationTasks("hole9", value);
          }
          setHole9(value);
        }}
        onBlur={() => runValidationTasks("hole9", hole9)}
        errorMessage={errors.hole9?.errorMessage}
        hasError={errors.hole9?.hasError}
        {...getOverrideProps(overrides, "hole9")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || golfRound)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || golfRound) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
