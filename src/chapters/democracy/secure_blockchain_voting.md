# Secure Blockchain Voting


## 1) Securing the device that you vote

As mentioned earlier, [Android phones](../what-do-we-need-to-decentralize-in-the-coming-years.md#security-of-phone) may not be appropriate for casting votes using blockchain technology. 

Furthermore, one cannot use proprietary operating systems like iOS on an iPhone or Microsoft Windows, as [one cannot access the source code](../the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.md#the-illusion-of-secrecy-vs-open-protocol) to understand what the program is doing in the background.

### So, what is an most affordable method of voting?

> It's simply a Linux-bootable USB drive or memory card.

So, anyone, even the poorest, can hold a pen drive or memory card. Therefore, the system enables everyone to participate in democracy.

### What security measure we need to take for voting?

1) Validate the checksum of the files on the pen drive or memory card. The community can publish the checksum, allowing users to verify that it is correct and that they are running the correct open-source software.

2) You need a trusted computer to boot; it can be anyone from your family or relatives whom you trust. Only the computer's BIOS needs to be secure. As it's done in a decentralized manner, a mass attack becomes very difficult. You don't have to trust any election commission or government.


You can use single-board computers, such as the Raspberry Pi Zero, for enhanced security, and they can be priced as low as $12.


## 2) Securing the app that you vote

[Link to: Enhancing Privacy and Security in Offline App Design with WebAssembly](https://amiyatulu.github.io/blog/linux/Offline_centric_apps.html)


## 3) Security of the blockchain itself

### So what a blockchain do?

Blockchains are a technology which is all about providing guarantees about process integrity. If a process is run on a blockchain, the process is guaranteed to run according to some pre-agreed code and provide the correct output. No one can prevent the execution, no one can tamper with the execution, and no one can censor and block any users' inputs from being processed.

### Explain to a 5-year-old the 51% attack of the proof-of-stake algorithm in blockchain

Imagine you and your friends are playing with building blocks to make a tall tower. In the blockchain world, people use something called Proof of Stake (PoS) to decide who gets to add the next block to the tower.

Now, a 51% attack in Proof of Stake is like a big, mischievous friend who tries to cheat the game. In our tower-building game, this friend is so tricky that they convince more than half of the players to help them instead of playing by the rules. Since they have more than half the players on their side, they can now control what blocks go into the tower.

So, instead of building the tower the way everyone agreed, this tricky friend and their team can start adding blocks that might not be good for the tower. It's like they're trying to make the tower wobbly or even knock it down! This is not fair because the game was supposed to be about working together and following the rules.

In the blockchain world, a 51% attack in Proof of Stake means that some people with more than half of the power can make decisions that are not good for the whole group. 


### Detail video explaining Blockchain

####  Web3 Blockchain Fundamentals MOOC

<https://www.youtube.com/playlist?list=PLxVihxZC42nF_MCN9PTvZMIifRjx9cZ2J>

#### Proof of Stake

<https://www.youtube.com/watch?v=CDvonnvqrs4&list=PLxVihxZC42nF_MCN9PTvZMIifRjx9cZ2J&index=15>

### Can we have voting system without using blockchain through cryptography?

One can go through the links to implement voting in cryptography, meeting the required properties of voting system.

<https://crypto.stanford.edu/pbc/notes/crypto/voting.html>

[An Implementation of a Mix-Net Based Network Voting Scheme and Its Use in a Private Organization](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeibuirxnrpjd6tagfavkwmicfjlpmubydxtijz3dhfl6ur5urwk37u)

Desirable features for voters and for administrators who manage voting system:

- it enjoys flexibility in representing a vote, unlike homomorphic encryption based scheme where the design of the system depends heavily on the number of choices in each vote.

- the voters can simply vote-and-go and require only a small computational ability.

- by having authorities prove the correctness of their procedures, it achieves public verifiability, that is, anyone can verify the correctness of the tally.


[Blockchain voting is overrated among uninformed people but underrated among informed people](https://vitalik.eth.limo/general/2021/05/25/voting2.html)


### Blockchain beyond voting

Blockchain extends beyond its application in voting; it encompasses smart contracts and incentive distributions as well. It can be referred to as a publicly operated peer-to-peer open source application, devoid of centralized ownership. The versatility of blockchain lies in its adaptability; you can seamlessly integrate any compatible module to address specific problem sets. This technology empowers decentralized and trustless systems, ensuring transparency and security in various domains beyond just voting.

### Smart Contracts

Smart contracts are self-executing contracts with the terms of the agreement directly written into code.


### Navigating Bugs, Vulnerabilities, and Open Source Solutions

While blockchain apps can be developed as fully open source, with all components, including the frontend and its dependencies, being open source or FOSS (Free and Open Source Software), there is still a chance of encountering bugs. These bugs can potentially lead to security vulnerabilities and even result in the theft of funds.  Additionally, poor algorithm design without thorough validation (e.g. through game theory etc.) can make the app susceptible to attacks.

However, since the source code is publicly available, anyone is free to audit it, identify vulnerabilities, and contribute to fixing them. This transparency allows for a collaborative effort in enhancing the security of the application, as the community can collectively work towards identifying and addressing potential risks.

### How can we make apps low-stake?

It can be subtle, depending on the intertwining processes in the algorithm. Take, for example, the design of a voting system. First Past the Post (FPTP) is more [dangerous](../the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.md#votes-by-party-in-2023-legislative-assembly-election) than Single Winner Approval. Single Winner Approval is more dangerous than Multi-Winner Approval (in thousands). Similarly, elections every five years are more dangerous than elections every six months. With direct democracy, stakes will be low, and there will be less chance of coercion.

We can also create a low-stakes system by decentralizing various supply chains and institutions. This can be achieved through different methods like separate voting system, whether it's in social media, journalism, the police force, transportation, super markets, universities or even by decentralizing the power of election commissions to ensure that free and fair ballot paper elections are conducted.
