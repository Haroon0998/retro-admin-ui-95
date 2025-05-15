
import React from "react";
import {
  Button,
  Checkbox,
  Fieldset,
  Frame,
  Input,
  List,
  Tabs,
  Tab,
  TextArea,
  TitleBar,
} from "@react95/core";
import styled from "styled-components";
import RepGroupList from "./RepGroupList";
import RepGroupForm from "./RepGroupForm";

const AppContainer = styled(Frame)`
  width: 100%;
  height: 100vh;
  font-family: "ms_sans_serif";
`;

const ContentContainer = styled.div`
  padding: 6px;
  background-color: #c0c0c0;
  height: calc(100% - 33px);
  overflow-y: auto;
`;

const Toolbar = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
`;

const TabArea = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
`;

const Windows95App: React.FC = () => {
  const tabs = [
    "Fees",
    "Models",
    "Referrals",
    "Overrides",
    "Rep Groups",
    "Rep Offices",
    "Companies",
    "Brand Ambassador Groups",
    "Data Changes",
    "FM Funds",
    "Scans",
    "Tran Ready",
    "Email Log",
    "TIAA CREF Report Upload",
  ];

  return (
    <AppContainer variant="outside">
      <TitleBar active title="Maintenance - ON TEST SERVER !!!" />

      <ContentContainer>
        <Toolbar>
          <Button primary>Add New</Button>
          <Button>Update</Button>
          <Button>Folder</Button>
          <Button>Scan</Button>
          <Button>Show Log Window</Button>
        </Toolbar>

        <TabArea>
          <Tabs defaultActiveTab="Rep Groups">
            {tabs.map((label) => (
              <Tab key={label}>
                {label}
              </Tab>
            ))}
          </Tabs>
        </TabArea>

        <Content>
          <RepGroupList />
          <RepGroupForm />
        </Content>
      </ContentContainer>
    </AppContainer>
  );
};

export default Windows95App;
