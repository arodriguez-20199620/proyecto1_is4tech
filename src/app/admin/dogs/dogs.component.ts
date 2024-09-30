import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dog-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogImage: string | undefined;
  descripcion: string = '';

  constructor(
    private dogsService: DogsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getNewDogImage();
  }

  getNewDogImage(): void {
    this.dogsService.getRandomDogImage().subscribe(response => {
      this.dogImage = response.message;
    });
  }
  showAuditDetails = false;
  auditData = {
    UserCreated: 'jdoe@admin.com',
    DateCreated: new Date('2022-01-01T12:00:00'),
    UserUpdated: 'asmith@admin.com',
    DateUpdated: new Date('2023-01-01T12:00:00')
  };

  showAudit() {
    this.showAuditDetails = !this.showAuditDetails;
  }
}
