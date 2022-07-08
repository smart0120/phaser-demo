
        import _Florapain from './images/Florapain.png'
let paths = [
        ['HomeKitchen_Florapain', _Florapain, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Florapain_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Florapain"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 757;
export const Y = 386;
export const Height = 213;
export const Interactive= true
export const Width = 162;
export const Alpha = 1;
export let Scale = 1;

 
