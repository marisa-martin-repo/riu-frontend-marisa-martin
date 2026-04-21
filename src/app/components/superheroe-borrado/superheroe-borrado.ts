import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SuperHeroeInterface } from '../../interfaces/superheroe.interface';

@Component({
  selector: 'app-superheroe-borrado',
  templateUrl: './superheroe-borrado.html',
  styleUrl: './superheroe-borrado.css',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SuperheroeBorrado {

  readonly dialogRespuesta = inject(MatDialogRef<SuperheroeBorrado>);
  readonly data = inject<SuperHeroeInterface>(MAT_DIALOG_DATA);
  readonly id = model(this.data.id);

  onNoClick(): void {
    this.dialogRespuesta.close();
  }

}
