
        import _ChairF2 from './images/ChairF2.png'
let paths = [
        ['SchoolCafeteria_ChairF2', _ChairF2, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairF2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairF2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 394;
export const Y = 583;
export const Height = 367;
export const Interactive= true
export const Width = 271;
export const Alpha = 1;
export let Scale = 1;

 
