import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'summary'
})
export class summaryPipe implements PipeTransform {
     
    transform(value: string) {
        return value.slice(0, 50)+ '...'
    }
}