import { SheetsRegistry } from 'react-jss'

let registry

export function getSheetsRegistry() {
    if (!registry) registry = new SheetsRegistry
    return registry
}

export function destroySheetsRegistry() {
    registry = null
}
