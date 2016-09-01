export class TomcruzComponent {
    constructor(paremeners = {}) {
        console.log(`TomcruzComponent.constructor(${paremeners})`);
        Object.assign(this, paremeners);
    }
}
