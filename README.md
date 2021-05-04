<p align="center"><img src="client/public/favicon.png" align="center" width="128"><p>

<h1 align="center"> Scarlet Market </h1> 
<p align="center">
</p>
<p align="center">Decentralized Online Market Prototype.</p>
<hr>

### What is Scarlet Market 🛒 ?

Scarlet Market is a proof of concept for decentralized market, which removes middlewares, authorities and ofcourse scope of curroption. Scarlet Market enables buying and selling of product with bare minimum computations and hence lower gas ⛽. Uses **IPFS** for storing images.

#### The Problem 😞

In Web2 based online stores, we have lots of extra charges, plus incentive to buyers and charges for hosting middleware were to be paid by users.
Plus, since we are not taking any data, all your purchase history will be yours only. You can always interact with store

### Screenshots

<img src="./assets/init-permissions.png" align="center" width="300">

|         Main Page         |         Adding Store         |
| :-----------------------: | :--------------------------: |
| ![](assets/main-page.png) | ![](assets/adding-store.png) |

|         Store Added         |        Store Page         |
| :-------------------------: | :-----------------------: |
| ![](assets/store-added.png) | ![](assets/shop-init.png) |

|          Add Item Form           |         Item Added         |
| :------------------------------: | :------------------------: |
| ![](assets/adding-item-form.png) | ![](assets/item-added.png) |

| Buying from another account |    Store after transactions     |
| :-------------------------: | :-----------------------------: |
| ![](assets/buying-item.png) | ![](assets/store-after-buy.png) |


#### External Contracts Used :bookmark_tabs:

- [Stoppable](contracts/Stoppable.sol)
- [SafeMath](contracts/SafeMath.sol)
- [Ownable](contracts/Ownable.sol)

## Development :hammer_and_wrench:

### Develop Locally

- Clone the project locally

```sh
git clone https://github.com/highclaws/scarlet-coin.git
cd scarlet-coin/blockchain
```

- Start local development blockchain and copy the mnemonic to be used later

```sh
ganache-cli
```

- Compile contracts and migrate them to the blockchain

```sh
npm i
truffle compile
truffle migrate
```

#### Setup React

Frontend is React with Web3 with the help of Truffle boxes.

```sh
cd client
npm i
npm run start
```

### Run Tests

```sh
truffle test
```

<img src="./assets/test-snap.png" align="center" width="650">



<p align="center>
Icon Credits: Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</p>


