# How to break the power law of wealth?

Draft (to write complete elaboration)


1. **Stakeholder selection:** Through kleros, Score +5 to -5. 

2. **Stakeholder empowerment:** Once selected, the stakeholder receives **non-transferable voting tokens based on their score**.

Then the selected stakeholder receives **non-transferable governance tokens based on their score**:

| Score | Governance tokens |
| ----: | ----------------: |
|    +1 |               100 |
|    +2 |               200 |
|    +3 |               300 |
|    +4 |               400 |
|    +5 |               500 |
|    -1 |                 0 |
|    -2 |                 0 |
|    -3 |                 0 |
|    -4 |                 0 |
|    -5 |                 0 |


3. **Conviction voting:** That stakeholder uses those non-transferable tokens in conviction voting to allocate funds. The longer they maintain conviction behind a proposal, the more voting power their locked tokens accumulate.

`Voting power of stake holder = sqrt( Goverance tokens stake * time governance token are locked )`


## It breaks the power law:
This is real progress — this formula, if implemented correctly, actually achieves what the last several iterations didn't: it makes final voting power **concave** in stake rather than linear.


The *math* actually breaks scale-invariance — final influence grows as `sqrt(stake)` rather than `stake`, which measurably flattens the tail rather than just adding honesty (Kleros) or blocking secondary markets (non-transferability) on top of an unchanged linear core. But it only holds if:
- governance tokens are aggregated per identity before the `sqrt`, not per conviction-lock position, and
- identity is Sybil-resistant, so "per identity" means something.

Yes, kleros is good at providing sybil-resitance identity for stakeholders. 


## Why conviction voting fails?

### The duration bonus makes it worse, not better

This is the part I'd flag most strongly. Locking for longer duration to boost selection probability is exactly the vote-escrow (ve-tokenomics) model — the same pattern used by Curve's veCRV and its many forks. That model has a well-documented empirical failure mode: illiquidity is cheap for the wealthy and expensive for everyone else. A whale can lock a large position for 6 months without financial strain; a smaller holder who needs liquidity for near-term expenses can't afford to lock as long, even if they wanted equal influence. So the duration multiplier compounds the stake advantage rather than offsetting it — it's an additional axis on which wealth buys more influence, not less. The "ve-token wars" and bribery markets that emerged around Curve are the real-world evidence for this dynamic; I'd treat any lock-duration-weighted mechanism as suspect for an equality goal unless the multiplier is capped or made identity-bound rather than capital-bound.

## Kleros and truth discovery

Juror **draw probability is still weighted by stake** — same mathematical shape as your current conviction-lottery, just with a different name. A whale with 1,000x the stake of a small holder still gets ~1,000x the expected number of draws over time. Everything I said in my previous message about expected-value convergence under weighted lotteries applies identically here: **randomness changes variance, not the expectation, and the expectation is still linear in wealth.**


### Why it still works despite stake-weighted selection

The Schelling mechanism's guarantee isn't "the *population* of jurors is representative of wealth" — it's "*whichever* jurors get drawn are individually incentivized to report their honest signal rather than a strategic one." Those are independent properties. Selection weighting determines *who* answers; the coherence-payoff structure determines *whether they answer truthfully once selected*. A whale who gets drawn 1,000x more often than a small holder is still, each time they're drawn, better off voting their genuine assessment of the proposal (−5 to +5) than voting something self-serving — because the payoff depends on matching the eventual majority, not on the size of their stake or their relationship to the proposal.
