import React from 'react';
import {Footer} from './footer';

const ReportBody = ({summary, year}) => {
  return (
    <body>
      summary: {summary}
      <Footer year={year} />
    </body>
  )
}

export {ReportBody}