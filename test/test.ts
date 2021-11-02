const testsContext = (require as any).context('./unit', true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);

const srcContext = (require as any).context('./../src', true, /\.ts$/);
srcContext.keys().forEach(srcContext);
