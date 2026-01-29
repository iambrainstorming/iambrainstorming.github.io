
# Decentralized Autonomous Organization (DAO) Fund Management: How to Allocate and Govern Funds


Date: 29-01-2026 


## What is a DAO ?
A Decentralized Autonomous Organization (DAO) is an organization that is run by code, governed by its members, and operates without a central authority.

Think of it as a digital cooperative where rules are transparent, decisions are collective, and execution is automatic.

In simple terms

- Decentralized → No single boss or central office
- Autonomous → Rules are enforced automatically by software (smart contracts)
- Organization → People coordinate money, work, and decisions toward shared goals


#  Conviction Voting

Conviction voting is a governance mechanism that allows token holders to amplify their voting power by locking their tokens for longer periods. It balances stake (how many tokens a person owns) with time commitment (how long they are willing to lock them), creating a system that rewards strong, long-term conviction rather than short-term speculation.

##  🧠 How Conviction Voting Works

In traditional 1-token-1-vote systems:

- The weight of your vote = the number of tokens you own.
- There’s no time element — you can vote and instantly transfer your tokens elsewhere.

In *conviction voting*, however:

- You can *choose a “conviction level”*, which multiplies your vote strength.
- The higher your conviction, the *longer your tokens are locked* after the vote.


So, if you vote with *5x conviction*, your vote counts *5 times stronger*.
---


## ✅ Advantages

### 1. *Rewards Long-Term Commitment*

Conviction voting ensures that those willing to *lock tokens* (showing real belief in the proposal) get more voting power. It aligns influence with *skin in the game*.

### 2. *Discourages Short-Term Speculation*

Traders who hold tokens for short-term profit won’t want to lock their tokens, reducing governance manipulation by whales who don’t care about network health.

### 3. *Enhances Governance Stability*

Since tokens stay locked after voting, it prevents rapid governance swings and promotes decisions that consider *long-term effects*.

### 4. *Encourages Participation Diversity*

Users can choose their own balance between *liquidity and influence* — you don’t need to stake huge amounts to matter, just conviction.

---

## ❌ Disadvantages

### 1. *Complexity for Users*

Conviction voting is *hard to understand* for newcomers — especially choosing conviction levels, lock times, and understanding enactment periods.

### 2. *Liquidity Trade-Off*

High conviction locks funds for long durations. This reduces *liquidity* and can discourage smaller holders from engaging in governance.

### 3. *Wealth Bias Still Exists*

Even though conviction helps smaller holders, *whales* can still dominate governance by voting with both *high tokens* and *high conviction*.

### 4. *Voter Fatigue*

Since governance is continuous, long-term token locking might reduce enthusiasm for frequent participation.

---

## 🧭 How Conviction Voting Works

### 🌱 The Simplest Version

Voters give a score between *1 and 10* on a proposal.
After all votes are submitted, the *mean (average)* score is calculated.

If the *mean score* is *6* for a handle or proposal, then than handle receives *600 tokens* as an incentive.
These incentives are distributed *every three months*.

*Question:*
Should voters be rewarded with incentives just for participating in voting?

---

### ⚙️ Adding More Complexity

In this version, voters still give a score between *1 and 10*.
The *mean score* is calculated, and handle receive *non-tradable reputation tokens* instead of regular tokens.

For example, if the mean is *6*, a handle earns *600 reputation tokens*.
These tokens *cannot be traded or sold* but can be *used for conviction voting* for incentive distributions.

This design rewards honest and aligned voting with *governance power*, not just money.

One common criticism is that people are not always rational and do not make fully informed or optimal decisions, especially in specialized fields. Additionally, many individuals lack the necessary expertise or specialization to make sound judgments in these areas. To address this, one potential solution is to introduce _reputation scores_ for academics and researchers. These scores could reflect their expertise, track their contributions, and assess their credibility. By relying on individuals with higher reputation scores to make decisions on behalf of others, we can enhance the quality and reliability of decisions in specialized domains.


---
### 🔒 Adding further Complexity With Commit–Reveal Mechanism

To make voting fair and tamper-proof, *conviction voting in SymbioSky* uses a *commit–reveal scheme*:

1. *Commit Phase:*
   Voters *submit a hashed version* of their vote (keeping it secret).
   No one can see how others voted during this phase.

2. *Reveal Phase:*
   After the commit period ends, voters *reveal* their votes.
   The system verifies their vote matches the earlier hash.

3. *Reward Phase:*
   The *mean score* is computed.

   - Voters *close to the mean* earn more tokens.
   - Voters *far from the mean* lose some tokens.

