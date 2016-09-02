export class TomcruzComponent {
    template: string = '';

    constructor(paremeners = {}) {
        console.log(`TomcruzComponent.constructor(${paremeners})`);
        Object.assign(this, paremeners);
    }

    render(element: HTMLElement, template: string) {
        console.log('TomcruzComponent.render()');
        element.innerHTML = template;
    }
}
