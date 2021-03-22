// exercism --> proverb
// For want of a horseshoe nail, a kingdom was lost, or so the saying goes.
// Given a list of inputs, generate the relevant proverb. For example, given the list ["nail", "shoe", "horse", "rider", "message", "battle", "kingdom"], you will output the full text of this proverbial rhyme:
// For want of a nail the shoe was lost.
// For want of a shoe the horse was lost.
// For want of a horse the rider was lost.
// For want of a rider the message was lost.
// For want of a message the battle was lost.
// For want of a battle the kingdom was lost.
// And all for the want of a nail.
// Note that the list of inputs may vary; your solution should be able to handle lists of arbitrary length and content. No line of the output text should be a static, unchanging string; all should vary according to the input given.
// If the final item in the list is an object instead of a string, it will hold a qualifier that modifies the final line in the proverb.
// proverb('nail', 'shoe', { qualifier: 'horseshoe' });
//  => For want of a nail the shoe was lost.
//     And all for the want of a horseshoe nail.

export const proverb = (...input) => {
  if (input.length === 0) {
    return "";
  }
  let output = [];
  if (input.length > 1) {
    for (let i = 0; i < input.length - 1; i++) {
      output.push(`For want of a ${input[i]} the ${input[i + 1]} was lost.`);
    }
  }
  if (input[input.length - 1].qualifier) {
    output.pop();
    output.push(
      `And all for the want of a ${input[input.length - 1].qualifier} ${
        input[0]
      }.`
    );
  } else {
    output.push(`And all for the want of a ${input[0]}.`);
  }
  output = output.join();
  return output.replace(/,/g, "\n");
};
