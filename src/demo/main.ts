import {Tomcruz} from '../tomcruz/tomcruz';
import {MainComponent} from './main.component';

const tomcruz = new Tomcruz();

const main = new MainComponent(tomcruz, {
    id: 'main-component',
    title: 'Hello world!',
    counter: 666
});

main.list.push('x1');
main.list.push('x1x');
main.list.push('xXx');

main.render(document.getElementById('main-component'));
