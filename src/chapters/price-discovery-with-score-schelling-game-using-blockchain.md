---
title: "Price discovery with score Schelling game using blockchain"
date: "2021-06-26"
categories: 
  - "blockchain"
---

![](https://iambrainstorming.files.wordpress.com/2021/06/schelling-game.png?w=718)

[Schelling Game](https://kleros.io/whitepaper.pdf)

**Schelling games can be used to rate a product.**  
For example, you can rate a product from 1-5, without knowing what others are assigning. If the "mean" of all the product rating is near to your rating then you will get incentives, otherwise, your incentives will be deducted. So, you try to match the score with what others will assign based on information available rather than defecting by any arbitrary rating.

Similarly, we can discover the prices of projects that need to be funded from a common funding pool.  
Here is an algorithm:  
1) When you submit a project, you need to provide details of the funding needed for work to be done.  
You can't provide a funding amount value of more than 4/5 power of the total funding pool amount.  
e.g. If the total funding pool has $50000, you can't assign a value larger than $5743  
2) Then, we will have a percentage Schelling game to predict the price. That is, you can predict whether to increase or decrease the funding amount in percentage. Remember, it can't be larger than (Total funding pool amount)^(4/5). Score values will remain from -10 to +10, -10 means 100% decrease, +10 means 100% increase

The range of -10 to +10 has a problem because the mean works best without extreme values. So, if someone gives -10, and others give 1, the mean result can get screwed due to the -10 outlier. So the trick is to remove outliers by computing the standard deviation. Remove all values more than one standard deviation away from the mean. Then, we calculate the new mean of the left values (it consists of 68.27% data of the set).

Code to calculate new mean:

```
import statistics



def calculate_new_mean(items):
    mean = statistics.mean(items)
    print(mean)
    sd = statistics.stdev(items) 
    print(sd)


    #The values less than one standard deviation away from the mean account for 68.27% of the set
    #So we calculate mean of this 68.27% of data removing outlier

    # New data
    new_items = []
    for x in items:
        if x >= mean - sd and x <= mean + sd:
            new_items.append(x)

    print(new_items)

    new_mean = statistics.mean(new_items)
    print(new_mean)
    print("********************")

items = [-10, 1, 1, 1, 5, 1, 1, 7]
calculate_new_mean(items)
# 0.875
# 4.969550137731641
# [1, 1, 1, 5, 1, 1]
# 1.6666666666666667
# ********************
items2 = [-10, -10, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
calculate_new_mean(items2)
# -1.5833333333333333
# 3.941811612428832
# [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
# 0.1
# ********************
items3 = [-10, -10, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, -9, -8, -7, -6, -5, -4, -3, -2, -1]
calculate_new_mean(items3)
# -3.0476190476190474
# 3.8141341150540375
# [0, 0, 0, 0, 0, 0, 0, 0, 0, -6, -5, -4, -3, -2, -1]
# -1.4
# ********************
```

[https://gateway.ipfs.io/ipfs/QmdgL7ytRPSE8vyp5KBffaAjmhGRLusiPcEbt9VWFkgMjf](https://gateway.ipfs.io/ipfs/QmdgL7ytRPSE8vyp5KBffaAjmhGRLusiPcEbt9VWFkgMjf)

  
3) Then, we will do quality score voting Schelling game that checks the project meets the quality guidelines. The score range is 0-5  
4) The amount of funding will be directly proportional to (Predicted Price) \* (Quality Score/5\*2)

Code:

```
total_fund = 200000price = total_fund ** (4/5)print(price)predictprice = [(17411)*(5/5*2), (411)*(5/5*2), (17411)*(5/5*2), (1741)*(2/5*2)]total_predictprices = 0for x in predictprice:    total_predictprices = total_predictprices + xpredicted_price_percentage = []for x in predictprice:    percentage = x / total_predictprices * 100    predicted_price_percentage.append(percentage)money_distribution = []for x in predicted_price_percentage:    money = x * total_fund/100    money_distribution.append(money)print(money_distribution)
```

[https://gateway.ipfs.io/ipfs/QmcPfQFJKzozLMHFkAesDQc9n2CaEh6M8M4VWdsozgWRB9](https://gateway.ipfs.io/ipfs/QmcPfQFJKzozLMHFkAesDQc9n2CaEh6M8M4VWdsozgWRB9)

The algorithm tries to meet the values of teal organization through reduced compensation inequality

[https://gateway.ipfs.io/ipfs/QmQ9mn22T5A2k3NEYCNHwxTjxhzEAoggHMjTeHPUW6zFmo/teal\_compensation.html](https://gateway.ipfs.io/ipfs/QmQ9mn22T5A2k3NEYCNHwxTjxhzEAoggHMjTeHPUW6zFmo/teal_compensation.html)

**Implications of such price discovery**

Prices are discovered based on consensus rather just using demand, supply and speculation as price signals.

In current system, the invisible hand, or competition leads to reaching the equilibrium. Buyers compete with other buyers and sellers compete with other sellers to keep the prices at equilibrium.

The system breaks when there are not enough sellers, as in the case of a monopoly, where corporate eliminates competition by acquiring all big sellers for maximizing profit.

With automation, we hardly need multiple sellers, as a single seller can take care of a supply chain for the whole state.

Neither public good (For such goods, users cannot be barred from accessing or using them for failing to pay for them) is produced by such an economic model.

So what we need is an intrinsic change in how a company functions.

  
A monopoly company owned by the people (decentralized autonomous organization), with both horizontal and vertical scaling with either adding more nodes or increasing the capacity of nodes.

Algorithms like score schelling game can help in equitable fund distributions based on principles of common good.

  
The software running the supply chain or accounting needs to be open source, build with everyone consensus, and can be modified by commons.

  
Example how our education can be decentralized with horizontal and vertical scaling.  
[https://iambrainstorming.wordpress.com/2018/10/02/the-competitive-collaboration-algorithm/](https://iambrainstorming.wordpress.com/2018/10/02/the-competitive-collaboration-algorithm/)
