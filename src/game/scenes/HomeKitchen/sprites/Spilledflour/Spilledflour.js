
        import _Spilledflour from './images/Spilledflour.png'
let paths = [
        ['HomeKitchen_Spilledflour', _Spilledflour, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Spilledflour_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Spilledflour"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 863;
export const Y = 573;
export const Height = 81;
export const Interactive= true
export const Width = 202;
export const Alpha = 1;
export let Scale = 1;

 
