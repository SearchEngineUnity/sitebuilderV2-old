/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ButtonSubmit from '../buttons/ButtonSubmit';
import { mapMuiBtnSubmitToProps } from '../../lib/mapToProps';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function FormNetlify({ align, title, form, style }) {
  const {
    backgroundColor: fieldBgColor,
    fieldBgHoverColor,
    focusedColor,
    borderRadius: fieldBorderRadius,
    btnStyle,
    fieldVariant: variant,
    labelColor,
    inputColor,
    selectorColor,
  } = style;

  const { formFields, name, thankYou, submitBtn } = form;

  const prevTheme = useTheme();

  const theme = createTheme({
    palette: {
      primary: {
        main: focusedColor.color.hex, // mui-focused class color (applies to border and checkbox, select, radio label color)
      },
      secondary: {
        main: selectorColor.color.hex, // selector color (checkbox icon and radio icon)
      },
      text: {
        primary: inputColor.color.hex, // controls input text and placeholder text and hover border color
        secondary: labelColor.color.hex, // control label text, helper text, and the border of checkbox and radio icons
      },
    },
    shape: {
      borderRadius: fieldBorderRadius,
    },
    typography: prevTheme.typography,
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: fieldBgColor.color.hex, // background color change for outlined variant
          },
          notchedOutline: {
            borderColor: labelColor.color.hex, // outline color for the outline variant
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: fieldBgColor.color.hex, // background color for filled variant
            '&:hover': {
              backgroundColor: fieldBgHoverColor.color.hex, // background color on hover for filled variant
            },
            '@media (hover: none)': {
              backgroundColor: fieldBgColor.color.hex, // background color for filled variant when media has no hover
              '&:hover': {
                backgroundColor: fieldBgColor.color.hex, // background color on hover for filled variant when media has no hover
              },
            },
            '&.Mui-focused': {
              backgroundColor: fieldBgColor.color.hex, // background color when clicked into the field
            },
            '&:before': {
              borderColor: labelColor.color.hex, // border color for the underline for filled variant
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderColor: labelColor.color.hex, // underline color for the underline variant
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            color: labelColor.color.hex, // radio / check box option labels
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: labelColor.color.hex, // form field label color
            '&.Mui-focused': {
              color: labelColor.color.hex, // form field label color on focus
            },
          },
        },
      },
    },
  });

  // const { classes } = useStyles(theme);
  const [state, setState] = useState({});
  const [requiredRadioFields, setRequiredRadioFields] = useState(null);
  const [requiredCheckboxFields, setRequiredCheckboxFields] = useState(null);
  const [errorMsgs, setErrorMsgs] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const requirements = formFields
      .filter((field) => field.required && field._type === 'radio')
      .map((field) => field.id);
    setRequiredRadioFields(requirements);
  }, [formFields]);

  useEffect(() => {
    const requirements = formFields.filter((field) => field.required && field._type === 'checkbox');
    setRequiredCheckboxFields(requirements);
  }, [formFields]);

  let isValid = true;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setErrorMsgs({ ...errorMsgs, [e.target.name]: '' });
  };

  const handleCheckboxChange = (e, key) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    // const key = e.target.closest('fieldset').id;
    setErrorMsgs({ ...errorMsgs, [key]: '' });
  };

  const fieldValidation = (element) => {
    if (element.checkValidity() === false) {
      setErrorMsgs({ ...errorMsgs, [element.name]: element.validationMessage });
      return;
    }
    if (element.hasAttribute('required') && element.value.trim() === '') {
      setErrorMsgs({ ...errorMsgs, [element.name]: 'Please enter text in the field.' });
      return;
    }
    setErrorMsgs({ ...errorMsgs, [element.name]: '' });
  };

  const selectValidation = (element) => {
    if (element.hasAttribute('required') && !state[element.name]) {
      setErrorMsgs({ ...errorMsgs, [element.name]: 'Please make a selection.' });
      return;
    }
    setErrorMsgs({ ...errorMsgs, [element.name]: '' });
  };

  const sendForm = (thisForm) => {
    const inputs = thisForm.elements;
    const errors = {};

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          isValid = false;
          errors[element.name] = element.validationMessage;
        }
        if (element.hasAttribute('required') && element.value && element.value.trim() === '') {
          isValid = false;
          errors[element.name] = 'Please enter text in the field.';
        }
        if (
          element.hasAttribute('required') &&
          element.tagName === 'SELECT' &&
          !state[element.name]
        ) {
          errors[element.name] = 'Please make a selection.';
        }
      }
    }

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < requiredRadioFields.length; index++) {
      if (!state[requiredRadioFields[index]]) {
        errors[requiredRadioFields[index]] = 'Please make a selection.';
      }
    }

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < requiredCheckboxFields.length; index++) {
      let error = true;
      const { options } = requiredCheckboxFields[index];

      options.forEach((option) => {
        if (state[option.value]) {
          error = false;
        }
      });

      if (error) {
        errors[requiredCheckboxFields[index].id] = 'Error: checkbox not checked.';
      }
    }

    setErrorMsgs({ ...errorMsgs, ...errors });

    if (isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': thisForm.getAttribute('name'),
          'bot-field': thisForm.elements['bot-field'].value,
          ...state,
        }),
      })
        .then(() => {
          thisForm.reset();
          setState({});
          setSuccess(true);
        })
        // should set up also error message as well should the form fail to send.
        .catch((error) => alert(error));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.currentTarget;

    setSuccess(false);
    sendForm(myForm);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box boxShadow={5} p={6} bgcolor="background.paper">
        <Box color={labelColor.color.hex}>
          <Typography component="p" variant="h3" paragraph textAlign={align}>
            {title}
          </Typography>
        </Box>

        <form
          name={name}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          noValidate
          onSubmit={handleSubmit}
          id={name}
          autoComplete="off"
        >
          <p className="hidden" style={{ display: 'none' }}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          {success && <p>{thankYou}</p>}

          <input type="hidden" name="form-name" value={name} />
          {formFields.map((input) => {
            const { _type, _key } = input;

            switch (_type) {
              case 'checkbox':
                return (
                  <FormControl
                    component={input.options.length > 1 ? 'fieldset' : 'div'}
                    fullWidth
                    key={_key}
                    error={!!errorMsgs[input.id]}
                    id={input.id}
                  >
                    <FormLabel component={input.options.length > 1 ? 'legend' : 'label'}>
                      {input.label}
                    </FormLabel>
                    <FormGroup>
                      {input.options.map((option) => {
                        const key = option.value;
                        const isChecked = !!state[key];

                        return (
                          <FormControlLabel
                            key={option._key}
                            control={
                              <Checkbox
                                name={option.value}
                                checked={isChecked}
                                onChange={(event) => handleCheckboxChange(event, input.id)}
                                value={isChecked.toString()}
                                inputProps={{ 'aria-label': option.label }}
                              />
                            }
                            label={option.label}
                          />
                        );
                      })}
                    </FormGroup>
                    <FormHelperText error={!!errorMsgs[input.id]}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                    <br />
                  </FormControl>
                );
              case 'radio':
                return (
                  <FormControl
                    component="fieldset"
                    fullWidth
                    key={_key}
                    error={!!errorMsgs[input.id]}
                  >
                    <FormLabel component="legend">{input.label}</FormLabel>
                    <RadioGroup
                      id={input.id}
                      aria-label={input.label}
                      name={input.id}
                      onChange={handleChange}
                      value={state[input.id] || ''}
                    >
                      {input.options.map((option) => (
                        <FormControlLabel
                          key={option._key}
                          value={option.value}
                          control={<Radio inputProps={{ 'aria-label': option.label }} />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                    <FormHelperText error={!!errorMsgs[input.id]}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                    <br />
                  </FormControl>
                );
              case 'select':
                return (
                  <FormControl fullWidth key={_key} error={!!errorMsgs[input.id]}>
                    <FormLabel htmlFor={input.id}>{input.label}</FormLabel>
                    <Select
                      native
                      error={!!errorMsgs[input.id]}
                      required={input.required}
                      value={state[input.id] || ''}
                      inputProps={{ name: input.id, id: input.id }}
                      onChange={handleChange}
                      variant={variant}
                      onBlur={(e) => selectValidation(e.currentTarget)}
                    >
                      <option aria-label="None" value="" disabled={input.required}>
                        Select
                      </option>
                      {input.options.map((option) => (
                        <option value={option.value} key={option._key}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    <FormHelperText error={!!errorMsgs[input.id]}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                    <br />
                  </FormControl>
                );
              case 'textarea':
                return (
                  <FormControl fullWidth key={_key} error={!!errorMsgs[input.id]}>
                    <FormLabel htmlFor={input.id}>{input.label}</FormLabel>
                    <TextField
                      id={input.id}
                      aria-describedby={`${input.id}-helper-text`}
                      error={!!errorMsgs[input.id]}
                      onChange={handleChange}
                      name={input.id}
                      required={input.required}
                      variant={variant}
                      multiline
                      rows={input.rows}
                      placeholder={input.placeholderText}
                      onBlur={(e) => fieldValidation(e.currentTarget)}
                    />
                    <FormHelperText error={!!errorMsgs[input.id]} id={`${input.id}-helper-text`}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                    <br />
                  </FormControl>
                );
              case 'textInput':
                return (
                  <FormControl fullWidth key={_key} error={!!errorMsgs[input.id]}>
                    <FormLabel htmlFor={input.id}>{input.label}</FormLabel>
                    <TextField
                      error={!!errorMsgs[input.id]}
                      id={input.id}
                      aria-describedby={`${input.id}-helper-text`}
                      onChange={handleChange}
                      name={input.id}
                      required={input.required}
                      variant={variant}
                      type={input.inputType}
                      placeholder={input.placeholderText}
                      fullWidth
                      onBlur={(e) => fieldValidation(e.currentTarget)}
                    />
                    <FormHelperText error={!!errorMsgs[input.id]} id={`${input.id}-helper-text`}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                    <br />
                  </FormControl>
                );
              default:
                return <div key="form-default">Form Field not Created</div>;
            }
          })}
          <ButtonSubmit type="submit" text={submitBtn.text} {...mapMuiBtnSubmitToProps(btnStyle)} />
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default FormNetlify;
