---
layout: default
title:  "Create a cryptocurrency"
date:   2022-01-01 03:22:48 +0100
categories: crypto
comments: true
---

Today I will present a small project : a cryptocurrency I built for better understanding of the crypto world. I will list every resources I used in case you want to build your own !

# The GUIC : an open-source cryptocurrency

## Why
I am a hands-on _(handsome ? not sure about the spelling)_ person. So, in order to really understand what I am talking about, I need to try stuff. That's why I dug a bit around to have a better view of
- what tokens are
- what a blockchain is
- the difference between a token and a coin
- when is mining required
- ...

So here I am, diving into the crypto world... And I decided to create the GUIC to dive !
<iframe src="https://giphy.com/embed/KSJ8UkuKHLmvK" width="480" height="349" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

## Glossary
I want to highlight here that many concepts are still quite new, and that everyone doesn't always agree on their meanings. Feel free to discuss in the comment your opinion.

## Token VS Coin
To keep it simple, a coin has its own blockchain, while a token relies on another blockchain. 

If you think about it, it's easier to set up a token rather than a coin since you don't have to worry about the mining process. That's exactly why Ethereum was designed : so that you can "use" their blockchain for building other things like smart-contracts, or tokens :)

## Metamask
For almost every steps, you will need a [metamask wallet](https://metamask.io/).

## Coding
I used a free tool from ethereum to help developers build smart contracts, a sort of IDE : [remix.ethereum.org](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.2+commit.661d1103.js)
As a first step into crypto dev, that is a good shot. The language is called **"solidity"**, and it is the standard language nowadays for smart contract.

The GUIC code is only this page :
![guic](/assets/img/guic.png)

Next step, we will compile our code and publish it.

Note : if you want to dig solidity, I recommend this learning game : [crytpo zombie](https://cryptozombies.io/)

## Put your code on the blockchain
Ethereum based smart contract can be published on the Ethereum blockchain, but it is very costly at the moment. It would have cost me around 600\$ to make it live. 
That's why I went to the BSC (the Binance fork of Ethereum blockchain) and I only cost me a few \$. 

Another option would have been to use the Polygon blockchain, a layer 2 on the Ethereum blockchain, even cheaper. It's really up to you to decide. Just keep in mind that the less mainstream the blockchain, the harder for your user it will be to interact with your smart contract.

## Why do I need to pay the blockchain
Let's put it that way : the blockchain is our database, belonging to all of us. And every time you want to put something new on it, or update it, it comes with a cost. Because what you want to put on this database requires many computers to spend energy spreading your information. That is why.

"Reading" information from the blockchain is free : there is no need for a so-called "consensus" which requires energy. And every computer of the network (network here refers to every computer online, mining the same blockchain) has the database, so reading is free. It's as simple as that.

## View the GUIC contract on the blockchain
To prove you that it worked, we will inspect the blockchain in order to see the small part that describes our contract ! Luckily there is tool making this process or reading the BSC blockchain very easy : [bscscan.com](https://bscscan.com/address/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3)

![guic](/assets/img/guic_bsc.png)

You will notice that Tracker (GUIC) is the good one : the symbol we created in our contract on [remix.ethereum.org](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.2+commit.661d1103.js) :) 

There are many information available here:  
- Starting from the creator address : it will be yours (mine for the GUIC) ! 
- The balance is 0\$ because it is worth so little that BSC can't display 0.0001\$
- The contract address, that was attributed when you pushed your contract on the BSC blockchain. Here it's `0x9590B5fc46A499ad1F6d72D39b5224b1B4986fB3` so if you want to find the GUIC on the BSC blockchain, that's what you need !
- in the tabs below you can have some info on the contract itself, analytics, number of holders...

You can also see every transaction happening on this contract. I find it hard to remember that 
`0x9590B5fc46A499ad1F6d72D39b5224b1B4986fB3` is the GUIC address. That's why I built a chrome extension called wallet2pseudo making this easier. Have a look [here](https://chrome.google.com/webstore/detail/wallet2pseudo/memcmdbbdiajmhemendkhlmcnehbegle) it's free :) 


## Create a website for the GUIC
To make it easier for people to interact, buy, sell and understand this project, I built a [presentation website](https://guillim.github.io/guillimcoin/).

<iframe src="https://guillim.github.io/guillimcoin/" class="min-w-full" width="100%" height="800px"></iframe>


## How can people get some GUIC ?

### Airdrop
Well, at the moment it is pretty limited : the only way is you sending some GUIC to people addresses. If you do it to strangers for free, it's what we call an "airdrop" and it's famous because it is a way to get initial adoption. Well to be very accurate, it's not really free since every time you send tome token, you will have to pay the update fee.

### DEX : decentralized exchange
Another option is to give some of your token to a platform allowing others to buy and sell your token. For this, you need to become what is called a "liquidity provider" and to create a "pool". In a nutshell, you will deposit on the DEX 50\$ and 50 GUIC to create a pool where 1GUIC = 1\$. 

I wanted the GUIC to be cheap so I decided to put 1Million GUIC for 60\$ on the DEX called PancakeSwap. 

Now everyone can [buy and sell some GUIC on this platform](https://pancakeswap.finance/swap?inputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8&outputCurrency=0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3). This token has become... liquid !


## Analysis tools
I recommend some tools to explore a contract on the BSC
- [poocoin.app](https://poocoin.app/tokens/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3)
- [explorer.bitquery.io](https://explorer.bitquery.io/bsc/token/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3/transfers)
<iframe src="https://explorer.bitquery.io/bsc/token/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3/transfers" class="min-w-full" width="100%" height="800px"></iframe>

## What's next
If you liked this, please let me know in the comments. If you want to get started, I recommend trying to buy a few GUIC (it's almost free : 0.0001\$) but the process will teach you how to deal with the crypto world.


# Reference
The GUIC [homepage](https://guillim.github.io/guillimcoin/)  
Dev online IDE [remix.ethereum](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&  version=soljson-v0.8.2+commit.661d1103.js)  
Polygon [blockhain](https://polygon.technology/)  
Tuto that got me started [youtube](https://www.youtube.com/watch?v=G6shRPixqVY)  
The Binance Smart Chain (BSC) explorer [https://bscscan.com](https://bscscan.com/token/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3?a=0x11ab84d99bc8ec16ab0a051ce6ed0ce3d8202759)  
Makes wallet into pseudos (easier to read) [Chrome extension](https://chrome.google.com/webstore/detail/wallet2pseudo/memcmdbbdiajmhemendkhlmcnehbegle)  
Wallet from consensys : [metamask](https://metamask.io/)  
Contract Explorer [poocoin.app](https://poocoin.app/tokens/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3)  
Contract Explorer [explorer.bitquery.io](https://explorer.bitquery.io/bsc/token/0x9590b5fc46a499ad1f6d72d39b5224b1b4986fb3/transfers)    
Learning game : [crypto zombie](https://cryptozombies.io/)  
