import { Redirect } from "expo-router";

// This file was previously a duplicate and referenced a missing asset.
// To avoid bundling errors, keep this file minimal and redirect to the tabs.
export default function Index() {
  return <Redirect href="(tabs)" />;
}

