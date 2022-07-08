
        import _ChairC1 from './images/ChairC1.png'
let paths = [
        ['SchoolCafeteria_ChairC1', _ChairC1, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairC1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairC1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1108;
export const Y = 535;
export const Height = 284;
export const Interactive= true
export const Width = 177;
export const Alpha = 1;
export let Scale = 1;

 
