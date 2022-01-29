## npm Boilerplate
This repository is one of the simplest ways to test your npm packages from the get-go. It gets as simple as it can be - clone the repo, install all the necessary packages for a dev server, then install dependencies you'd like to test and thats it. That's way faster than setting up for a local node server every time.

To get it going, simply run set of commands which are:
```
git clone https://github.com/sobekcore/npm-boilerplate.git
```
```
npm install
```

At this point you have installed all the necessary packages.
From this point you can install your dependencies, and then to serve whole project run:
```
npm run start
```

After all of that you are ready to go, every benefit of a node server should be available for your usage. Features like importing modules, running server-side JavaScript or using various node-based tools become a real thing now. I wish you comfortable and trouble-free usage.

Note: Webpack configuration is made in a way to only test samples of code with a dev-server. Not to efficiently build a project nor bundle your code. For production or code bundling use different Webpack configuration.
