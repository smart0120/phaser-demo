
        import _Isabelle from './images/Isabelle.png'
let paths = [
        ['SchoolGym_Isabelle', _Isabelle, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Isabelle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Isabelle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 247;
export const Y = 500;
export const Height = 244;
export const Interactive= true
export const Width = 97;
export const Alpha = 1;
export let Scale = 1;

 
