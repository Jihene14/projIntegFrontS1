import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { CalandrierService } from 'src/app/Services/calandrier.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-home-emp',
  templateUrl: './home-emp.component.html',
  styleUrls: ['./home-emp.component.css']
})
export class HomeEmpComponent {
  constructor(private activatedRoute: ActivatedRoute, public service: EmployeServiceService, public calendarS: CalandrierService, public formBuilder: FormBuilder) { }

 
  testSupp: boolean = false;
  testCong: boolean = false;
  id: any;

  employe !: Employe;
  formSupp!: FormGroup;
  formCong!: FormGroup;
 
  openSupp() {
    this.testSupp = !this.testSupp;

  }
  openCong() {
    this.testCong = !this.testCong;

  }
  AjouterHeureDep() {
    alert(new Date())
    this.calendarS.AjouterHeureDep(this.id, new Date()).subscribe(
      data => {
        console.log(data)

      }
    )
  }
  AjouterHeureArriv() {
    alert(new Date())
    this.calendarS.AjouterHeureArriv(this.id, new Date()).subscribe(
      data => { console.log(data) }

    )
  }

  AjouterHeureSupp() {
    this.calendarS.AjouterHeureSup(this.id, this.formSupp.value["NheurS"]).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  AjouterHeureCong() {
    this.calendarS.AjouterHeureCong(this.id, this.formCong.value["NheurC"]).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe(data => {
      console.log(data)
      this.employe = data
    }
    )

    this.formSupp = this.formBuilder.group(
      {
        NheurS: ["0"]
      })

    this.formCong = this.formBuilder.group(
      {
        NheurC: ["0"]
      })
  }


}




