import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'USER_APP';

  myReactiveForm!: FormGroup<any>;

  users: any[] = [];
  user: any;
  id: any;
  editMode = false;
  editUserById: any;
  name: any;
  userByName: any;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  getAllUsers() {
    this.userService.fetchUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getById(id: number) {
    this.userService.getById(id).subscribe((res) => {
      this.user = res;
    });
  }
  deleteById(id: number) {
    this.userService.deleteById(id).subscribe((res) => {
      console.log('deleted Succesfully' + id);
      this.getAllUsers();
    });
  }

  editUser(user: any) {
    this.editMode = true;
    this.editUserById = user.id;
    this.myReactiveForm.patchValue({
      name: user.name,
      email: user.email,
    });
  }
  update() {
    if (this.myReactiveForm.valid && this.editUserById) {
      this.userService
        .updateById(this.editUserById, this.myReactiveForm.value)
        .subscribe((res) => {
          console.log('updated data:', res);
          this.editMode = false;
          this.editUserById = null;
          this.myReactiveForm.reset();
          this.getAllUsers();
        });
    }
  }
  cancelEdit() {
    this.editMode = false;
    this.editUserById = null;
    this.myReactiveForm.reset();
  }

  patchUpdate() {
    if (this.editUserById) {
      this.userService
        .pacthUpdate(this.editUserById, this.myReactiveForm.value)
        .subscribe((res) => {
          console.log('updated data:', res);
          this.editMode = false;
          this.editUserById = null;
          this.myReactiveForm.reset();
          this.getAllUsers();
        });
    }
  }

  getUserByname(name: any) {
    this.userService.getUserByName(name).subscribe((res) => {
      this.userByName = res;
    });
  }

  onSubmit() {
    if (this.myReactiveForm.valid) {
      this.userService.addUser(this.myReactiveForm.value).subscribe((res) => {
        console.log(res);
        console.log(this.myReactiveForm.value);

        this.myReactiveForm.reset();
        this.getAllUsers();
      });
    }
  }
}

//  const observe$ = new Observable(observe => {
//       observe.next("Print in console from observable");
//       observe.next("Print in console from observable2");

//       setTimeout(()=>{
//         observe.next("Print in console from observable3");

//       }, 4000);
//       observe.next("Print in console from observable4");
//     });
//    const sub = observe$.subscribe(value=>{
// console.log(value)
//     })
//     sub.unsubscribe();