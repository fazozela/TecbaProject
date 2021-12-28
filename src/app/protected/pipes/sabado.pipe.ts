import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sabado'
})

export class SabadoPipe implements PipeTransform{

  transform(value) {

    var dia = "";

    if (value == 1) {
      dia = "Sábado";
    } else {
      dia = "";
    }

    return dia;

  }

}