// #!/usr/bin/env node
// import { Command } from 'commander';
// import { execSync } from 'child_process';

// const program = new Command();

// program
//   .name('cli')
//   .description('A simple CLI for monorepo-demo')
//   .version('1.0.0');

// program
//   .command('build')
//   .description('Build the project')
//   .action(() => {
//     console.log('Building the project...');
//     execSync('tsc -b', { stdio: 'inherit' });
//   });

// program
//   .command('start')
//   .description('Start the project')
//   .action(() => {
//     console.log('Starting the project...');
//     execSync('node dist/index.js', { stdio: 'inherit' });
//   });

// program
//   .command('test')
//   .description('Run tests')
//   .action(() => {
//     console.log('Running tests...');
//     execSync('jest', { stdio: 'inherit' });
//   });

// program.parse(process.argv);

console.log('Hello from CLI!');
