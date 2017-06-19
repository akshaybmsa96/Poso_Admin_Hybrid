import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { ToastController , LoadingController } from 'ionic-angular';
import { PostsService } from "../../services/postServices";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data: OrderDetailDTO;
  ids: number;
  loader :any;
  res: any;

  constructor( public postsService: PostsService , public navCtrl: NavController,
               public toastCtrl: ToastController , public navParams: NavParams , public loadingCtrl: LoadingController) {

    this.ids=navParams.get('id');

    this.presentLoading();

    this.postsService.getUnconfirmedOrdersDetails(this.ids).subscribe(data => {
      this.data=data['data'];
    });

    this.stopL();


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

  confirmOrder()
  {
 //   this.postsService.confirmOrder(this.ids).subscribe(res => {
  //    this.res=res;
 //   });

    let toast = this.toastCtrl.create({
      message: ' ORDER WILL BE CONFIRMED ',
      duration: 3000
    });
    toast.present();

  }

  cancelOrder()
  {
    //   this.postsService.cancelOrder(this.ids).subscribe(res => {
    //    this.res=res;
    //   });

    let toast = this.toastCtrl.create({
      message: ' ORDER WILL BE CANCELED ',
      duration: 3000
    });
    toast.present();

  }

}

interface OrderDetailDTO{

  sales_status_name: String;
  purchase_status_name: String;
  invoiced_tax_amount: number;
  is_completed: boolean;
  sub_total: number;
  is_confirmed_by_super_admin: boolean;
  extra_charge_amount: number;
  contract: ContractDTO;
  id: number;
  purchase_status: number;

  items: ItemsDTO[];
  //   private int priority;


  received_sub_total: number,
  final_tax_amount: number,
  order_id: String,
  invoiced_amount: number,
  extra_charge_name: String,
  tax_amount: number,
  sales_status: number,
  created_at: number;
  dispatched_sub_total: number;
  is_challan_uploaded: boolean;
  final_amount: number;
  invoiced_sub_total: number ,
  amount: number ,
  action: ActionValueDTO ,
  delivery_date: String ,
  final_sub_total: number

}

interface ActionValueDTO{
  name: String ,
  key: number ,

}

interface ContractDTO{
  is_risk_purchase: boolean ,
  buyer: ContractValueDTO ,
  seller: ContractValueDTO ,
  id : number,
  is_contract_created: boolean

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

interface ItemsDTO
{

  dispatched_quantity: number;
    last_state: number;
    received_rate: number;
    received_quantity: number;
   invoiced_tate: number;
   created_at: number;
   final_rate: number;
   dispatched_rate: number;
   taxes: TaxesDTO[];
    final_amount: number;
   item: ItemDTO;
    rate: number;
    final_quantity: number;
    invoiced_amount: number;
    item_id: number;
    dispatched_amount: number;
    amount: number;
   received_amount: number;
   invoiced_quantity: number;
   id: number;
   quantity: number;

}

interface TaxesDTO{

}

interface ItemDTO{

  sub_category: String;
  category: String;
  category_id: number;
  sub_category_id: number;
  prev_rate: number;
  parent_item: String;
  is_temp: boolean;
  is_active: boolean;
  change_in_rate: number;
  taxes: TaxesDTO[];
  name: String;
  hindi_name: String;
  is_in_contract: boolean;
  rate: number;
  uom: String;
  item_id: number;
  aliases: AliasesDTO[];
  id: number;
  meta_item_id: number;
  description: String;

}

interface AliasesDTO{

}
