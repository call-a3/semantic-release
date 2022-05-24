#!/usr/bin/env node

const semanticRelease = require("semantic-release");

semanticRelease({
  extends: ".",
});
