
        import _ChairA2 from './images/ChairA2.png'
let paths = [
        ['SchoolCafeteria_ChairA2', _ChairA2, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairA2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairA2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1398;
export const Y = 703;
export const Height = 377;
export const Interactive= true
export const Width = 375;
export const Alpha = 1;
export let Scale = 1;

 
