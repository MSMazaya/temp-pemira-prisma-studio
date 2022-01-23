import { Injectable } from '@nestjs/common';
import parser from 'xml2json';
import { HttpService } from '@nestjs/axios';
import { UserService } from 'user/user.service';

const listAllKeys = (jsoninput) => {
  const listOfKeys = [];
  const queue = [jsoninput];
  while (queue.length !== 0) {
    const currentjson = queue.pop();
    for (const key in currentjson) {
      listOfKeys.push(key);
      if (typeof currentjson[key] === 'object') {
        queue.push(currentjson[key]);
      }
    }
  }
  return listOfKeys;
};

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private userService: UserService,
  ) {}

  loginIna(ticket: string) {
    // const url = `https://login.itb.ac.id/cas/serviceValidate?ticket=${ticket}&service=https%3A%2F%2Fhmft.tf.itb.ac.id%2FINA`;
    // // TODO - why error?
    // const { data } = this.httpService.get(url);
    // const result = JSON.parse(parser.toJson(data));
    // if (listAllKeys(result).includes('cas:authenticationFailure')) {
    //   console.log('Invalid Ticket');
    // }
    // const user_attributes =
    //   result['cas:serviceResponse']['cas:authenticationSuccess'][
    //     'cas:attributes'
    //   ];
    // const nim_arr = user_attributes['cas:itbNIM'];
    // let nim;
    // if (nim_arr.length === 2) {
    //   nim = nim_arr[1];
    // } else {
    //   nim = nim_arr;
    // }
    // this.userService.create({
    //   nim,
    //   email_itb: user_attributes['cas:mail'],
    //   email_non_itb: user_attributes['cas:itbEmailNonITB'],
    //   long_name: user_attributes['cas:cn'],
    //   short_name: user_attributes['cas:sn'],
    //   fakultas: user_attributes['cas:ou'],
    // });
  }
}
