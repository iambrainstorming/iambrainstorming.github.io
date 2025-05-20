---
title: "Price takers in perfect competition"
date: "2019-01-18"
---

**How to calculate the price of a good?**  
Data and Evidence collection:  
1) The number of people working in different organizations to produce a particular product.  
2) The number of the particular product produced per day, months, year etc.  
3) The time or working hours of employees.

**Time is money.**

> Price is inverse of mean value obtained from the different organization for the number of units produced per unit time (days or months etc) per employee with collaboration and using time not more than 5 hours per day per employee + Raw material cost calculated by the same principle

E = Number of people working in an organization to produce a particular product  
U/D = Number of the particular product or units produced per day  
U/DE = Number of particular units produced per pay per employee with collaboration  
O = Number of organization with same U/DE

An example data

<table><tbody><tr><td>[E]</td><td>[U/D]</td><td>[U/DE]</td><td>[O]</td></tr><tr><td>50</td><td>30</td><td>0.6</td><td>6</td></tr><tr><td>60</td><td>40</td><td>0.666</td><td>9</td></tr><tr><td>80</td><td>50</td><td>0.625</td><td>4</td></tr><tr><td>90</td><td>55</td><td>0.611</td><td>8</td></tr><tr><td>50</td><td>20</td><td>0.4</td><td>3</td></tr><tr><td>50</td><td>25</td><td>0.5</td><td>8</td></tr></tbody></table>

all = \[0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.625, 0.625, 0.625, 0.625, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5\]  
mean(all)  
0.5837368421052631  
Price per unit will be 1/(mean(all))  
1.7131007122892437  
Lets first compute price for each organization keeping raw material cost as same:

1.666  
1.5015  
1.6  
1.63  
2.5  
2.0

> If the computed price of an organization is less than set price => Profit, that is employees will get more salary.  
> If the computed price of an organization is more than set price => Loss, that is employees will get less salary.  
> If the computed price of an organization is the same as the set price => No Loss or No Profit, but employees will get their salary. 

_If the price is set at 1.713, all will earn a profit except the last two rows._ 

But what if we remove 0.4 and 0.5  
all2 = \[0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.625, 0.625, 0.625, 0.625, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611\]  
mean(all2)  
0.628962962962963  
Price will be 1/mean(all2)  
1.5899187374867507

_Here, only the second-row organization will earn a profit, all others will get a loss._

> So, the price should be fixed sensibly by statisticians and researchers, should give the maximum opportunity to organizations. And those who get the loss, support should be given to increase their efficiency. And organizations shouldn't create adverse externalities. 

**An example data with greater production**  
\[E\]                 \[U/D\]     \[U/DE\]     \[O\]     
50                    90          1.8             6                                                         
60                    100        1.666         9         
80                    110        1.378         4  
90                    120        1.333         8  
50                    80          1.6             3  
50                    85          1.7             8  
\[1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.378, 1.378, 1.378, 1.378, 1.333, 1.333, 1.333, 1.333, 1.333, 1.333, 1.333, 1.333, 1.6, 1.6, 1.6, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7\]  
mean = 1.5886842105263157  
Price per unit = 1/mean =  0.6294517144276959

Computed price for each row:  
0.5555555555555556  
0.6002400960384154  
0.725689404934688  
0.7501875468867217  
0.625  
0.5882352941176471

_So, here third and fourth rows will get a loss._   

> **More production means less price if it doesn't create adverse externalities.** 

> It will work even for complicated production, like farming, food or different forms of creativity such as painting and books. An allowed price range for a particular type of production can be set after data collection. 

For example, the price for a painting can be the labor cost of painting which ranges between _$100 to $500_ + paper cost + color cost.  
It can be more personalized with different recipes and can have a variable final price.  But,

> All the computational steps and prices for a particular production should be open for evaluation, auditing, and review.  

**Criticism**

> Such a system makes the price making centralized, and prone to manipulations, as high incentives are involved.
