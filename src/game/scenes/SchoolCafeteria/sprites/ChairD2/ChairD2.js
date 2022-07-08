
        import _ChairD2 from './images/ChairD2.png'
let paths = [
        ['SchoolCafeteria_ChairD2', _ChairD2, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairD2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairD2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1089;
export const Y = 467;
export const Height = 172;
export const Interactive= true
export const Width = 129;
export const Alpha = 1;
export let Scale = 1;

 
