import { FormControl } from '@angular/forms'

export class UserValidators {
    static validEmail(control: FormControl) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(control.value)? null : {
            notValidEmail : {
                valid : false
            }
        }
    }
}