import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import FacebookLogo from 'assets/images/facebook.svg';
import InstagramLogo from 'assets/images/instagram.svg';
import TwitterLogo from 'assets/images/twitter.svg';
import SendIcon from 'assets/images/send.svg';

import Container from './Container';
import Typography from './Typography';
import InputGroupButton from './InputGroupButton';

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.lighGrey};
`;

const Section = styled.section`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Title = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
}))``;

const Text = styled(Typography).attrs(() => ({
  fontSize: '12px',
}))``;

const Footer = (): React.ReactElement => {
  const [emailToSubscribe, setEmailToSubscribe] = useState<string>();

  const handleEmailChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setEmailToSubscribe(value);
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailToSubscribe) {
      alert(`${emailToSubscribe} has been subscribed. :)`);
    } else {
      alert(`Add an email to subscribe. ;)`);
    }
  };

  return (
    <FlexContainer as="footer">
      <Section>
        <Center>
          <Title margin={{ bottom: '20px' }}>About page</Title>
          <Text>Play tic tac toe</Text>
          <Text margin={{ top: '10px' }}>Created by Juliane Silva</Text>
        </Center>
      </Section>

      <Section>
        <Center>
          <Title margin={{ bottom: '20px' }}>Contacts</Title>
          <Text>(+351) 123 456 789</Text>
          <Text margin={{ top: '10px' }}>Rua Sá da Bandeira, 111, Porto</Text>
        </Center>
      </Section>

      <Section>
        <Center>
          <Title margin={{ bottom: '12px' }}>Stay in touch</Title>

          <SocialMedia>
            <a href="https://www.facebook.com/SWORDHealth1">
              <img src={FacebookLogo} alt="Facebook logo" height="20px" />
            </a>

            <a href="https://twitter.com/swordhealth">
              <img src={TwitterLogo} alt="Twitter logo" height="20px" />
            </a>

            <a href="https://www.instagram.com/sword_health">
              <img src={InstagramLogo} alt="Instagram logo" height="20px" />
            </a>
          </SocialMedia>

          <form onSubmit={handleSubscribe}>
            <InputGroupButton
              inputProps={{
                type: 'email',
                width: '150px',
                placeholder: 'Subscribe our games',
                onChange: handleEmailChange,
              }}
              buttonProps={{
                type: 'submit',
                children: <img src={SendIcon} alt="Send icon" height="12px" />,
              }}
            />
          </form>
        </Center>
      </Section>
    </FlexContainer>
  );
};

export default Footer;
