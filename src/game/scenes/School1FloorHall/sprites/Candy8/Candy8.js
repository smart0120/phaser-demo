
        import _Candy8 from './images/Candy8.png'
let paths = [
        ['School1FloorHall_Candy8', _Candy8, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy8_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy8"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1566;
export const Y = 903;
export const Height = 42;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
