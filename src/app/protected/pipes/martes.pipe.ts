import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'martes'
})

export class MartesPipe implements PipeTransform{

  transform(value) {

    var dia = "";

    if (value == 1) {
      dia = "Martes";
    } else {
      dia = "";
    }

    return dia;

  }

}