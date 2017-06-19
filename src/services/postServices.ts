import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

  constructor(private http: Http){
  //  console.log('PostsService Initialized...');
  }

  getUnconfirmedOrders(){

    return this.http.get('http://new.posoapp.com/mportal/orders/unconfirmed?type=json')
      .map(orders => orders.json());

  }

  getUnconfirmedOrdersDetails(id: number){

    return this.http.get('http://new.posoapp.com/mportal/orders/'+id+'/view?type=json')
      .map(data => data.json());


  }

  confirmOrder(id: number){

    return this.http.get('http://new.posoapp.com/mportal/orders/'+id+'/confirm?act=1')
      .map(res => res.json());


  }

  cancelOrder(id: number){


  }

}
