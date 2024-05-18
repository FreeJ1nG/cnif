# cnif

## Overview

`cnif` is a utility function designed to complement the `clsx` and `twMerge` libraries, providing a concise way to handle conditional CSS class names using if, else if, and else logic. This utility simplifies dynamic class name management in your React projects and can be seamlessly integrated with Tailwind CSS for a streamlined styling experience.

```ts
cnif(object: Record<string, boolean>, defaultValue?: string = "")
// Accepts an object, returning the first key which is true
// Returns defaultValue when no object value is true
```

## Installation

You can install `cnif` via npm:

```bash
$ npm install --save cnif
```

## Usage

```ts
import cnif from "cnif";
// or
import { cnif } from "cnif";

import { clsx } from "clsx";

cnif({ foo: false, bar: true, baz: false }, "default");
//=> 'bar'

cnif({ foo: false, bar: false }, "baz");
//=> 'baz'

cnif({ foo: false, foobar: false }, cnif({ bar: false, baz: true }));
//=> baz

// With clsx and tailwind
clsx(
  cnif(
    {
      // if an option is selected, highlight it
      "bg-primary text-white": selectedOption === option.label,
    },
    cnif(
      {
        // if an option is not selected, and it's a negative option, color it red
        "bg-red-600": option.color === "negative",
        // if an option is not selected, and it's a positive option, color it green
        "bg-green-600": option.color === "positive",
      },
      // if an option is not selected, and it's not any of the above options, color it white
      "bg-white text-black",
    ),
  ),
  {
    // regular clsx syntax
    "border-[#949494] text-[10px] font-bold": variant === "gray",
  },
);

/**
 * selectedOption = 'foo'
 * option = {
 *   label: 'bar',
 *   color: 'negative'
 * }
 * variant = 'gray'
 */
//=> 'bg-red-600 border-[#949494] text-[10px] font-bold'
```
