let program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');
const CrowdinV2 = require('../lib/crowdin.v2');

program
    .usage('fed-crowdin-cli')
    .version(pkg.version, '-v, --version')
    .description(chalk(`[ ${pkg.description} - ${pkg.version} ]`).green);

program
    .command('pull [lang]')
    .description('Pull translations. When there are no parameters, pull all translations.')
    .action(function (args,otherArgs,cmd) {
        const crowdin = new CrowdinV2();
        crowdin.pull(cmd.args);
    });

program
    .command('push')
    .description('Push the entries in the current branch change code')
    .action(function (args,otherArgs,cmd) {
        const crowdin = new CrowdinV2();
        crowdin.push();
    });

program.parse(process.argv);
