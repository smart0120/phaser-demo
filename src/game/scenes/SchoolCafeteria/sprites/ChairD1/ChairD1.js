
        import _ChairD1 from './images/ChairD1.png'
let paths = [
        ['SchoolCafeteria_ChairD1', _ChairD1, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairD1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairD1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1062;
export const Y = 480;
export const Height = 204;
export const Interactive= true
export const Width = 126;
export const Alpha = 1;
export let Scale = 1;

 
