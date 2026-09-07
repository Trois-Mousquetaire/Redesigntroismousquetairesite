import { LegalPage, type LegalSection } from "../components/legal/LegalPage";
import { Seo } from "../components/Seo";

const sections: LegalSection[] = [
  {
    title: "1. Introduction & Scope",
    paragraphs: [
      'This Privacy Policy explains how Trois Mousquetaires ("the Company", "we", "us", or "our") collects, uses, discloses, and safeguards your personal data. It is structured to align with global standards, including the GDPR (EU/UK) and the CCPA as amended by the CPRA (California).',
      'This single policy governs all applications published under the Trois Mousquetaires umbrella (collectively, "the Apps"):',
    ],
    bullets: [
      "Sub Settle: shared expense tracking and group settlement — ledger entries, balances, and payment redirects.",
      "Yu > Fu x Kane: chase puzzle game — progress and scores.",
      "Quotiv: quote and invoice generator — business, customer, and billing records.",
      "Stack Tower: casual stacking game — gameplay progress, scores, and device diagnostics.",
    ],
  },
  {
    title: "Scope of each section",
    paragraphs: [
      "The Apps differ substantially in what they collect. Section 3 lists only the data common to every App. Sections 4 through 7 state what each individual App collects, and are the authoritative list for that App. Where a section applies to only some Apps, it says so.",
      "By using any of the Apps, you acknowledge you have read and understood this policy. If you do not agree, please do not download or use them.",
    ],
  },
  {
    title: "2. Data Controller & DPO",
    paragraphs: [
      "For the purposes of the GDPR, the Data Controller responsible for your information across all four Apps is Trois Mousquetaires.",
    ],
    bullets: [
      "Data Controller contact: contact@troismousquetaires.com",
      "Data Protection Officer (DPO): contact@troismousquetaires.com",
      "EU/UK representative: Legal Department, Trois Mousquetaires",
      "Registered address: [insert full registered company address]",
    ],
  },
  {
    title: "3. Information We Collect Across All Apps",
    paragraphs: ["The following applies to every App:"],
    bullets: [
      "Technical data necessary to deliver the App: IP address, device model, and operating system version. This is processed to serve the App, maintain security, and diagnose faults.",
      "Support correspondence: messages, attachments, and contact details you provide when you contact us.",
    ],
  },
  {
    title: "Scope of the App-specific sections",
    paragraphs: [
      "Everything else is App-specific and is listed in Sections 4 through 7. We do not operate a single cross-App profile of you. Accounts and progress are kept separate per App unless you explicitly link them.",
    ],
  },
  {
    title: "4. App-Specific Data: Sub Settle",
    bullets: [
      "Account data: name, email, phone number, password, and profile avatar.",
      "Shared ledger & transaction data: expense titles, descriptions, amounts (in USD or your local currency), timestamps, receipts, category tags, and balance calculations among group members.",
      "Device identifiers: unique device ID (UUID), push-notification tokens, and performance logs.",
      "Contacts (optional): with your explicit permission, names and phone numbers from your address book to enable invites and syncing.",
      "Payment-integration identifiers: tokenized identifiers and settlement logs when you connect third-party payment apps. We do NOT store full card numbers or bank credentials.",
      "Advertising identifier and ad delivery data: see Section 8, which applies to this App. Your ledger entries, contacts, and payment-integration identifiers are NOT passed to the advertising SDK.",
    ],
    paragraphs: [
      "Because Sub Settle is collaborative, expenses you add are visible to the other members of that group. Deleting your account does not remove entries other members rely on — see Section 14.",
    ],
  },
  {
    title: "5. App-Specific Data: Yu > Fu x Kane",
    paragraphs: ["Yu > Fu x Kane is a chase puzzle game."],
    bullets: [
      "Account data: your name and email address, received from Google when you sign in with Google Sign-In. Authentication is handled entirely by Google — we do NOT collect or store a password. We do NOT collect a phone number or a profile avatar.",
      "Gameplay data: level progress, scores, and in-game settings.",
      "Advertising identifier and ad delivery data: your device's advertising identifier (Android Advertising ID, or IDFA on iOS where permitted), IP address, device and app information, and ad interaction data, collected by Google AdMob to serve interstitial and rewarded ads. See Section 8.",
    ],
  },
  {
    title: "Yu > Fu x Kane: what we do not collect",
    paragraphs: [
      "Yu > Fu x Kane does NOT use push notifications, does NOT integrate a crash-reporting SDK, and does NOT collect contacts, location, camera, or microphone data.",
      "You can delete your account at any time from within the App using the Delete Account control — see Section 14.",
    ],
  },
  {
    title: "6. App-Specific Data: Quotiv",
    paragraphs: [
      "Quotiv is an invoicing and quotation tool for freelancers and small businesses.",
    ],
    bullets: [
      "Account data: your name and email address, received from Google when you sign in with Google Sign-In. Authentication is handled entirely by Google — we do NOT collect or store a password.",
      "Business profile data: your business name, address, logo, tax or VAT registration number, payment terms, and any bank or payment details you choose to display on your documents.",
      "Client and document data: the names, addresses, email addresses, and other contact details of the clients you invoice, together with line items, descriptions, amounts, currencies, dates, and the invoices and quotations you generate.",
      "Subscription data: subscription status, purchase tokens, and renewal state, validated through the app store. We do NOT receive or store your payment card details.",
      "Advertising identifier and ad delivery data: see Section 8, which applies to this App. [Confirm that no invoice, client, or business data is passed to the advertising SDK, and state it here as we do for Sub Settle.]",
    ],
  },
  {
    title: "Quotiv: data about your clients",
    paragraphs: [
      "The client details you enter are personal data about other people, who are not our users. For that data you are the controller and we act as your processor — we store and process it only to provide the App to you, and never for our own purposes. You are responsible for having a lawful basis to enter your clients' information and for telling them how it is used. A Data Processing Agreement is available on request from contact@troismousquetaires.com.",
      "You can delete your account at any time from within the App using the Delete Account control — see Section 14.",
    ],
  },
  {
    title: "7. App-Specific Data: Stack Tower",
    paragraphs: [
      "DRAFT — PARTIALLY CONFIRMED. Sign-in, leaderboards, cloud save, and advertising are confirmed; this App has no in-app purchases. Only the gameplay data list below is still unverified against the shipped build.",
    ],
    bullets: [
      "Google Play Games sign-in: your Play Games player ID and display name, provided by Google. We do NOT collect an email address, phone number, or password for this App.",
      "Gameplay data: scores, high scores, level progress, session counts, and in-game settings. [Confirm this list.]",
      "Leaderboard data (optional): your Play Games display name and score, where you choose to publish a result. Leaderboards are operated by Google Play Games Services.",
      "Cloud save data: your gameplay progress, stored through Play Games Saved Games so it carries across your devices.",
      "Advertising identifier and ad delivery data: see Section 8, which applies to this App.",
    ],
  },
  {
    title: "8. Advertising & Advertising Identifiers",
    paragraphs: [
      "This section applies to all four Apps — Sub Settle, Yu > Fu x Kane, Quotiv, and Stack Tower.",
      "Each App displays advertisements supplied by Google AdMob. In Yu > Fu x Kane these are interstitial and rewarded formats. [Confirm the ad formats used in Sub Settle, Quotiv, and Stack Tower.] To select and measure those ads, Google collects and processes:",
    ],
    bullets: [
      "Your device's advertising identifier (Android Advertising ID, or IDFA on iOS where you permit it).",
      "Your IP address, from which approximate location may be inferred.",
      "Device and app information, and your interactions with ads shown to you.",
      "Android: you can delete or reset your advertising ID at Settings → Privacy → Ads.",
      "iOS: you can turn off tracking for the App at Settings → Privacy & Security → Tracking.",
    ],
  },
  {
    title: "Advertising: consent and personalization",
    paragraphs: [
      "Google acts as an independent controller for the processing described above. Its handling of the data is governed by the Google Privacy Policy at https://policies.google.com/privacy and by Google's advertising terms.",
      'Where you consent, ads may be personalized using your advertising identifier — a practice the CCPA/CPRA classifies as "sharing" for cross-context behavioral advertising. Section 10 explains your opt-out rights.',
      "In the EEA, UK, and Switzerland, Sub Settle, Quotiv, and Stack Tower present a consent prompt on first launch through Google's User Messaging Platform. If you decline, you will continue to see ads, but they will be non-personalized. Yu > Fu x Kane does not currently present this prompt.",
      "We do not store your advertising identifier on our own servers, and we do not link it to your account data.",
    ],
  },
  {
    title: "9. Legal Bases (GDPR)",
    paragraphs: ["Under GDPR Article 6, we process your data under these lawful bases:"],
    bullets: [
      "Performance of a contract: to run each App's core features — the ledger and balance calculations in Sub Settle, gameplay in Yu > Fu x Kane and Stack Tower, and invoice and quotation generation in Quotiv.",
      "Consent: for personalized advertising in Sub Settle, Quotiv, and Stack Tower, for access to your contacts in Sub Settle, and for marketing messages. You may withdraw consent at any time, and withdrawal is as easy as giving it.",
      "Legitimate interests: to detect fraud, ensure security, debug stability, and improve the experience.",
      "Legal obligation: to comply with tax, anti-money-laundering, or legal disclosure requirements.",
    ],
  },
  {
    title: "10. California Disclosures (CCPA / CPRA)",
    paragraphs: ["This section applies to California residents:"],
    bullets: [
      "Categories collected in the past 12 months: identifiers (including an advertising identifier), commercial information, and internet or other electronic network activity.",
      "No sale: we do NOT sell your personal information, and we receive no money for it in any App.",
      'Sharing for cross-context behavioral advertising: in every App, where you have not opted out and are not a user we treat as a child, your advertising identifier is shared with Google AdMob to serve personalized ads. Under the CPRA this constitutes "sharing."',
      "Your right to opt out: you may opt out of this sharing by resetting or deleting your advertising identifier using the device controls in Section 8, by declining personalization in the in-app consent prompt where one is presented (Sub Settle, Quotiv, and Stack Tower), or by emailing contact@troismousquetaires.com. We honour Global Privacy Control signals where they reach us.",
      "Sensitive information: processed only for necessary operations, never to infer characteristics about you.",
      "No cross-App profiling: we do not merge data across Sub Settle, Yu > Fu x Kane, Quotiv, and Stack Tower to build advertising profiles.",
    ],
  },
  {
    title: "11. Your Privacy Rights",
    paragraphs: ["Wherever you live, we extend these controls to users of all four Apps:"],
    bullets: [
      "Access / know: request the categories and specific pieces of data we hold.",
      "Rectification: correct inaccurate profile, ledger, or account details.",
      'Erasure ("right to be forgotten"): request full deletion of your account and data.',
      "Data portability: export your data as structured JSON or CSV.",
      "Restrict or object: object to processing based on legitimate interests, and withdraw consent for advertising personalization.",
      "Non-discrimination: we will never deny service or charge more for exercising your rights.",
    ],
  },
  {
    title: "12. Data Sharing & Processors",
    paragraphs: [
      "We do not sell, rent, or trade your data. We share it only with the following, under Data Processing Agreements where they act as processors:",
    ],
    bullets: [
      "Cloud infrastructure: AWS / Google Cloud (hosting and secure storage).",
      "Google Sign-In: authentication for Yu > Fu x Kane and Quotiv.",
      "Google Play Games Services: sign-in, leaderboards, and cloud save for Stack Tower. Your Play Games profile is operated by Google under its own terms.",
      "Google AdMob: advertising delivery and measurement in all four Apps. Google acts as an independent controller for this processing, not as our processor.",
      "App store billing: Google Play Billing / Apple In-App Purchase, for Quotiv subscription validation and renewal status.",
      "Push notifications (Sub Settle only): Firebase Cloud Messaging / Apple Push Notification service.",
      "Payment apps (Sub Settle only): you are redirected to your chosen provider (e.g., Venmo, PayPal, Cash App) to complete settlements.",
    ],
  },
  {
    title: "13. International Transfers",
    paragraphs: [
      "Your information may be stored on servers outside your state or country. For EU/UK data transferred to the United States, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission, together with supplementary technical measures where required.",
    ],
  },
  {
    title: "14. Retention & Deletion",
    paragraphs: ["We keep personal data only as long as necessary."],
    bullets: [
      'Sub Settle: when you delete your account, profile identifiers (email, phone, name) are permanently purged or anonymized within 30 days. Shared ledger items in active groups are anonymized ("Deleted User") so remaining members keep accurate historical balances.',
      "Yu > Fu x Kane: you can delete your account at any time using the Delete Account control inside the App. This removes the name and email address associated with your Google Sign-In, and your gameplay progress, from our systems within 30 days.",
      "Quotiv: you can delete your account at any time using the Delete Account control inside the App. This removes your Google Sign-In identifiers, business profile, and the invoices, quotations, and client records you created, within 30 days. Because tax law may require you to retain your own invoicing records, export your documents before deleting — we cannot recover them afterwards.",
      "Stack Tower: gameplay and progress data held by us is deleted with the account. Your Play Games player profile, saved games, and leaderboard entries are held by Google under your Google account — manage or delete those through Play Games settings. [Confirm what Stack Tower stores on our own servers, if anything, and state the deletion route.]",
      "All Apps: backup archives are overwritten within 60 days on our automated cycle. Deleting one App's account does not delete your accounts in the others — to remove all of them, say so in your request.",
    ],
  },
  {
    title: "15. Children's Privacy",
    paragraphs: [
      "Yu > Fu x Kane and Stack Tower have target audiences that include children under 13. Sub Settle and Quotiv do not.",
      "For users we treat as children, the following applies:",
    ],
    bullets: [
      "We do NOT collect or transmit an advertising identifier.",
      "Only non-personalized ads are served, through a Google Play certified ads SDK, with child-directed treatment enabled.",
      "We do NOT use personal data for behavioral advertising, profiling, or cross-context tracking.",
      "We collect no more personal data than is needed to run the App.",
      "Parents and guardians may request to review the personal data we hold about their child, have it deleted, and refuse any further collection, by writing to contact@troismousquetaires.com.",
    ],
  },
  {
    title: "16. Changes to This Policy",
    paragraphs: [
      'We may update this policy as the Apps evolve or the law changes. Material changes will be announced in-app and by updating the "Last updated" date above. Continued use after an update constitutes acceptance of the revised policy.',
    ],
  },
  {
    title: "17. Security & Contact",
    paragraphs: [
      "We use industry-standard safeguards, including AES-256 encryption at rest and TLS 1.3 in transit, access controls limiting staff access to what their role requires, and regular security review.",
      "For questions, data requests, or complaints, contact us at contact@troismousquetaires.com.",
      "If you are in the EU or UK and believe we have not resolved your concern, you have the right to lodge a complaint with your local supervisory authority.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Trois Mousquetaires collects, uses, and safeguards your personal data across Sub Settle, Yu > Fu x Kane, Quotiv, and Stack Tower — GDPR and CCPA/CPRA compliant."
        path="/privacy"
      />
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Trois Mousquetaires handles your data across Sub Settle, Yu > Fu x Kane, Quotiv, and Stack Tower · GDPR & CCPA/CPRA compliant · Last updated September 2026"
        sections={sections}
      />
    </>
  );
}
