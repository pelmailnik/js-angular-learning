const testsContext = require.context('./src', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('./src', true, /^((?!__tests__).)*.js$/);
srcContext.keys().forEach(srcContext);
