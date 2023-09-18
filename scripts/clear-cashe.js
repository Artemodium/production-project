const fs = require('fs')
const path = require('path')

const Path = path.join(__dirname, '..', 'node_modules', '.cache')

fs.rmSync(Path, { recursive: true, force: true })
