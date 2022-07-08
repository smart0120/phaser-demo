
        import _Chair2 from './images/Chair2.png'
let paths = [
        ['SchoolArtClass_Chair2', _Chair2, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chair2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chair2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 650;
export const Y = 543;
export const Height = 183;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
