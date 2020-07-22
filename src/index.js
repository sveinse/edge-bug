import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import semver from "semver"

const find_latest = relinfo => {
  let latest = {}
  for (let vinfo of relinfo) {
    let sver = vinfo.version.replace("-b", ".0-beta.")
    if (
      !latest[vinfo.train] ||
      semver.gt(sver, latest[vinfo.train].semver, { includePrerelease: true })
    ) {
      latest[vinfo.train] = {
        ...vinfo,
        semver: sver,
      }
    }
  }
  return latest
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
