const animator = (x) => {
  if (x > 0) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 100);
    
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 300);
    
    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 500);
    
    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   ');
    }, 700);
    setTimeout(() => {
      animator(x - 1);
    }, 700);
  }
};

animator(2);
// ... fill in the rest yourself ...

