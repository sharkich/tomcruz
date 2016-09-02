import {Tomcruz} from '../tomcruz/tomcruz';
import {MainComponent} from './main-component';

const main = new MainComponent({
    title: 'Hello world!',
    counter: 666
});

main.list.push('x1');
main.list.push('x1x');
main.list.push('xXx');

main.render(document.getElementById('main-component'));

// const app = new Tomcruz();
// app.render(document.getElementById('main-component'), main, );
