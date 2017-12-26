import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientpipe'
})
export class ClientPipe implements PipeTransform {

  transform(object: any, searchtext: any): any {
    console.log(object);
    if(!searchtext)
    {
      console.log("test");
      return object;
    }
    else
    {
    return object.filter((result)=>{
      console.log(result);
        return result.fullname.toLowerCase().indexOf(searchtext.toLowerCase())>-1;
       })
      }
  }
  

}

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(object: any,upcase:boolean): any {
    if(upcase)
    {
      return object.charAt(0).toUpperCase() + object.slice(1);
    }
    return object.charAt(0).toLowerCase() + object.slice(1);
  }
}

@Pipe({
  name: 'sortDesc'
})
export class SortDescPipe implements PipeTransform {
  transform(object: string[], fn: string): any {
        let tam:String[]=object.slice();
        tam.sort();
        if(fn=="DESC")
        {
          return tam.reverse()
        }
        return tam;
      }
}

@Pipe({
  name: 'catalory'
})
export class cataloryPipe implements PipeTransform {
  transform(object: string[]): any {
        let result:string[]=[]
       if(object)
       {
         object.forEach(element => {
           if(result.indexOf(element)<=-1)
           {
             result.push(element);
           }
         });
       }
       return result.join();
      }
}

@Pipe({
  name: 'Parity'
})
export class ParityPipe implements PipeTransform {
  transform(value:any,arg:string="chan"):any { 
      return value.filter((result)=>{
        if(arg=="chan")
        {    return result%2==0;
        }
        if(arg=="le")
        {
          return result%2!=0;
        }
      });
    }
}

@Pipe({
  name: 'addstring'
})
export class AddstringPipe implements PipeTransform {
  transform(value: any): any {
    let result:string[]=[];
    if(value!=null)
    {
      result.push(value+"@gmail.com");
    }
    else
    {
      return value;
    }
    return result;
}
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(object: any,searchtext:string): any {

    if(searchtext==null)
    {
      return object;
    }

    return object.filter(function(result)
  {
    return result.name.toLowerCase().indexOf(searchtext.toLowerCase())>-1;
  });
    
}
}


@Pipe({
  name: 'repeat'
})
export class repeatPipe implements PipeTransform {
  transform(searchtext:string,count:number): any {
    let cnt = 1;
        let strResult= searchtext;
        while (cnt < count) {
            strResult = strResult + ' ' + searchtext;
            cnt = cnt + 1;
        }
              return strResult;
}
}

@Pipe({
  name: 'RoundNum'
})
export class roundNumPipe implements PipeTransform {
  transform(value:number): any {
    if(value==null) return 0;
   return Math.round(value);
}
}

// export class Ex implements PipeTransform{
//   transform(value:string[],arg:string):any{
//     return value.filter((result)=>{
//       result.toLowerCase().includes(arg.toLowerCase());
//     })
//   }
// }