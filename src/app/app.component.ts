import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Leonardo';
  age = 28;
  img = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Leonardo',
    age: 28,
    avatar: 'https://images.unsplash.com/photo-1531536154768-3b69bcb0cda0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'
  };
  names: string[] = ['Wichtrap', 'Death', 'Municipal Waste'];
  newName: string = '';
  box = {
    width: 100,
    heigth: 100,
    background: 'red'
  };
  imgParent = '';
  showImg = true;

  toggleImg() {
    this.showImg = !this.showImg;
  }

  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  decreaseAge() {
    this.person.age--;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
