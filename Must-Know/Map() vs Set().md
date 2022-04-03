# Set()
The Set object lets you store <b>unique</b> values of any type, whether primitive values or object references.
- Constructor : const set = new Set()
- Instance methods: add(value), delete(value), has(value), clear()
- Iteration methods: values(), keys(), entries(), forEach()
- To loop through a Set using an iterator: <br>
let iterator = set.values()      
console.log(iterator.next().value)



# Map()
The Map object <b>holds key-value pairs and remembers the original insertion order of the keys.</b> Any value (both objects and primitive values) may be used as 
either a key or a value.
- Constructor: const map = new Map()
- Instance methods: set(key, value), has(key), get(key), delete(key), clear()
- Iteration methods: keys(), values(), entries(), forEach()
- To loop through a Map's values using an iterator: <br>
let iterator = map.values()      
console.log(iterator.next().value)
- To loop through a Map's key-value pairs using an iterator: <br>
let iterator = map.entries()      
console.log(iterator.next().value)

