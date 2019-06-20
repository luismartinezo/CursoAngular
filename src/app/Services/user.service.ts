import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User[]> {
    return  this.http.get<User[]>
                    ('http://apiuser.azurewebsites.net/api/usuarios');
}
//   users:User[] = [
//     new User (1, 'Luis','Aragon','calle 1'),
//     new User (2, 'Edgar','Mejia','calle 2'),
//     new User (3, 'Edison','Bejarano', 'calle 3'),
//     new User (4, 'Oscar','Daza', 'calle 4'),
//     new User (5, 'Saint','Jaramillo','calle 5')

//   ];


// users:User[] =[
  //     {
  //         id: 1,
  //         name: "Leanne Graham",
  //         username: "Bret",
  //         email: "Sincere@april.biz",
  //         phone: "1-770-736-8031 x56442",
  //         website: "hildegard.org"
  //     },
  //     {
  //         id: 2,
  //         name: "Ervin Howell",
  //         username: "Antonette",
  //         email: "Shanna@melissa.tv",
  //         phone: "010-692-6593 x09125",
  //         website: "anastasia.net",
  //     },
  //     {
  //         id: 3,
  //         name: "Clementine Bauch",
  //         username: "Samantha",
  //         email: "Nathan@yesenia.net",
  //         phone: "1-463-123-4447",
  //         website: "ramiro.info",
  //     },
  //     {
  //         id: 4,
  //         name: "Patricia Lebsack",
  //         username: "Karianne",
  //         email: "Julianne.OConner@kory.org",
  //         phone: "493-170-9623 x156",
  //         website: "kale.biz",

  //     },
  //     {
  //         id: 5,
  //         name: "Chelsey Dietrich",
  //         username: "Kamren",
  //         email: "Lucio_Hettinger@annie.ca",
  //         phone: "(254)954-1289",
  //         website: "demarco.info",

  //     },
  //     {
  //         id: 6,
  //         name: "Mrs. Dennis Schulist",
  //         username: "Leopoldo_Corkery",
  //         email: "Karley_Dach@jasper.info",
  //         phone: "1-477-935-8478 x6430",
  //         website: "ola.org",

  //     },
  //     {
  //         id: 7,
  //         name: "Kurtis Weissnat",
  //         username: "Elwyn.Skiles",
  //         email: "Telly.Hoeger@billy.biz",
  //         phone: "210.067.6132",
  //         website: "elvis.io",

  //     },
  //     {
  //         id: 8,
  //         name: "Nicholas Runolfsdottir V",
  //         username: "Maxime_Nienow",
  //         email: "Sherwood@rosamond.me",
  //         phone: "586.493.6943 x140",
  //         website: "jacynthe.com",

  //     },
  //     {
  //         id: 9,
  //         name: "Glenna Reichert",
  //         username: "Delphine",
  //         email: "Chaim_McDermott@dana.io",
  //         phone: "(775)976-6794 x41206",
  //         website: "conrad.com",

  //     },
  //     {
  //         id: 10,
  //         name: "Clementina DuBuque",
  //         username: "Moriah.Stanton",
  //         email: "Rey.Padberg@karina.biz",
  //         phone: "024-648-3804",
  //         website: "ambrose.net",

  //     }
  //     ]


  // getUser(){
  //   return this.users;
  // }
  updateUser(){
      alert('Update');
  }
  saveNewuser(){
      alert('Save');
  }
}
