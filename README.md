String.sub
==========

Add's a "sub" method into the JavaScript String prototype for variable substitution in strings
-----------------
Allows for variable substitution in javascript strings

i.e,

<code>"%1-%2".sub(['hello','world']); // hello-world</code>

<code>"{hello} {world}".sub({ hello: 'Hello,', world: 'world!'}); // Hello, world!</code>