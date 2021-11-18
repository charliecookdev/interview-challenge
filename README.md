# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email nick@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)

# Next steps
If I had more time to come back I would update a few things:

- The components could be refactored further such as creating a menu item component as the HTML used in both MenuBuilder and MenuPreview is identical
- I would also refactor the fetching of data into a custom hook that would allow more reuse as the app scaled and more endpoints are introduced
- I would also look to only pass back the item id when selecting an item rather than the whole item to simplify
- I would investigate to see how to mock the server to have better test coverage - from looking at the testing-library docs there seems to be an advised way to do this via the msw package