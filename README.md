## DAA test solution

Solution for an e-commerce app with the functionality to display a list of items and add and remove items from cart.

I have built the app using a basic NextJS (javascript) template to which I have added npm packages for redux and heroicons for rendering svg icons.

### Notes on implementation

- The app should fufill all the listed requirements, including the two bonus features.
- I decided to implement with NextJS as requested, but my experience with the framework is limited. Therefore there may be sub optimal uses of some features such as hydration or use of client vs server components for data fetching. I elected to implement the 'data fetching' as a simple json import.

### Possible improvements

- Testing. For time reasons I didn't implement any tests as it was not listed as part of the requirements. A good next step to improve the implementation would be to add some unit tests and setup the solution for e2e testing with something like cypress or playwright.
- Component breakdown - I have attempted to breakdown into readable components with good data encapsulation practices. In production, this could be taken further with some of the elements, particularly things like the buttons, which could be added to a component library.

## Running solution locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
