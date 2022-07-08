
        import _Newspaper from './images/Newspaper.png'
let paths = [
        ['School1FloorHall_Newspaper', _Newspaper, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Newspaper_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Newspaper"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 232;
export const Y = 529;
export const Height = 358;
export const Interactive= true
export const Width = 311;
export const Alpha = 1;
export let Scale = 1;

 
