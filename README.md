## Portfolio Repo
my portfolio repository, built with Next.Js and Chakra UI

### Development
install required dependency with `yarn install` or `npm install` and then run `yarn dev`on project root directory to run development server.

### Building for Production
run `yarn build` to build production ready code, the output is generated inside the .next folder.


> - `.next/static/chunks/pages` – Each JavaScript file inside this folder relates to the route with the same name. For example, .next/static/chunks/pages/about.js would be the JavaScript file loaded when viewing the /about route in your application
>
> - `.next/static/media` – Statically imported images from next/image are hashed and copied here
>
> - `.next/static/css` – Global CSS files for all pages in your application
> - `.next/server/pages` – The HTML and JavaScript entry points prerendered from the server. The .nft.json files are created when Output File Tracing is enabled and contain all the file paths that depend on a given page.
>
> - `.next/server/chunks` – Shared JavaScript chunks used in multiple places throughout your application
> - `.next/cache` – Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images
>
> All JavaScript code inside .next has been compiled and browser bundles have been minified to help achieve the best performance and support all modern browsers.

Quoted from official Next.JS Documentation