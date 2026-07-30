/** Open a URL in a new tab without stealing focus when the browser allows it. */
export function openInBackground(url: string) {
  const tab = window.open(url, '_blank', 'noopener,noreferrer');
  if (tab) {
    tab.blur();
    window.focus();
  }
}
