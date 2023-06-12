const sentence = "hello there from lighhouse labs";
let delay = 0;
// first delay is set to 0 and increment 500ms every after character
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (delay += 500));
}

// print '\n' at after finishing the sentence
setTimeout(() => {
  console.log("\n");
}, delay);