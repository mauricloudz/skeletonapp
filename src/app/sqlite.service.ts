import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SQLiteDBConnection, CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private db: SQLiteDBConnection | null = null;

  constructor() {}

  async initDB() {
    if (Capacitor.isNativePlatform()) {
      try {
        await CapacitorSQLite.createConnection({
          database: 'mydb',
          version: 1,
          encrypted: false,
          mode: 'no-encryption',
        });
  
        const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
        this.db = await sqlite.retrieveConnection('mydb', false);
        
        await this.db.open();
        await this.createTables();
      } catch (err) {
        console.error('Error initializing DB:', err);
      }
    }
  }
  
  
  

  private async createTables() {
    if (!this.db) {
      console.error('Database connection is not established.');
      return;
    }
    const createTableQuery = `
         CREATE TABLE IF NOT EXISTS users (
           id INTEGER PRIMARY KEY NOT NULL,
           username TEXT NOT NULL,
           name TEXT,
           lastName TEXT,
           educationLevel TEXT,
           birthDate TEXT
         );`;
    try {
      await this.db.execute(createTableQuery);
    } catch (err) {
      console.error('Error creating tables:', err);
    }
  }

  async addUser(user: any) {
    const query = `
         INSERT INTO users (username, name, lastName, educationLevel, birthDate) 
         VALUES (?, ?, ?, ?, ?);
       `;
    const values = [user.username, user.name, user.lastName, user.educationLevel, user.birthDate];
    await this.db?.run(query, values);
  }

  async getUsers() {
    const query = `SELECT * FROM users;`;
    const result = await this.db?.query(query);
    return result?.values || [];
  }

  async closeConnection() {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }
}