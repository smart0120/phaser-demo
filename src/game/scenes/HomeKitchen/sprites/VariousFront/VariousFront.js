
        import _VariousFront from './images/VariousFront.png'
let paths = [
        ['HomeKitchen_VariousFront', _VariousFront, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./VariousFront_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "VariousFront"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 424;
export const Y = 482;
export const Height = 159;
export const Interactive= true
export const Width = 793;
export const Alpha = 1;
export let Scale = 1;

 
