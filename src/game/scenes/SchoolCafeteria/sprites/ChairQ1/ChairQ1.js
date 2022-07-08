
        import _ChairQ1 from './images/ChairQ1.png'
let paths = [
        ['SchoolCafeteria_ChairQ1', _ChairQ1, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairQ1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairQ1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 572;
export const Y = 516;
export const Height = 245;
export const Interactive= true
export const Width = 184;
export const Alpha = 1;
export let Scale = 1;

 
