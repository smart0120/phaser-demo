
        import _Counterright from './images/Counterright.png'
let paths = [
        ['SchoolCafeteria_Counterright', _Counterright, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Counterright_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Counterright"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1379;
export const Y = 498;
export const Height = 300;
export const Interactive= true
export const Width = 498;
export const Alpha = 1;
export let Scale = 1;

 
