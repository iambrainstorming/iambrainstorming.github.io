// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><li class="part-title">Democracy and supply chain</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/what-would-we-gain-from-eliminating-national-fiat-currency.html"><strong aria-hidden="true">1.</strong> Manifesto: What would we gain from eliminating the national fiat currency?</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.html"><strong aria-hidden="true">1.1.</strong> Price discovery of decentralized supply chain</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/defi/consensus-dex.html"><strong aria-hidden="true">1.2.</strong> A New Consensus Economy: DEX for Discovering Token Prices Through Decentralized Consensus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/blockchain/treasury_overspending.html"><strong aria-hidden="true">1.3.</strong> How Overspending of the Treasury Creates Problems — and How It Can Be Mitigated</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/defi/free-market-and-meme-coin.html"><strong aria-hidden="true">1.4.</strong> In the long run, the free market will kill meme coins</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/what-do-we-need-to-decentralize-in-the-coming-years.html"><strong aria-hidden="true">1.5.</strong> What do we need to decentralize in the coming years?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/relationships-emotions-and-happiness.html"><strong aria-hidden="true">1.6.</strong> Emotion and empathy rather than materialism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education_system.html"><strong aria-hidden="true">1.7.</strong> Decentralized education system</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/rethinking-work-culture.html"><strong aria-hidden="true">1.8.</strong> Remote jobs or work from home with less working hours</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/invest_on_renewables.html"><strong aria-hidden="true">1.9.</strong> Clean energy like roof top solar and wind energy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/ban-plastic-bottles-of-coca-cola-and-water-bottles.html"><strong aria-hidden="true">1.10.</strong> Banning single use plastic</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/building-better-cities.html"><strong aria-hidden="true">1.11.</strong> Sustainable housing design</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/broadband_share/broadband_share_idea.html"><strong aria-hidden="true">1.12.</strong> Decentralized Wifi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/how-can-we-decentralize-the-construction-of-brick-and-mortar-houses.html"><strong aria-hidden="true">1.13.</strong> Decentralized house building</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/road-planning-of-cities.html"><strong aria-hidden="true">1.14.</strong> Car-free cities</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/public_transport/comfortable_public_transport.html"><strong aria-hidden="true">1.15.</strong> How Can We Make Public Transport More Comfortable for People?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/city-planning/rain_water_harvesting.html"><strong aria-hidden="true">1.16.</strong> City Planning: Rain Water Harvesting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/empowering-communities-decentralizing-supermarkets-through-public-ownership-and-control.html"><strong aria-hidden="true">1.17.</strong> Decentralizing Supermarkets Through Public Ownership and Control</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/love-for-usd-pegged-stable-coin-by-the-crypto-community-must-end.html"><strong aria-hidden="true">1.18.</strong> Love for USD pegged stable coin by the crypto community must end</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/tyranny_of_the_majority.html"><strong aria-hidden="true">1.19.</strong> Tyranny of the Majority, Minority, Representatives, Shareholders and Democratic trilemma</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/simple_majority_and_super_majority.html"><strong aria-hidden="true">1.20.</strong> Simple Majority vs Super Majority</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/capitalism-vs-socialism-which-one-is-working.html"><strong aria-hidden="true">1.21.</strong> Socialism vs Capitalism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/shivarthu/Shivarthu.html"><strong aria-hidden="true">1.22.</strong> Shivarthu: A governance Protocol</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/competitive_collaboration.html"><strong aria-hidden="true">1.23.</strong> The Competitive Collaboration Algorithm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/secure_blockchain_voting.html"><strong aria-hidden="true">1.24.</strong> Secure Blockchain Voting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/capitalism/capitalistic_culture.html"><strong aria-hidden="true">1.25.</strong> Shift in Capitalistic Culture: From Independence to Corporate Dependency</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/web3_curriculum.html"><strong aria-hidden="true">1.26.</strong> Why Web3 Must Be Taught in Schools and Colleges — And Why Politicians Should Pay Attention</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/blockchain/conviction-voting.html"><strong aria-hidden="true">1.27.</strong> Decentralized Autonomous Organization (DAO) Fund Management: How to Allocate and Govern Funds</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/blockchain/participatory-urban-planning.html"><strong aria-hidden="true">1.28.</strong> Participatory Urban Planning (Blockchain + GIS + Reputation)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/capitalism/google_monopoly_and_phone_manufacturer.html"><strong aria-hidden="true">1.29.</strong> The Surveillance State by Design: Why Governments Must Confront Phone Manufacturers, Not Just Google</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/new-cockroach-janta-party-manifesto.html"><strong aria-hidden="true">1.30.</strong> New Cockroach Janta Party (CJP) Manifesto</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">Economics</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/yard-sale-model.html"><strong aria-hidden="true">2.</strong> Why income inequality exits? Yard-Sale-Model</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/diminishing_return.html"><strong aria-hidden="true">3.</strong> The Law of Diminishing Return, the Solow Model, and the Steady State: Why Unlimited Growth is not Possible</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/price_controls.html"><strong aria-hidden="true">4.</strong> Price Controls</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/tax_collection_simulation.html"><strong aria-hidden="true">5.</strong> A simplified tax simulation for poverty alleviation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/what_is_govt.html"><strong aria-hidden="true">6.</strong> Government’s Monopoly on Money and Violence: A Double-Edged Sword</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/are-tariffs-good.html"><strong aria-hidden="true">7.</strong> India&#39;s Economic Suicide: Low Tariffs for Foreigners, High Taxes for Domestic Entrepreneurs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/india-needs-stable-coin.html"><strong aria-hidden="true">8.</strong> Why India Needs Its Own Stablecoin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/gold-standard-criticisms.html"><strong aria-hidden="true">9.</strong> The core economic criticisms of a gold-pegged (or deflationary) currency</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/blockchain/blockchain-consensus.html"><strong aria-hidden="true">10.</strong> Blockchain economics and Consensus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/blockchain/escaping-campbells-law.html"><strong aria-hidden="true">11.</strong> How to Build Incentive Systems That Don’t Eat Themselves</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/oligopolies.html"><strong aria-hidden="true">12.</strong> The Monopoly Trap: How Google, Meta, Adani, and Ambani Are Reshaping India’s Economic Future — And Why It’s Dangerous</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/blockchain/does-crypto-create-debt.html"><strong aria-hidden="true">13.</strong> Does Crypto Create Debt?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/free_market.html"><strong aria-hidden="true">14.</strong> Why the Free Market Fails?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/oil-crisis.html"><strong aria-hidden="true">15.</strong> Is the Government Prepared for an Oil Shock? Or Are We Sleepwalking Into a Crisis?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/money_erode_human_values.html"><strong aria-hidden="true">16.</strong> Does Money Erode Human Values?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/discomfort-due-to-fossil-fuel-shortages.html"><strong aria-hidden="true">17.</strong> Global Fossil Fuel Shortage: A Crisis That Can Become an Opportunity</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/nuclear_energy.html"><strong aria-hidden="true">18.</strong> Nuclear Energy Is Not Clean — And It Is More Expensive Than Solar and Wind</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/public_transport/grid-powered-transit.html"><strong aria-hidden="true">19.</strong> Why Grid-Powered Public Transit Matters Too</a></span></li><li class="chapter-item expanded "><li class="part-title">Democracy</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/do-we-need-a-supreme-leader-how-can-we-share-power-between-parties.html"><strong aria-hidden="true">20.</strong> Do we need a supreme leader? How can we share power between parties?</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.html"><strong aria-hidden="true">20.1.</strong> How EVM works and Why it should be banned to save the democracy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/open-list-proportional-representation-vs-mixed-member-proportional-representation.html"><strong aria-hidden="true">20.2.</strong> Open-list proportional representation vs. Mixed-member proportional representation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/parliamentary-or-presidential-form-of-government-whats-in-the-name.html"><strong aria-hidden="true">20.3.</strong> Parliamentary or Presidential form of government? What&#39;s in the name?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/govt_controlling_information.html"><strong aria-hidden="true">20.4.</strong> How to share information under fascism or dictatorship?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/fascism.html"><strong aria-hidden="true">20.5.</strong> What a fascist government does?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/hinduism.html"><strong aria-hidden="true">20.6.</strong> Understanding Hindutva and Its Implications: A Comparative Analysis With Hinduism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/fascism_power.html"><strong aria-hidden="true">20.7.</strong> Necessary sources of political power by dictator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/free-and-fair-election.html"><strong aria-hidden="true">20.8.</strong> What is free and fair elections?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/pmla.html"><strong aria-hidden="true">20.9.</strong> Draconian and unconstitutional PMLA and UAPA provisions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/upholding-justice.html"><strong aria-hidden="true">20.10.</strong> Upholding the Justice</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/election-science/election-science.html"><strong aria-hidden="true">20.11.</strong> Election Science</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/democracy/women_in_parliament.html"><strong aria-hidden="true">20.12.</strong> Country Will Remain Safe When Women Lead the Nation</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">Cooperation</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">21.</strong> Cooperation for common good</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/how-to-tackle-disinformation.html"><strong aria-hidden="true">21.1.</strong> How to tackle disinformation?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/cooperation/cooperation-secrets.html"><strong aria-hidden="true">21.2.</strong> Secrets of Cooperation</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">Education</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/features-of-good-books-or-curriculum.html"><strong aria-hidden="true">22.</strong> Features of good books or curriculum</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/smartphones-evil-device.html"><strong aria-hidden="true">23.</strong> Smartphones: An Evil Device Stealing Children&#39;s Childhood</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/books-recommendation.html"><strong aria-hidden="true">24.</strong> Curriculum Recommendation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/beyond_numbers.html"><strong aria-hidden="true">25.</strong> Beyond the Numbers: The Complexities of Assessment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/dystopian_school.html"><strong aria-hidden="true">26.</strong> A dystopian school: what does it look like?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/open-education.html"><strong aria-hidden="true">27.</strong> Reimagining Higher Education: Critiquing Private Universities and Enhancing IGNOU’s Democratic Promise</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/nta-end.html"><strong aria-hidden="true">28.</strong> Why NTA Must Be Ended</a></span></li><li class="chapter-item expanded "><li class="part-title">Health Care</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/health-care-economics.html"><strong aria-hidden="true">29.</strong> Health Care In India</a></span></li><li class="chapter-item expanded "><li class="part-title">AI/ Machine Learning</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/do-we-have-to-fear-machine-learning-or-ai.html"><strong aria-hidden="true">30.</strong> Do we have to fear machine learning or AI?</a></span></li><li class="chapter-item expanded "><li class="part-title">Philosophy</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/understanding-free-will-and-how-it-can-impact-our-behavior.html"><strong aria-hidden="true">31.</strong> Understanding free will and how it can impact our behavior</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/understanding_feedback_loop.html"><strong aria-hidden="true">32.</strong> Understanding feedback loop</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/reasoning/fallacies.html"><strong aria-hidden="true">33.</strong> Important fallacies, paradox and biases</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/programming/foss_philosophy.html"><strong aria-hidden="true">34.</strong> Open Source or Free Software or FOSS Philosophy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/teach-about-foss.html"><strong aria-hidden="true">35.</strong> Fostering Responsibility in the Digital Age through Free and Open-Source Software</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/bread_and_circus.html"><strong aria-hidden="true">36.</strong> Modern-Day Bread and Circus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/how_to_know_who_trustworthy.html"><strong aria-hidden="true">37.</strong> Key points – How to know who’s trustworthy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/academics/grit.html"><strong aria-hidden="true">38.</strong> Grit: The power of passion and perseverance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/software-architect.html"><strong aria-hidden="true">39.</strong> Why the World Needs More Open Source (FOSS) Software Architects</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/philosophy/open_source_resists_billionaire_capture.html"><strong aria-hidden="true">40.</strong> Why Open Source Resists Billionaire Capture</a></span></li><li class="chapter-item expanded "><li class="part-title">India Employment</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="data/india_employment_data.html"><strong aria-hidden="true">41.</strong> India Employment Data</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/women-employment.html"><strong aria-hidden="true">42.</strong>  Beyond the Kitchen and the Gossip Circle: Reimagining the Role of Middle-Class Women in India’s Workforce</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/economics/something-is-deeply-broken-inside-india.html"><strong aria-hidden="true">43.</strong> Something Is DEEPLY Broken Inside India </a></span></li><li class="chapter-item expanded "><li class="part-title">Programming</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/programming/debugging_time.html"><strong aria-hidden="true">44.</strong> A Glimpse into a Coder&#39;s Experience</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/programming/interdisciplinary.html"><strong aria-hidden="true">45.</strong> The Power of Interdisciplinary Knowledge: Breaking Down Barriers in Education</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/rust-or-python.html"><strong aria-hidden="true">46.</strong> What Should Be Taught in College Curriculum: Python or Rust?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/education/vibe_coding.html"><strong aria-hidden="true">47.</strong> Vibe Coding</a></span></li><li class="chapter-item expanded "><li class="part-title">Computer</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/computer/moore-law.html"><strong aria-hidden="true">48.</strong> Is Moore&#39;s Law Finally Dead?</a></span></li><li class="chapter-item expanded "><li class="part-title">Science</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/reasoning/pseudoscience.html"><strong aria-hidden="true">49.</strong> Pseudoscience</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/academics/academician.html"><strong aria-hidden="true">50.</strong> What are Scholarly Activities?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/reasoning/evidence-based_medicine.html"><strong aria-hidden="true">51.</strong> Evidence Based Medicine vs Alternative Medicine</a></span></li><li class="chapter-item expanded "><li class="part-title">Organization</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/self-managed-institutes.html"><strong aria-hidden="true">52.</strong> When do self-managed institutes work?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/moonlighting-in-a-remote-work-world.html"><strong aria-hidden="true">53.</strong> Moonlighting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/micromanagement.html"><strong aria-hidden="true">54.</strong> Micromanagement</a></span></li><li class="chapter-item expanded "><li class="part-title">Social Media</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/social-media/social-media-metrics.html"><strong aria-hidden="true">55.</strong> Social Media Metrics</a></span></li><li class="chapter-item expanded "><li class="part-title">Biology</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/complicatedness-of-sexuality.html"><strong aria-hidden="true">56.</strong> Complicatedness of Sexuality</a></span></li><li class="chapter-item expanded "><li class="part-title">Parenting</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/parenting/baby_parenting.html"><strong aria-hidden="true">57.</strong> Baby Parenting</a></span></li><li class="chapter-item expanded "><li class="part-title">Drafts</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapters/city-planning/pollution_construction.html"><strong aria-hidden="true">58.</strong> Pollution due to contruction</a></span></li><li class="chapter-item expanded "><li class="part-title">Links</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="home.html"><strong aria-hidden="true">59.</strong> Page Links</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

