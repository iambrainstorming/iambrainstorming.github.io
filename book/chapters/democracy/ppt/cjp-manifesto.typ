// ============================================================
// CJP Manifesto — Typst Source  (COMPLETE TEXT, no cuts)
// Compile with: typst compile cjp-manifesto.typ cjp-manifesto.pdf
// ============================================================

#set document(
  title: "New Modified Cockroach Janta Party (CJP) Manifesto",
  author: "Cockroach Janta Party",
  date: datetime(year: 2026, month: 5, day: 25),
)

#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2.5cm, left: 2.2cm, right: 2.2cm),
  background: rect(fill: rgb("#0d0d0d"), width: 100%, height: 100%),
)

#set text(font: "Liberation Sans", size: 11pt, fill: rgb("#f0ece0"))
#set par(justify: true, leading: 0.8em, spacing: 0.9em)

// ── Colour palette ────────────────────────────────────────
#let red = rgb("#e8341c")
#let amber = rgb("#f5a623")
#let gold = rgb("#ffd166")
#let teal = rgb("#06d6a0")
#let purple = rgb("#9b5de5")
#let pink = rgb("#ec407a")
#let cyan = rgb("#00bcd4")
#let green = rgb("#66bb6a")
#let orange = rgb("#ff7043")
#let magenta = rgb("#e040fb")
#let bg2 = rgb("#1a1a1a")
#let bg3 = rgb("#1e1e1e")
#let muted = rgb("#888888")
#let light = rgb("#cccccc")

// ── Helpers ───────────────────────────────────────────────
#let pill(body, col) = box(
  fill: col.lighten(80%),
  stroke: 1pt + col,
  radius: 3pt,
  inset: (x: 6pt, y: 3pt),
  text(fill: col, weight: "bold", size: 9pt, body),
)

#let section-header(num, title, col) = {
  v(1.4em)
  block(
    width: 100%,
    fill: col,
    radius: 4pt,
    inset: (x: 14pt, y: 10pt),
    stack(
      dir: ltr,
      spacing: 10pt,
      text(size: 22pt, weight: "black", fill: white, num),
      line(length: 2pt, angle: 90deg, stroke: white.transparentize(50%)),
      text(size: 14pt, weight: "bold", fill: white, title),
    ),
  )
  v(0.6em)
}

#let sub-header(title) = {
  v(0.8em)
  text(size: 11pt, weight: "bold", fill: gold, title)
  v(0.3em)
}

#let bullet-item(body) = pad(
  left: 1em,
  bottom: 0.25em,
  stack(dir: ltr, spacing: 6pt, text(fill: gold, "▸"), text(fill: light, body)),
)

#let stat-card(label, value, col) = block(
  fill: bg3,
  stroke: 1pt + col,
  radius: 4pt,
  inset: 12pt,
  [
    #text(fill: col, weight: "bold", size: 10pt, label)
    #linebreak()
    #text(fill: gold, size: 20pt, weight: "black", value)
  ],
)

// ════════════════════════════════════════════════════════════
// COVER PAGE
// ════════════════════════════════════════════════════════════
#block(width: 100%, fill: bg2, radius: 6pt, inset: 30pt)[
  #align(center)[
    #text(size: 9pt, fill: muted, tracking: 4pt)[NEW MODIFIED — 25 MAY 2026]
    #v(0.5em)
    #text(size: 52pt, weight: "black", fill: red)[Cockroach]
    #linebreak()
    #text(size: 52pt, weight: "black", fill: amber)[Janta Party]
    #linebreak()
    #v(0.3em)
    #text(size: 20pt, fill: gold, tracking: 3pt)[M A N I F E S T O]
    #v(0.9em)
    #line(length: 60%, stroke: 2pt + red)
    #v(0.7em)
    #text(size: 10pt, fill: rgb("#aaaaaa"), style: "italic")[
      For ordinary citizens who survive, adapt, and refuse to disappear.
    ]
  ]
]

#v(2em)

