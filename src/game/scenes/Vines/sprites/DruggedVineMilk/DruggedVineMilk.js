
        import _DruggedVineMilk from './images/DruggedVineMilk.png'
let paths = [
        ['Vines_DruggedVineMilk', _DruggedVineMilk, 100],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DruggedVineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DruggedVineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1129;
export const Y = 844;
export const Height = 236;
export const Interactive= true
export const Width = 317;
export const Alpha = 1;
export let Scale = 1;

 
