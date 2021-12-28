import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'viernes'
})

export class ViernesPipe implements PipeTransform{

  transform(value) {

    var dia = "";

    if (value == 1) {
      dia = "Viernes";
    } else {
      dia = "";
    }

    return dia;

  }

}