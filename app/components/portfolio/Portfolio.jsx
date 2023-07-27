"use client";
<<<<<<< HEAD

import MediaQuery from 'react-responsive'
import { Mobile } from './screens/adaptive/Mobile'
import { Normal } from './screens/normal/Normal'

export default function Portfolio() {
=======

import MediaQuery from 'react-responsive'
import { Mobile } from './screens/adaptive/Mobile'
import { Normal } from './screens/normal/Normal'

const Portfolio = () => {
>>>>>>> 906c58691dcebcfa0b202cac6b8761ec944e2182

  return (
		<>
			<MediaQuery minWidth={576}>
				<Normal />
			</MediaQuery>

      <MediaQuery maxWidth={576}>
        <Mobile />
      </MediaQuery>
		</>
	)
};
