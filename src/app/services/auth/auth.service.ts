import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import { UserRegister } from 'src/app/model/user/UserRegister';

// import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  register(userRegister: UserRegister): Observable<void> {
    return new Observable<void>(observer => {
      setTimeout(() => {
        if (userRegister.email == 'error@gmail.com') {
          observer.error({message: 'email already registered'});
        } else {
          observer.next();
        }
        observer.complete();
      }, 3000)
    });
  }

  recoverEmailPassword(email: string) : Observable<void> {
    return new Observable<void>(observer =>{
      this.auth.sendPasswordResetEmail(email).then(() => {
        observer.next();
        observer.complete();
      }).catch(error  => {
        observer.error(error);
        observer.complete();
      })
    })
  }

  login(email: string, password: string) : Observable<User> {
    return new Observable<User>(observer => {
      this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
        this.auth.signInWithEmailAndPassword(email, password)
        .then((firebaseUser: firebase.default.auth.UserCredential) => {
          observer.next({email, id: firebaseUser.user!.uid});
          observer.complete();
        }).catch(error  => {
          observer.error(error);
          observer.complete();
      })
    })
  })
}
}
