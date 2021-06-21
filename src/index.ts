import {NodePlopAPI} from "node-plop"

import component from "./component"

const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({generators: true})
    plop.setGenerator("component", component)
}

export default generator
