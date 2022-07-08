
        import _RivercanalLvl0 from './images/RivercanalLvl0.png'
let paths = [
        ['SchoolForestGlade_RivercanalLvl0', _RivercanalLvl0, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RivercanalLvl0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RivercanalLvl0"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 718;
export const Y = 664;
export const Height = 126;
export const Interactive= true
export const Width = 132;
export const Alpha = 1;
export let Scale = 1;

 
