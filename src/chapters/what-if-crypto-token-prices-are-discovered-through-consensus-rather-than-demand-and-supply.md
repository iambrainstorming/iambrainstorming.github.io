# What if crypto token prices are discovered through consensus of utility rather than demand and supply?

## date: "2022-12-19"

---
categories:

- "blockchain"
- "cryptocurrency"
- "dex"

---

> “The stock market is filled with individuals who know the price of everything, but the value of nothing.” — Phillip Fisher

Scams involving cryptocurrency are extremely prevalent.
The majority of coins on the cryptocurrency market are worthless meme coins, but they nevertheless manage to dupe individuals into parting by enticing them to grow their money and making them rich in no time.
Crypto scams are currently not limited to big cities now they have even begun targeting underdeveloped villages in nations like India.

The issue is caused by the price being determined by the supply and demand of tokens on exchanges without considering their utility. The prices of tokens depend on how many people you manage to fool, and the scammer's ability to make a sudden spike through pump and dump.

Crypto scams, also negatively impact useful coins, and all currency prices move in sync, both good coins, and bad coins get dumped in a beer market.

## Bad money drives out good, so we need to eliminate the bad money

The price of tokens derived through demand and supply is suboptimal. It doesn't include a consensus from [everyone or stakeholders](https://amiyatulu.github.io/blog/shivarthu/tyranny_of_the_majority.html), but just the interacting party. So, they are free to produce as much as negative externality they like without any consequences.

Can we discover prices through consensus and using human rationality rather than speculation, increase stability of coins prices and curtail [FUD](https://en.wikipedia.org/wiki/Fear,_uncertainty,_and_doubt)? There may be some way out.

The score schelling game can assist in determining cryptocurrency prices in decentralized exchanges by consensus and human reason.

The algorithm is provided in the following link:
[Score schelling game](./shivarthu/Shivarthu.md#price-discovery-of-positive-externality-through-score-schelling-game)

But setting an exchange using score schelling game is not without challenges. One of the problem is arbitrage. If the AMM price is lower than the market price, then people will drain all the liquidity and sell it at a higher price in the market. The solution can be the ability to withdraw after a month or have a KYC so that you can't withdraw tokens after certain limits.
Similarly, if the demand and utility of the token are more and the price is set lower, it can create a shortage, and more people will not be benefited, so, prices need to be increased through consensus.

> Another way is to tax the shit coins and subsidize the good coins based on the price discovery, and this won't impact the liquidity or create the problem of arbitrage, neither KYC is needed.
> Taxing can be done using market makers like Uniswap, and taxes collected are sold at lower discovered prices to buy or collect good coins and hence plummeting the shitcoin price and good coins collected are given as subsidies while exchanging the good coins . Liquidity providers can also be incentivized with tax collected.

## **Rationality, Disinformation and Nudge**

Only a nudge while buying from an exchange can work to many extents.
For example in real world, Adani stocks got plummeted by the Hindenburg report.

A decentralized cryptoexchange with [a good governance](https://amiyatulu.github.io/blog/shivarthu/tyranny_of_the_majority.html) can provide a nudge for discovered prices, or provide research review and discussion about the advantages, disadvantages, security and application of the cryptocurrency.

An example nudge: "The price of the coin derived by decentralized experts is this. Do you want to buy the token at this price?"

We also need to have good institutes to stop disinformation by scammers. [Social media](./what-do-we-need-to-decentralize-in-the-coming-years.md) are usually a good target for online fraud.

We can slowly increase the complexity of exchange with passing year that includes providing liquidity at predicted prices.

**An example exchange:**

Discovering price in crypto exchange using score Schelling game based on coin utility.

Bitcoin = 0.1
Ethereum = 0.4
Polkadot = 0.3
Near = 0.2

Exchange:

2 Near = 1 Ethereum

To calculate the price you need to take into account:

1) Utility of the token (Most priority)
2) Total Supply of token
3) Inflation or deflation of token
4) Demand for token

