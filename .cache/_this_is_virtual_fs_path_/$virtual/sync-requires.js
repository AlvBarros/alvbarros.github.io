
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/alvarobarros/Projects/alvbarros.github.io/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/alvarobarros/Projects/alvbarros.github.io/src/pages/index.tsx"))
}

