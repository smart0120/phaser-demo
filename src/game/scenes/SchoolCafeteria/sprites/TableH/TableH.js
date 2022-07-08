
        import _TableH from './images/TableH.png'
let paths = [
        ['SchoolCafeteria_TableH', _TableH, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableH_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableH"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 755;
export const Y = 479;
export const Height = 149;
export const Interactive= true
export const Width = 142;
export const Alpha = 1;
export let Scale = 1;

 
