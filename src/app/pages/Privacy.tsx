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
      "Yu > Fu x Kane: chase puzzle game — progress, scores.",
      "Quotiv: Quotiv: quote and invoice generator — business, customer, and billing records.",
      "Stack Tower: casual stacking game — gameplay progress, scores, and device diagnostics.",
    ],
  },
  {
    title: "Scope of each section",
    paragraphs: [
      "Sections 2, 3, and 8 through 16 apply to every App. Sections 4 through 7 set out the additional data each App collects on top of the common baseline.",
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
    title: "3. Information We Collect (All Apps)",
    paragraphs: [
      'We collect information that identifies or relates to you ("Personal Data"). The following categories apply across the Apps:',
    ],
    bullets: [
      "Account data: name, email, phone number, password, and profile avatar. Some Apps may be used without an account — see the App-specific sections below.",
      "Device identifiers: IP address, device model, OS version, unique device ID (UUID), push-notification tokens, and performance logs.",
      "Usage and diagnostic data: feature interactions, session length, crash reports, and stability traces.",
      "Support correspondence: messages, attachments, and contact details you provide when you contact us.",
    ],
  },
  {
    title: "4. App-Specific Data: Sub Settle",
    bullets: [
      "Shared ledger & transaction data: expense titles, descriptions, amounts (in USD or your local currency), timestamps, receipts, category tags, and balance calculations among group members.",
      "Contacts (optional): with your explicit permission, names and phone numbers from your address book to enable invites and syncing.",
      "Payment-integration identifiers: tokenized identifiers and settlement logs when you connect third-party payment apps. We do NOT store full card numbers or bank credentials.",
    ],
    paragraphs: [
      "Because Sub Settle is collaborative, expenses you add are visible to the other members of that group. Deleting your account does not remove entries other members rely on — see Retention & Deletion below.",
    ],
  },
  {
    title: "5. App-Specific Data: Yu > Fu x Kane",
    bullets: [
      "[Insert the categories this App collects, e.g. profile data, user-generated content, matchmaking or session data.]",
      "[Note any optional device permissions requested, e.g. camera, microphone, location.]",
      "[Note whether accounts are required or optional.]",
    ],
  },
  {
    title: "6. App-Specific Data: Quotiv",
    bullets: [
      "[Insert the categories this App collects, e.g. saved items, submitted content, subscription status.]",
      "[Note any optional device permissions requested.]",
      "[Note whether accounts are required or optional.]",
    ],
  },
  {
    title: "7. App-Specific Data: Stack Tower",
    bullets: [
      "Gameplay data: scores, high scores, level progress, session counts, and in-game settings.",
      "Leaderboard data (optional): display name and score, where you choose to publish a result.",
      "Purchase records: receipts and entitlement status for any in-app purchases, validated through the app store. We do NOT receive or store your payment card details.",
    ],
    paragraphs: [
      "Stack Tower can be played without creating an account. Where no account exists, gameplay data is stored on your device and, if you enable it, in your platform cloud save.",
    ],
  },
  {
    title: "8. Legal Bases (GDPR)",
    paragraphs: ["Under GDPR Article 6, we process your data under these lawful bases:"],
    bullets: [
      "Performance of a contract: to run each App's core features — the ledger and balance calculations in Sub Settle, progress and leaderboards in Stack Tower, and the equivalent core functions in Yu > Fu x Kane and Quotiv.",
      "Legitimate interests: to detect fraud, ensure security, debug stability, and improve the experience.",
      "Consent: to access your contacts, use optional device permissions, or send marketing messages — you may withdraw consent at any time.",
      "Legal obligation: to comply with tax, anti-money-laundering, or legal disclosure requirements.",
    ],
  },
  {
    title: "9. California Disclosures (CCPA / CPRA)",
    paragraphs: ["This section applies to California residents:"],
    bullets: [
      "Categories collected in the past 12 months: identifiers, commercial information, and internet or other electronic network activity.",
      "No sale or sharing: we do NOT sell your personal information, nor share it for cross-context behavioral advertising, in any of the Apps.",
      "Sensitive information: processed only for necessary operations, never to infer characteristics about you.",
      "No cross-App combination for advertising: we do not merge data across Sub Settle, Yu > Fu x Kane, Quotiv, and Stack Tower to build advertising profiles.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    paragraphs: ["Wherever you live, we extend these controls to users of all four Apps:"],
    bullets: [
      "Access / know: request the categories and specific pieces of data we hold.",
      "Rectification: correct inaccurate profile, ledger, or account details.",
      'Erasure ("right to be forgotten"): request full deletion of your account and data.',
      "Data portability: export your data as structured JSON or CSV — expense history in Sub Settle, progress and score history in Stack Tower, and the equivalent records in Yu > Fu x Kane and Quotiv.",
      "Restrict or object: object to processing based on legitimate interests.",
      "Non-discrimination: we will never deny service or charge more for exercising your rights.",
    ],
  },
  {
    title: "11. Data Sharing & Processors",
    paragraphs: [
      "We do not sell, rent, or trade your data. We share it only with trusted processors under Data Processing Agreements:",
    ],
    bullets: [
      "Cloud infrastructure: AWS / Google Cloud (hosting and secure storage).",
      "Push notifications: Firebase Cloud Messaging / Apple Push Notification service.",
      "Analytics & crash reporting: privacy-compliant, anonymized diagnostics.",
      "App stores: Apple App Store and Google Play, for distribution, purchase validation, and subscription management.",
      "Payment apps (Sub Settle): you are redirected to your chosen provider (e.g., Venmo, PayPal, Cash App) to complete settlements.",
    ],
  },
  {
    title: "12. International Transfers",
    paragraphs: [
      "Your information may be stored on servers outside your state or country. For EU/UK data transferred to the United States, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission, together with supplementary technical measures where required.",
    ],
  },
  {
    title: "13. Retention & Deletion",
    paragraphs: ["We keep personal data only as long as necessary. When you delete your account:"],
    bullets: [
      "Profile identifiers (email, phone, name) are permanently purged or anonymized within 30 days.",
      'Shared ledger items in active Sub Settle groups are anonymized ("Deleted User") so remaining members keep accurate historical balances.',
      "Gameplay and progress data in Stack Tower is deleted with the account; published leaderboard entries are anonymized rather than removed, to preserve rankings.",
      "Backup archives are overwritten within 60 days on our automated cycle.",
    ],
  },
  {
    title: "14. Children's Privacy",
    paragraphs: [
      "The Apps are not directed at children under the age of 13 (or under 16 in jurisdictions where that higher threshold applies), and we do not knowingly collect personal data from them. If we learn that we have collected such data without verified parental consent, we will delete it promptly. Parents or guardians who believe a child has provided us with personal data should contact contact@troismousquetaires.com.",
    ],
  },
  {
    title: "15. Changes to This Policy",
    paragraphs: [
      'We may update this policy as the Apps evolve or the law changes. Material changes will be announced in-app and by updating the "Last updated" date above. Continued use after an update constitutes acceptance of the revised policy.',
    ],
  },
  {
    title: "16. Security & Contact",
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
