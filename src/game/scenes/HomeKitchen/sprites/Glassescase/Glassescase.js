
        import _Glassescase from './images/Glassescase.png'
let paths = [
        ['HomeKitchen_Glassescase', _Glassescase, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Glassescase_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Glassescase"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 747;
export const Y = 600;
export const Height = 29;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
