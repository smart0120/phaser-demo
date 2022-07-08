
        import _LinePosition1v2 from './images/LinePosition1v2.png'
let paths = [
        ['School1FloorHall_LinePosition1v2', _LinePosition1v2, 57],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LinePosition1v2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LinePosition1v2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 887;
export const Y = 990;
export const Height = 90;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
