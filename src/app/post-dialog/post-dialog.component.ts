import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  public nomearquivo: string = '';

  public arquivo: string = '';


  public dados = {
    post: new Post ("","","","","", ""),
    arquivo: null
  }

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>  ) { }

  ngOnInit(): void {
  }

  mudouarquivo(event){
    this.nomearquivo = event.target.files[0].name
    this.dados.arquivo = event.target.files[0]
  }

  salvar(){
    this.dialogRef.close(this.dados);
  }

  cancelar(){
    this.dialogRef.close(null);
  }

}
