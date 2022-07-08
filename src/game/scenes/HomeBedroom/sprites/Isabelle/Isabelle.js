
        import _Isabelle from './images/Isabelle.png'
let paths = [
        ['HomeBedroom_Isabelle', _Isabelle, 59],
      
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
export const X = 893;
export const Y = 406;
export const Height = 388;
export const Interactive= true
export const Width = 113;
export const Alpha = 1;
export let Scale = 1;

 
