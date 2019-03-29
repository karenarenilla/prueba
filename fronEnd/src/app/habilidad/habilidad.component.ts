import { Component, OnInit } from '@angular/core';
import { HabilidadService } from '../services/habilidad.service';
import { Habilidad } from '../models/habilidad';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css'],
  providers: [ HabilidadService ]
})
export class HabilidadComponent implements OnInit {
  
  constructor(private habilidadService: HabilidadService) { }

  ngOnInit() {
    this.getHabilidades();
  }

  getHabilidades(){
    this.habilidadService.getHabilidades()
    .subscribe(res => {
      this.habilidadService.habilidades = res as Habilidad[];
    })
  }

  addHabilidad(form: NgForm) {
    if(form.value._id) {
      this.habilidadService.putHabilidad(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getHabilidades();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.habilidadService.postHabilidad(form.value)
      .subscribe(res => {
        this.getHabilidades();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }
  
  editHabilidad(habilidad: Habilidad) {
    this.habilidadService.selectedHabilidad = habilidad;
  }

  deleteHabilidad(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.habilidadService.deleteHabilidad(_id)
        .subscribe(res => {
          this.getHabilidades();
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form: NgForm) {
    if(form) {
      form.reset();
    }
  }
}
