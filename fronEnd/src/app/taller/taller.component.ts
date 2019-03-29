import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Taller } from '../models/taller';
import { TallerService } from '../services/taller.service';

declare let M: any;
@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css'],
  providers: [ TallerService ]
})
export class TallerComponent implements OnInit {
  
  constructor(private tallerService: TallerService) { }

  ngOnInit() {
    this.getTalleres();
  }

  getTalleres(){
    this.tallerService.getTalleres()
    .subscribe(res => {
      this.tallerService.talleres = res as Taller[];
    })
  }

  addHabilidad(form: NgForm) {
    this.tallerService.postTaller(form.value)
      .subscribe(res => {
        this.getTalleres();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });    
  }
 
  resetForm(form: NgForm) {
    if(form) {
      form.reset();
    }
  }
}
