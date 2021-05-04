import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public posts: Post[] = [

    new Post ("A", "A1", "A12","a@com.br", "a123"),
    new Post ("B", "A1", "A12","a@com.br", "a123"),
    new Post ("C", "A1", "A12","a@com.br", "a123"),
    new Post ("D", "A1", "A12","a@com.br", "a123"),
    new Post ("E", "A1", "A12","a@com.br", "a123"),
    new Post ("F", "A1", "A12","a@com.br", "a123"),
    new Post ("G", "A1", "A12","a@com.br", "a123"),
    new Post ("H", "A1", "A12","a@com.br", "a123"),
    new Post ("I", "A1", "A12","a@com.br", "a123"),
  ];

   constructor(public dialog: MatDialog){

   }
  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width:'600px'
    })

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result){
          console.log(result)
        }
      }
    )
  }


}
