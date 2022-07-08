
        import _Vendingback from './images/Vendingback.png'
let paths = [
        ['SchoolCafeteria_Vendingback', _Vendingback, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vendingback_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vendingback"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 882;
export const Y = 317;
export const Height = 232;
export const Interactive= true
export const Width = 148;
export const Alpha = 1;
export let Scale = 1;

 
