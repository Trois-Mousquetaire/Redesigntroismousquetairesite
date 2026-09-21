// Content for the Delete account page. Edit the text here and republish to
// update the page. (Plain data module — no JSON import needed, works in any
// bundler.) Source of truth for this copy: plan/ACCOUNT_DELETION.md in the
// app repo ("The web page — still to do").
//
// TODO(Zohaib): replace the placeholder support address below with the real
// one once it exists, and confirm the 30-day backup retention figure (see
// the note in the last section) before this is treated as final.

const deleteAccount = {
  document: "delete-account",
  title: "Deleting your Sub Settle account",
  subtitle: "How to delete your account, and what happens to your data.",
  version: 1,
  lastUpdated: "2026-09-22",
  locale: "en",
  sections: [
    {
      heading: "",
      blocks: [
        {
          type: "p",
          text: "You can delete your account at any time from inside the app: open Account, scroll to the bottom and tap Delete account. You will be asked to confirm twice, and the deletion happens immediately.",
        },
        {
          type: "p",
          text: "If you cannot access the app, email us at [SUPPORT EMAIL — TODO, see PR] from the address registered to your account and we will delete it for you within 30 days.",
        },
      ],
    },
    {
      heading: "What is deleted",
      blocks: [
        {
          type: "p",
          text: "Your name, email address, phone number and profile photo; your login; and all notification tokens for your devices. Your account can no longer be signed in to.",
        },
      ],
    },
    {
      heading: "What is kept, and why",
      blocks: [
        {
          type: "p",
          text: "Expenses you shared with other people remain visible to those people, shown against \"Deleted user\". We keep them because they are part of their records — removing your half of a shared expense would silently change what your friends owe each other. Any money you owed or were owed is not cancelled by deleting your account.",
        },
      ],
    },
    {
      heading: "How long it takes",
      blocks: [
        {
          type: "p",
          text: "Deletion from the app is immediate. Backups are retained for 30 days and are then overwritten. (This retention period needs confirmation against current backup policy before it is treated as final — see the PR that added this page.)",
        },
      ],
    },
  ],
};

export default deleteAccount;
