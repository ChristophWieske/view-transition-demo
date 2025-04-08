import { Component, computed, signal } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { WithTransitionPipe } from '../transition/with-transition.pipe';
import { TransitionDirective } from '../transition/transition.directive';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { getMessage } from '../texts/get-message';
import { MatCheckbox } from '@angular/material/checkbox';

interface BoxDef {
  label: string;
  editing: boolean;
  id: number;
  message: string;
}

@Component({
  selector: 'app-tables',
  imports: [
    MatTable,
    WithTransitionPipe,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
    TransitionDirective,
    MatIconModule,
    MatFormField,
    MatInput,
    FormsModule,
    MatLabel,
    MatCheckbox,
    MatIconButton,
    MatNoDataRow,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class TablesComponent {
  readonly boxes = signal(this.createBoxes());
  readonly deletedBoxes = signal<BoxDef[]>([]);
  readonly showMessage = signal(false);
  readonly columns = computed(() => {
    if (this.showMessage()) {
      return ['id', 'label', 'message', 'action'];
    }

    return ['id', 'label', 'action'];
  });

  private createBoxes(): BoxDef[] {
    return Array.from({ length: 6 }).map((_, i) => ({
      label: `Box ${i + 1}`,
      id: i + 1,
      editing: false,
      message: getMessage(),
    }));
  }

  toggleEdit(data: BoxDef): void {
    this.boxes.update((boxes) => {
      return boxes.map((x) =>
        x !== data
          ? x
          : {
              ...x,
              editing: !x.editing,
            },
      );
    });
  }

  isEditing(_: number, data: BoxDef): boolean {
    return data.editing;
  }

  delete(data: BoxDef): void {
    this.boxes.update((boxes) => boxes.filter((x) => x !== data));
    this.deletedBoxes.update((boxes) => [...boxes, data]);
  }

  restore(data: BoxDef): void {
    this.deletedBoxes.update((boxes) => boxes.filter((x) => x !== data));
    this.boxes.update((boxes) => [...boxes, data]);
  }
}
