
        import _Shoes from './images/Shoes.png'
let paths = [
        ['HomeHall_Shoes', _Shoes, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1441;
export const Y = 736;
export const Height = 111;
export const Interactive= true
export const Width = 121;
export const Alpha = 1;
export let Scale = 1;

 
