import LegalDoc from "../components/LegalDoc";
import deleteAccountData from "../data/deleteAccount";

/**
 * Public "how to delete your account" page required by Google Play's Data
 * safety section — reachable without installing the app. Rendered the same
 * way as Privacy/Terms (see LegalDoc), and supports `?webview=1` the same
 * way, via RootLayout.
 */
export default function DeleteAccount() {
  return <LegalDoc data={deleteAccountData} />;
}
