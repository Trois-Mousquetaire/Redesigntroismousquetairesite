import { LegalPage, type LegalSection } from "../components/legal/LegalPage";

const sections: LegalSection[] = [
  {
    title: "1. Acceptance & Eligibility",
    paragraphs: [
      'By downloading, installing, or using Sub Settle ("the App" or "Service"), you agree to these Terms of Service. If you do not agree, please uninstall and stop using the App.',
      "You must be at least 13 years old (or 16 in certain EU jurisdictions) to create an account. By using Sub Settle, you confirm you meet these requirements.",
    ],
  },
  {
    title: "2. Informal Ledger — Not a Financial Institution",
    paragraphs: [
      "Sub Settle is a digital tool for tracking, organizing, and calculating informal shared expenses, group balances, and IOUs among users.",
    ],
    bullets: [
      "Informal record-keeping only: balances and summaries are informal records created by users. They are NOT bank statements, accounting ledgers, legal debts, or promissory notes.",
      "Not a bank or money transmitter: Sub Settle is NOT a bank, money service business (MSB), escrow agent, or regulated financial institution. We do not hold funds or issue credit.",
      "Independent settlements: any payments, cash exchanges, or transfers are made independently by users or through separate third-party payment apps.",
    ],
  },
  {
    title: "3. Accounts & Responsibilities",
    paragraphs: ["To use core features you must register an account. You agree to:"],
    bullets: [
      "Provide accurate, current, and complete information.",
      "Keep your login credentials secure and confidential.",
      "Update your profile promptly if your phone number or email changes.",
      "Accept full responsibility for all activity under your account.",
    ],
  },
  {
    title: "4. User Content & Accuracy",
    paragraphs: [
      'You own all text, images, receipts, comments, and expense titles you post ("User Content"). By posting, you grant Sub Settle a worldwide, non-exclusive, royalty-free license to host, display, and process that content solely to operate the Service.',
      "You confirm that all expenses, receipts, and splits you submit reflect genuine, honest transactions among consenting participants. We may remove content that violates these Terms.",
    ],
  },
  {
    title: "5. Prohibited Conduct",
    paragraphs: ["When using Sub Settle, you agree NOT to:"],
    bullets: [
      "Use the Service for money laundering, illegal gambling, fraud, extortion, or unauthorized commercial activity.",
      "Enter false or misleading amounts to harass or unfairly claim money from others.",
      "Reverse-engineer, decompile, extract source code, or compromise the App's infrastructure.",
      "Use bots, scrapers, or crawlers to access or gather data from the App.",
      "Upload viruses, malware, or code that disrupts the Service.",
    ],
  },
  {
    title: "6. Third-Party Payments",
    paragraphs: [
      "Sub Settle may include links or buttons for third-party payment apps and wallets (e.g., Venmo, PayPal, Cash App, Zelle).",
    ],
    bullets: [
      "Independent third parties: these platforms are operated by others, with their own terms and privacy policies.",
      "No liability for payment failures: we do not process or handle payments directly. We bear zero liability for failed, incorrect, delayed, or unauthorized transactions on third-party platforms.",
    ],
  },
  {
    title: "7. Disclaimers & Limitation of Liability",
    paragraphs: [
      'Sub Settle is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.',
      "To the maximum extent permitted by law, Sub Settle and its developers shall not be liable for any indirect, incidental, special, or consequential damages — including loss of profits, data, or goodwill — arising from:",
    ],
    bullets: [
      "Inaccurate expense calculations, conversion rates, or balance totals.",
      "Disputes or unpaid debts between users.",
      "Unauthorized access to or alteration of your expense entries.",
      "Interruptions, errors, downtime, or data corruption.",
    ],
  },
  {
    title: "8. Dispute Resolution & Governing Law",
    paragraphs: [
      "These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict-of-law principles.",
      "Any dispute should first be submitted to informal resolution by contacting legal@subsettle.app. If unresolved within 30 days, it will be settled by binding individual arbitration or small-claims court, waiving any right to class-action lawsuits.",
    ],
  },
  {
    title: "9. Changes & Termination",
    paragraphs: [
      "We may modify these Terms at any time and will post material updates in the App or by email. Continued use after changes take effect constitutes acceptance.",
      "We may suspend or terminate your access immediately, without notice, if you breach these Terms or engage in fraudulent conduct.",
    ],
  },
  {
    title: "10. Legal Contact",
    paragraphs: [
      "For legal questions, notices, or formal correspondence regarding these Terms, contact:",
    ],
    bullets: [
      "Legal email: legal@subsettle.app",
      "Sub Settle — Legal Department, operated by Trois Mousquetaire.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The rules for using Sub Settle · Last updated August 2026"
      sections={sections}
    />
  );
}
