import {TomcruzComponent} from './tomcruz.component';

export class Tomcruz {

    components: TomcruzComponent[] = [];

    /**
     * @param {object} options
     */
    constructor(options = {}) {
        console.log(`Tomcruz.constructor(${options})`);
    }

    /**
     * Register Component for add events after rendering and other
     * @param component
     * @return {string} - ID of new element
     */
    registerComponent(component: TomcruzComponent): TomcruzComponent {
        this.components.push(component);
        console.log(`Tomcruz.registerComponent(${component})`, this.components);
        if (!component.id) {
            component.id = `-tomcruz-${this.components.length}`;
        }
        return component;
    }
}
