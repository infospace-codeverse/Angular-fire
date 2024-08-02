import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private collectionName = 'tasks';

  constructor(private firestore: AngularFirestore) {}

  getTasks(): Observable<Task[]> {
    return this.firestore
      .collection<Task>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  addTask(task: Task) {
    return this.firestore.collection(this.collectionName).add(task);
  }

  removeTask(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