// ════════════════════════════════════════════════════════════
// 1. RAISE MINIMUM WAGE
// ════════════════════════════════════════════════════════════
#section-header("01", "Raise Minimum Wage for Every Worker", red)

Whether someone is an IT professional, factory worker, delivery worker, or daily labourer, every worker deserves dignified pay.

#v(0.5em)
#grid(
  columns: (1fr, 1fr),
  gutter: 10pt,
  stat-card("Daily Labourers", "₹30,000 / mo", red), stat-card("Graduates & Skilled Workers", "₹40,000 / mo", amber),
)
#v(0.5em)

Workers are not machines. Higher wages increase purchasing power, keep money circulating in the economy, and boost demand for local businesses. An economy grows when ordinary people can afford to spend, not when wealth remains concentrated at the top.

#sub-header("Bonus Reform")

Create a *National Job Registry* where all companies must list job openings in one public platform so citizens can easily find jobs without middlemen, scams, or hidden recruitment systems.

// ════════════════════════════════════════════════════════════
// 2. UNIVERSAL BASIC INCOME
// ════════════════════════════════════════════════════════════
#section-header("02", "Universal Basic Income (UBI)", purple)

Start with:

#bullet-item[₹5,000 per month for women and unemployed citizens]
#bullet-item[Gradually increase to ₹10,000 per month]

#v(0.4em)
#grid(
  columns: (1fr, 1fr),
  gutter: 10pt,
  stat-card("Phase 1 — Women & Unemployed", "₹5,000 / mo", purple),
  stat-card("Phase 2 — Expanded", "₹10,000 / mo", teal),
)
#v(0.5em)

UBI gives people survival security so they can take risks, learn skills, start businesses, or escape exploitative jobs. It reduces desperation and creates entrepreneurship.

Even if some prices rise temporarily, new entrepreneurs and competition will reduce costs through innovation and efficiency.

Both minimum wage and UBI can increase economic activity by increasing money circulation among ordinary citizens.

With modern technology and automation, society rarely faces pure supply-side shortages unless production creates harmful negative externalities. Today's larger economic problem is *weak demand and low purchasing power* among ordinary citizens.

We must eliminate exploitative low-paying jobs through minimum wages and encourage entrepreneurship to create more efficient systems through automation and innovation.

Negative externalities are often policy failures, and sometimes economic ones, because environmentally friendly alternatives are initially more expensive.

For example:

#bullet-item[Instead of depending heavily on disposable plastic bottles, cities can promote reusable bottles with public water and cold-drink refill counters.]
#bullet-item[Instead of centralized AI monopolies consuming massive amounts of water and energy in data centers, we can encourage decentralized P2P open-source AI models running on home servers powered by solar energy.]

The goal is not just economic growth, but *efficient, sustainable, and citizen-driven growth.*

// ════════════════════════════════════════════════════════════
// 3. REMOTE WORK RIGHTS
// ════════════════════════════════════════════════════════════
#section-header("03", "Remote Work Rights", teal)

Make remote work compulsory wherever physically possible.

Remote work can save youth from being forced to migrate to overcrowded metro cities where they struggle with expensive room rent, costly food, and daily travel expenses.

Millions waste hours in traffic, pollution, and overcrowded cities every day. Remote work saves fuel, reduces pollution, improves mental health, and gives workers more flexibility and family time.

It also helps smaller towns and villages grow economically instead of concentrating all opportunities in a few mega cities.

// ════════════════════════════════════════════════════════════
// 4. SIX-HOUR WORK DAY
// ════════════════════════════════════════════════════════════
#section-header("04", "Six-Hour Work Day", amber)

Reduce the standard work day to 6 hours.

#v(0.3em)
#stat-card("Standard Work Day", "6 Hours", amber)
#v(0.5em)

Human productivity does not increase endlessly with longer hours. Overwork destroys mental health, creativity, and family life. A shorter work day can improve productivity, employment, and quality of life.

