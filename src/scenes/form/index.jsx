// import { Formik } from "formik";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import React from "react";
// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: "",
//   address1: "",
//   address2: "",
// };

// const Form = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   return (

// <Box m="20px">
//   <Header title="CREATE USER" subtitle="Create a new user profile" />
//   <Formik
//     onSubmit={handleFormSubmit}
//     initialValues={initialValues}
//     validationSchema={checkoutSchema}
//   >
//     {({
//       values,
//       errors,
//       touched,
//       handleBlur,
//       handleChange,
//       handleSubmit,
//     }) => (
//       <form onSubmit={handleSubmit}>
//         <Box
//           display="grid"
//           gap="30px"
//           gridTemplateColumns="repeat(4,minmax(0,1fr))"
// sx={{
//   "& > div": {
//     gridColumn: isNonMobile ? undefined : "span 4",
//   },
// }}
//         >
//           <TextField
//             fullWidth
//             variant="filled"
//             type="text"
//             label="First Name"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.firstName}
//             name="firstName"
//             // to convert to boolean value
//             error={!!touched.firstName && !!errors.firstName}
//             helperText={touched.firstName && errors.firstName}
//             sx={{ gridColumn: "span 2" }}
//           />
//           <TextField
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Last Name"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.lastName}
//             name="lastName"
//             // to convert to boolean value
//             error={!!touched.lastName && !!errors.lastName}
//             helperText={touched.lastName && errors.lastName}
//             sx={{ gridColumn: "span 2" }}
//           />
//           <TextField
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Email"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.email}
//             name="email"
//             // to convert to boolean value
//             error={!!touched.email && !!errors.email}
//             helperText={touched.email && errors.email}
//             sx={{ gridColumn: "span 4" }}
//           />
//           <TextField
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Contact Number"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.contact}
//             name="contact"
//             error={!!touched.contact && !!errors.contact}
//             helperText={touched.contact && errors.contact}
//             sx={{ gridColumn: "span 4" }}
//           />
//           <TextField
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Address 1"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.address1}
//             name="address1"
//             // to convert to boolean value
//             error={!!touched.address1 && !!errors.address1}
//             helperText={touched.address1 && errors.address1}
//             sx={{ gridColumn: "span 4" }}
//           />
//           <TextField
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Address 2"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.address2}
//             name="address2"
//             // to convert to boolean value
//             error={!!touched.address2 && !!errors.address2}
//             helperText={touched.address2 && errors.address2}
//             sx={{ gridColumn: "span 4" }}
//           />
//         </Box>

//         <Box display="flex" justifyContent="end" mt="20px">
//           <Button color="secondary" variant="contained" type="submit">
//             Create New User
//           </Button>
//         </Box>
//       </form>
//     )}
//   </Formik>
// </Box>
//   );
// };
// export default Form;
 
import React from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { formData } from "./formDynamic";

const checkoutSchema = yup.object().shape(
  formData.fields.reduce((schema, field) => {
    if (field.validation) {
      if (field.validation.email) {
        schema[field.name] = yup.string().email("Invalid email");
      } else if (field.validation.regex) {
        schema[field.name] = yup
          .string()
          .matches(new RegExp(field.validation.regex), "Invalid format");
      }

      if (field.validation.required) {
        schema[field.name] = (schema[field.name] || yup.string()).required(
          "Required"
        );
      }
    }
    return schema;
  }, {})
);

const initialValues = formData.fields.reduce((values, field) => {
  values[field.name] = "";
  return values;
}, {});

const components = {
  text: TextField, // For text fields
  email: TextField, // For email fields
  select: Select, // For select fields
};

const generateFormComponent = (formData) => {
  return () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
      console.log(values);
    };

    return (
      <Box m="20px">
        <Header title={formData.title} subtitle={formData.subtitle} />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns={`repeat(4, 1fr)`}
              >
                {formData.fields.map((field) =>
                  field.type !== "select" ? (
                    <Field
                      sx={{
                        gridColumn: `span ${field.columnSpan || 4}`,
                      }}
                      name={field.name}
                      as={components[field.type]}
                      fullWidth
                      variant="filled"
                      type={field.type}
                      label={field.label}
                      onBlur={handleBlur(field.name)}
                      onChange={handleChange(field.name)}
                      value={values[field.name]}
                      error={touched[field.name] && errors[field.name]}
                      helperText={touched[field.name] && errors[field.name]}
                    />
                  ) : (
                    <>
                      <FormControl
                        variant="filled"
                        sx={{
                          gridColumn: `span ${field.columnSpan || 4}`,
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          {field.label}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          sx={{
                            gridColumn: `span ${field.columnSpan || 4}`,
                          }}
                          name={field.name}
                          fullWidth
                          variant="filled"
                          onBlur={handleBlur(field.name)}
                          onChange={handleChange(field.name)}
                          value={values[field.name]}
                          error={touched[field.name] && errors[field.name]}
                          helperText={touched[field.name] && errors[field.name]}
                        >
                          {field.options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </>
                  )
                )}
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button color="secondary" variant="contained" type="submit">
                  {formData.buttonText}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  };
};

const Form = () => {
  const DynamicForm = generateFormComponent(formData);
  return <DynamicForm />;
};

export default Form;

// <Select
//   sx={{
//     gridColumn: `span ${field.columnSpan || 4}`,
//   }}
//   name={field.name}
//   fullWidth
//   variant="filled"
//   label="fuck"
//   onBlur={handleBlur(field.name)}
//   onChange={handleChange(field.name)}
//   value={values[field.name]}
//   error={touched[field.name] && errors[field.name]}
//   helperText={touched[field.name] && errors[field.name]}
// >
//   {/* For the select field, render the options */}
//   {field.type === "select" &&
//     field.options.map((option) => (
//       <MenuItem key={option.value} value={option.value}>
//         {option.label}
//       </MenuItem>
//     ))}
// </Select>;
