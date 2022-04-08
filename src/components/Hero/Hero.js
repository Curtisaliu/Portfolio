import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I am Curtis Liu! <br />
        I am a Software Developer!
      </SectionTitle>
      <SectionText>
        Filler
      </SectionText>
      <Button onClick={() => window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;