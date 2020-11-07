import * as React from 'react'
import * as Server from 'react-dom/server'
import {Report} from './components/report'

const title = 'hello world'
const summary = 'my summary here'
const year = 2020

console.log(Server.renderToString(
  <Report
    title={title}
    summary={summary}
    year={year}
  />
))