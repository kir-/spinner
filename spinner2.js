const animator = (x) => {
  let times = [100, 300, 500, 700];
  let output = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  if (x > 0) {
    for (let y = 0; y < 4; y++) {
      setTimeout(() => {
        process.stdout.write(output[y]);
      }, times[y]);
    }
    setTimeout(() => {
      animator(x - 1);
    }, 700);
  }
};


animator(2);
// ... fill in the rest yourself ...
