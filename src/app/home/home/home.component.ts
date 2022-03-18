import { Component, OnInit } from '@angular/core';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Task } from '../task/taskModel';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from '../task-dialog/task-dialog.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: any) => {
    subject.next(val);
  });
  return subject;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('taskAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])),
        ]), {optional: true }),
      ]),
    ]),
  ]
})

export class HomeComponent implements OnInit {

  // tasks array
  todo: any = getObservable(this.store.collection('todo'));
  inProgress: any = getObservable(this.store.collection('inProgress'));
  done: any = getObservable(this.store.collection('done'));

  constructor(private dialog: MatDialog, private store: AngularFirestore){ }

  // edit task event
  edit(list: 'todo' | 'done' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true
      }
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      // for firebase
      if(result.delete){
        this.store.collection(list).doc(task.id).delete();
      } else {
        this.store.collection(list).doc(task.id).update(task);
      }
      // for offline👇
      // const dataList = this[list];
      // const taskIndex = dataList.indexOf(task);
      // if(result.delete){
      //   dataList.splice(taskIndex, 1);
      // } else {
      //   dataList[taskIndex] = task;
      // }
    });
  }

  // drop task event
  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    // for firebase
    const item = event.previousContainer.data[event.previousIndex];
    this.store.firestore.runTransaction( () => {
      return Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item)
      ]);
    });
    // !for firebase

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  // opened dialog panel for add new task
  newTask(): void{
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '250px',
      data: {
        task: {}
      }
    });

    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => this.store.collection('todo').add(result.task));
      // .subscribe((result: TaskDialogResult) => this.todo.push(result.task));
  }


  ngOnInit(): void {
  }
}