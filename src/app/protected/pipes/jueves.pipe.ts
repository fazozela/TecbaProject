import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'jueves'
})

export class JuevesPipe implements PipeTransform{

  transform(value) {

    var dia = "";

    if (value == 1) {
      dia = "Jueves";
    } else {
      dia = "";
    }

    return dia;

  }

}