// ════════════════════════════════════════════════════════════
// 5. APPROVAL VOTING REFORM
// ════════════════════════════════════════════════════════════
#section-header("05", "Approval Voting Reform", magenta)

Implement approval voting in elections.

#image("approval-voting/fptp.png")

#image("approval-voting/approval_voting.png")

Citizens should be able to support multiple acceptable candidates instead of being trapped into choosing only one. Approval voting reduces hyper-partisanship and encourages consensus politics.



// ════════════════════════════════════════════════════════════
// 6. 100% VVPAT COUNTING
// ════════════════════════════════════════════════════════════
#section-header("06", "100% VVPAT Counting", cyan)

Mandatory 100% verification of VVPAT slips.

Democracy depends on trust. Every vote must be transparently auditable to protect confidence in elections.

// ════════════════════════════════════════════════════════════
// 7. EXAMINATION SYSTEM REFORM
// ════════════════════════════════════════════════════════════
#section-header("07", "Structural Reform of Examination System", orange)

We are not demanding resignations. We demand structural reform.

#sub-header("Reform Plan")

#bullet-item[Create large national question banks with high-quality questions that promote critical thinking and transfer of learning]
#bullet-item[Randomized selection of questions]
#bullet-item[Print question papers only 3–5 hours before exams]
#bullet-item[High-security decentralized printing centers]

#v(0.4em)

India's exam system rewards memorization and is vulnerable to paper leaks. Education should test understanding, reasoning, creativity, and problem-solving — not just rote learning.

Large randomized question banks and last-minute secure printing can drastically reduce leaks and corruption while improving educational quality and fairness for students.

// ════════════════════════════════════════════════════════════
// 8. NON-PARTISAN MOVEMENT
// ════════════════════════════════════════════════════════════
#section-header("08", "Non-Partisan Movement", teal)

Anyone who supports this manifesto is welcome to join — whether from BJP, Congress, Left, Right, or independent backgrounds.

The movement is *issue-based, not personality-based.* Citizens matter more than party labels.

// ════════════════════════════════════════════════════════════
// 9. PROTECT VOTING RIGHTS
// ════════════════════════════════════════════════════════════
#section-header("09", "Protect Voting Rights", red)

No deletion of legitimate voters from electoral rolls.

Strict action against ECI who illegally remove citizens' voting rights.

Voting is a *fundamental democratic right.* Bureaucratic negligence or political manipulation must never silence citizens.

// ════════════════════════════════════════════════════════════
// 10. 50% RESERVATION FOR WOMEN
// ════════════════════════════════════════════════════════════
#section-header("10", "50% Reservation for Women", pink)

#bullet-item[50% reservation for women in Parliament]
#bullet-item[50% reservation in all cabinet positions]
#bullet-item[No waiting for delimitation exercises]

#v(0.4em)

Women are half the population. Representation should reflect reality, not tokenism.

// ════════════════════════════════════════════════════════════
// 11. NO POST-RETIREMENT REWARDS FOR CHIEF JUSTICES
// ════════════════════════════════════════════════════════════
#section-header("11", "No Post-Retirement Rajya Sabha Rewards for Chief Justices", purple)

No Chief Justice should receive Rajya Sabha seats or political rewards after retirement.

Judicial independence must remain unquestionable. Courts should never appear politically influenced.

// ════════════════════════════════════════════════════════════
// 12. REDUCE POLITICAL HOSTILITY
// ════════════════════════════════════════════════════════════
#section-header("12", "Reduce Political Hostility", amber)

With approval voting, punitive anti-defection measures become less necessary because politics becomes less polarized.

The goal is *cooperation, not permanent political warfare.*

// ════════════════════════════════════════════════════════════
// 13. RELEASE PROTESTORS
// ════════════════════════════════════════════════════════════
#section-header("13", "Release Protestors", red)

Free all protestors jailed for dissent against the government.

Democracy cannot survive if criticism is treated as a crime. *Peaceful dissent is a democratic right.*

