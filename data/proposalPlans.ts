export type ComparisonRow = {
  criterion: string;
  polygon: string;
  solana: string;
};

export type FlowNode = {
  label: string;
  detail: string;
  description: string;
};

export type FlowBranch = {
  label: string;
  detail: string;
  connectsTo: string;
  description?: string;
};

export type ArchitectureGroup = {
  group: string;
  nodes: FlowNode[];
};

export type ProposalPlan = {
  slug: string;
  title: string;
  comparison: ComparisonRow[];
  recommendation: string;
  ethereumSimple: string;
  ethereumArchitectureDiagram: ArchitectureGroup[];
  solanaSimple: string;
  solanaArchitectureDiagram: ArchitectureGroup[];
  flowDiagram: FlowNode[];
  flowBranches: FlowBranch[];
  closing: string;
  sources: { label: string; url: string }[];
};

export const proposalPlans: ProposalPlan[] = [
  {
    slug: "blockchain-supply-chain-traceability",
    title: "Blockchain Supply-Chain Traceability for Indonesian Export Goods",
    comparison: [
      {
        criterion: "Avg. transaction fee",
        polygon:
          "Around $0.015 on average, ranging from about $0.001 for a simple transfer up to $0.05 for a contract call",
        solana: "Sub-cent, usually well under $0.001, among the cheapest of the major chains",
      },
      {
        criterion: "Throughput",
        polygon: "Around 7,000 TPS (sidechain architecture)",
        solana: "Around 65,000 TPS theoretical, thanks to Proof of History plus parallelized execution",
      },
      {
        criterion: "Public verifiability by outside buyer",
        polygon: "Anyone can check a transaction on Polygonscan with no relationship to the issuer needed",
        solana: "Same idea, checked on Solscan or Solana Explorer",
      },
      {
        criterion: "Smart contract language",
        polygon: "Solidity, which has the largest pool of experienced, audited developers in crypto",
        solana: "Rust via Anchor, a smaller but growing pool of specialized developers",
      },
      {
        criterion: "RBAC/upgradeability tooling",
        polygon: "OpenZeppelin's access control and upgrade patterns are mature and widely audited",
        solana: "No direct OpenZeppelin equivalent, but Anchor handles role and ownership checks natively at the account level",
      },
      {
        criterion: "Gasless/meta-tx tooling for non-crypto-native farmers",
        polygon: "Works through the ERC-2771/ERC-4337 standards, with relayer providers like Gelato or Biconomy already built for it",
        solana: "Simpler out of the box, since any account can just be designated to pay for someone else's transaction, no extra standard needed",
      },
      {
        criterion: "Real-world enterprise/supply-chain adoption",
        polygon: "Wipro's Falcon industrial supply-chain platform runs on Polygon, alongside Adidas, Stripe, and Adobe",
        solana:
          "Growing fast in payments and consumer-scale infrastructure through Solana Pay and Shopify integrations, the same high-volume, low-cost pattern this project needs",
      },
      {
        criterion: "Network stability history",
        polygon: "Consistent uptime record",
        solana:
          "Had well-documented outages in earlier years, but client diversity and reliability improvements since have closed most of that gap",
      },
      {
        criterion: "Buyer/auditor familiarity",
        polygon: "EVM chains are a long-established reference point for compliance and provenance tooling",
        solana:
          "The explorer, indexer, and compliance tooling ecosystem has caught up quickly and now handles this kind of public-record use case just as well",
      },
    ],
    recommendation:
      "At real production scale, with many cooperatives, thousands of farmers, and every harvest, QC, and customs event recorded as its own on-chain entry, Solana's near-zero fees and much higher throughput stop being a nice-to-have and start being the reason the system can record events in real time instead of batching them to control cost. Solana also has a low-cost data-scaling option, state compression, that Polygon simply doesn't have, which matters for a system putting large volumes of small provenance records on-chain. Its account model fits the data naturally too: every batch, actor, and QC record can be its own account rather than a row buried in a shared contract's storage. For a high-volume, cost-sensitive public traceability ledger, Solana is the better technical fit.",
    ethereumSimple:
      "Ethereum-style chains, like Polygon, are like a school with just one teacher checking homework, one paper at a time, in the exact order it was handed in. Everyone trusts that one teacher completely, and the line always moves fairly, but if lots of kids show up at once, some of them offer the teacher a little extra allowance money to get checked sooner. That extra allowance money is the 'gas fee', and it's why checking homework can get slow and pricier exactly when the school is busiest.",
    ethereumArchitectureDiagram: [
      {
        group: "Consensus & Execution",
        nodes: [
          {
            label: "Proof of Stake",
            detail: "Validators take turns proposing and checking each block",
            description:
              "Ethereum-style chains use Proof of Stake, where validators lock up tokens as a deposit and take turns proposing blocks while the others check the work. It's a well-tested, widely trusted way to agree on what happened, but it's built around one block at a time, roughly every couple of seconds, rather than a constant stream.",
          },
          {
            label: "EVM",
            detail: "Executes one transaction at a time, in order, inside a block",
            description:
              "The Ethereum Virtual Machine runs every transaction in a block one after another, in a strict order, so it's simple to reason about but harder to speed up. This is the same execution engine that Polygon, Base, and Arbitrum all reuse, which is exactly why the same Solidity contract can run unchanged on any of them.",
          },
        ],
      },
      {
        group: "State & Programs",
        nodes: [
          {
            label: "Contract Storage",
            detail: "Each smart contract owns and manages its own storage",
            description:
              "Instead of many small independent accounts, a smart contract on Ethereum owns a single block of storage that all its data lives inside, like one big filing cabinet per contract. Every read or write has to go through that contract, which keeps things organized but means one busy contract can become a bottleneck.",
          },
          {
            label: "Smart Contracts (Solidity)",
            detail: "Written in Solidity, the most widely used contract language",
            description:
              "Contracts are written in Solidity and rely on mature, heavily audited libraries like OpenZeppelin for things like roles and upgradeability. It's the most common smart contract language in the industry, so it's easy to find developers and auditors who already know it well.",
          },
          {
            label: "Contract Addresses",
            detail: "Fixed address assigned when a contract is deployed",
            description:
              "A contract gets a permanent address the moment it's deployed, and every call to it goes through that one address. That's simple and predictable, but unlike Solana's on-the-fly derived addresses, you can't compute a brand-new record's address ahead of time without first asking the contract or a database for it.",
          },
        ],
      },
      {
        group: "Cost & Scaling",
        nodes: [
          {
            label: "Gas Model",
            detail: "Every operation costs gas, priced per unit of work",
            description:
              "Every single operation, from adding two numbers to writing to storage, costs a set amount of \"gas,\" and the total fee is however much gas got used multiplied by the current gas price. Storage writes are by far the most expensive operation, which is exactly why keeping on-chain data small matters so much on this kind of chain.",
          },
          {
            label: "Layer-2 Scaling",
            detail: "Sidechains and rollups handle volume the base chain can't",
            description:
              "Because the base Ethereum chain alone would be too slow and expensive at scale, chains like Polygon exist as sidechains, and rollups like Base or Arbitrum process transactions off the main chain before settling back to it. It's the EVM world's answer to Solana's state compression: a separate layer that absorbs the volume so the core chain doesn't have to.",
          },
        ],
      },
    ],
    solanaSimple:
      "Imagine a school with only one teacher checking homework, so every kid has to wait in a long line. Solana is like a school with a big clock on the wall that stamps the exact time on every paper the moment it's handed in, and lots of teachers checking different papers at once. Because of the clock, nobody has to argue about who turned something in first, and because there are many teachers working at the same time, homework gets checked super fast and doesn't cost much either.",
    solanaArchitectureDiagram: [
      {
        group: "Consensus & Execution",
        nodes: [
          {
            label: "Proof of History",
            detail: "Verifiable clock that orders transactions before consensus",
            description:
              "Proof of History is a built-in verifiable clock that timestamps transactions before consensus even runs, so validators don't need to negotiate transaction order with each other. That removes a bottleneck that slows EVM chains down, and it's the main reason Solana can move so much faster and cheaper.",
          },
          {
            label: "Sealevel",
            detail: "Runs non-overlapping transactions in parallel across cores",
            description:
              "Because a transaction declares upfront exactly which accounts it touches, the runtime, called Sealevel, can run transactions that don't overlap in parallel across multiple cores, instead of one at a time like the EVM does. That's what makes writing every single harvest or custody transfer on-chain in real time actually affordable at scale.",
          },
        ],
      },
      {
        group: "State & Programs",
        nodes: [
          {
            label: "Accounts Model",
            detail: "Every program, balance, and piece of state is an account",
            description:
              "Instead of a contract owning its own storage the way a Solidity contract does, everything on Solana, whether it's a program, a token balance, or any other piece of state, lives in an \"account,\" a flat piece of data with an owner. Programs themselves are stateless logic; they just read and write whatever accounts are handed to them in a transaction.",
          },
          {
            label: "Programs (Anchor)",
            detail: "Rust smart contracts, one program manages many accounts",
            description:
              "Programs, the Solana term for smart contracts, are written in Rust, usually with the Anchor framework, which does for Solana roughly what Hardhat and OpenZeppelin do together for Ethereum: account validation, IDL generation, testing scaffolding. One deployed program can manage an unlimited number of accounts.",
          },
          {
            label: "Program Derived Addresses",
            detail: "Deterministic accounts derived from a program ID and a seed",
            description:
              "Program Derived Addresses let an account be derived deterministically from a program ID and some seed data, like a batch ID, instead of needing a private key. That fits this project well: a batch, an actor, or a QC record can each live at an address that's computable from its ID alone, so any client, including the public buyer verification page, can find a record without a database lookup first.",
          },
        ],
      },
      {
        group: "Cost & Scaling",
        nodes: [
          {
            label: "State Compression",
            detail: "Merkle-tree storage for large data sets at a fraction of the cost",
            description:
              "State compression is a Merkle-tree-based way of storing large data sets, the same technique behind compressed NFTs, at a fraction of the usual account storage cost. That's directly useful here: a traceability graph with a large volume of harvest, QC, and custody records can be stored far more cheaply than as ordinary accounts, which is the main cost worry with recording fine-grained history on-chain.",
          },
          {
            label: "Fee Model",
            detail: "Small base fee per signature, optional priority fee",
            description:
              "Fees are simple: a small base fee per signature, plus an optional priority fee if you want faster inclusion during congestion. No gas estimation, and no separate settlement layer to think about since Solana is a single-layer chain.",
          },
        ],
      },
    ],
    flowDiagram: [
      {
        label: "Farmer / Co-op App",
        detail: "Offline-first, queues events until it syncs",
        description:
          "A farmer or cooperative uses an offline-first mobile app or PWA. They record a harvest event locally even without connectivity, and it queues up until the device syncs.",
      },
      {
        label: "Backend API",
        detail: "Validates the event, uploads documents to IPFS",
        description:
          "Once it syncs, a backend API service picks up the event, checks it against business rules like role permissions and required fields, uploads any attached document or photo to IPFS, and gets back a content hash for it.",
      },
      {
        label: "Relayer",
        detail: "Builds and pays for the Solana transaction",
        description:
          "Since farmers don't hold SOL or manage their own keys, a relayer service inside the backend builds the actual Solana transaction and pays for it, using Solana's native fee-payer model rather than a bolted-on standard. The farmer's action ends up on-chain, but the platform covers the cost, not the farmer.",
      },
      {
        label: "Solana Programs",
        detail: "BatchRegistry, QC, Export/Customs update PDAs",
        description:
          "That transaction calls into the BatchRegistry program, which creates or updates the right PDA account, whether that's batch state, a custody change, or a parent-child link, and emits a log. The QC, export/customs, and actor-registry programs all work the same way, each managing their own account types but referencing the same batch PDAs.",
      },
      {
        label: "Indexer",
        detail: "Mirrors on-chain events into Postgres",
        description:
          "An indexer service listens to program account changes and transaction logs, through Solana's RPC websocket subscriptions or a hosted indexer, and mirrors everything into a Postgres database that's fast to query. That way the buyer portal never has to walk the on-chain graph account by account just to answer a lookup.",
      },
      {
        label: "Buyer Portal",
        detail: "QR scan, client-side hash check, Explorer link",
        description:
          "The public buyer verification page is plain Next.js, no wallet required. A buyer scans a QR code with a batch ID, the page asks the indexer for the full lineage, then for each linked document it fetches the file from IPFS, recomputes its hash right there in the browser, and checks it against the hash stored on-chain. It shows whether everything matches, along with a link to the raw transaction on Solana Explorer for anyone who wants to dig deeper.",
      },
    ],
    flowBranches: [
      {
        label: "Customs / Exporter Dashboards",
        detail: "Internal staff apps",
        connectsTo: "Backend API",
        description:
          "Internal staff, like customs officers or exporters, use dashboards that go through this same backend and relayer path as farmers do, just with different role permissions checked both in the backend and by the programs themselves.",
      },
      {
        label: "IPFS Storage",
        detail: "Documents & photos, content-addressed",
        connectsTo: "Buyer Portal",
      },
    ],
    closing:
      "The pattern to notice: every actor-facing app only ever talks to the backend and relayer, never directly to the chain. That's what keeps the whole thing walletless and gasless for people who aren't crypto-native, while the indexer is what keeps every read, especially that public verification page, fast without hitting the chain live every time.",
    sources: [
      {
        label: "Polygon POS Transaction Fees: How Much Does It Cost in 2026?",
        url: "https://polygonposvspolygon.com/polygon-pos-transaction-fees.html",
      },
      {
        label: "Polygon vs Solana [TPS, Max TPS, Block Time] | Chainspect",
        url: "https://chainspect.app/compare/polygon-vs-solana",
      },
      {
        label: "Solana TPS, Finality, Fees, Block Time & More [2026]",
        url: "https://chainspect.app/chain/solana",
      },
      {
        label: "Understanding Solana Transaction Fees | Solana",
        url: "https://solana.com/learn/understanding-solana-transaction-fees",
      },
      {
        label: "Wipro Deploys Falcon Industrial Supply Chain Management Platform on Polygon PoS",
        url: "https://polygon.technology/blog/wipro-deploys-falcon-supply-chain-management-platform-on-polygon-pos-2",
      },
      {
        label: "Transforming Supply Chains with Polygon Blockchain",
        url: "https://news.morpheus.network/transforming-supply-chains-with-polygon-blockchain-addressing-industry-challenges-df79ed3ec598",
      },
    ],
  },
];