KYC of user, with limits to how much they can withdraw every day.

There can be incentives for providing liquidity, and the ability sale your token at the discovered price during the initial coin offering.

Price discovery every day or weekly.

## What will be impact of other exchanges?

[Details in the link.](https://amiyatulu.github.io/blog/shivarthu/consensus_price_discovery.html)

## A better method that don't require KYC

The problem lies in whether sufficient liquidity is available. To address this issue, each participating blockchain can provide incentives for providing liquidity, similar to staking mechanisms. By providing liquidity, individuals can earn more tokens through minting as rewards. This incentivizes the creation of a steady pool of liquidity.

> In this way, we can create an ecosystem of supply chains with more accurate price discovery, making money available to everyone in a fair and just manner. No more FUD (fear, uncertainty, and doubt) or trading based on speculation rather than utility.

Some work thats already done on prediction market:

[Zeitgeist](https://github.com/zeitgeistpm/zeitgeist/tree/main)

[Docs](https://docs.zeitgeist.pm/docs/category/learn)

## Prototype code:

[Code](https://github.com/reaudito/uniswap-tax)

A * B = constant_product

Predict bad token:

If B is bad token
  If swap A {{
      Substract from constant product
  }}

  If swap B {{
      Add to constant product
  }}


```rust
struct UniswapSimulator {
    reserve_a: f64,
    reserve_b: f64,
    constant_product: f64,
}

impl UniswapSimulator {
    fn new(reserve_a: f64, reserve_b: f64) -> Self {
        let constant_product = reserve_a * reserve_b;
        UniswapSimulator {
            reserve_a,
            reserve_b,
            constant_product,
        }
    }

    fn get_price(&self) -> f64 {
        self.reserve_b / self.reserve_a
    }

    fn swap(&mut self, amount_in: f64, token_in: &str) -> f64 {
        match token_in {
            "A" => {
                let new_reserve_a = self.reserve_a + amount_in;
                let new_reserve_b = self.constant_product / new_reserve_a;
                let amount_out = self.reserve_b - new_reserve_b;
                self.reserve_a = new_reserve_a;
                self.reserve_b = new_reserve_b;
                amount_out
            }
            "B" => {
                let new_reserve_b = self.reserve_b + amount_in;
                let new_reserve_a = self.constant_product / new_reserve_b;
                let amount_out = self.reserve_a - new_reserve_a;
                self.reserve_a = new_reserve_a;
                self.reserve_b = new_reserve_b;
                amount_out
            }
            _ => panic!("Invalid token type. Use 'A' or 'B'."),
        }
    }

    fn add_liquidity(&mut self, amount_a: f64, amount_b: f64) {
        self.reserve_a += amount_a;
        self.reserve_b += amount_b;
        self.constant_product = self.reserve_a * self.reserve_b;
    }

    fn remove_liquidity(&mut self, liquidity_fraction: f64) -> (f64, f64) {
        let amount_a = self.reserve_a * liquidity_fraction;
        let amount_b = self.reserve_b * liquidity_fraction;
        self.reserve_a -= amount_a;
        self.reserve_b -= amount_b;
        self.constant_product = self.reserve_a * self.reserve_b;
        (amount_a, amount_b)
    }

    fn change_constant_product(&mut self, value: f64) {
        self.constant_product += value;
    }
}

fn pool_swap_a() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_b_received = pool.swap(10.0, "A");
    println!("Swapped 10 A for {:.2} B", amount_b_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_plus_constant_product_swap_a() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_b_received = pool.swap(10.0, "A");
    println!("Swapped 10 A for {:.2} B", amount_b_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_minus_constant_product_swap_a() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(-50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_b_received = pool.swap(10.0, "A");
    println!("Swapped 10 A for {:.2} B", amount_b_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_plus_constant_product_swap_b() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_a_received = pool.swap(10.0, "B");
    println!("Swapped 10 B for {:.2} A", amount_a_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_minus_constant_product_swap_b() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(-50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_a_received = pool.swap(10.0, "B");
    println!("Swapped 10 B for {:.2} A", amount_a_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn main() {
    pool_swap_a();
    println!("\n\n\nSwap A, add to constant factor");
    pool_plus_constant_product_swap_a();
    println!("\n\n\nSwap A, substract from constant factor");
    pool_minus_constant_product_swap_a();
    println!("\n\n\nSwap B, add to constant factor");
    pool_plus_constant_product_swap_b();
    println!("\n\n\nSwap B, substract from constant factor");
    pool_minus_constant_product_swap_b();

    println!(r#"
        If B is bad token:

        If swap A {{
            Substract from constant product
        }}

        If swap B {{
            Add to constant product
        }}
    "#);

    pool_minus_constant_product_swap_a();
    pool_plus_constant_product_swap_b();

}
```

## Memecoins Drain Liquidity from the Broader Altcoin Market

[Waiting for altcoin season? Data suggests it’s already here](https://cointelegraph.com/news/waiting-for-altcoin-season-data-suggests-it-s-already-here)

Every time Bitcoin dominance drops, analysts say altcoin season is coming. But data suggests that the altseason already came and went.

### 1. **Concentration of Capital in Memecoins**
Memecoins, such as Dogecoin (DOGE), Shiba Inu (SHIB), and newer iterations like PEPE or WIF, often attract significant attention due to their viral nature, community-driven hype, and low entry costs. These coins can experience massive price surges in short periods, drawing in both retail and institutional investors looking for quick profits.

- **Liquidity Shift**: When investors allocate funds to memecoins, they are effectively pulling capital away from other altcoins. This reduces the available liquidity in the broader altcoin market, as money that could have been invested in more established projects or innovative blockchain solutions is instead concentrated in memecoins.
- **Opportunity Cost**: The opportunity cost of investing in memecoins is high. Funds locked into speculative memecoins are not available to support other projects, potentially stifling innovation and growth in the broader crypto ecosystem.

### 2. **Speculative Behavior and Market Sentiment**
Memecoins thrive on speculation and social media-driven FOMO (fear of missing out). This creates a feedback loop where investors prioritize short-term gains over long-term value creation.

- **Diversion of Attention**: Memecoins often dominate headlines and social media discussions, overshadowing meaningful developments in the broader altcoin space. Investors may focus disproportionately on memecoins, neglecting projects with stronger fundamentals or real-world use cases.
- **Volatility and Risk**: The highly volatile nature of memecoins can lead to rapid inflows and outflows of liquidity. When memecoins crash, investors may withdraw entirely from the crypto market rather than reallocating funds to other altcoins, further reducing overall liquidity.

### 3. **Market Fragmentation**
The proliferation of memecoins contributes to market fragmentation, where liquidity is spread thinly across thousands of tokens. This fragmentation has several implications:

- **Dilution of Liquidity**: Instead of concentrating liquidity in a smaller number of high-quality projects, the crypto market becomes fragmented, with liquidity dispersed across countless memecoins. This makes it harder for individual altcoins to maintain sufficient trading volume and price stability.
- **Barriers for New Projects**: Established altcoins and emerging projects face increased competition for funding and attention. With so many memecoins vying for investor interest, legitimate projects may struggle to attract the liquidity needed to grow and innovate.

### 4. **Retail Investor Dominance**
Memecoins tend to attract a large number of retail investors who may lack the sophistication or knowledge to evaluate the broader altcoin market. This demographic shift can have several effects:

- **Short-Term Focus**: Retail investors are often more interested in quick profits than long-term investment strategies. This mindset encourages frequent trading and speculative behavior, which can destabilize the broader market.
- **Reduced Institutional Participation**: Institutional investors, who typically seek stable and predictable markets, may be deterred by the volatility and unpredictability caused by memecoins. Their reduced participation can further erode liquidity in the broader altcoin market.

### 5. **Regulatory and Reputational Risks**
The rise of memecoins has drawn scrutiny from regulators and critics, who often view them as speculative bubbles or even scams. This negative perception can have ripple effects on the broader crypto market:

- **Loss of Credibility**: The association of cryptocurrencies with memecoins can damage the reputation of the entire industry, making it harder for legitimate projects to gain trust and attract investment.
- **Regulatory Crackdowns**: If regulators target memecoins due to concerns about fraud or market manipulation, the resulting uncertainty can lead to a liquidity crunch across the crypto market.

### Conclusion
In summary, memecoins can drain liquidity from the broader altcoin market by concentrating capital in speculative assets, diverting attention from meaningful projects, fragmenting the market, encouraging short-term behavior, and creating reputational risks. While memecoins can provide entertainment and opportunities for profit, their dominance may hinder the development of a more mature and sustainable crypto ecosystem.

**Memecoins drain liquidity from the broader altcoin market by concentrating capital in speculative assets, diverting attention from meaningful projects, fragmenting the market, encouraging short-term behavior, and creating reputational risks.**


### **Key Idea: Median Price Discovery with Commit-and-Reveal Scheme**

The core concept here is to use a **median price discovery mechanism** to determine the price of a token based on rational participants' inputs (e.g., bids and asks). A **commit-and-reveal scheme** ensures that participants cannot manipulate the process by observing others' actions before committing their own. Additionally, **time locks** and **circuit breakers** are used to prevent bulk arbitrage and drastic price changes.

Let’s examine each component:

---

### **1. Median Price Discovery**
#### **How It Works**
- Participants submit their proposed prices for the token.
- The system calculates the **median price** from these submissions, which becomes the reference price for trades.
- This approach minimizes the influence of outliers (e.g., manipulative bids or asks) because the median is less sensitive to extreme values than the mean.

#### **Strengths**
- **Resilience to Manipulation**: The median reduces the impact of malicious actors submitting artificially high or low prices.
- **Decentralized Price Discovery**: Multiple participants contribute to price determination, avoiding reliance on a single source.

#### **Weaknesses**
- **Rationality Assumption**: The system assumes that participants are rational and aim to provide accurate price estimates. However, irrational or malicious actors could still submit skewed prices.
- **Low Participation Risk**: If participation is low, the median may not reflect true market demand, leading to inefficiencies.

---

### **2. Commit-and-Reveal Scheme**
#### **How It Works**
- Participants commit to their price submissions without revealing them publicly.
- After a predefined period, participants reveal their committed prices.
- The system then calculates the median price based on the revealed submissions.

#### **Strengths**
- **Prevents Front-Running**: Since participants cannot see others' submissions during the commit phase, they cannot adjust their own submissions to manipulate the outcome.
- **Fairness**: All participants have an equal opportunity to influence the price discovery process.

#### **Weaknesses**
- **Complexity**: The commit-and-reveal process introduces additional steps, which may deter casual users.
- **Coordination Overhead**: Ensuring timely commitment and revelation requires coordination and trust in the system.
- **Revelation Risks**: If some participants fail to reveal their commitments, the process may become incomplete or biased.

---

### **3. Time Locks**
#### **How It Works**
- Trades or price updates are locked for a specific time period (e.g., 5 minutes, 1 hour).
- During this period, no new trades or price adjustments can occur.

#### **Strengths**
- **Reduces Arbitrage Opportunities**: By locking prices, you prevent rapid price swings caused by arbitrageurs exploiting discrepancies between your platform and external markets.
- **Stabilizes Prices**: Time locks give the market time to absorb information and stabilize.

#### **Weaknesses**
- **Reduced Liquidity**: Time locks limit trading activity, which can reduce liquidity and increase slippage.
- **User Frustration**: Traders may find the delays inconvenient, especially if they need to react quickly to market conditions.

---

### **4. Circuit Breakers**
#### **How It Works**
- If the price moves beyond a predefined threshold (e.g., ±10% within a short period), trading is paused temporarily.
- Once the circuit breaker is triggered, the system evaluates whether to resume trading or implement additional measures (e.g., recalculating the median price).

#### **Strengths**
- **Prevents Flash Crashes**: Circuit breakers protect against extreme price swings caused by large trades or arbitrage attacks.
- **Promotes Stability**: They give the market time to recover and reassess the situation.

#### **Weaknesses**
- **Disruption**: Frequent circuit breaker activations can disrupt trading and erode confidence in the platform.
- **Threshold Sensitivity**: Setting the right threshold is challenging. Too tight, and the circuit breaker triggers unnecessarily; too loose, and it fails to prevent significant price swings.

---

### **5. Simple Order Book**
#### **How It Works**
- A traditional order book is used to match buy and sell orders.
- The order book operates based on the median price determined by the commit-and-reveal scheme.

#### **Strengths**
- **Familiarity**: Order books are widely understood and trusted by traders.
- **Transparency**: Participants can see the state of the order book, fostering trust.

#### **Weaknesses**
- **Liquidity Dependency**: An order book requires sufficient liquidity to function effectively. Low liquidity can lead to wide spreads and poor price discovery.
- **Arbitrage Risks**: Without additional safeguards, arbitrageurs can exploit price differences between your order book and external markets.

---

### **6. Rational Price Discoverers**
#### **Assumption**
- The system relies on "rational price discoverers" who submit accurate price estimates based on market conditions.

#### **Challenges**
- **Incentives**: How do you incentivize participants to act rationally? Without proper incentives, participants may submit arbitrary or manipulative prices.
- **Participation**: Attracting enough rational participants to ensure accurate price discovery is non-trivial.

---

### **Evaluation of the Overall Idea**

#### **Strengths**
1. **Mitigates Arbitrage**: The combination of time locks, circuit breakers, and a median price discovery mechanism reduces opportunities for arbitrage.
2. **Fair Price Discovery**: The commit-and-reveal scheme ensures fairness and minimizes manipulation risks.
3. **Stability**: Circuit breakers and time locks promote price stability, reducing volatility.

#### **Weaknesses**
1. **Complexity**: The multi-layered approach (median price, commit-and-reveal, time locks, circuit breakers) introduces significant complexity, which may deter users.
2. **Liquidity Concerns**: Time locks and circuit breakers reduce liquidity, making the platform less attractive to traders.
3. **Adoption Challenges**: Convincing users to adopt a new system (especially one requiring KYC or other restrictions) is difficult, particularly in decentralized ecosystems.

---

### **Practical Implementation Considerations**

1. **Incentivizing Rational Participants**
   - Offer rewards (e.g., tokens, discounts on fees) to participants who consistently submit accurate prices.
   - Penalize malicious behavior (e.g., skewing prices) by slashing deposits or banning accounts.

2. **Hybrid Approach**
   - Combine the median price discovery mechanism with a traditional AMM (Automated Market Maker) to balance fairness and liquidity.

3. **Community Governance**
   - Allow the community to vote on parameters like circuit breaker thresholds, time lock durations, and incentives for price discoverers.

4. **Testing and Iteration**
   - Pilot the system on a small scale to identify and address potential issues before full deployment.

---

### **Conclusion**

Your idea of using a **median price discovery mechanism** with a **commit-and-reveal scheme**, **time locks**, and **circuit breakers** is a creative and theoretically sound approach to mitigate arbitrage and promote fair price discovery. However, its success depends on overcoming challenges related to complexity, liquidity, and user adoption.

By carefully designing incentives, testing the system iteratively, and combining it with existing mechanisms (e.g., order books or AMMs), you can create a robust framework that balances fairness, stability, and usability.

**This idea has potential but requires careful design and implementation to address challenges like complexity, liquidity, and user adoption. Combining it with incentives, community governance, and hybrid mechanisms can enhance its effectiveness.**


## **Challenges in Eliminating Shitcoins**

#### **a. Human Psychology and Speculation**
- **Meme Coins Thrive on Hype**: Meme coins often gain popularity due to viral marketing, celebrity endorsements, or community-driven narratives. These factors are difficult to quantify or regulate through voting or price discovery mechanisms.
- **Speculative Behavior**: Many investors buy meme coins not because they believe in their utility but because they hope for quick profits. This behavior persists even if the token is flagged as low-quality.

#### **b. Decentralization and Forking**
- **Forking**: If a token is delisted or flagged as low-quality, its creators or supporters can fork it into a new version. This undermines the effectiveness of any filtering mechanism.
- **Off-Chain Trading**: Even if a token is removed from your platform, users can trade it off-chain or on other platforms, bypassing your restrictions.

#### **c. Community Resistance**
- **Token Communities**: Meme coins often have strong, vocal communities that resist attempts to delist or devalue their tokens. These communities may retaliate (e.g., by creating forks or migrating to other platforms).

#### **d. Lack of Objective Criteria**
- Defining what constitutes a "shitcoin" is subjective. Some tokens may appear low-quality initially but gain utility later. Overly restrictive criteria could stifle innovation.

---

### **Potential Benefits of Commit and Reveal voting**

Despite the challenges, commit-and-reveal voting and rational price discovery can offer some benefits in reducing the prevalence of shitcoins:

#### **a. Improved Token Quality**
- By requiring tokens to pass a voting or price discovery process, you can filter out tokens with no utility, clear signs of manipulation, or fraudulent intent.

#### **b. Community Engagement**
- Involving the community in decision-making fosters trust and transparency. Users are more likely to support a platform where they have a say in governance.

#### **c. Reduced Manipulation**
- Commit-and-reveal voting and median price discovery reduce the ability of bad actors to manipulate token listings or prices.

---

### **Limitations in Practice**

#### **a. Cannot Fully Eliminate Shitcoins**
- Shitcoins and meme coins thrive on decentralized ecosystems where barriers to entry are low. Even if you eliminate them from your platform, they can exist elsewhere.

#### **b. Speculative Behavior Persists**
- The root cause of meme coin popularity—human psychology and the allure of quick profits—cannot be eliminated by technical or governance mechanisms alone.

#### **c. Regulatory Risks**
- Enforcing strict token listing criteria or voting mechanisms may attract regulatory scrutiny, especially if perceived as censorship or centralization.

---

### **Recommendations for Implementation**

If you want to use commit-and-reveal voting and rational price discovery to reduce the prevalence of shitcoins, consider the following recommendations:

#### **a. Hybrid Approach**
- Combine voting mechanisms with other filters, such as:
  - Minimum trading volume requirements.
  - Proof of utility or development activity.
  - Reputation systems for token creators.

#### **b. Incentivize Rational Participation**
- Reward participants who consistently provide accurate votes or price estimates.
- Penalize malicious behavior (e.g., submitting false votes or skewed prices).

#### **c. Educate the Community**
- Educate users about the risks of investing in low-quality tokens and promote transparency in token issuance.

#### **d. Allow Appeals**
- Provide a mechanism for token creators to appeal delisting decisions, ensuring fairness and reducing backlash.

#### **e. Focus on Utility**
- Prioritize tokens with clear use cases, active development teams, and real-world applications. This shifts the focus away from speculative assets.

---

### **Conclusion**

Commit-and-reveal voting and rational price discovery can help **reduce the prevalence of shitcoins or meme coins** by introducing objective criteria and community-driven governance. However, these mechanisms cannot fully eliminate shitcoins due to the decentralized nature of cryptocurrencies, human psychology, and the ease of forking or trading elsewhere.

To maximize effectiveness, combine these mechanisms with other filters, incentives, and educational efforts. Ultimately, the goal should be to promote high-quality tokens while maintaining the principles of decentralization and user empowerment.

**Final Answer**: **Commit-and-reveal voting and rational price discovery can help reduce shitcoins but cannot fully eliminate them due to human psychology, decentralization, and speculative behavior. A hybrid approach combining these mechanisms with additional filters and incentives is more effective.**




## Supply Chains

**Different supply chains can be built with their own cryptocurrency.**

Supply chains can use free market pricing derived from demand and supply where required rather than consensus pricing, or price derived by governance.

1) No price ceiling or floor so that there are no shortage or wastage.
2) A large number of buyers and sellers
3) Subsidize positive externality and tax negative externality
4) Perfect information with all information of utilities available
5) No more than average 5 hours of working hours per day for employees and no [bullshit jobs](https://en.wikipedia.org/wiki/Bullshit_Jobs)
6) Sustainable production
7) Governance with expertise that takes care of the whole system like setting taxes or subsidies.
6) Equitable token distribution, so that everyone can create a demand and rich doesn't get richer.

