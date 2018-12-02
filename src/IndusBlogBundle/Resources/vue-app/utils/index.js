/*
Export above allows to import every function from /utils directly.
example use case it to import a function from dates, one from deep, one from formatting.
Instead of
import {y} from /utils/deep
import {z} from /utils/formatting

possible to do
import {x,y,z} from /utils


*/

/*
Dates is a mixin, as it is used in template of component [contextList];
it Is kept here too, if it's ever needed in vuex.
*/

export * from './deep';
export * from './formatting';
export * from './naming';
export * from './debug';
