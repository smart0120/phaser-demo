
        import _LinePosition1 from './images/LinePosition1.png'
let paths = [
        ['School1FloorHall_LinePosition1', _LinePosition1, 56],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LinePosition1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LinePosition1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 717;
export const Height = 318;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
