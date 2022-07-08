
        import _Trophy from './images/Trophy.png'
let paths = [
        ['School1EastCorridor_Trophy', _Trophy, 59],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Trophy_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Trophy"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 528;
export const Y = 75;
export const Height = 125;
export const Interactive= true
export const Width = 102;
export const Alpha = 1;
export let Scale = 1;

 
