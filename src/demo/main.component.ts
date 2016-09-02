import {TomcruzComponent} from '../tomcruz/tomcruz-component';

import {IncComponent} from './inc.component';

export class MainComponent extends TomcruzComponent {
    title: string;
    list: string[] = [];
    incs: IncComponent[] = [];

    constructor(parameters = {}) {
        super(parameters);
        console.log(`MainComponent.constructor(${parameters})`);

        this.incs.push(new IncComponent({
            counter: 666
        }));

        this.incs.push(new IncComponent({
            counter: 777
        }));
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
            <div class="main-component">
                <h1>${this.title}</h1>
                ${this.renderList()}
                <hr>
                ${this.incs[0].render()}
                <hr>
            </div>
        `;
    }
}
