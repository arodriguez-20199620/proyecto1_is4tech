import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audit-dialog',
  templateUrl: './audit-dialog.component.html',
  styleUrls: ['./audit-dialog.component.scss']
})
export class AuditDialogComponent {
  @Input() userCreated!: string;
  @Input() dateCreated!: Date;
  @Input() userUpdated!: string;
  @Input() dateUpdated!: Date;
}
