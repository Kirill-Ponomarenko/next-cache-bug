## The problem

If an image source used on page isn't available at the build time, cache will be disabled for the layout

## How to reproduce

1. Run `pnpm build`
2. Run `pnpm start`
3. Open http://localhost:3000/
4. See 3 `LAYOUT!!!!` messages in the server console on every page load

Notes:

1. "next/image" could be replaced with native `<img src="..."/>`
2. Layout will get 1 rerender for each unique broken image link
3. No warnings at the build time
