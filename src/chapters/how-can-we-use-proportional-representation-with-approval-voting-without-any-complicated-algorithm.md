---
title: "How can we use proportional representation with Approval voting without any complicated algorithm?"
date: "2023-04-19"
categories: 
  - "democracy"
  - "electoral-reform"
  - "policies"
  - "politics"
---

How can we use proportional representation with Approval voting without any complicated algorithm like seq phragmen, and allowing selecting candidates based on ward or district. Seq phragmen is ok to be used in blockchain but not practical for paper ballots.

Instead of giving the number of seats as proportional, we can make voting power/weightage proportional. For example, the party with 33% votes will have 33% weightage for votes, no matter how many seats or candidates vote from the party. It applies to the district assembly, state assembly or country assembly (Lok sabha) The second winner or third winner of approval voting can also vote without creating any problems because of the weightage system.

Here is the complete algorithm:

\# Ward 1
party\_green\_candidate\_1 = 70 
party\_red\_candidate\_1 = 51
party\_yellow\_candidate\_1 = 31
#Ward 2
party\_red\_candidate\_2 = 81
party\_yellow\_candidate\_2 = 62
party\_green\_candidate\_2 = 31
# Ward 3
party\_green\_candidate\_3 = 60
party\_red\_candidate\_3= 50
party\_yellow\_candidate\_3 = 40
total\_votes\_green\_party = party\_green\_candidate\_1 + party\_green\_candidate\_2 + party\_green\_candidate\_3
print(total\_votes\_green\_party)
total\_votes\_red\_party = party\_red\_candidate\_1 + party\_red\_candidate\_2 + party\_red\_candidate\_3
print(total\_votes\_red\_party)
total\_votes\_yellow\_party = party\_yellow\_candidate\_1 + party\_yellow\_candidate\_2 + party\_yellow\_candidate\_3
print(total\_votes\_yellow\_party)
# As there are three candidates, vote weightage for each candidate = total votes for party/3
weightage\_green\_candidate = total\_votes\_green\_party/3
print(weightage\_green\_candidate)
weightage\_red\_candidate  = total\_votes\_red\_party/3
print(weightage\_red\_candidate)
weightage\_yellow\_candidate = total\_votes\_yellow\_party/3
print(weightage\_yellow\_candidate)
# Policy passing
# 2 candidate of green party gave yes, one gave no
# 2 candidate of red party gave no, one gave yes
# 3 candidates of yellow party gave yes
yes\_votes = 2\* weightage\_green\_candidate + 1 \* weightage\_red\_candidate + 3 \* weightage\_yellow\_candidate
print(yes\_votes)
no\_votes = 1\* weightage\_green\_candidate + 2 \* weightage\_red\_candidate + 0 \* weightage\_yellow\_candidate
print(no\_votes)

It makes all candidates powerful with the amount of voting power they have, without winner-take-all system.

Feedback are welcome.

Advantages of approval voting and proportional representation is given here:

https://iambrainstorming.wordpress.com/2023/03/30/do-we-need-a-supreme-leader-how-can-we-share-power-between-parties/

## Is open list proportional representation without approval voting sufficient?

> The article says,  
> Like all electoral frameworks, none of the OLPR variants are perfect. All have advantages and disadvantages in achieving the objectives required of an electoral system in a specific country environment.
> 
> While there are critics of OLPR, many of the criticisms are based either on specific elements of its configuration in a specific country or on elements that are external to the system itself (e.g. poor implementation of controls on political financing in Indonesia). While there have certainly been ugly configurations of OLPR, such as in Colombia before 2003 (see Albarracin and Milanese 2012), if configured sensibly and with adequate controls on political behavior, OLPR can facilitate a wider range of electoral system objectives than many other electoral systems.

[https://www.idea.int/publications/catalogue/open-list-proportional-representation-good-bad-and-ugly](https://www.idea.int/publications/catalogue/open-list-proportional-representation-good-bad-and-ugly)

**Most countries implement Party List Proportional representation.**  
Let's take India as an example and assume what can change in India if we implement party-list proportional representation.  
India already has a multi-party system. It's not like the US with two parties. Last election (2019) BJP won by 37% votes. With proportional representation, BJP will get 37% seats rather than 55% seats, so it will empower the opposition more.

But still, there is a problem. Specific elements of its configuration part of OLPR. Will it eliminate the need for a coalition? If even after proportional representation they move to a coalition, the problem of partisanism and "winner-take it all" arises again. The coalition govt with more votes will control the nation and ministry.

Let's look at another problem.  
Here is a plurality voting example.

![](https://iambrainstorming.files.wordpress.com/2023/04/vote-splitting.png?w=502)

Now, a party-list ballot.

![](https://iambrainstorming.files.wordpress.com/2023/04/olpr.jpeg?w=680)

Now candidates are replaced with parties (with candidates). Will it end polarization? Polarization happens because of the center squeeze effect and vote splitting. Candidates with similar ideologies split their votes, but here in the party list, parties with similar ideologies will split their votes. **In FPTP more than 50% of the vote gets wasted. But the benefit of PR is even if Hitler gets the highest votes, more than 50% of power remained with the opposition, with no vote wastage.** So yes it decreases polarization but doesn't eliminate the benefits of polarization.

But with approval voting, Matin Luther King, Tuban, Mother Terasa, Gandhi will get about equal but more votes and votes for Hitler will decrease.

Further, without Approval voting, new parties will not get a chance, the reason is written in the link, also we can look at the Sri Lanka election. Sri Lanka People's Freedom Alliance has 59.09% of the seats, Samagi Jana Balawegaya 23.90% of the seats, whereas other parties' strengths are negligible despite proportional representation.

PR with Approval Voting brings more competition, in other words, it provides more choices and also collaboration and corporation of representatives as there are no incentives for polarization.

## Top 5 Ways Plurality Voting Fails

[https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/](https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/)

## **Critiques of Proportional Representation**

##   
PR generates weak, ineffective, and unstable governing coalitions  

PR governments are not unstable, rather a coalition of majoritarian govt with FPTP is unstable. In FPTP parties have a high chance of getting out of coalitions whenever their interests are not met. This breaks the majority, hence breaking the government. In PR even if you stop participating or if you don't vote in decision-making, nothing happens, other parties together can make the decision.

##   
It's difficult to assign clear responsibility and decision-making is slow in the PR  

PR is better at assigning responsibility. It hardly takes an hour to vote and take decisions. Yes, draft preparation can time, but it's a good thing because the inputs of all parties are taken. Ministers of the department can be selected by voting based on their party vote weightage. As all parties are involved, ministers are selected by consensus, and they are not partisan. Ministers will care about all parties' interests rather than the majoritarian party. For example, in India, media freedom has gone to its lowest, and hatred and conspiracy theories are at peak, this won't have happened if ministers are selected by consensus. President too will no more a rubber stamp, a person of integrity will be selected.

##   
PR legitimizes extremist parties

  
FPTP legitimizes extremist parties, as they have incentives to polarize and split votes. Further extremist parties get more seats than votes in FPTP. In PR they won't get more power than the number of votes. We can also reduce the extremist parties' votes by using approval voting or negative votes.

Proportional representation promotes collaboration and energy is used on development politics and calling out and eliminating the bad candidates/parties rather than fighting with each other even if they have shared values to win seats. For example here Gandhi, Martin Luther King, Tubman and Mother Teresa would have collaborated and would have called out Hitler instead of fighting with each other to win seats due to FPTP.