4. *Randomization*

  Randomization *reduces bias* in decision making. No individual or faction can keep influence permanently because selection is unpredictable. Randomness makes it difficult for interest groups to capture the decision-making process. Instead of requiring everyone to participate directly, the system can use *random selection of jurors*, where individuals with higher conviction weight have a greater chance of being chosen, while still remaining resistant to Sybil attacks.

#image("payoff.png")

#### 💡 Why It’s Called a “Schelling” Mechanism

Economist Thomas Schelling introduced the idea of focal points — outcomes that people naturally converge on because they expect others to do the same.

In the SchellingCoin system:

The “focal point” is truth.

Each person expects others to report the truth.

Since everyone thinks this way, being honest becomes the best strategy.


This creates a self-reinforcing honesty loop:
```
   I expect you to be honest →
   You expect me to be honest →
   So both of us are honest →
   And truth wins collectively.
```


## Too Much UI, Too Little Engagement

A more complex or multi-step user interface (UI) can significantly hinder user experience by increasing the cognitive load on users. When users are required to navigate through multiple steps or screens to complete a task, it can lead to frustration, confusion, and a higher likelihood of abandonment. Complex UIs often require users to remember multiple steps, which can be especially challenging for first-time users or those who are not tech-savvy. This can result in a poor user experience, ultimately leading to lower engagement and satisfaction with the product or service.

## The Cost of Complexity: Extended Development Cycles and Missed Opportunities
Increased complexity in software development leads to longer development cycles, which in turn delays the time to market. When a project becomes more complex, it often requires more detailed planning, more resources, and more rigorous testing. These factors all contribute to extended development timelines, making it harder to deliver a product quickly. As a result, the ability to create value for users or customers is postponed, which can be detrimental in fast-moving markets where early adoption and competitive advantage are crucial.

Moreover, added complexity can introduce more potential points of failure, requiring additional time for debugging and quality assurance. This not only extends the development phase but also increases the risk of project overruns and budget constraints. The longer a project takes to develop, the more likely it is that market conditions, user needs, or business priorities may have changed, further reducing the product's relevance or value upon launch.

- *"We don't even know how the simplified version will work. Should we test the simplified version first, and only add extra complexity if needed by creating another future app?"*



## Game Theoretic View of Convicton Voting

*Game-theoretic view* of conviction voting and *why it creates incentives to tell the truth* (or at least behave honestly and consistently with long-term beliefs).

---

### ✅ *1. Conviction Voting as a Repeated Game*

Conviction voting is not a one-shot vote.
It is a *dynamic repeated game* where players accumulate voting power over time by *locking resources longer*.

### Key components of the game:

- *Time-locked stake = commitment cost*
- *Voting power increases with time* (conviction curve)
- *Opportunity cost* (locked tokens cannot be used for speculation)
- *Delayed effect* (cannot instantly manipulate outcomes)

### Game-theoretic effect:

Players with *short-term strategic or dishonest intentions* cannot cheaply influence decisions.
The equilibrium shifts toward *long-term preferences*, because *payoff depends on duration* rather than raw capital.

---

### ✅ *2. What simulations show*

Research simulations run on conviction voting frameworks (including RadicalXChange, Commons Stack and DAO experiments) show:

### *A. Long-term preferences dominate*

If:

- Honest voter stakes for long time
  vs
- Dishonest voter stakes for a short time

Then the honest voter's influence *grows super-linearly* due to conviction accumulation.

💡 *Short-term attackers lose because they don’t have time to build influence.*

---

### *B. Dishonesty is costly*

If you want to lie (vote for something you don’t truly believe), you must:

- Lock your stake for a long time
- Accept the opportunity cost
- Risk being punished if the lie backfires
- Lose future influence (conviction resets when unvote)

So the *cost of deception* is higher than the cost of truth.

This creates a *truth-telling equilibrium*.

---

### *C. Majority cannot easily bully minorities*

If you hold a minority opinion but commit long-term stake, your influence grows.

This leads to:

- *Minority protection*
- *Less tyranny of the majority*
- *More stable equilibria*

---

### *D. Attackers must lock capital for long*

To manipulate an outcome, an attacker must:

1. Acquire tokens
2. Lock them for a long period
3. Risk losing liquidity
4. Have conviction reset after the vote

Simulations show that *attack cost increases exponentially* with shorter attack horizons.

Thus *truthful long-term participants outperform strategic short-term actors*.

---

### ✅ *3. Incentives for Truth-Telling*

Truth-telling in this system means:

- Voting for the option that aligns with long-term collective welfare
- Voting consistent with your actual belief
- Not switching votes opportunistically

Here’s why conviction voting incentivizes truth:

---

## *1. Long-term signals are stronger than short-term manipulation*

If you lie or flip votes often, you never build conviction.

Truthful, stable behavior → higher long-term influence.

---

## *2. Lock-up makes lying expensive*

