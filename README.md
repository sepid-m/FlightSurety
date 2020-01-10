# FlightSurety
FlightSurety is an Ethereum DApp to manage flight insurances.

![Screenshot client](./screenshots/front-end.png)

Sepid M.

## Getting Started
1.  Clone/download this repository

2.  Install dependencies
```
$ npm install
```
3.  Run tests
```
$ truffle develop
truffle(develop)> test
```
Your terminal should look something like this:

![Screenshot tests](./screenshots/1.png)

4.  Deploy locally  
Update the account argument depending on the number of addresses to load at start.
```
$ ganache-cli -m "strategy fan arch middle glass stove mask gym between beach letter fever" -a 50
```
Your terminal should look something like this:

![Screenshot tests](./screenshots/2.png)

5. In a new terminal:
```
$ truffle migrate
```
Your terminal should look something like this:

![Screenshot tests](./screenshots/3.png)

6.  Start front-end.  
In a new terminal:
```
$ npm run dapp
```
Your terminal should look something like this:

![Screenshot tests](./screenshots/4.png)

7.  Start server (for oracles and API).  
In a last terminal:
```
$ npm run server
```
Your terminal should look something like this:

![Screenshot tests](./screenshots/5.png)

8.  Use the app:
  - Import accounts to MetaMask
  ![Screenshot tests](./screenshots/6.png)

  - Go to http://localhost:8000/
  - First airline registered is the account 2 of your metamask accounts.
  - Provide funding of min 10 ETH from this address.
  ![Screenshot tests](./screenshots/7.png)

  - Register flights or (up to 3) new airlines from this address.
  ![Screenshot tests](./screenshots/8.png)

  - Switch to a 'passenger' address (e.g account 3) and book a flight.
  ![Screenshot tests](./screenshots/9.png)

  - 1st Airline/account 2 is now able to withdraw its credited ticket price.
  - Submit request to oracles (from which account doesn't matter)
  ![Screenshot tests](./screenshots/10.png)
  
  - If flight is delayed, passenger/account 3 can now withdraw his credited insurance amount.
  ![Screenshot tests](./screenshots/11.png)  

**NOTES:  
The browser needs to be refreshed in order for the drop-down selection lists (flight booking and oracle requests) to be updated.  
Refresh is also needed after switching accounts in Metamask.**

## API
The server runs by default on port 3000.  

- **/flights**  
Get all registered flights.
Note: the front-end client get the registered flights from this end point.
![Screenshot tests](./screenshots/12.png)

- **/flight/ref.destination.landing_timestamp**  
Get one flight
![Screenshot tests](./screenshots/13.png)

- **/response/ref.destination.landing_timestamp**  
Get a response object (isOpen and requester attributes)
![Screenshot tests](./screenshots/14.png)

## Resources

- [Truffle](https://www.truffleframework.com/): smart contracts and DAPP development framework.
- [npm](https://www.npmjs.com/get-npm)
- [Metamask](https://metamask.io/): browser add-in to interact with the JavaScript Ethereum API [Web3](https://github.com/ethereum/web3.js/).
- [VanillaJS DOM class](https://hackernoon.com/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff)
- [CRUD pattern in solidity](https://medium.com/@robhitchens/solidity-crud-part-1-824ffa69509a)
