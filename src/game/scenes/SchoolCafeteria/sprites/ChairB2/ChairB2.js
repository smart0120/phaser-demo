
        import _ChairB2 from './images/ChairB2.png'
let paths = [
        ['SchoolCafeteria_ChairB2', _ChairB2, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairB2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairB2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1173;
export const Y = 607;
export const Height = 402;
export const Interactive= true
export const Width = 251;
export const Alpha = 1;
export let Scale = 1;

 
