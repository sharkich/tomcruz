export class TomcruzComponent {
    template: string = '';

    constructor(paremeners = {}) {
        console.log(`TomcruzComponent.constructor(${paremeners})`);
        Object.assign(this, paremeners);
    }
}
