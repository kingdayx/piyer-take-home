import { useState } from "react";
import {
  Typography,
  Box,
  Input,
  styled,
  FormGroup,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { FormContainer, FormSubmit, FormButton } from "../styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const FormGrid = styled(FormGroup)``;
const Label = styled(Typography)`
  font-size: 13px;
`;
const FormGridRow = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FormInput = styled(Input)`
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  height: 1.5rem;
  width: 8rem;
  border: 1px solid gray;
`;
const DatePickerProvider = styled(LocalizationProvider)`
  margin-top: 0.2rem;
`;
const Date = styled(Box)`
  margin-top: 0.5rem;
`;
const FormButtonRow = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FormHeader = styled(Typography)`
  margin: 1rem;
  color: #2b3649;
`;
const FormGridColumn = styled(Box)`
  margin-bottom: 0.2rem;
  margin-right: 1rem;
`;

export default function FormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [fone, setFone] = useState("");
  const [date, setDate] = useState(null);
  const submit = (event) => {
    event.preventDefault();
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleZip = (event) => {
    setZip(event.target.value);
  };
  const handleFone = (event) => {
    setFone(event.target.value);
  };
  return (
    <FormContainer>
      <FormHeader variant="h4">Welcome</FormHeader>
      <FormGrid onSubmit={submit}>
        <FormGridRow>
          <FormGridColumn>
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="Ada"
              value={firstName}
              onChange={handleFirstName}
            />
          </FormGridColumn>
          <FormGridColumn>
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Lee"
              value={lastName}
              onChange={handleLastName}
            />
          </FormGridColumn>
        </FormGridRow>
        <FormGridColumn>
          <Label>Email Address</Label>
          <FormInput
            type="email"
            placeholder="ada@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </FormGridColumn>
        <FormGridColumn>
          <Label>Street Address</Label>
          <FormInput
            type="text"
            placeholder="655 2nd Avenue North"
            value={address}
            onChange={handleAddress}
          />
        </FormGridColumn>
        <FormGridRow>
          <FormGridColumn>
            <Label>City</Label>
            <FormInput
              type="text"
              placeholder="Nashville"
              value={city}
              onChange={handleCity}
            />
          </FormGridColumn>
          <FormGridColumn>
            <Label>State / Province</Label>
            <FormInput type="text" placeholder="Lee" />
          </FormGridColumn>
        </FormGridRow>
        <FormGridColumn>
          <Label>ZIP / Postal</Label>
          <FormInput
            type="number"
            placeholder="37201"
            value={zip}
            onChange={handleZip}
          />
        </FormGridColumn>
        <FormGridColumn>
          <Label>Phone Number</Label>
          <FormInput
            type="number"
            placeholder="37201"
            value={fone}
            onChange={handleFone}
          />
        </FormGridColumn>
        <FormGridRow>
          <FormGridColumn>
            <Label>Date of Birth</Label>
            <Date>
              <DatePickerProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="11/05/1985"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </DatePickerProvider>
            </Date>
          </FormGridColumn>
          <FormGridColumn>
            <Label>Gender</Label>
            <FormButtonRow>
              <FormButton>Male</FormButton>
              <FormButton>Female</FormButton>
              <FormButton>Other</FormButton>
            </FormButtonRow>
          </FormGridColumn>
        </FormGridRow>
        <FormGridColumn>
          <FormSubmit onClick={submit}>Get my Free Samples</FormSubmit>
        </FormGridColumn>
      </FormGrid>
    </FormContainer>
  );
}
