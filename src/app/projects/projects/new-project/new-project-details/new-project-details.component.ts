import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-details',
  templateUrl: './new-project-details.component.html'
})
export class NewProjectDetailsComponent implements OnInit {
  @Output() public saveProject = new EventEmitter<string>();

  public nameP = '';
  public projectFG: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.projectFG = this.formBuilder.group({
      projectName: [''.toUpperCase(), Validators.required],
      projectDescription: [''],
      numTeam: [null, [Validators.required, this.numTeam]]
    });
  }

  private numTeam(control: AbstractControl) {
    const num = control.value;
    let error = null;
    if (num < 1) {
      error = { ...error, min: 'at least one person is needed on the team' };
    }
    if (num > 10) {
      error = { ...error, max: 'the organization does not allow more than 10 people in a team ' };
    }
    return error;
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.projectFG.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
  public nameEmpty(): Boolean {
    const l = this.nameP.length;
    if (l === 0) {
      return true;
    } else return false;
  }

  onPropagar() {
    const project = this.projectFG.value;
    this.saveProject.emit(project);
    this.projectFG.reset();
  }
}
