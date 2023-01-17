const spinner = () => {
  let delay = 100;
  let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   ", "\r/   ", "\r-   ", "\r\\   "];

  for (const rotation of spinner) {
    
    setTimeout(() => {
      process.stdout.write(rotation);
    }, delay);

    delay += 200;
  }
};

spinner();
