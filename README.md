String.sub
----------

Add's a "sub" method into the JavaScript String prototype for variable substitution in strings

i.e,

<code>"%1-%2".sub(['hello','world']); // hello-world</code>

<code>"%1 %2".sub('Hello,', 'world!'); // Hello, world!</code>

<code>"{hello} {world}".sub({ hello: 'Hello,', world: 'world!'}); // Hello, world!</code>

What have you tested in?
----------
jQuery: 1.8.3

Chrome: 23.0.1271.64

IE: 7, 8, 9 (using compatability mode)

Safari: 5.1.5

Opera: 12

Firefox: 17.0.1

Please let me know if if you find any bugs/errors.