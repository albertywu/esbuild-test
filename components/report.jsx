import React from 'react';
import {Head} from './head'
import {ReportBody} from './report-body'

const Report = ({title, summary, year}) => {
  return (
    <html>
      <Head title={title} />
      <ReportBody summary={summary} year={year} />
    </html>
  )
}

export {Report}