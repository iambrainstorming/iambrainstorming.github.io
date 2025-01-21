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

[https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#price-discovery-of-projects-through-score-schelling-game](https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#price-discovery-of-projects-through-score-schelling-game)

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
