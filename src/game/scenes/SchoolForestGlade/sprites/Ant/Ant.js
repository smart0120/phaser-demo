
        import _Ant from './images/Ant.png'
let paths = [
        ['SchoolForestGlade_Ant', _Ant, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ant_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ant"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 972;
export const Y = 656;
export const Height = 45;
export const Interactive= true
export const Width = 125;
export const Alpha = 1;
export let Scale = 1;

 
