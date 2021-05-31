import React, { FormEvent, useState } from 'react';

import FacebookLogo from 'assets/images/facebook.svg';
import InstagramLogo from 'assets/images/instagram.svg';
import TwitterLogo from 'assets/images/twitter.svg';
import SendIcon from 'assets/images/send.svg';

import InputGroupButton from 'components/common/InputGroupButton';
import {
  Center,
  FlexContainer,
  Section,
  SocialMedia,
  Text,
  Title,
} from './styles';

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
            <a
              href="https://www.facebook.com/SWORDHealth1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FacebookLogo} alt="Facebook logo" height="20px" />
            </a>

            <a
              href="https://twitter.com/swordhealth"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TwitterLogo} alt="Twitter logo" height="20px" />
            </a>

            <a
              href="https://www.instagram.com/sword_health"
              target="_blank"
              rel="noreferrer"
            >
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
