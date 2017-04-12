# Suprematism Toggle Switch

An Angular 2 toggle switch component.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-toggle-switch
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-toggle-switch/)
- Run the example locally with `npm run example`


## Component

#### `supre-toggle-switch`
A component for a toggle switch.


#### Options
- `toggled: boolean`: true = on, false = off.

#### Labels
- `onLabel`: child element with this attribute will be transpiled into the "on" state display.  
- `offLabel`: child element with this attribute will be transpiled into the "off" state display.

#### Events
- `toggle: boolean`: Event triggered when toggling from on to off or off to on.

#### Example
```
<supre-toggle-switch
  class="u-type-s"
  [toggled]="isActive"
  (toggle)="handleToggle($event)"
  >
  <div onLabel><span class="u-supre-icon u-supre-icon--snapshot"></span> Active</div>
  <div offLabel>InActive <span class="u-supre-icon u-supre-icon--edit"></span></div>
</supre-toggle-switch>
```
