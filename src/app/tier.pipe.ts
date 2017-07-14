import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model'

@Pipe({
  name: 'tier',
  pure: false
})
export class TierPipe implements PipeTransform {
  //NOTE: due to async pipes, this pipe is currently useless
  //Pretty sure it would work though
  transform(input: any[], tierFilter: string): any[] {
    //Check for null string and input due to async pipe
    if (!tierFilter || !input) {
      return input;
    }
    var output: any[] = [];
    //loop through firebase array, filter out unwanted
    for (let i = 0; i < input.length; i++) {
        if (input[i].tier === tierFilter) {
          output.push(input[i]);
        };
    }
    return output;
  }

}
