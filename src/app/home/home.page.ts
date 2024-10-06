import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

export interface User {
  username: string;
  password: string;
  name: string;
  lastName: string;
  educationLevel: string;
  birthDate: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedSegment: string = 'misDatos';
  user: User | null | undefined; // Variable para almacenar los datos del usuario

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }
}