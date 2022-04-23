import * as core from '@actions/core';

async function main(): Promise<void> {
  try {
    const whoToGreet = core.getInput('who_to_greet');
    core.debug(typeof whoToGreet);
    core.debug(`Test ${whoToGreet}`);
  } catch (error) {
    if (error instanceof Error || typeof error === 'string') {
      core.setFailed(error);
    }
  }
}

main();
