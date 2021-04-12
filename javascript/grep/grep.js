// exercism --> grep
// Search a file for lines matching a regular expression pattern. Return the line number and contents of each matching line.
// The Unix grep command can be used to search for lines in one or more files that match a user-provided search query (known as the pattern).
// The grep command takes three arguments:
// The pattern used to match lines in a file.
// Zero or more flags to customize the matching behavior.
// One or more files in which to search for matching lines.
// Your task is to implement the grep function, which should read the contents of the specified files, find the lines that match the specified pattern and then output those lines as a single string. Note that the lines should be output in the order in which they were found, with the first matching line in the first file being output first.
// As an example, suppose there is a file named "input.txt" with the following contents:
// hello
// world
// hello again
// If we were to call grep "hello" input.txt, the returned string should be:
// hello
// hello again
// Flags
// As said earlier, the grep command should also support the following flags:
// -n Print the line numbers of each matching line.
// -l Print only the names of files that contain at least one matching line.
// -i Match line using a case-insensitive comparison.
// -v Invert the program -- collect all lines that fail to match the pattern.
// -x Only match entire lines, instead of lines that contain a match.
// If we run grep -n "hello" input.txt, the -n flag will require the matching lines to be prefixed with its line number:
// 1:hello
// 3:hello again
// And if we run grep -i "HELLO" input.txt, we'll do a case-insensitive match, and the output will be:
// hello
// hello again
// The grep command should support multiple flags at once.
// For example, running grep -l -v "hello" file1.txt file2.txt should print the names of files that do not contain the string "hello".
// Node process
// Unlike other exercises, grep.js is not imported inside the test file grep.spec.js. Instead, it will be used as if it's an executable. To facilitate that, the grep.js file has been set-up with a shebang, and a comment that explains what this does:
// #!/usr/bin/env node
// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
// ./grep.js args
// If you do not have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
// node grep.js args
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)
// The tests will start a new node process, executing grep.js.
// Reading arguments
// In order to retrieve the arguments the process was started with, use process.argv.
// Reading files
// The function readLines has been provided. There is no need to transform the file path in order to use it. The readlines function will resolve the path from the current working directory, which, for the grep.js processes is set to the exercise directory.
// Writing output
// In order to write output use
// console.log to write to the standard output stream,
// console.error to write to the standard error stream.
// The tests consider execution to be successful (resolved) if nothing is written to the standard error stream, and not successful (rejected) if something is written to the standard error stream.

const fs = require("fs").promises;
const path = require("path");

const lineNumber = "-n";
const filesWithMatches = "-l";
const ignoreCase = "-i";
const invertMatch = "-v";
const lineRegex = "-x";
const validOptions = [
  lineNumber,
  filesWithMatches,
  ignoreCase,
  invertMatch,
  lineRegex,
];

const parseArgs = ([...args]) => ({
  options: args.splice(
    0,
    args.filter((arg) => validOptions.includes(arg)).length
  ),
  pattern: args[0],
  files: args.slice(1),
});

const createPredicate = (options, pattern) => (string) =>
  options.includes(invertMatch) ^
  new RegExp(
    options.includes(lineRegex) ? `^${pattern}$` : pattern,
    `m${options.includes(ignoreCase) ? "i" : ""}`
  ).test(string);

(async ({ files, options, pattern }) => {
  const fileLines = await Promise.all(
    files.map((file) => fs.readFile(path.resolve(file), { encoding: "utf-8" }))
  );
  const matchesPattern = createPredicate(options, pattern);

  fileLines.forEach((lines, fileNum) =>
    options.includes(filesWithMatches)
      ? matchesPattern(lines) && console.log(files[fileNum])
      : lines
          .split("\n")
          .forEach(
            (line, lineNum) =>
              matchesPattern(line) &&
              console.log(
                [
                  files.length > 1 ? files[fileNum] : [],
                  options.includes(lineNumber) ? lineNum + 1 : [],
                  line,
                ]
                  .flat()
                  .join(":")
              )
          )
  );
})(parseArgs(process.argv.slice(2)));
