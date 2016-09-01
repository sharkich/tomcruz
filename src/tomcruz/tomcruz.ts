import {TomcruzComponent} from './tomcruz-component';

export class Tomcruz {

    /**
     * @param {object} options
     */
    constructor(options = {}) {
        console.log(`Tomcruz.constructor(${options})`);
    }

    /**
     * Render component to HTML-element with specific ID
     * @param {string} elementID
     * @param {object} component
     */
    render(elementID: string, component:TomcruzComponent ) {
        console.log(`Tomcruz.render(${elementID}, ${component})`);
    }
}