## Food Delivery
**Take for example modified version of the cooked food supply chain such as Zomato.**

1) Free monthly tokens can be given to kyc users collected from the [randomized tax]([https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#randomized-tax-collection). With monthly token you can make some purchases for free.
2) Large number of buyers and sellers
3) Tax unhealthy food, which means a percentage of transaction cost is collected and added to a governance account.
4) Subsidize healthy food like fruits and vegetables which means the buyers or sellers are given a few additional tokens during the transaction.
5) Governance with expertise that takes care of the whole system like setting taxes or subsidies.
6) No commission by the trade maker or app provider

Subsidies cause more trade and can be wasteful due to deadweight loss if it's not a positive externality.

To enhance the platform, it is necessary to develop a Decentralized Autonomous Organization (DAO) for shipment management, as well as a reputation system for both buyers and sellers. This reputation system should incorporate attributes such as the quality of food offered by sellers, and handle issues related to information asymmetry.

## Ride sharing

**Now look at ride-sharing supply chain like ola:**

1) Free monthly tokens can be given to KYC user collected from the randomized tax. It keeps the currency deflationary with a fixed supply. ([https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#randomized-tax-collection](https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#randomized-tax-collection))
2) Large number of buyers and sellers
3) Tax fossil fuel bikes or cars
4) Subsidize electric bikes or bicycle ride
5) Governance with expertise that takes care of the whole system like setting taxes or subsidies and women's safety.
6) No commission by the trade maker or app provider


