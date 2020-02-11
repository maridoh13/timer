const args = process.argv.slice(2);

const timer = function () {
  for (const element of args) {
    if (element > 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
    }, 1000 * element);
    }
  }
}

timer();