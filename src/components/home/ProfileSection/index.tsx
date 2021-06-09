import React from 'react';

import PROFILE_INFORMATION from 'constants/profileInformation';
import { FlexContainer, Column1, Column2, Avatar, SpacedText } from './styles';

const ProfileSection = (): React.ReactElement => {
  return (
    <FlexContainer as="section">
      <Column1 as="article">
        <Avatar
          src={PROFILE_INFORMATION.photo}
          alt={`${PROFILE_INFORMATION.name}'s photo`}
        />

        <div>
          <SpacedText variant="subtitle1" fontSize="30px" fontStyle="bold">
            {PROFILE_INFORMATION.name}
          </SpacedText>

          <SpacedText>Age: {PROFILE_INFORMATION.age}</SpacedText>
          <SpacedText>Location: {PROFILE_INFORMATION.location}</SpacedText>
          <SpacedText>Ocupation: {PROFILE_INFORMATION.ocupation}</SpacedText>

          <SpacedText>
            LinkedIn:{' '}
            <a
              href={PROFILE_INFORMATION.linkedIn.url}
              target="_blank"
              rel="noreferrer"
            >
              {PROFILE_INFORMATION.linkedIn.name}
            </a>
          </SpacedText>
        </div>
      </Column1>

      <Column2 as="article">
        <SpacedText textAlign="end" fontSize="18px">
          About me:
        </SpacedText>

        {PROFILE_INFORMATION.about.split('\n').map(
          paragraph =>
            paragraph && (
              <SpacedText
                key={paragraph.substring(10)}
                textAlign="end"
                margin={{ top: '6px' }}
              >
                {paragraph}
              </SpacedText>
            ),
        )}
      </Column2>
    </FlexContainer>
  );
};

export default ProfileSection;
