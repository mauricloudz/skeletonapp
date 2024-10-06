import { Component, OnInit } from '@angular/core';
import { SQLiteService } from './sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private sqliteService: SQLiteService) {}

  async ngOnInit() {
    await this.sqliteService.initDB();
  }
}
