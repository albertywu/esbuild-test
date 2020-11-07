#!/usr/bin/env bash

yarn init -y
yarn add esbuild react react-dom

cat <<CODE > app.jsx
import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
CODE
