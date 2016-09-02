import {TomcruzComponent} from '../tomcruz/tomcruz-component';

export class MainComponent extends TomcruzComponent {
    title: string;
    counter: number;
    list: string[] = [];

    constructor(parameters = {}) {
        super(parameters);
        console.log(`MainComponent.constructor(${parameters})`);
    }

    renderList(): string {
        if (!this.list.length) {
            return '';
        }

        let result = '';
        this.list.forEach((el) => {
            result += `<li>${el}</li>`;
        });

        return `<ul>${result}</ul>`;
    }

    render(element: HTMLElement): string {
        return element.innerHTML = `
            <div>
                <h1>${this.title}</h1>
                <p>Counter: ${this.counter}</p>
                ${this.renderList()}
            </div>
        `;
    }
}
