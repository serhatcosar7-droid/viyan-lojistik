Set-Location -LiteralPath (Split-Path -Parent $PSScriptRoot)
npm.cmd run dev -- -p 3000 *> ".\dev-server.log"
