import { Component, OnInit } from '@angular/core';
import { TallerService } from '../services/taller.service';
import { Taller } from '../models/taller';
import { NgForm } from '@angular/forms';

declare let M: any;
@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css'],
  providers: [ TallerComponent ]
})
export class TallerComponent implements OnInit {


  constructor(private tallerService: TallerService) { }

  //Consultas de taller
  ngOnInit() {
    this.getTallers();
  }

  getTallers(){
    this.tallerService.getTalleres()
    .subscribe(res => {
      this.tallerService.talleres = res as Taller[];
    })
  }

  addTaller(form: NgForm) {
    if(form.value._id) {
      this.tallerService.putTaller(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTallers();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.tallerService.postTaller(form.value)
      .subscribe(res => {
        this.getTallers();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }
  
  editTaller(taller: Taller) {
    this.tallerService.selectedTaller = taller;
  }

  deleteTaller(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.tallerService.deleteTaller(_id)
        .subscribe(res => {
          this.getTallers();
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
    }
  }
//Consultas de Persona

  getPersonaTaller() {
    this.tallerService
  }
}
