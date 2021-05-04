# Huggg API Challenge

I have implemented the desired endpoints into a small API using Nest.js, a TypeScript-friendly Express.js framework I am familiar with).

My approach:
- I opted to re-structure the data on-start-up rather than use a lot of `find`s and `filter`s in my endpoints. This seemed much more performant and felt like it would scale better given using a large JSON file.
- Using TypeScript meant I could define interfaces for the data structures, then not have to worry too much about explicit testing for what data was returned.
- I'd love to have spent more time exploring/understanding the data as I'm not sure I completely grasped the concept of "consolidated products", though I have made an effort to implement logic related to it.

Here is what you need to get the app running:
```
git clone https://github.com/chriswburton/huggg-api
cd huggg-api
npm i
npm start
```

I have provided basic tests for each endpoint:
```
npm run test
```

Any problems, let me know. Look forward to speaking soon! Thanks
