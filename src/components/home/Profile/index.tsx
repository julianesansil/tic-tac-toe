import React from 'react';

import Typography from 'components/common/Typography';
import ProfilePhoto from 'assets/images/profile_photo.jpg';
import { Avatar, Column1, Column2, FlexContainer } from './styles';

const Profile = (): React.ReactElement => {
  return (
    <section>
      <FlexContainer>
        <Column1>
          <Avatar src={ProfilePhoto} alt="Juliane's profile" />

          <div>
            <Typography
              variant="subtitle2"
              fontSize="30px"
              fontStyle="bold"
              lineHeight="spaced"
            >
              Juliane Silva
            </Typography>

            <Typography lineHeight="spaced">Age: 29</Typography>
            <Typography lineHeight="spaced">Location: Porto, Porto</Typography>
            <Typography lineHeight="spaced">
              Ocupation: Frontend Developer
            </Typography>
          </div>
        </Column1>

        <Column2>
          <Typography textAlign="end" fontSize="18px">
            About me:
          </Typography>

          <Typography
            lineHeight="spaced"
            textAlign="end"
            margin={{ top: '6px' }}
          >
            I&apos;m from Brazil, and I&apos;ve been here in Porto since
            December last year.
          </Typography>
          <Typography
            lineHeight="spaced"
            textAlign="end"
            margin={{ top: '6px' }}
          >
            I’ve been working with software development since 2015. I&apos;ve
            worked with AngularJS and React Native on the frontend and with
            Node.js and Java on the backend; and, I&apos;m currently working on
            a React project.
          </Typography>
          <Typography
            lineHeight="spaced"
            textAlign="end"
            margin={{ top: '6px' }}
          >
            I already had a startup, with the objective of helping in the
            treatment of autistic children, but it closed down. ^^’ But I still
            hope to help people through my work.
          </Typography>
        </Column2>
      </FlexContainer>
    </section>
  );
};

export default Profile;
