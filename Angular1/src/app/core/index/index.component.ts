import { Component } from '@angular/core';
import { usersServicie } from '../../../services/Users.servicie';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  users: any;
  constructor(public usersService: usersServicie){
    this.getusers();
  }

  createRandomUser(){
    const obj = {};
    this.usersService.createRandomuser(obj).subscribe((resultado) => {
      console.log(resultado);
    });
  }
  getusers(){
    this.usersService.gettuserrs().subscribe((resultado) => {
      this.users = resultado;
      console.log(resultado);
    });
  }
  deleteusers(id:string){
    this.usersService.deleteusers(id).subscribe((resultado) => {
      this.getusers();
      console.log(this.users);
    });
  }
}

