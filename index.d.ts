/**
Ensure text is not broken when its container is resized.

@param input The text to glue.

@example
```
const glueText = require("glue-text")

// Add no-break spaces
glueText("a b c")
//=> "a b ⁠c"

// Add word joiners
glueText("o-o")
//=> "o-⁠o"
```
*/
declare function glueText(input: string): string

export = glueText
