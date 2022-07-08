
        import _MedicalSupplies from './images/MedicalSupplies.png'
let paths = [
        ['SchoolNurseRoom_MedicalSupplies', _MedicalSupplies, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MedicalSupplies_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MedicalSupplies"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 490;
export const Y = 432;
export const Height = 62;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
