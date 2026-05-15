import { OnInit, Pipe, PipeTransform } from "@angular/core";
import { Idata } from "../const/data";

@Pipe({
    name : 'filterpipe'
})

export class filterpipe implements PipeTransform{
    transform(value: Idata[],field:string, searchvalue:string ):Idata[] {
        if(!searchvalue){
            return value
        }

        
        // return value.filter(a => {
        //     return a.fname.toLowerCase().includes(searchvalue) || 
        //     a.contact.toString().includes(searchvalue)||
        //     a.email.includes(searchvalue)

        // })

         return value.filter(a => {

             if(field == 'srno'){

                return a[field].toString() == searchvalue

            }

            return a[field]
            .toString()
            .toLowerCase()
            .includes(searchvalue.toLowerCase())

        })
       
    }

    
}