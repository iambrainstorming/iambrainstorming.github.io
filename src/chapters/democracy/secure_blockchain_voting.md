# Secure Blockchain Voting


## 1) Securing the device that you vote

As mentioned earlier, [Android phones](../what-do-we-need-to-decentralize-in-the-coming-years.md#security-of-phone) may not be appropriate for casting votes using blockchain technology.

Furthermore, one cannot use [proprietary operating systems](../programming/foss_philosophy.md) like iOS on an iPhone or Microsoft Windows, as [one cannot access the source code](../the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.md#the-illusion-of-secrecy-vs-open-protocol) to understand what the program is doing in the background.

### So, what is an most affordable method of voting?

> It's simply a Linux-bootable USB drive or memory card.

So, anyone, even the poorest, can hold a pen drive or memory card. Therefore, the system enables everyone to participate in democracy.

Though Android phones may still work, provide enough security for blockchain transactions and low stake voting system.

### What security measure we need to take for voting?

1) Validate the checksum of the files on the pen drive or memory card. The community can publish the checksum, allowing users to verify that it is correct and that they are running the correct open-source software.

2) You need a trusted computer to boot; it can be anyone from your family or relatives whom you trust. Only the computer's BIOS needs to be secure. As it's done in a decentralized manner, a mass attack becomes very difficult. You don't have to trust any election commission or government.


You can use single-board computers, such as the Raspberry Pi Zero, for enhanced security, and they can be priced as low as $12.

### BIOS attack

