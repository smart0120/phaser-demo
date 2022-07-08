
        import _ChairC2 from './images/ChairC2.png'
let paths = [
        ['SchoolCafeteria_ChairC2', _ChairC2, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairC2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairC2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1154;
export const Y = 516;
export const Height = 241;
export const Interactive= true
export const Width = 183;
export const Alpha = 1;
export let Scale = 1;

 
