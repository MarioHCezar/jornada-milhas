import { Component } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatChipsModule],
})
export class ModalComponent {

}
