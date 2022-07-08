
        import _CouchIsabelle from './images/CouchIsabelle.png'
let paths = [
        ['SchoolEnglishClassroom_CouchIsabelle', _CouchIsabelle, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CouchIsabelle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CouchIsabelle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 119;
export const Y = 427;
export const Height = 201;
export const Interactive= true
export const Width = 117;
export const Alpha = 1;
export let Scale = 1;

 
