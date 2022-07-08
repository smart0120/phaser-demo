
        import _LindseyDancing from './images/LindseyDancing.png'
let paths = [
        ['SchoolLocker_LindseyDancing', _LindseyDancing, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyDancing_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyDancing"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1454;
export const Y = 557;
export const Height = 152;
export const Interactive= true
export const Width = 145;
export const Alpha = 1;
export let Scale = 1;

 
