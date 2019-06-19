import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})
export class ListaTarefaPage implements OnInit {
  //Dicionario
  tarefas = [];
  // Chave
  TAREFA_KEY = 'tarefas'
  constructor() { }

  ngOnInit() {
  }

}
