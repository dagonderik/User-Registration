import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';
import { ServerCommunicationLogService } from './serverCommunicationLog.service';
import { User } from '../user';
import { Constant } from '../utils/constants';

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
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUser(id: string): Observable<User> {
    const url = `${this.usersUrls}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.usersUrls, user, this.httpOptions).pipe(
      tap((_) => this.log(`added user ${user.name}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  editUser(user: User): Observable<any> {
    return this.http
      .put(`${this.usersUrls}/${user.id}`, user, this.httpOptions)
      .pipe(
        tap((_) => this.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('editUser'))
      );
  }

  deleteUser(id: string): Observable<User> {
    const url = `${this.usersUrls}/${id}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }

  private usersUrls = Constant.USERS_URL;

  constructor(
    private http: HttpClient,
    private messageService: ServerCommunicationLogService
  ) {}
}
