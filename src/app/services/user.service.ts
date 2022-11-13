import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';
import { MessageService } from './message.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrls, this.httpOptions).pipe(
      tap((_) => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrls}/${id}`;
    return this.http.get<User>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<User>(`getHero id=${id}`))
    );
  }

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.usersUrls, user, this.httpOptions).pipe(
      tap((_) => this.log('added user')),
      catchError(this.handleError<User>('addUser'))
    );
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`${this.usersUrls}/${user.id}`, user, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${user.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private usersUrls = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
