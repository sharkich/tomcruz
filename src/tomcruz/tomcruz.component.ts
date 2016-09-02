import {Tomcruz} from './tomcruz';
import renderToStaticMarkup = __React.__DOMServer.renderToStaticMarkup;

export class TomcruzComponent {
    tomcruz: Tomcruz;
    template: string = '';
    id: string;

    constructor(tomcruz: Tomcruz, paremeners = {}) {
        console.log(`TomcruzComponent.constructor(${paremeners})`);
        this.tomcruz = tomcruz;
        Object.assign(this, paremeners);
        this.register();
    }

    register() {
        this.tomcruz.registerComponent(this);
    }
}
