
        import _Dollar3 from './images/Dollar3.png'
let paths = [
        ['SchoolHomeroom_Dollar3', _Dollar3, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1583;
export const Y = 311;
export const Height = 26;
export const Interactive= true
export const Width = 27;
export const Alpha = 1;
export let Scale = 1;

 
