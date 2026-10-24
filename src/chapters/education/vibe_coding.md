# Vibe Coding: Are developer jobs safe?

Date: 14-04-2026

## 1. The Security Problems Are Real

The documented failures (Enrichlead, NX malware, Tea app) represent genuine disasters. AI-generated code *does* have systematic security issues:

*Common vulnerabilities*:
- Lack of input validation
- Missing authentication checks
- No rate limiting
- Trust boundaries ignored
- SQL injection vulnerabilities
- Exposed API keys and credentials
- Cross-site scripting (XSS) weaknesses

*Research confirms this*: Studies show 40-50% of AI-generated code contains security vulnerabilities. This is absolutely true and dangerous.

The Enrichlead startup failure wasn't a sophisticated attack—it was textbook security failures that any first-year CS student should catch. Yet AI generated code that looked functional while completely ignoring security fundamentals.

*Verdict*: This concern is legitimate and well-documented.

## 2. Understanding Your Code Matters

This is fundamental and non-negotiable.

If you cannot:
- Debug your code when it breaks
- Modify it when requirements change
- Secure it against attacks
- Explain what it does
- Maintain it over time

Then you are building on sand. When (not if) problems arise, you will be helpless.

Shipping code you don't understand is reckless and irresponsible, especially for production systems handling user data.

*Verdict*: This is a core principle of software engineering that transcends any particular tool or era.

## 3. Skills Can Atrophy Without Practice

Over-reliance on any tool—not just AI—can erode skills. This is a well-documented phenomenon:

| Technology        | Skill Impact                   | Result                             |
|-------------------|--------------------------------|------------------------------------|
| Calculators       | Mental arithmetic declined     | But mathematical thinking improved |
| GPS navigation    | Map reading skills declined    | But exploration increased          |
| Autocorrect       | Spelling accuracy declined     | But writing volume increased       |
| IDEs              | Syntax memorization declined   | But code quality improved          |


The pattern is real: tools that handle low-level tasks can cause those specific skills to atrophy if you don't practice them intentionally.

"I don't even try anymore. If Copilot doesn't autocomplete it, I immediately open ChatGPT. The thought of actually thinking through a problem myself feels exhausting."

This is *learned helplessness*, and it's a genuine psychological phenomenon.

*Verdict*: This concern is valid. Skills require deliberate practice to maintain, regardless of what tools you use.

## 4. "Vibe Coding" Without Review Is Dangerous

Blindly accepting AI output and shipping to production without:
- Understanding what the code does
- Reviewing for security issues
- Testing edge cases
- Considering architectural implications

This is genuinely reckless, especially for security-critical systems.

*Example*: The NX malware injection happened because AI-generated code looked clean and functional but contained a command injection vulnerability. A human code review would have caught this.

*Verdict*: The core message—"don't ship code you don't understand"—is absolutely correct.



[Why AI hasn’t replaced software engineers, and won’t](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers)

Writing code isn’t, and never was, the bottleneck. For example, a 2019 paper summarized existing studies with the conclusion that “developers spend surprisingly little time with coding, 9% to 61% depending on the study”. This finding was consistent with the paper’s own data from 6,000 developers at Microsoft. As coding agents began to be taken up, there was an explosion of blog posts in late 2025 pointing out that writing code isn’t the bottleneck, as developers realized that using agents to write most of the code led to little impact on overall productivity.

If writing code isn’t the bottleneck, what is? The task-breakdown surveys point at things like meetings or debugging. This just leads to more questions: what are developers doing in those meetings and why can’t it be done by AI? Won’t debugging get automated as capabilities improve? To understand the real bottlenecks, we have to get qualitative, and dig into software engineers’ own understanding of what it is they do that resists automation.