// ════════════════════════════════════════════════════════════
// 14. DECENTRALIZED AND OPEN MEDIA
// ════════════════════════════════════════════════════════════
#section-header("14", "Decentralized and Open Media", teal)

No domination of media by billionaires or oligarchs — whether through TV channels, newspapers, or control over our internet spaces.

CJP supporters are encouraged to:

#bullet-item[Create a fair playing field where independent and community media can access television broadcasting]
#bullet-item[Boycott disinformation-driven media monopolies that can be pressured or censored for questioning those in power]
#bullet-item[Support and join open-source, decentralized online media platforms that continuously adapt to community needs and feedback]
#bullet-item[Build community-driven communication systems that respect freedom of speech, transparency, user rights]

#v(0.4em)

Open-source decentralized media *is resistant to capture by billionaires, corporations, or political interests* because control is distributed across communities instead of being concentrated in a single company or owner. The source code remains open, and anyone is free to run servers, clients, or alternative versions of the platform.

Unlike centralized closed-source platforms, decentralized systems cannot be easily taken over, bought out, or controlled through money and monopoly power.

Information power should not belong to a handful of corporations or politically connected billionaires. Both traditional television media and internet platforms must remain accountable to citizens, not controlled by concentrated wealth or political influence.

A healthy democracy requires diverse, independent, and decentralized media where communities can participate, criticize, organize, and innovate freely.

// ════════════════════════════════════════════════════════════
// 15. 15-MINUTE CAR-FREE CITIES
// ════════════════════════════════════════════════════════════
#section-header("15", "15-Minute Car-Free Cities", green)

Build cities focused on:

#bullet-item[Walking]
#bullet-item[E-cycles]
#bullet-item[Public transport]
#bullet-item[Pedestrian lanes]

#v(0.4em)

Cities should be designed for humans, not traffic congestion. Car-free urban planning improves health, reduces pollution, and makes cities more livable.

#pagebreak()
// ════════════════════════════════════════════════════════════
// FINAL MESSAGE
// ════════════════════════════════════════════════════════════
#v(2em)
#block(width: 100%, fill: bg2, stroke: 2pt + red, radius: 6pt, inset: 24pt)[
  #align(center)[
    #text(fill: gold, size: 16pt, weight: "black")[Final Message]
    #v(0.5em)
    #line(length: 50%, stroke: 1pt + muted)
    #v(0.7em)
  ]

  #text(size: 10.5pt, fill: light)[
    The new manifesto of the Cockroach Janta Party stands for ordinary citizens who continue surviving despite unemployment, corruption, economic pressure, rising living costs, and political neglect.
  ]

  #v(0.5em)

  #text(size: 10.5pt, fill: light)[
    The *"cockroach"* symbolizes resilience — people who continue struggling, adapting, and surviving even when the system ignores them.
  ]

  #v(0.5em)

  #text(size: 10.5pt, fill: light)[
    This manifesto is not about blind outrage or empty slogans. It is a real test for Gen Z and millennials — whether they can bend the system through perseverance, organization, advocacy, and democratic pressure while holding political parties accountable to public demands.
  ]

  #v(0.7em)

  #align(center)[
    #text(size: 11pt, fill: gold, weight: "bold")[
      The goal is not chaos, but structural reform. \
      Not hatred, but accountability. \
      Not hopelessness, but citizen empowerment.
    ]
  ]

  #v(0.7em)

  #text(size: 10.5pt, fill: light)[
    This manifesto stands for economic dignity, democratic transparency, technological decentralization, sustainable development, freedom of expression, and a system designed to serve ordinary people instead of concentrated power.
  ]

  #v(0.8em)
  #align(center)[
    #pill("Economic Dignity", red) #h(4pt)
    #pill("Democratic Transparency", purple) #h(4pt)
    #pill("Tech Decentralisation", teal) #h(4pt)
    #pill("Citizen Empowerment", amber) #h(4pt)
    #pill("Sustainable Development", green) #h(4pt)
    #pill("Free Expression", cyan)
  ]
]
