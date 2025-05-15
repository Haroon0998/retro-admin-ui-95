
import React from "react";
import { Fieldset, Checkbox, List } from "@react95/core";
import styled from "styled-components";

const LeftPanel = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RepGroupList: React.FC = () => {
  const repGroups = [
    "Advisors - Ameritas Investment Corp.",
    "CanAm - CanAm Financial Services",
    "Carleton - Christine Carleton",
    "Centaurus - Centaurus Financial, Inc.",
    "Chubb - Lincoln Financial Securities Corporation",
    "Collins - Party Financial Coaching",
    "Concepts - Asset Allocation Concepts, Inc.",
    "Cupril - Marton and Cupril",
    "FFP - FFP Advisors",
    "FFPS - FFP Securities, Inc.",
    "Fiduciary - Fiduciary Advisors, Ltd.",
    "FinPlan - Financial Planning Consultants",
    "FSC - Financial Securities Corp",
    "GEllis - George Ellis",
  ];

  return (
    <LeftPanel>
      <Fieldset label="RepGpID - RepGpName">
        <List
          height={230}
          width={250}
          items={repGroups}
          selectedIndex={0}
        />
      </Fieldset>

      <Fieldset label="Filter">
        <Row>
          <CheckboxContainer>
            <Checkbox label="Active" />
            <Checkbox label="Broker Dealer" />
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox label="Allow Outside RIA" />
            <Checkbox label="Friend of Carlotta" />
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox label="Terminated" />
          </CheckboxContainer>
        </Row>
      </Fieldset>
    </LeftPanel>
  );
};

export default RepGroupList;
