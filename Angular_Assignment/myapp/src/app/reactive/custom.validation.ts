import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidation {
static unique(control: AbstractControl): ValidationErrors |null {
    if(control.value.indexOf('')>=0){
        return {unique:true};
    }
    else{
        return null;
    }
}
}