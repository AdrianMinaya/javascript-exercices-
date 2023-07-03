import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
log(chalk.green('Hello') + chalk.green(' World') + chalk.green('!'));