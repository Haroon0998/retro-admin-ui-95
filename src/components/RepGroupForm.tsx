
import React from "react";
import { Button, Checkbox, Fieldset, Input, TextArea } from "@react95/core";
import styled from "styled-components";

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const FieldRow = styled(Row)`
  justify-content: space-between;
`;

const Label = styled.span`
  font-size: 12px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ShortInput = styled(Input)`
  width: 120px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const RepGroupForm: React.FC = () => {
  return (
    <RightPanel>
      <FieldRow>
        <FormField>
          <Label>Rep Group ID</Label>
          <Input style={{ width: "200px" }} />
        </FormField>
        <FormField>
          <Label>Firm CRD</Label>
          <Input style={{ width: "200px" }} />
        </FormField>
      </FieldRow>

      <FormField>
        <Label>Rep Group Name</Label>
        <Input />
      </FormField>

      <FormField>
        <Label>Reps</Label>
        <Input />
      </FormField>

      <FormField>
        <Label>EOM Total</Label>
        <Input />
      </FormField>

      <FormField>
        <Label>Address</Label>
        <Input />
      </FormField>

      <Row>
        <ShortInput placeholder="City" />
        <ShortInput placeholder="State" style={{ width: "60px" }} />
        <ShortInput placeholder="Zip" style={{ width: "80px" }} />
      </Row>

      <FormField>
        <Label>Phone</Label>
        <Input />
      </FormField>

      <FormField>
        <Label>Fax</Label>
        <Input />
      </FormField>

      <FormField>
        <Label>Contact</Label>
        <Input />
      </FormField>

      <CheckboxGroup>
        <Checkbox label="Active" />
        <Checkbox label="Broker Dealer" />
        <Checkbox label="Allow Outside RIA" />
        <Checkbox label="Friend of Carlotta" />
        <Checkbox label="Terminated" />
      </CheckboxGroup>

      <Button style={{ width: "120px", marginTop: "10px" }}>Clear Form</Button>

      <Row style={{ marginTop: "10px" }}>
        <span>Drag and Drop Email items to:</span>
        <Button>Folder</Button>
      </Row>

      <Fieldset label="Quarterly Payout" style={{ marginTop: "10px" }}>
        <FormField>
          <Label>W9 Name</Label>
          <Input />
        </FormField>
        <Row style={{ marginTop: "5px" }}>
          <FormField>
            <Label>Paycor ID</Label>
            <Input style={{ width: "120px" }} />
          </FormField>
          <Checkbox label="Is 1099" />
        </Row>
      </Fieldset>

      <Fieldset label="Email Addresses (Un-Check to Deactivate)">
        <TextArea height={100} />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}>
          <Button>Add New</Button>
        </div>
      </Fieldset>

      <Fieldset label="Notes">
        <TextArea height={80} />
      </Fieldset>
    </RightPanel>
  );
};

export default RepGroupForm;
