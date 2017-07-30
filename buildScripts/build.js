import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.info(chalk.blue('Gerating minified bundle for production. This will take a moment..'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.info(chalk.red(err));
    return 1;
  }


  const jsonStats = stats.toJson();


  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.info(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.info(chalk.yellow('Webpack generated the following warnings: '));
    return jsonStats.warnings.map(warning => console.info(chalk.yellow(warning)));
  }

  console.info('Webpack stats: ', stats);



  console.info(chalk.green('Your app has been build for production and written to /dist!'));

  return 0;
});
