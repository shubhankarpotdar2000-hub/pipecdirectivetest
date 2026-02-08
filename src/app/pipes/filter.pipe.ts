import { OnInit, Pipe, PipeTransform } from "@angular/core";
import { Idata } from "../const/data";

@Pipe({
    name : 'filterpipe'
})

export class filterpipe implements PipeTransform{
    transform(value: Idata[], searchvalue:string ):Idata[] {
        return value.filter(a => {
            return a.fname.toLowerCase().includes(searchvalue) || 
            a.contact.toString().includes(searchvalue)||
            a.email.includes(searchvalue)

        })
       
    }

    
}