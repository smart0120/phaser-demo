
        import _TableD from './images/TableD.png'
let paths = [
        ['SchoolCafeteria_TableD', _TableD, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableD_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableD"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1012;
export const Y = 479;
export const Height = 151;
export const Interactive= true
export const Width = 142;
export const Alpha = 1;
export let Scale = 1;

 
