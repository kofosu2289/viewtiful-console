# Viewtiful-Console

A set of easy-to-use `console.log` alternatives for clearer code demonstrations.


# What's Wrong With `console.log`?
### The TLDR, Conversational Intro

_Everything_ is wrong with `console.log`.

But mainly the parsing.

1. It tends to blend in with the terminal's info-dump, making it difficult to find. 
2. If you care about the other information in the terminal, well, that becomes harder to parse as well.
3. Once you have even a few of them, you get a new parsing task as well: telling one from the other.

A common solution to parsing your logging is to make sure each one is labelled in some way, which requires `console.log` usage like the following increasingly effective and verbose examples:

```javascript
console.log('The value of foo is: ', foo);

// Or, slightly easier to parse because it's on two lines:
console.log('The value of foo is:');
console.log(foo);

// And to make it easier to parse from the other terminal output:
const colors = require('colors');

console.log(colors.cyan('The value of foo is:'));
console.log(colors.magenta.bold(foo));
```

And now, gradually, you're getting to the point where you're looking for a keyboard shortcut or extension or macro to input all this extra _code_ for you.

Since I often try to do a quick-and-dirty look at a certain value, particularly when demonstrating code to others, at a certain point it made sense to make this its own function. And then it made sense to make it a shareable module.

And so: this library.


# Viewtiful-Console Design Principles
### The More Formal Introduction

Viewtiful-Console is a set of `console.log`-style methods specifically designed to produce a clear signal in a noisy console. It achieves this through three basic design principles:

  1. Solve actual problems. For example, labelling what value you're logging is an annoying task and an unnecessary pain point.
  2. Use style and formatting in a way that complements the purpose of each use-case. For example, if you're marking a section of your logs with a header, it should be absolutely unmissable.
  3. Require no set-up. There is no configuration needed or, for the most part, possible. This is a highly opinionated set of methods for displaying the results of code, and it has been developed so that _you_ don't have to waste your time re-inventing or even tinkering with the logging wheel.


# Viewtiful-Console Installation

In the working directory of an `npm`-controlled project:

```bash
npm install viewtiful-console --save-dev
```

# Viewtiful-Console Methods

### withLabel

`withLabel` takes in an object and logs the keys as labels for the values.

You can use this for one-shot logs:

![a screenshot of the `withLabel` method in action](./assets/screenshots/label-1.png)


The only method fully implemented so far, `label` takes in an object and logs the keys as labels for the values.

![a screenshot of the `label` method in action](./assets/screenshots/label-1.png)

THe object that `label` takes in can have more than one property, meaning you can log several key/value pairs in one call.

![a screenshot of the two values in keys of one object passed into `label`](./assets/screenshots/label-2.png)

A common pattern is to `label several things in a succinct way using object property shorthands

![a screenshot of one object being passed into `label` with object property shorthand syntax](./assets/screenshots/label-3.png)

### asBanner

**Still Under Construction**

A beautiful console banner, coming soon to an `npm` library near you. It will feature:

1. Full-width. Spans (as close as we can) the entire width of the terminal window.
2. Neon colors. You will _not_ scroll by it.
3. Centered text.
4. Wrapping without breaking words.
5. Simple manual row configuration--pass in multiple strings, and each string will be its own row.


### atTop

**Still Under Construction**

A simple method that will clear all logging above it so that the new value appears on top. Great for temporarily highlighting one value, with a built-in reminder of _why_ you're not seeing other logs.

### On Variable Names And Clarity
 
Did you know that you can use any name for a library you please? It's _your_ variable, no one else's!

![a screenshot of various names you could give the variable you create when you `require` Viewtiful-Console](./assets/screenshots/require-names.png)

Did you know that we have _opinions_ about which you should use? We do! They're already in order of preference, from worst to best, but allow us to tell you our reasoning, and then... you do you, my friend. You do you.

* `bill` - "Hahahahahaha, they named it something _silly_. Now... uh... what does it do again? How do I use this?" What you gain in a one-time laugh you lose in usability ten-fold."
* `console` - There's an argument for this--to the point where we're constantly considering whether we should wrap the native console object so your `console.log`s get converted to ours!--but ultimately, this library _isn't_ a drop-in replacement for `console`. Treating it as such can easily lead to a lack of clarity of where one starts and the other ends.
* `vc` - A nice short variable name, but it makes it hard for anyone seeing your code to easily grok what it does. If you've ever come back to your own code after a while, you know it's easy to forget such things yourself! Plus... you really don't need short variable names if you're using tab-completion. Are you using tab-completion? You really should be using tab-completion!
* `viewtifulConsole` - An excellent name indeed! Whoever thought of it must be very, _very_ handsome.
* `vonsole` - We might mildly prefer this one, plus it quickly reads as a `console` alternative.

Forge your own destiny!

### Roadmaps For Future Versions

*1.0*

* [ ] Has all three basic planned methods (with a name change for `label` to `withLabel` to match new naming convention).
* [ ] Allow an arbitrary number of arguments for `asBanner` and `atTop`.


*1.1*

* [ ] Create composable versions, so that one could have a banner or labelled value on top, or a labelled value inside a banner.
* [ ] Convert style and layout to work within a browser console.


### Contributing

No formal system yet, but we're open to suggestions on this project, as well as assistance setting up a formal system for accepting contributions.
