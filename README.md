# string-insert-multi

Allows you to make multiple inserts into a string in just one call.
All indices you need to use are relative to original string.

Package includes typescript declarations

## Install

```
npm install string-insert-multi --save
``` 

## Example

```typescript
import insert from 'string-insert-multi'

const str = 'aabbcc'

insert('aabbcc', [
  { at: 2, text: '11' },
  { at: 4, text: '22' },
])
// return 'aa11bb22cc'

// negative offset
insert('aabbcc', [
  { at: -2, text: '11' },
])
// return 'aabb11cc'

// offset beyond end of the string
insert('aabbcc', [
  { at: 100, text: '11' },
])
// return 'aabbcc11'

``` 
