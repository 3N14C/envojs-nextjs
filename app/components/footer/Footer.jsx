'use client'
import MediaQuery from 'react-responsive'
import { Mobile } from './screens/adaptive/Mobile'
import { Normal } from './screens/normal/Normal'

const Footer = () => {
  return (
    <>
      <MediaQuery minWidth={576}>
        <Normal />
      </MediaQuery>

      <MediaQuery maxWidth={576}>
        <Mobile />
      </MediaQuery>
    </>
  );
};

export { Footer };
