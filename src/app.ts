import { yarg as argv } from './config/plugins/args.plugin';

(async () => {
  await main();
})();

async function main(): Promise<void> {
  console.log(argv);
}
