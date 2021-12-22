"use strict";
const chevrotain = require("chevrotain/packages/chevrotain");
const { allTokens } = require("./tokens");
const { getSkipValidations } = require("./utils");

const Lexer = chevrotain.Lexer;
const JavaLexer = new Lexer(allTokens, {
  ensureOptimizations: true,
  skipValidations: getSkipValidations()
});

module.exports = JavaLexer;