## Agriculture

**Another example can be the supply chain of precision farming** (like hydroponics agriculture, biofloc fish farming, [hydroponics livestock feed](https://agricultureguruji.com/hydroponic-fodder/)) :

[The Netherlands might be a small country, but it's the second-largest exporter of agriculture in the world.](https://www.weforum.org/agenda/2019/11/netherlands-dutch-farming-agriculture-sustainable/?utm_source=Facebook%20Videos&utm_medium=Facebook%20Videos&utm_campaign=Facebook%20Video%20Blogs)

1) Governance to allocate money to farmers through algorithm like score schelling game for buying equipment for precision farming that can be paid through installment.
2) [Expertise governance](https://github.com/amiyatulu/shivarthu) for collecting data and analyzing data collected from precision farming and providing feedback to farmers.
3) Decentralized supply chain tracking system from production to consumers, so that both consumer and producers get fair prices, and there is no surplus/wastage or shortages.
4) Some UBI to consumers so that they can always create a demand.
5) Incentivizing learning for precision farming.

Vertical farming offers several benefits compared to traditional agricultural methods:

1. Increased crop yield: Vertical farming maximizes the use of space by stacking plants vertically, allowing for multiple layers of cultivation. This approach can significantly increase crop yields per square meter of land compared to traditional farming methods.

