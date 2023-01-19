#!/bin/sh

npm run migrate:up
npm run start:dev
npm run timeout
npm run start:react