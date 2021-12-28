import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'lunes'
})

export class LunesPipe implements PipeTransform{

  transform(value) {

    var dia = "";

    if (value == 1) {
      dia = "Lunes";
    } else {
      dia = "";
    }

    return dia;

  }

}