2. Efficient land use: Vertical farms can be built in urban areas, unused buildings, or even indoors, making them independent of arable land availability. This enables farming in densely populated areas, reducing the need for long-distance transportation of produce.

3. Year-round cultivation: Vertical farming utilizes controlled environments, such as indoor facilities or greenhouses, which enable year-round cultivation regardless of external weather conditions. This leads to consistent crop production and reduces the risks associated with seasonal variations.

4. Water conservation: Vertical farming employs hydroponic or aeroponic systems that recycle and conserve water. These methods use significantly less water than conventional farming, as water is efficiently delivered directly to the roots of plants, minimizing wastage through evaporation or runoff.

5. Reduction in pesticide use: The controlled environment of vertical farms reduces the risk of pest infestations, decreasing the need for chemical pesticides. Additionally, vertical farming systems often incorporate integrated pest management techniques and can employ natural predators to control pests effectively.

6. Energy efficiency: Although vertical farms require energy for lighting, heating, and cooling, advancements in LED technology and energy management systems have made them more energy-efficient over time. Furthermore, renewable energy sources, such as solar panels or wind turbines, can be integrated into vertical farming systems, further reducing the carbon footprint. The photosynthesis process has an upper limit of around 11% in terms of its maximum theoretical efficiency. Consequently, LED lights utilized in vertical farming exhibit inefficiency. However, it remains possible to employ natural light/sunlight for vertical farming purposes.

