
import React from "react";
import {
  Frame,
  TitleBar,
  Modal,
  Button,
  ThemeProvider
} from "@react95/core";
import styled from "styled-components";

const NotFoundContainer = styled(Frame)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "ms_sans_serif";
`;

const ErrorWindow = styled(Modal)`
  width: 400px;
`;

const WindowContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const NotFound: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <ThemeProvider>
      <NotFoundContainer variant="outside">
        <ErrorWindow closeModal={() => {}} title="Error">
          <WindowContent>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <ButtonWrapper>
              <Button onClick={handleGoHome}>OK</Button>
            </ButtonWrapper>
          </WindowContent>
        </ErrorWindow>
      </NotFoundContainer>
    </ThemeProvider>
  );
};

export default NotFound;