Conviction voting introduces a *cost to deception*:

To lie, you must stake for long periods → high opportunity cost.
If your lie is exposed or your position fails, you lose influence.

Truthful voters can stake confidently without fear of being wrong.

---

## *3. Consistency becomes a strategic advantage*

Simulations show that *consistent preferences accumulate disproportionate influence*.

Dishonest strategies are chaotic → fewer time steps to accumulate conviction.

---

## *4. Reputation becomes an asset*

In repeated governance:

- Those who stake long-term on correct/beneficial decisions gain credibility
- Others follow them
- Lying destroys reputation + locked capital

Conviction voting naturally forms *reputation-based equilibria*.

---

### ✅ *4. Why Truth Emerges as a Nash Equilibrium*

Conviction voting resembles a *coordination game with delayed reinforcement*.

Truth-telling is a Nash equilibrium because:

- If everyone else is honest, lying gives less reward because you cannot out-convince them.
- If everyone else lies, honesty still gives long-term advantage because you accumulate conviction due to consistency.

Dishonest voters face:

- Delayed influence
- High switching costs
- Resetting of conviction
- Liquidity loss
- Lower long-term outcomes

Thus *truth-telling becomes the strategy with highest expected long-term payoff*.

---

= ✅ *5. Summary: What Game Theory Says*

- ✔ Long-term voters dominate short-term speculators

- ✔ Dishonest or attack strategies are expensive

- ✔ Truthful, consistent voters gain the most power

- ✔ Conviction acts as a resistance to manipulation

- ✔ Minority long-term opinions retain influence

- ✔ Truth-telling is a stable equilibrium

---


= 🎯 *NASH EQUILIBRIUM IN CONVICTION VOTING*

In a conviction-voting game:

- Players choose *how long* to lock stake (time)
- Players choose *which option* to support (truthful or dishonest vote)
- Influence = f(stake, time)
- Time cannot be reversed
- Influence resets when switching votes

The result is a *dynamic repeated game* with irreversible commitment costs.

There are *three core equilibrium outcomes* that consistently emerge in all simulations and theoretical models.

---

= ✅ *1. Honest Long-Term Commitment Is a Nash Equilibrium*

This is the *primary equilibrium*:

- *Players truthfully reveal their preferences and lock stake for longer periods*, because:

-  Switching vote resets conviction → loses influence
-  Short-term manipulation is costly
-  Others also gain more by sticking with long-term truth
-  Honest long-term participants accumulate disproportionate power

*No player can deviate (lie or shorten their lock time) without losing utility.*

### This is a strong equilibrium because:

- Consistency beats opportunism
- Conviction compounds over time
- Dishonest strategies require too much capital or cost too much time

👉 *Outcome: truthful, stable, long-term voting is optimal.*

---

= ✅ *2. Attackers and Short-Term Manipulators Drop Out*

Another Nash equilibrium emerges:

*Short-term, dishonest, or speculative players do not participate.*

Why?

- They cannot justify long lock periods
- They cannot win over long-horizon voters
- Costs to manipulate exceed potential gain
- Conviction resets on switching makes strategic lying weak

Therefore, many such players *choose not to vote*.

### This is an equilibrium because:

If a short-term attacker deviates (by locking longer), they lose liquidity and suffer a higher opportunity cost than honest voters who are already long-term.

👉 *Outcome: the system filters out dishonest short-term actors naturally.*

---

= ✅ *3. Minority With High Conviction Beats Majority With Low Conviction*

This creates a surprising equilibrium:

*A smaller group telling the truth consistently over long time horizons can dominate a majority with weak, low-conviction participation.*

This means:

- A minority that truly cares → accumulates long lock time → more weight
- Majority with low stake duration → low weight

No one in the minority can improve their payoff by deviating.
No one in the majority can cheaply overwhelm them without long-term commitment.

### This becomes an equilibrium because:

If the majority tries a short-term attack, it fails.
If the minority deviates from honest long-term commitment, they lose their only advantage.

👉 *Outcome: deeply committed truth-oriented minorities stay influential.*

---

### 🌟 Putting it Together

Here are the Nash equilibrium outcomes as a full set:

- ✔ *E1. Truthful long-term voting is stable and optimal*

- ✔ *E2. Dishonest or short-term voters either drop out or fail*

- ✔ *E3. High-conviction minorities can dominate low-conviction majorities*

- ✔ *E4. Collusion is unstable because switching votes resets conviction*

- ✔ *E5. Manipulation is prohibitively costly without long time horizons*

- ✔ *E6. The system converges to honest, consistent preference revelation*

This is fundamentally why thinkers like Glen Weyl and Commons Stack call conviction voting *“a lie-resistant equilibrium system.”*

---
