
        import _DruggedVinePepelepsi from './images/DruggedVinePepelepsi.png'
let paths = [
        ['Vines_DruggedVinePepelepsi', _DruggedVinePepelepsi, 99],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DruggedVinePepelepsi_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DruggedVinePepelepsi"
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

 
