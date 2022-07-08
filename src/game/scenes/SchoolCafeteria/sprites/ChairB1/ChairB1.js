
        import _ChairB1 from './images/ChairB1.png'
let paths = [
        ['SchoolCafeteria_ChairB1', _ChairB1, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairB1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairB1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1241;
export const Y = 583;
export const Height = 363;
export const Interactive= true
export const Width = 274;
export const Alpha = 1;
export let Scale = 1;

 
