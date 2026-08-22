import { LegalPage, type LegalSection } from "../components/legal/LegalPage";

const sections: LegalSection[] = [
  {
    title: "1. Introduction & Scope",
    paragraphs: [
      'This Privacy Policy explains how Sub Settle ("the App", "we", "us", or "our") collects, uses, discloses, and safeguards your personal data. It is structured to align with global standards, including the GDPR (EU/UK) and the CCPA as amended by the CPRA (California).',
      "By using Sub Settle, you acknowledge you have read and understood this policy. If you do not agree, please do not download or use the App.",
    ],
  },
  {
    title: "2. Data Controller & DPO",
    paragraphs: [
      "For the purposes of the GDPR, the Data Controller responsible for your information is Sub Settle (operated by Trois Mousquetaire).",
    ],
    bullets: [
      "Data Controller contact: privacy@subsettle.app",
      "Data Protection Officer (DPO): dpo@subsettle.app",
      "EU/UK representative: Legal Department, Sub Settle",
    ],
  },
  {
    title: "3. Information We Collect",
    paragraphs: ['We collect information that identifies or relates to you ("Personal Data"):'],
    bullets: [
      "Account data: name, email, phone number, password, and profile avatar.",
      "Shared ledger & transaction data: expense titles, descriptions, amounts (in USD or your local currency), timestamps, receipts, category tags, and balance calculations among group members.",
      "Device identifiers: IP address, device model, OS version, unique device ID (UUID), push-notification tokens, and performance logs.",
      "Contacts (optional): with your explicit permission, names and phone numbers from your address book to enable invites and syncing.",
      "Payment-integration identifiers: tokenized identifiers and settlement logs when you connect third-party payment apps. We do NOT store full card numbers or bank credentials.",
    ],
  },
  {
    title: "4. Legal Bases (GDPR)",
    paragraphs: ["Under GDPR Article 6, we process your data under these lawful bases:"],
    bullets: [
      "Performance of a contract: to run the ledger, calculate balances, notify participants, and provide core features.",
      "Legitimate interests: to detect fraud, ensure security, debug stability, and improve the experience.",
      "Consent: to access your contacts or send marketing messages — you may withdraw consent any time.",
      "Legal obligation: to comply with tax, anti-money-laundering, or legal disclosure requirements.",
    ],
  },
  {
    title: "5. California Disclosures (CCPA / CPRA)",
    paragraphs: ["This section applies to California residents:"],
    bullets: [
      "Categories collected in the past 12 months: identifiers, commercial information, and internet activity.",
      "No sale or sharing: we do NOT sell your personal information, nor share it for cross-context behavioral advertising.",
      "Sensitive information: processed only for necessary operations, never to infer characteristics about you.",
    ],
  },
  {
    title: "6. Your Privacy Rights",
    paragraphs: ["Wherever you live, we extend these controls to all Sub Settle users:"],
    bullets: [
      "Access / know: request the categories and specific pieces of data we hold.",
      "Rectification: correct inaccurate profile or ledger details.",
      'Erasure ("right to be forgotten"): request full deletion of your account and data.',
      "Data portability: export your expense history as structured JSON or CSV.",
      "Restrict or object: object to processing based on legitimate interests.",
      "Non-discrimination: we will never deny service or charge more for exercising your rights.",
    ],
  },
  {
    title: "7. Data Sharing & Processors",
    paragraphs: [
      "We do not sell, rent, or trade your data. We share it only with trusted processors under Data Processing Agreements:",
    ],
    bullets: [
      "Cloud infrastructure: AWS / Google Cloud (hosting and secure storage).",
      "Push notifications: Firebase Cloud Messaging / Apple Push Notification service.",
      "Analytics & crash reporting: privacy-compliant, anonymized diagnostics.",
      "Payment apps: you are redirected to your chosen provider (e.g., Venmo, PayPal, Cash App) to complete settlements.",
    ],
  },
  {
    title: "8. International Transfers",
    paragraphs: [
      "Your information may be stored on servers outside your state or country. For EU/UK data transferred to the United States, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission.",
    ],
  },
  {
    title: "9. Retention & Deletion",
    paragraphs: [
      "We keep personal data only as long as necessary. When you delete your account:",
    ],
    bullets: [
      "Profile identifiers (email, phone, name) are permanently purged or anonymized within 30 days.",
      'Shared ledger items in active groups are anonymized ("Deleted User") so remaining members keep accurate historical balances.',
      "Backup archives are overwritten within 60 days on our automated cycle.",
    ],
  },
  {
    title: "10. Security & Contact",
    paragraphs: [
      "We use industry-standard safeguards, including AES-256 encryption at rest and TLS 1.3 in transit.",
      "For questions, data requests, or complaints, contact our DPO at privacy@subsettle.app.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How Sub Settle handles your data · GDPR & CCPA/CPRA compliant · Last updated August 2026"
      sections={sections}
    />
  );
}
