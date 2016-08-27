import { Tomcruz } from '../../tomcruz/tomcruz';
import { MainComponent } from './main-component';

const main = new MainComponent({
  title: 'Hello world!',
  counter: 666
});

const app = new Tomcruz();
app.render('main-component', main);
