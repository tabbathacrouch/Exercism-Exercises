// Implement an evaluator for a very simple subset of Forth.
// Forth is a stack-based programming language. Implement a very basic evaluator for a small subset of Forth.
// Your evaluator has to support the following words:
// +, -, *, / (integer arithmetic)
// DUP, DROP, SWAP, OVER (stack manipulation)
// Your evaluator also has to support defining new words using the customary syntax: : word-name definition ;.
// To keep things simple the only data type you need to support is signed integers of at least 16 bits size.
// You should use the following rules for the syntax: a number is a sequence of one or more (ASCII) digits, a word is a sequence of one or more letters, digits, symbols or punctuation that is not a number. (Forth probably uses slightly different rules, but this is close enough.)
// Words are case-insensitive.

export class Forth {
  constructor() {
      this._stack = []
      this.operations = {}
  }
  evaluate(message) {
      let ops = this.parseDefinitions(message.toLowerCase()),
          operations = ["dup", "drop", "swap", "over", "-", "*", "/", "+"];
      ops = ops ? ops.split(" ") : []
      for (let op of ops) {
          if (/^-?[0-9]+$/.test(op)) {
              this._stack.push(parseInt(op))
              continue
          }
          if (!operations.includes(op)) {
              throw new Error("Unknown command")
          } else if (this._stack.length == 0) {
              throw new Error("Stack empty")
          } else if (this._stack.length < 2 && !["dup", "drop"].includes(op)) {
              throw new Error("Stack empty")
          } else if ("+-*/".includes(op)) {
              let res = this._stack[0]
              for (let o of this._stack.slice(1)) {
                  res = parseInt(eval(`${res}${op}${o}`))
                  if (isNaN(res)) {
                      throw new Error("Division by zero")
                  }
              }
              this._stack = [res]
          } else if (op === "dup") {
              this._stack.push(this._stack[this._stack.length - 1])
          } else if (op === "drop") {
              this._stack.pop(this._stack.length - 1)
          } else if (op === "swap") {
              this._stack = [...this._stack.slice(0, -2),
              this._stack[this._stack.length - 1],
              this._stack[this._stack.length - 2]]
          } else if (op === "over") {
              this._stack.push(this._stack[this._stack.length - 2])
          }
      }
  }
  parseDefinitions(message) {
      let ops = message.split(" ")
      if (ops[0] === ":") {
          if (ops[ops.length - 1] != ";") {
              throw new Error("macro not terminated with semicolon")
          }
          let definition = ops[1],
              equal = ops.slice(2, -1).join(" ");
          if (equal.length == 0) throw new Error("empty macro definition")
          if (/[0-9]/.test(definition)) throw new Error("Invalid definition")
          ops.slice(2).filter(op => this.operations.hasOwnProperty(op))
              .map(op => equal = equal.replace(op, this.operations[op]))
         this.operations[definition] = this.operations.hasOwnProperty(equal) ? this.operations[equal] : equal
      }
      for (let [op, value] of Object.entries(this.operations)) {
          let res = []
          for (let r of message.split(" ")) {
              r == op ? res.push(value) : res.push(r)
          }
          message = res.join(" ")
      }
      if (ops[0] != ":") return message
  }
  get stack() {
      return this._stack
  }
}
