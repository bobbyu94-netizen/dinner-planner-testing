# Testing Notes

Use this file to track simple checks before moving approved changes to the live Dinner Planner app.

## Testing Checklist

- Every commit that changes app behavior must update the "Updated [date] [time]" timestamp in the banner at the top of `index.html`, using current Eastern Time in the format `Jul 13, 2026 2:53 PM ET`. This is how Bobby confirms a change is actually live before testing it.
- To get the timestamp: run `date "+%b %-d, %Y %-I:%M %p"` (append " ET") with NO `TZ=` override — the shell's default local time is already Eastern. Forcing `TZ="America/New_York"` on top of it double-shifts by 4 hours (learned the hard way 2026-07-13).
- Confirm changes were made only in `bobbyu94-netizen/dinner-planner-testing`.
- Wait for GitHub Pages to redeploy after each commit.
- Refresh the testing app and verify the visible change.
- Test the affected menu or feature on desktop.
- Test the affected menu or feature on iPhone.
- Confirm the live repo `bobbyu94-netizen/dinner-planner` was not changed.
- Record any bugs or follow-up ideas in GitHub issues before moving changes live.
- Confirm Testing Version label is visible on the testing app.
