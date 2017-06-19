import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController , LoadingController } from 'ionic-angular';
import { PostsService } from "../../services/postServices";
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orders: OrdersDTO[] ;
  loader :any;

  constructor( public navCtrl: NavController , public toastCtrl: ToastController , public postsService: PostsService , public loadingCtrl: LoadingController) {

    this.presentLoading();

    this.postsService.getUnconfirmedOrders().subscribe(orders=>this.orders=orders['orders']);

    this.stopL();


  }

  itemSelected(item: OrdersDTO)
  {

    this.navCtrl.push(AboutPage,{
      id: item.id
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  stopL(){
    this.loader.dismiss();
  }

}

interface OrdersDTO{
  sales_status_name	: String,
  purchase_status_name: String,
  invoiced_tax_amount: number,
  is_completed: boolean,
  sub_total: number,
  deliveries: number,
  is_confirmed_by_super_admin: boolean,
  extra_charge_amount: number,
  contract: ContractDTO;
  delivery_report: String,
  id: number,
  purchase_status: number,
  priority: number,
  received_sub_total: number,
  final_tax_amount: number,
  order_id: String,
  invoiced_amount: number;
  extra_charge_name: String,
  tax_amount: number,
  sales_status: number,
  created_at: number,
  dispatched_sub_total: number,
  is_challan_uploaded: boolean,
  final_amount: number,
  invoiced_sub_total: number ,
  amount: number ,
  action: ActionValueDTO ,
  delivery_date: String ,
  final_sub_total: number
}

interface ContractDTO{
  is_risk_purchase: boolean ,
  buyer: ContractValueDTO ,
  seller: ContractValueDTO ,
  id : number,
  is_contract_created: boolean

}

interface ActionValueDTO{
  name: String ,
  key: number ,

}

interface ContractValueDTO{
  type_id: number,
  is_account_active: boolean ,
  template_name: String,
  address: String ,
  last_order_time: number ,
  is_cash_unit: boolean ,
  id: number ,
  city: String ,
  is_pseudo: boolean ,
  unit_id: String ,
  template: String ,
  email: String ,
  business: BusinessDTO ,
  item_changes_allow: boolean ,
  same_unit_group: number ,
  purchase_allocation_time: number ,
  name: number ,
  last_inventory_update: number ,
  show_name: String ,
  is_to_call_for_orders: boolean ,
  is_automatic_allocation: boolean ,
  sales_person: SalesPersonDTO ,
  pos_sales_id: number
}

interface BusinessDTO{
  billing_name: String ,
  id: number ,
  brand_name: String

}

interface SalesPersonDTO{
  mobile: String ,
  email: String ,
  pin_exists: boolean,
  id: number,
  name: String
}
