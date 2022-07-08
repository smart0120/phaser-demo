
        import _ChairA1 from './images/ChairA1.png'
let paths = [
        ['SchoolCafeteria_ChairA1', _ChairA1, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairA1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairA1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1280;
export const Y = 729;
export const Height = 351;
export const Interactive= true
export const Width = 367;
export const Alpha = 1;
export let Scale = 1;

 
