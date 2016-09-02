import {TomcruzComponent} from '../tomcruz/tomcruz-component';

export class MainComponent extends TomcruzComponent {
    title: string;
    counter: number;

    constructor(parameters = {}) {
        super(parameters);
        console.log(`MainComponent.constructor(${parameters})`);
    }

    render(element) {
        return element.innerHTML = `
            <div id="main-component__inner">
                <h1>${this.title}</h1>
                <p>Counter: ${this.counter}</p>
            </div>
        `;
    }
}
