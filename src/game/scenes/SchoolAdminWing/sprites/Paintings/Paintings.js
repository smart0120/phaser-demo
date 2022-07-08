
        import _Paintings from './images/Paintings.png'
let paths = [
        ['SchoolAdminWing_Paintings', _Paintings, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Paintings_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Paintings"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 271;
export const Y = 17;
export const Height = 335;
export const Interactive= true
export const Width = 913;
export const Alpha = 1;
export let Scale = 1;

 
