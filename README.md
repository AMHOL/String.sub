String.sub
==========

Add's a "sub" method into the JavaScript String prototype for variable substitution in strings

i.e,

<code>"%1-%2".sub(['hello','world']); // hello-world</code>

<code>"%1 %2".sub('Hello,', 'world!'); // Hello, world!</code>

<code>"{hello} {world}".sub({ hello: 'Hello,', world: 'world!'}); // Hello, world!</code>