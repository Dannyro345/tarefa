import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { TarefaModalPage } from '../tarefa-modal/tarefa-modal.page';


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
  constructor(public modalController: ModalController, private storage: Storage) {
    this.storage.get(this.TAREFA_KEY).then((tarefa) => {
      if (tarefa) {
        this.tarefas = tarefa
      }
    })
  }

  ngOnInit() {
  }

  remove(tarefa) {
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
    this.storage.set('tarefa', this.tarefas)
  }

  async modal() {
    const modal = await this.modalController.create({
      component: TarefaModalPage
    });

    modal.onDidDismiss().then((retorno) => {
      this.tarefas.push(retorno.data);
    }
    );

    await modal.present();
  }
}
