import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

// Importando a camera
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tarefa-modal',
  templateUrl: './tarefa-modal.page.html',
  styleUrls: ['./tarefa-modal.page.scss'],
})
export class TarefaModalPage implements OnInit {
  tarefa;
  constructor(public modalController: ModalController, private camera: Camera) { 
    this.tarefa = {
      'nome':'',
      'horario':'',
      'avatar':''
    }
  }

  ngOnInit() {
  }
  add() {
    this.modalController.dismiss(this.tarefa)
  }

  take_picture() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.tarefa.avatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err);
     // Handle error
    });
  }
}
