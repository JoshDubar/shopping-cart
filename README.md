# Shopping Cart

## Contents

- [Problem Summary](#problem-summary)
- [Design](#design)
- [Getting Started](#getting-started)
- [Testing](#testing)

## Problem Summary

While trying to open a new computer store, our Sales Manager has decided that we should introduce a few opening day specials in order to draw in more customers. 
Because this Sales Manager tends to be a bit undecisive, we need to implement a Shopping Cart Checkout solution which allows for easy configuration of pricing 
rules applied to items sold at the store. This project attempts to solve this problem. 

Read more here:
https://github.com/DiUS/coding-tests/blob/master/dius_shopping.md

## Design

The below image is a rough UML diagram of our solution to this problem. By creating an interface which all pricing rules implement, we can easily customise and configure our existing 
initial pricing rules while also enabling the option to add more specific rules in the future. All pricing rules must contain an `apply` method, which accepts all items currently
in the cart and returns the total discount which this rule can apply at checkout. 

![image](https://user-images.githubusercontent.com/47800146/150076337-3dc389bf-b85e-4771-a2ab-7c108b6c94f0.png)

One pitfall of this solution is that pricing rules can be stacked on top of eachother. For instance, if you are purchasing an Apple TV, and you receive a free VGA cable with that TV,
and there is also a deal where you get a free charging cable whenever purchasing a VGA cable, then you will receive both a free VGA cable and a free charging cable at once. This problem is able to be solved, but is out of scope 
for this exercise.


## Getting Started

1. Ensure you have [nodejs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) installed
2. install all dependencies by running `yarn` in the root directory
3. run `yarn dev` to start the project in development mode

## Testing

1. Ensure you have [nodejs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) installed
2. install all dependencies by running yarn in the root directory
3. run `yarn test` to run all unit tests, a coverage report will be generated in the `coverage` directory