7. Reduced transportation and logistics: By establishing vertical farms close to urban centers or directly within them, the distance between the farm and consumer is significantly reduced. This reduces the time and energy required for transportation, leading to fresher produce and lower carbon emissions associated with food transportation.

8. Enhanced food security: Vertical farming can contribute to local food production, reducing dependence on long-distance imports and enhancing food security. It provides the opportunity to cultivate a wide variety of crops, including specialty or exotic produce, that may not be locally available through conventional farming.

9. GMOs in Controlled Environments: The possibility of using GMOs exists in precision agriculture, such as precision vertical farming or hydroponics, where cultivation occurs in controlled environments without [leakage into the surrounding environment](https://cban.ca/gmos/issues/environmental-impacts/). GMOs with high yields and nutritional benefits can be considered, but their use requires appropriate regulations and rigorous testing (e.g. [Nontarget Effects of Genetic Manipulation](http://natureinstitute.org/nontarget/)) to ensure their safety for human health. Additionally, the crops are not patented, which prevents the creation of monopolies and protects farmers. One example of GMOs involves producing genetically modified sugarcane or corn using aeroponics or hydroponics, and then utilizing them to [produce vegetable oil with yeast](https://grist.org/food/cooking-oil-deforestation-startup-sugarcane-solution/). This approach can help address the deforestation problem and reduce environmental impact, making it conducive to positive outcomes in life cycle assessments (LCAs).

10. Mitigation of environmental impact: By minimizing land use, conserving water, reducing pesticide usage, and optimizing energy consumption, vertical farming has the potential to mitigate some of the negative environmental impacts associated with conventional agriculture, such as deforestation, water pollution, and greenhouse gas emissions.

11. Educational and research opportunities: Vertical farming serves as a platform for education, research, and innovation in agriculture and sustainable food production. It allows for experimentation with new techniques, crop varieties, and cultivation methods, fostering advancements in agricultural practices and knowledge.

While vertical farming has numerous benefits, it also faces challenges related to initial investment costs, energy consumption, and scalability. However, ongoing technological advancements and increasing interest in sustainable food production are expected to address these challenges over time.

> The high upfront costs of precision vertical farming, which amount to crores, pose a significant barrier for individuals to establish such operations. However, through the power of collective funding and governance, vertical farming can become both accessible and practical. One possible approach is to consider community investment, with each person contributing around $25 (which [can be paid back in form of UBI or agricultural outputs](./empowering-communities-decentralizing-supermarkets-through-public-ownership-and-control.md)), to establish community-run vertical farming ventures.

Privacy and large-scale computation are an important requirements for building decentralized supply chains. [New blockchains](https://fleek.network/) and [zero knowledge proofs](https://www.risczero.com/) are do made to solve these issues.
