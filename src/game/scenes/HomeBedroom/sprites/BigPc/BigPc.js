
        import _BigPc from './images/BigPc.png'
let paths = [
        ['HomeBedroom_BigPc', _BigPc, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BigPc_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BigPc"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1112;
export const Y = 484;
export const Height = 148;
export const Interactive= true
export const Width = 247;
export const Alpha = 1;
export let Scale = 1;

 
