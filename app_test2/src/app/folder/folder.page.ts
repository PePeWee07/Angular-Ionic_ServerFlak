import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTestService } from '../service/service-test.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private service: ServiceTestService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  cnx: boolean = false;
  msj: any = "No hay conexión";
  error: any = null;
  youIp: string = "";

  getTest() {
    try {
      this.service.getTest2(this.youIp).subscribe({
        next: (data) => {
          this.cnx = true;
          this.msj = data;
          this.error = null;

        },
        error: (error) => {
          this.cnx = false;
          this.msj = error;
          this.error = error;
        }
      });
    } catch (error) {
      this.cnx = false;
      this.error = error;
    }

  }
}
