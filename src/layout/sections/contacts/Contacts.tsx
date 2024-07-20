import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"} />
        <Field placeholder={"subject"} />
        <Field placeholder={"message"} as={"textarea"} />
        <Button type={"submit"}>Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-color: #f09ab785;
  min-height: 30vh;
`;
const StyledForm = styled.form`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;
const Field = styled.input``;
