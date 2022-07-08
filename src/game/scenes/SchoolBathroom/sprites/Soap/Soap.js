
        import _Soap from './images/Soap.png'
let paths = [
        ['SchoolBathroom_Soap', _Soap, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Soap_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Soap"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1658;
export const Y = 680;
export const Height = 37;
export const Interactive= true
export const Width = 73;
export const Alpha = 1;
export let Scale = 1;

 
