const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  // process.stdout.write('.');
  if (key === "b") {
    process.stdout.write('\x07');
  }

  if (key === "1") {setTimeout(() => {
    console.log(`setting timer for ${key} second...\n`)
    process.stdout.write('\x07')
    }, 1000);
  }

  if (key > 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...\n`)
    
    setTimeout(() => {
      process.stdout.write('\x07')
    }, 1000 * key);

  }
 
  
  if (key === '\u0003') {
    console.log('\nExiting...');
    process.exit();
  }
});


