import {Tomcruz} from '../tomcruz/tomcruz';
import {TomcruzComponent} from '../tomcruz/tomcruz.component';

export class IncComponent extends TomcruzComponent {
    counter: number;

    constructor(tomcruz: Tomcruz, parameters = {}) {
        super(tomcruz, parameters);
        console.log(`IncComponent.constructor(${parameters})`);
    }

    incClick() {
        console.log('incClick');
    }

    render(element?: HTMLElement): string {
        let html = `
            <div class="inc-component">
                <p>Counter: ${this.counter}</p>
                <p><button class="inc-component__btn">INC</button></p>
            </div>
        `;

        if (element) {
            element.innerHTML = html;
        }

        return html;
    }

    afterRender() {
        let elementsCollection = document.getElementsByClassName('inc-component__btn');
        console.log('l:', elementsCollection.length, elementsCollection);
        for(let i = 0; i <= elementsCollection.length; i++) {
            let item = elementsCollection.item(i);
            if (!item) {
                return;
            }
            item.addEventListener('click', this.incClick);
        }
    }
}
