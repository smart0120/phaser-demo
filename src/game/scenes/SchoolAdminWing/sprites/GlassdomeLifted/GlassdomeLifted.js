
        import _GlassdomeLifted from './images/GlassdomeLifted.png'
let paths = [
        ['SchoolAdminWing_GlassdomeLifted', _GlassdomeLifted, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./GlassdomeLifted_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "GlassdomeLifted"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1316;
export const Y = 420;
export const Height = 156;
export const Interactive= true
export const Width = 169;
export const Alpha = 1;
export let Scale = 1;

 
