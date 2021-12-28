import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'miercoles'
})

export class MiercolesPipe implements PipeTransform{

  transform(value) {

    var dia = "";

    if (value == 1) {
      dia = "Miercoles";
    } else {
      dia = "";
    }

    return dia;

  }

}