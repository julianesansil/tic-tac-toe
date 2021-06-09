import React, { FormEvent, useState } from 'react';

import SendIcon from 'assets/images/send.svg';
import COMPANY_INFORMATION from 'constants/companyInformation';
import PROFILE_INFORMATION from 'constants/profileInformation';
import InputGroupButton from 'components/common/InputGroupButton';

import {
  Center,
  FlexContainer,
  Column,
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
      <Column as="article">
        <Center>
          <Title margin={{ bottom: '20px' }}>About page</Title>
          <Text>Play tic tac toe</Text>
          <Text margin={{ top: '10px' }}>
            Created by {PROFILE_INFORMATION.name}
          </Text>
        </Center>
      </Column>

      <Column as="article">
        <Center>
          <Title margin={{ bottom: '20px' }}>Contacts</Title>
          <Text>{COMPANY_INFORMATION.phone}</Text>
          <Text margin={{ top: '10px' }}>{COMPANY_INFORMATION.address}</Text>
        </Center>
      </Column>

      <Column as="article">
        <Center>
          <Title margin={{ bottom: '12px' }}>Stay in touch</Title>

          <SocialMedia>
            {COMPANY_INFORMATION.socialMedia.map(media => (
              <a
                key={media.name}
                href={media.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={media.logo}
                  alt={`${media.name} logo`}
                  height="20px"
                />
              </a>
            ))}
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
      </Column>
    </FlexContainer>
  );
};

export default Footer;
