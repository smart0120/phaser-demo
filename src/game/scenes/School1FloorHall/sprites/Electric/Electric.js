
        import _Electric from './images/Electric.png'
let paths = [
        ['School1FloorHall_Electric', _Electric, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Electric_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Electric"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1754;
export const Y = 265;
export const Height = 260;
export const Interactive= true
export const Width = 166;
export const Alpha = 1;
export let Scale = 1;

 