[You can also examine BIOS attacks in the link](https://archive.is/Vhkaa). However, it's true that BIOS firmware is rarely made open source. As a result, it's difficult to replace the BIOS when it's infected. Even [Raspberry Pi BIOS](https://raspberrypi.stackexchange.com/questions/8475/what-bios-does-raspberry-pi-use) isn't open source. However, there are other open source alternatives, such as [RISC-V computers](https://ubuntu.com/download/risc-v), where both the hardware and software are open source.

[Funding the Open Source](../what-do-we-need-to-decentralize-in-the-coming-years.md#funding-open-source)

## 2) Securing the app that you vote

[Link to: Enhancing Privacy and Security in Offline App Design with WebAssembly](https://iambrainstorming.github.io/coding_blog/linux/Offline_centric_apps.html)


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

### Simple Voting Machine on RISC Zero

[A simple voting machine built on the RISC Zero platform](https://github.com/risc0/risc0/tree/main/examples/voting-machine) using zero knowledge proofs.

This example is for educational purposes only. Not for use in actual elections.


### Blockchain beyond voting

Blockchain extends beyond its application in voting; it encompasses smart contracts and incentive distributions as well. It can be referred to as a publicly operated peer-to-peer open source application, devoid of centralized ownership. The versatility of blockchain lies in its adaptability; you can seamlessly integrate any compatible module to address specific problem sets. This technology empowers decentralized and trustless systems, ensuring transparency and security in various domains beyond just voting.

### Smart Contracts

Smart contracts are self-executing contracts with the terms of the agreement directly written into code.


### Navigating Bugs, Vulnerabilities, and Open Source Solutions

While blockchain apps can be developed as fully open source, with all components, including the frontend and its dependencies, being open source or FOSS (Free and Open Source Software), there is still a chance of encountering bugs. These bugs can potentially lead to security vulnerabilities and even result in the theft of funds.  Additionally, poor algorithm design without thorough validation (e.g. through game theory etc.) can make the app susceptible to attacks.

However, since the source code is publicly available, anyone is free to audit it, identify vulnerabilities, and contribute to fixing them. This transparency allows for a collaborative effort in enhancing the security of the application, as the community can collectively work towards identifying and addressing potential risks.

### How can we make apps low-stake?

The higher the stake involved, the more precarious it becomes for our democracy and economy in the event of hacking or bugs, despite it being decentralized and open-source. How can we make the system involve less stake?

It can be subtle, depending on the intertwining processes in the algorithm. Take, for example, the design of a voting system. First Past the Post (FPTP) is more [dangerous](../the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.md#votes-by-party-in-2023-legislative-assembly-election) than Single Winner Approval. Single Winner Approval is more dangerous than Multi-Winner Approval (in thousands). Similarly, elections every five years are more dangerous than elections every six months. With direct democracy, stakes will be low, and there will be less chance of coercion.

We can also create a low-stakes system by decentralizing various supply chains and institutions, as well as separating powers, making them autonomous. This can be achieved through [separate governance](./tyranny_of_the_majority.md) using different methods like separate voting system, whether it's in social media, journalism, the police force, transportation, super markets, universities or even by decentralizing the power of election commissions to ensure that free and fair ballot paper elections are conducted.

#### Problem of high stake
To add more nuances: Any electronic voting method, including blockchain, is a disaster in high-stakes elections where a single vote or a few votes can change the outcome of the election.

Single-winner elections and First-Past-The-Post (FPTP) systems shouldn't be conducted using electronic voting systems or blockchain. Direct democracy work better with blockchain because all or most users (e.g. millions of representatives with specialization) participate in decision-making rather than a single or few representatives, where a decision can only be hacked when about one-third or 51% of the computers are compromised. That's a huge number of computers that would have to be compromised, and that's a very challenging task for hackers to achieve. It's a rare event, especially if sufficient security measures are taken, and auditing and testing are conducted.

### The Resilience of Blockchain: Why Hacks Are Not the End of the World

The notition that conducting election through blockchain and its hack will be the end of the world is a misconception.If a blockchain is hacked, you may lose some money, but it's not a catastrophic event. The decentralized nature of blockchain means that all data are recorded in a public ledger, allowing anyone to detect if it's been compromised. In the event of a hack, the blockchain can be forked or upgraded through governance, effectively rewriting the ledger and reversing the effects of the hack.

Consider the Ethereum DAO hack in its early days. [A hard fork was implemented](https://www.coindesk.com/consensus-magazine/2023/05/09/coindesk-turns-10-how-the-dao-hack-changed-ethereum-and-crypto/), allowing the developers to reclaim the stolen funds by rewriting the Ethereum ledger. This shows that blockchain technology can adapt to and recover from significant security breaches.

Decisions made in blockchain can be reversed in the event of large-scale hacking. In fact, blockchain's inherent properties make it an ideal platform for reversible decision-making. For instance, if we were to hold low-stake 'mini-elections' every six months, the results could be reversed within that timeframe, minimizing the impact of any potential hacking. This level of accountability and reversibility is not possible with traditional systems, where election results are often set in stone for years to come. In contrast, first-past-the-post (FPTP) electoral systems, particularly those relying on electronic voting machines, are highly susceptible to manipulation and rigging, with irreversible consequences.

### Why Blockchains Are Not Companies? Blockchains: Not Owned, Not Controlled, Not a Company

One argument put forth is that we can't trust tech guys, and big tech companies can do more harm than good. However, blockchains don't fit this mold. They aren't companies, nor are they big tech corporations. Instead, they operate as a commons or public property, owned and maintained by the public at large.

To understand the nature of blockchains, it's essential to learn about [free and open-source software](../programming/foss_philosophy.md). No single entity or individual owns a blockchain, not even the developer who created it. Once the developer loses `sudo` access to the blockchain, they have no control over it and cannot shut it down.

In blockchain, the code is law, and all execution is based on the algorithm encoded in the blockchain itself. This decentralized and autonomous nature of blockchains is a key aspect of their design, which ensures that no single entity can manipulate or control the system.


### Sometimes KYC can be inaccurate, but do we need 100% accuracy in blockchain?

Inaccurate KYC is also rampant in today's elections. Furthermore, only 50-60% of voters actually vote. With better voting methods like Approval Voting and multi-winner voting methods, 70-80% KYC accuracy could be sufficient. In a decentralized system, power doesn’t reside with a few, so some inaccuracy in KYC votes would hardly matter. Additionally, governance can be designed to remove inaccurate KYC if detected.

### Voting is supposed to be secret, so do we need anonymous voting in blockchain?

Since blockchain is a public ledger, everything is transparent, making anonymous voting challenging. However, zero-knowledge proofs can enable anonymous voting, but they add an extra layer of complexity. But in a more direct democracy using Approval/ Score Voting, where the number of winning candidates per constituency or locality can exceed 100–1000, do we still need anonymous voting?

In direct democracy, the risk of coercion (forcing someone to act against their will, often through threats or pressure) is significantly lower. Coercion becomes impractical at scale. Moreover, transparent voting enhances openness and increases resistance to cyber attacks.
